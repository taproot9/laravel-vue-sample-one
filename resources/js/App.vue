<template>
    <div>
        <Header/>
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper">
                <router-view/>
            </div>
        </div>
        <FlashMessage position="right top"></FlashMessage>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Sidebar from "./components/Sidebar";
    import Footer from "./components/Footer";
    import Welcome from "./views/Welcome";
    import Category from "./views/Categories";

    export default {
        components: {Category, Welcome, Footer, Sidebar, Header},
        mounted() {
            console.log('Component mounted.')
        },
        name: 'App',
    }


</script>

