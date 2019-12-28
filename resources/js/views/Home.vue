<template>
    <div>
        <Header/>
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper">
                <router-view/>
                <Footer/>
            </div>
        </div>
    </div>

</template>

<script>
    import Header from "../components/Header";
    import Sidebar from "../components/Sidebar";
    import Footer from "../components/Footer";
    export default {
        name: "Home",
        components: {Footer, Sidebar, Header},
    }
</script>

<style scoped>

</style>
