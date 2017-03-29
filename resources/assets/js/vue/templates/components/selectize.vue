<template>
    <select></select>
</template>
<script>
    export default {
        props: ['value', 'model', 'options', 'settings', 'disabled'],
        data() {
            return {
                items: []
            }
        },
        watch: {
            value: function(value) {
                $(this.$el)[0].selectize.setValue(value, true)
            },
            options: function(value) {
                $(this.$el)[0].selectize.clearOptions()
                $(this.$el)[0].selectize.addOption(value)
                $(this.$el)[0].selectize.setValue(this.value, true)
            },
            disabled: function(value) {
                if(value) {
                    $(this.$el)[0].selectize.disable()
                } else {
                    $(this.$el)[0].selectize.enable()
                }
            }
        },
        mounted(el) {
            $(this.$el).selectize($.extend({
                options: this.options,
                onChange: (value) => {
                    this.$emit('input', value)
                }
            }, this.settings));

            $(this.$el)[0].selectize.setValue(this.value, true)
            if(this.disabled) { $(this.$el)[0].selectize.disable() }
        }
    }
</script>