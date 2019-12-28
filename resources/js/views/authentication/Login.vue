<template>
    <div class="container">
        <div class="card card-login mx-auto mt-5">
            <div class="card-header">Login</div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address"
                                   required="required" autofocus="autofocus">
                            <label for="inputEmail">Email address</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                                   required="required">
                            <label for="inputPassword">Password</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me">
                                Remember Password
                            </label>
                        </div>
                    </div>
                    <router-link to="/home" class="btn btn-primary btn-block">
                        Login
                    </router-link>
                </form>
                <div class="text-center">
                    <router-link to="/register" class="d-block small mt-3">
                        Register an Account
                    </router-link>
                    <router-link to="/reset-password" class="d-block small">Forgot Password?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        created() {
            document.querySelector('body').style.backgroundColor = '#343a40'
        }
    }
</script>

<style scoped>

</style>
