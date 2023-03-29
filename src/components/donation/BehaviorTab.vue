<template>
    <fieldset class="app-form-field app-form-field--limit-width app-form-field--row">
        <div class="app-form-field__label">Designation</div>
        <div class="app-form-field__content">
            <div class="app-custom-select">
                <select v-model="selectMatchModel">
                    <option value="Match Checkout Setting">Match Checkout Setting</option>
                    <option value="Match Checkout Setting 2">Match Checkout Setting 2</option>
                    <option value="Match Checkout Setting 3">Match Checkout Setting 3</option>
                </select>
                <div class="app-custom-select__value">
                    <span>{{ selectMatchModel }}</span>
                    <SvgIcon name="arrow-down" class="svg-icon--stroke"></SvgIcon>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset class="app-form-field app-form-field--limit-width app-form-field--row">
        <div class="app-form-field__label">Goal</div>
        <div class="app-form-field__content app-form-field__content--row">
            <input type="text" class="app-form-control" :value="inputAmountCurrency.value" />
            <div class="app-custom-select">
                <select v-model="selectCurrency">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="RUB">RUB</option>
                </select>
                <div class="app-custom-select__value">
                    <span>{{ selectCurrency }}</span>
                    <SvgIcon name="arrow-down" class="svg-icon--stroke"></SvgIcon>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset class="app-form-field app-form-field--row">
        <div class="app-form-field__label app-form-field__label--top">Default Amount</div>
        <div class="app-form-field__content">
            <div class="app-form-field app-form-field--radio">
                <div class="app-custom-radio">
                    <input type="radio" name="amount" id="amout_radio_1" checked />
                    <div class="app-custom-radio__label">
                        <SvgIcon name="radio"></SvgIcon>
                    </div>
                </div>
                <label for="amout_radio_1" class="app-form-field__content">Match Checkout Setting</label>
            </div>
            <div class="app-form-field app-form-field--radio">
                <div class="app-custom-radio">
                    <input type="radio" name="amount" id="amout_radio_2" />
                    <div class="app-custom-radio__label">
                        <SvgIcon name="radio"></SvgIcon>
                    </div>
                </div>
                <label for="amout_radio_2" class="app-form-field__content">Customize</label>
            </div>
            <div class="app-form-field app-form-field--radio">
                <div class="app-custom-radio">
                    <input type="checkbox" name="default_currency" id="default_currency" checked />
                    <div class="app-custom-radio__label">
                        <SvgIcon class="svg-icon--stroke" name="checkmark"></SvgIcon>
                    </div>
                </div>
                <label for="default_currency" class="app-form-field__content">
                    Allow donor to change default currency
                </label>
            </div>
        </div>
    </fieldset>
    <fieldset class="app-form-field app-form-field--row app-form-field--items-center">
        <div class="app-form-field__label">Border size</div>
        <div class="app-form-field__content app-form-field__content--row">
            <input type="range" class="app-custom-range" min="0" step="1" max="4" v-model="rangeBorderSize" />
            <div class="app-form-field__content-info">{{ rangeBorderSize }}px</div>
        </div>
    </fieldset>
    <fieldset class="app-form-field app-form-field--row app-form-field--items-center">
        <div class="app-form-field__label">Border radius</div>
        <div class="app-form-field__content app-form-field__content--row">
            <input type="range" class="app-custom-range" min="0" step="1" max="32" v-model="rangeBorderRadius" />
            <div class="app-form-field__content-info">{{ rangeBorderRadius }}px</div>
        </div>
    </fieldset>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/common/SvgIcon.vue'
import { computed, ref } from 'vue'

const selectMatchModel = ref<string>('Match Checkout Setting')
const selectCurrency = ref<string>('USD')
const inputAmount = ref<string>('10')

const rangeBorderSize = ref<string>('2')
const rangeBorderRadius = ref<string>('10')

const inputAmountCurrency = computed(() => {
    inputAmount.value = inputAmount.value.replace(/[\$|€|₽|\s]/g, '')

    if (selectCurrency.value === 'USD') {
        inputAmount.value = `$ ${inputAmount.value}`
    }

    if (selectCurrency.value === 'EUR') {
        inputAmount.value = `€ ${inputAmount.value}`
    }

    if (selectCurrency.value === 'RUB') {
        inputAmount.value = `₽ ${inputAmount.value}`
    }

    return inputAmount
})
</script>

<style lang="scss">
@import '@/styles/base/vars.scss';

.app-form-field {
    &__label {
        @media (min-width: $screen-md) {
            width: 140px;
            text-align: right;
        }
    }

    &--limit-width {
        max-width: 398px;
    }
}
</style>
