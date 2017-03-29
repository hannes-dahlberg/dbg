<template>
    <div>
        <header-component></header-component>
        <div class="container">
            <router-view></router-view>
        </div>
        <footer-component></footer-component>
    </div>
</template>
<script>
    import headerComponent from './components/header.vue'
    import footerComponent from './components/footer.vue'

    export default {
        components: { headerComponent, footerComponent }
    }
</script>