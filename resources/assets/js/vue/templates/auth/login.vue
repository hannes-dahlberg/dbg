<template>
    <div class="row">
        <div class="col-xs-12 col-md-4 col-md-offset-4 well text-center">
            <h2>{{ $t('login.header') }}</h2>
            <form id="login_form" v-on:submit.prevent="login">
                <div class="form-group" :class="{ 'has-error': error }">
                    <input type="text" class="form-control" :placeholder="$t('login.username')" v-model="form.username" :disabled="loading" />
                </div>
                <div class="form-group" :class="{ 'has-error': error }">
                    <input type="password" class="form-control" :placeholder="$t('login.password')" v-model="form.password" :disabled="loading" />
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox">
                        {{ $t('login.remember_me') }}
                    </label>
                </div>
                <button type="submit" class="btn btn-default">{{ $t('login.submit') }}</button>
                <p v-if="error" class="bg-danger margin-top-10 padding-10">
                    {{ $t('login.error') }}
                </p>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: false,
                error: false,
                form: { username: null, password: null }
            }
        },
        watch: {
            loading(value) {
                var button = $('#login_form button[type=submit]');
                if(value) {
                    button.button('loading')
                } else {
                    button.button('reset')
                }
            }
        },
        methods: {
            login() {
                //Setting loading to true
                this.loading = true

                //Reset error
                this.error = false

                //Dispatch the authentication action with user input email and password
                this.$store.dispatch('auth', this.form).then(() => { //Success
                    //Redirect to admin page
                    this.$router.push({ name: 'page.about' })
                }).catch((error) => { //Error
                    //Setting error to true
                    this.error = true

                    //Reseting loading
                    this.loading = false
                })
            }
        }
    }
</script>