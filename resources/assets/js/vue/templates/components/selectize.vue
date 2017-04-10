<template>
    <select></select>
</template>
<script>
    export default {
        props: ['value', 'model', 'options', 'settings', 'disabled', 'allowNone'],
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
                    /*If allowNone is set to false the input field is not
                    allowed to be empty and is impossible to clear. Make sure
                    an already existing option is selected on initiation*/
                    if(!value && this.allowNone === false) { $(this.$el)[0].selectize.setValue(this.value, true); return; }

                    this.$emit('input', value)

                    //Emit event of change
                    if(value) {
                        this.$emit('change')
                    }
                }
            }, this.settings));

            //Watch for key down event on input field
            $(this.$el).siblings('div').find('input').keydown((event) => {
                //If key was 13 (enter) or 27 (esc) emit event
                if(event.which == 13) {
                    this.$emit('submit')
                } else if(event.which == 27) {
                    this.$emit('cancel')
                }
            })

            $(this.$el)[0].selectize.setValue(this.value, true)
            if(this.disabled) { $(this.$el)[0].selectize.disable() }
        }
    }
</script>