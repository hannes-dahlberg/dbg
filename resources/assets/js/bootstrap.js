//Import libraries
import _ from 'lodash'
import $ from 'jquery'
import Vue from 'vue'
import axios from 'axios'
import bootstrapSass from 'bootstrap-sass'
import selectize from 'selectize'

//Setting to window
window.$ = window.jQuery = $
window.Vue = Vue;
window.axios = axios;

//Setting default headers for axios
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': $('meta[name=\'csrf-token\']').attr('content'),
    'X-Requested-With': 'XMLHttpRequest'
};