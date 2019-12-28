<template>
    <div class="container">
        <div class="card card-register mx-auto mt-5">
            <div class="card-header">Register an Account</div>
            <div class="card-body">
                <form v-on:submit.prevent="register">
                    <div class="form-group">
                        <div class="form-label-group">
                            <input v-model="user.name" type="text" id="name" class="form-control" name="name"
                                   placeholder="Enter Full Name"
                                   autofocus="autofocus">
                            <label for="name">Enter Full Name</label>
                        </div>
                        <div class="invalid-feedback" v-if="errors.name">
                            {{errors.name[0]}}
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input v-model="user.email" type="email" id="email" class="form-control" name="email"
                                   placeholder="Email address">
                            <label for="email">Email address</label>
                        </div>
                        <div class="invalid-feedback" v-if="errors.email">
                            {{errors.email[0]}}
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <div class="form-label-group">
                                    <input v-model="user.password" type="password" id="password" class="form-control"
                                           name="password"
                                           placeholder="Password">
                                    <label for="password">Password</label>
                                </div>
                                <div class="invalid-feedback" v-if="errors.password">
                                    {{errors.password[0]}}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-label-group">
                                    <input v-model="user.password_confirmation" type="password"
                                           name="password_confirmation"
                                           id="password_confirmation" class="form-control"
                                           placeholder="Confirm password">
                                    <label for="password_confirmation">Confirm password</label>
                                </div>
                                <div class="invalid-feedback" v-if="errors.password_confirmation">
                                    {{errors.password_confirmation[0]}}
                                </div>
                            </div>
                        </div>


                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                </form>
                <div class="text-center">
                    <router-link to="/login" class="d-block small mt-3">
                        Login Page
                    </router-link>
                    <router-link to="reset-password" class="d-block small">Forgot Password?</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import * as authService from "../../services/auth_service";

    export default {
        name: "Register",
        created() {
            document.querySelector('body').style.backgroundColor = '#343a40'
        },
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: {}
            }
        },
        methods: {
            register: async function () {
                // let formData = new FormData();
                // formData.append('name', this.user.name);
                // formData.append('email', this.user.email);
                // formData.append('password', this.user.password);
                // formData.append('password_confirmation', this.user.password_confirmation);

                try {
                    await authService.register(this.user);
                    this.flashMessage.success({
                        title: 'Success Registered',
                        message: 'Successfully registered!',
                        time: 5000,
                    });

                    this.user = {
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: ''
                    };

                    this.errors = {};
                    this.$router.push('/login');

                } catch (e) {
                    if (e.response.status == 422) {
                        this.errors = e.response.data.errors;
                        this.flashMessage.error({
                            title: 'Error',
                            message: 'Some error occured, Please try again!',
                            time: 5000,
                        });

                    } else if (e.response.status == 500) {
                        this.flashMessage.error({
                            title: 'Error',
                            message: e.response.data.message,
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
            }

        }
    }
</script>

<style scoped>

</style>
