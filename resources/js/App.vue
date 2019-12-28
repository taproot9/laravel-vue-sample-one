<template>
    <div>
        <router-view/>
        <FlashMessage position="right top"></FlashMessage>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

