<template>
    <div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">
                <router-link to="/categories">Categories</router-link>
            </li>
            <li class="breadcrumb-item">Overview</li>
        </ol>

        <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                     <i class="fas fa-chart-area"/> Categories Management
                </span>
                <button @click="showNewCategoryModal" class="btn btn-primary btn-sm ml-auto"><span class="fa fa-plus"/>Create
                    Category
                </button>
            </div>
            <div class="card-body">
                <table class="table">

                    <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Image</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(category,index) in categories" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{category.name}}</td>
                        <td>
                            <img class="table-image" :src="`${$store.state.serverPath}/storage/${category.image}`"
                                 :alt="category.name">
                        </td>
                        <td>
                            <button @click="editCategoryModal(category)" class="btn btn-primary btn-sm"><span
                                class="fa fa-edit"/></button>
                            <button @click="deleteCategory(category)" class="btn btn-danger btn-sm"><span
                                class="fa fa-trash"/></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="text-center" v-show="moreExists">
                    <button class="btn btn-primary btn-sm" @click="loadMore"><span class="fa fa-arrow-down"/>Load More
                    </button>
                </div>
            </div>
        </div>

        <b-modal ref="newCategoryModal" hide-footer title="Add New Category">
            <div class="d-block">
                <form v-on:submit.prevent="createCategory" action="">
                    <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input type="text"
                               v-model="categoryData.name"
                               class="form-control"
                               id="name"
                               placeholder="Enter Category Name...">
                        <div class="invalid-feedback" v-if="errors.name">
                            {{errors.name[0]}}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="image">Choose an image</label>
                        <div v-if="categoryData.image">
                            <img src="" ref="newCategoryImageDisplay" class="w-150px">
                        </div>
                        <input type="file"
                               ref="newCategoryImage"
                               v-on:change="attachImage"
                               class="form-control"
                               id="image">
                        <div class="invalid-feedback" v-if="errors.image">
                            {{errors.image[0]}}
                        </div>
                    </div>
                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"/>Save</button>
                    </div>
                </form>
            </div>
        </b-modal>

        <!--Edit Category Model-->
        <b-modal ref="editCategoryModal" hide-footer title="Update Category">
            <div class="d-block">
                <form v-on:submit.prevent="updateCategory" action="">
                    <div class="form-group">
                        <label for="edit_name">Enter Name</label>
                        <input type="text"
                               v-model="editCategoryData.name"
                               class="form-control"
                               id="edit_name"
                               placeholder="Enter Category Name...">
                        <div class="invalid-feedback" v-if="errors.name">
                            {{errors.name[0]}}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_image">Choose an image</label>
                        <div>
                            <img :src="`${$store.state.serverPath}/storage/${editCategoryData.image}`"
                                 ref="editCategoryImageDisplay" class="w-150px" alt="">
                        </div>
                        <input type="file"
                               ref="editCategoryImage"
                               v-on:change="editAttachImage"
                               class="form-control"
                               id="edit_image">
                        <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                    </div>
                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideEditCategoryModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"/>Update</button>
                    </div>
                </form>
            </div>
        </b-modal>

    </div>
</template>

