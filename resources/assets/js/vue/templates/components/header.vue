<template>
    <header>
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">{{ $t('navigation.toggle') }}</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link :to="{ name: 'page.about' }" class="navbar-brand">{{ $t('navigation.brand') }}</router-link>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li v-for="item in menu">
                            <router-link :to="{ name: 'page.' + item.name }">{{ $t('menu.' + item.name) }}</router-link>
                        </li>
                    </ul>
                    <ul v-if="!isAuth" class="nav navbar-nav navbar-right">
                        <li>
                            <router-link :to="{ name: 'auth.login' }">{{ $t('menu.login') }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    export default {
        computed: {
            menu() {
                return this.$store.getters.getMenu;
            },
            isAuth() {
                return this.$store.getters.isAuth;
            },
        }
    }
</script>