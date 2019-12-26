<template>
    <div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">
                <router-link to="/">Categories</router-link>
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
                            <button class="btn btn-primary btn-sm"><span class="fa fa-edit"/></button>
                            <button @click="deleteCategory(category)" class="btn btn-danger btn-sm"><span
                                class="fa fa-trash"/></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
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
                        <div v-if="categoryData.image.name">
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

                    this.categories = this.categories.filter(obj=>{
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
            showNewCategoryModal() {
                this.$refs['newCategoryModal'].show();
            }
        }

    }
</script>

<style scoped>

</style>