<script>
    import * as categoryService from '../services/category_service';

    export default {
        name: "category",
        data: function () {
            return {
                categoryData: {
                    name: '',
                    image: '',
                },
                errors: {},
                categories: [],
                editCategoryData: {},
                moreExists: false,
                nextPage: 0,
            }
        },
        mounted() {
            this.loadCategories();
        },
        methods: {
            deleteCategory: async function (category) {
                if (!window.confirm(`Are you sure want to delete ${category.name}`)) {
                    return;
                }

                try {
                    const response = await categoryService.deleteCategory(category.id);

                    this.categories = this.categories.filter(obj => {
                        return obj.id !== category.id;
                    });

                    this.flashMessage.success({
                        title: 'Success Delete',
                        message: response.data.message,
                        time: 5000,
                    });

                } catch (e) {
                    this.flashMessage.error({
                        title: 'Error',
                        message: e.response.data.message,
                        time: 5000,
                    });
                }
            },
            loadCategories: async function () {
                try {
                    const response = await categoryService.loadCategories();
                    this.categories = response.data.data;

                    if (response.data.current_page < response.data.last_page) {
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1;
                    } else {
                        this.moreExists = false;
                    }
                } catch (e) {
                    this.flashMessage.error({
                        title: 'Error',
                        message: 'Some error occured, Please refresh!',
                        time: 5000,
                    });
                }
            },
            attachImage() {
                this.categoryData.image = this.$refs.newCategoryImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.newCategoryImageDisplay.src = reader.result;
                }.bind(this), false);
                reader.readAsDataURL(this.categoryData.image);
            },
            editAttachImage() {
                this.editCategoryData.image = this.$refs.editCategoryImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.editCategoryImageDisplay.src = reader.result;
                }.bind(this), false);

                reader.readAsDataURL(this.editCategoryData.image);
            },
            updateCategory: async function () {
                let formData = new FormData();
                formData.append('name', this.editCategoryData.name);
                formData.append('image', this.editCategoryData.image);
                formData.append('_method', 'put');
                try {
                    const response = await categoryService.updateCategory(formData, this.editCategoryData.id);

                    //done update and then map
                    this.categories.map(category => {
                        if (category.id == response.data.id) {
                            for (let key in response.data) {
                                category[key] = response.data[key];
                            }
                        }
                    });

                    this.hideEditCategoryModal();

                    this.flashMessage.success({
                        message: 'Update Success',
                        time: 5000,
                    });
                    //
                    // this.editCategoryData = {
                    //     name: '',
                    //     image: '',
                    // };

                } catch (e) {
                    this.flashMessage.error({
                        message: e.response.data.message,
                        time: 5000,
                    });
                }

            },
            createCategory: async function () {
                let formData = new FormData();
                formData.append('name', this.categoryData.name);
                formData.append('image', this.categoryData.image);
                try {
                    const response = await categoryService.createCategory(formData);

                    //para nig human og create mo add pud cya sa table
                    this.categories.unshift(response.data);

                    this.hideNewCategoryModal();
                    // this.flashMessage.error({
                    //     title: 'Error Message Title',
                    //     message: 'Oh, you broke my heart! Shame on you!'
                    // });
                    // this.flashMessage.warning({
                    //     title: 'Warning Message Title',
                    //     message: "Don't stop me nooooow....!"
                    // });
                    // this.flashMessage.info({
                    //     title: 'Info Message Title',
                    //     message: 'Just want you to know, that Vue is so cool'
                    // });
                    this.flashMessage.success({
                        title: 'Success Category Added!',
                        message: 'Category stored successfully!',
                        time: 5000,
                    });

                    this.categoryData = {
                        name: '',
                        image: '',
                    };

                    // this.loadCategories();

                } catch (e) {
                    if (e.response.status === 422 && e.response) {
                        // this.errors.nameErrors = e.response.data.errors.name;
                        // this.errors.imageErrors = e.response.data.errors.image;
                        this.errors = e.response.data.errors;
                        // console.log(this.errors.name[0]);
                        this.flashMessage.error({
                            title: 'Error',
                            message: 'Some error occured, Please try again!',
                            time: 5000,
                        });

                    } else {
                        this.flashMessage.error({
                            title: 'Error',
                            message: 'Some error occured, Please try again!',
                            time: 5000,
                        });
                    }
                }
            },
            hideNewCategoryModal() {
                this.$refs['newCategoryModal'].hide();
            },
            hideEditCategoryModal() {
                this.$refs['editCategoryModal'].hide();
            },
            showNewCategoryModal() {
                this.$refs['newCategoryModal'].show();
            },
            editCategoryModal: function (category) {
                this.editCategoryData = {...category};
                this.showEditCategoryModal();
            },
            showEditCategoryModal() {
                this.$refs['editCategoryModal'].show();
            },
            loadMore: async function () {
                try {
                    const response = await categoryService.loadMore(this.nextPage);
                    if (response.data.current_page < response.data.last_page) {
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1;
                    } else {
                        this.moreExists = false;
                    }
                    response.data.data.forEach(data => {
                        this.categories.push(data);
                    });
                } catch (e) {
                    this.flashMessage.error({
                        title: 'Error',
                        message: 'Some error occurred during loading more category!',
                        time: 5000,
                    })
                }
            },
        }
    }
</script>

<style scoped>

</style>
