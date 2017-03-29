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
                    <ul class="nav navbar-nav navbar-right">
                        <li v-if="isAuth">
                            <div class="input-group">
                                <span class="input-group-label">{{ $t('period.period') }}:</span>
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button" v-on:click.prevent="$store.dispatch('previousMonth')">
                                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    </button>
                                </span>
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button" v-on:click.prevent="$store.dispatch('setNow')">
                                        {{ period }}
                                    </button>
                                </span>
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button" v-on:click.prevent="$store.dispatch('nextMonth')">
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                </span>
                            </div><!-- /input-group -->
                        </li>
                        <li v-if="isAuth">
                            <router-link :to="{ name: 'auth.login' }">{{ $t('menu.login') }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    import selectize from './selectize.vue'

    export default {
        components: { selectize },
        computed: {
            menu() {
                return this.$store.getters.getMenu;
            },
            isAuth() {
                return this.$store.getters.isAuth;
            },
            period() {
                return this.$store.getters.getPeriod;
            }
        }
    }
</script>