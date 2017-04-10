<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <table class="items table table-bordered table-striped" :class="{ 'table-hover': budgets.length }">
                    <thead>
                        <tr>
                            <th class="col-xs-3">{{ $t('budget.name') }}</th>
                            <th class="col-xs-1">{{ $t('budget.type.type') }}</th>
                            <th class="col-xs-1">
                                {{ $t('budget.amount') }}
                                <i class="fa fa-info-circle" aria-hidden="true" v-tooltip="{ title: $t('budget.amount_help') }"></i>
                            </th>
                            <th class="col-xs-1">
                                {{ $t('budget.actual_amount') }}
                                <i class="fa fa-info-circle" aria-hidden="true" v-tooltip="{ title: $t('budget.actual_amount_help') }"></i>
                            </th>
                            <th class="col-xs-1">
                                {{ $t('budget.result') }}
                                <i class="fa fa-info-circle" aria-hidden="true" v-tooltip="{ title: $t('budget.result_help') }"></i>
                            </th>
                            <th class="col-xs-1">
                                {{ $t('budget.diff') }}
                                <i class="fa fa-info-circle" aria-hidden="true" v-tooltip="{ title: $t('budget.diff_help') }"></i>
                            </th>
                            <th class="col-xs-1">
                                {{ $t('budget.done') }}
                                <i class="fa fa-info-circle" aria-hidden="true" v-tooltip="{ title: $t('budget.done_help') }"></i>

                            </th>
                            <th class="col-xs-2">
                                {{ $t('budget.transfer') }}
                                <i class="fa fa-info-circle" aria-hidden="true" v-tooltip="{ title: $t('budget.transfer_help') }"></i>
                            </th>
                            <th class="col-xs-1 text-center">
                                <i class="fa fa-trash" aria-hidden="true" v-tooltip="{ title: $t('main.delete') }"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="budget in budgets" :class="{ 'editing': budget == editingBudget, 'info': !budget.id }">
                            <td>
                                <div class="view" v-on:dblclick="editBudget(budget, $event)">
                                    {{ budget.name }}
                                </div>
                                <div class="edit">
                                    <input class="edit" type="text" v-model="budget.name"
                                    v-on:keyup.enter="updateBudget(budget)"
                                    v-on:keyup.esc="cancelEdit(budget)"/>
                                </div>
                            </td>
                            <td>
                                <div class="view" v-on:dblclick="editBudget(budget, $event)">
                                    {{ $t('budget.type.' + budget.type) }}
                                </div>
                                <div class="edit">
                                    <selectize v-model="budget.type" :options="typesSelectize"
                                    v-on:change="updateBudget(budget)"
                                    v-on:cancel="cancelEdit(budget)" :allowNone="false">
                                    </selectize>
                                </div>
                            </td>
                            <td>
                                <div class="view" v-on:dblclick="editBudget(budget, $event)">
                                    {{ budget.amount }}
                                </div>
                                <div class="edit">
                                    <input class="edit" type="text" v-model="budget.amount"
                                    v-on:keyup.enter="updateBudget(budget)"
                                    v-on:keyup.esc="cancelEdit(budget)" />
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-center">
                                <a href="#" v-on:click.prevent="deleteBudget(budget)" v-tooltip="{ title: $t('main.delete') }"><i class="fa fa-trash" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-xs-12">
                <a class="btn btn-success" href="#" v-on:click.prevent="addNewBudget">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </a>
                <a v-if="countNew" class="btn btn-primary" href="#" v-on:click.prevent="saveBudget">{{ $tc('budget.submit', countNew) }}</a>
            </div>
        </div>
    </div>
</template>
<script>
    import selectize from '../components/selectize.vue'

    export default {
        components: { selectize },
        data() {
            return {
                newBudget: {
                    name: null,
                    type: null,
                    amount: null
                },
                clicked: null,
                editingBudget: null
            }
        },
        computed: {
            budgets() { return this.$store.getters.getBudgets },
            typesSelectize() {
                return this.$store.getters.getBudgetTypes.map(item => {
                    return { value: item, text: this.$t('budget.type.' + item) }
                })
            },
            countNew() {
                return this.budgets.filter(item => !item.id).length
            }
        },
        mounted() {
            this.$store.dispatch('getBudgets')
        },
        methods: {
            saveBudget() {
                this.$store.dispatch('createBudget', this.budgets.filter(item => !item.id)).then(() => {
                    this.$store.dispatch('getBudgets')
                })
            },
            editBudget(budget, event) {
                this.beforeEditCache = Obj.clone(budget)
                this.editingBudget = budget

                //Set focus on input field
                window.setTimeout(() => {
                    $(event.target).parent().find('input').focus()
                }, 10)

            },
            cancelEdit(budget) {
                this.editingBudget = null
                Object.keys(budget).forEach(index => {
                    budget[index] = this.beforeEditCache[index]
                })
            },
            updateBudget(budget) {
                if(!this.editingBudget || !this.editingBudget.id) { return }

                this.editingBudget = null

                var hasChanged = false
                Object.keys(budget).forEach(index => {
                    if(budget[index] != this.beforeEditCache[index]) { hasChanged = true }
                })

                if(!hasChanged) { return }

                this.$store.dispatch('updateBudget', budget)
            },
            deleteBudget(budget) {
                this.$store.dispatch('deleteBudget', budget).then(() => {
                    this.$store.dispatch('getBudgets')
                })
            },
            addNewBudget() {
                this.$store.dispatch('addNewBudget')
            }
        }
    }
</script>