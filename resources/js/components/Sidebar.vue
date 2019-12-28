<template>
    <ul class="sidebar navbar-nav">
        <li class="nav-item">
            <router-link to="/home" class="nav-link" exact>
                <i class="fas fa-fw fa-tachometer-alt"/>
                <span>Dashboard</span>
            </router-link>
        </li>

        <li class="nav-item">
            <router-link to="/home/categories" class="nav-link" exact>
                <i class="fas fa-fw fa-chart-area"/>
                <span>Categories</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>
