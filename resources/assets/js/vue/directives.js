import Vue from 'vue'

/*
Put focus on on input after it has been rendered
*/
Vue.directive('input-focus', function (el, value) {
    if (value) { el.focus() }
})

Vue.directive('tooltip', function(el, binding) {
    $(el).tooltip(binding.value)
})