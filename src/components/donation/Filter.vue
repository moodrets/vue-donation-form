<template>
    <div class="app-filter">
        <form class="app-filter__form" @submit.prevent="onSubmit($event)">
            <div class="app-filter__search">
                <input type="search" name="search" autocomplete="off" class="app-form-control" placeholder="Search" />
                <SvgIcon name="search" class="svg-icon--stroke"></SvgIcon>
            </div>
            <div class="app-custom-select app-custom-select--simple">
                <select v-model="selectValue">
                    <option value="All statuses">All statuses</option>
                    <option value="Succeeded">Succeeded</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <div class="app-custom-select__value">
                    {{ selectValue }}
                    <SvgIcon name="arrow-down" class="svg-icon--stroke"></SvgIcon>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const onSubmit = (event: Event) => {}

const selectValue = ref<string>('All statuses')
</script>

<style lang="scss" scoped>
@import '@/styles/base/vars.scss';

.app-filter {
    &__form {
        @media (min-width: $screen-md) {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
    }

    &__search {
        position: relative;
        z-index: 5;

        @media (min-width: $screen-md) {
            width: 336px;
            max-width: 100%;
            margin-right: 28px;
            flex: none;
        }

        .svg-icon {
            position: absolute;
            z-index: 2;
            top: 50%;
            transform: translateY(-50%);
            left: var(--spacing-md);
            color: var(--icons-secondary);
            width: 18px;
            height: 18px;
            transition: var(--transiton-general);
        }
    }

    .app-custom-select {
        margin-top: var(--spacing-md);

        @media (min-width: $screen-md) {
            margin-top: 0;
        }

        &__value {
            padding-left: 10px;
        }
    }

    .app-form-control {
        padding-left: 40px;

        &:not(:focus) {
            border-color: var(--line-base);
        }

        &:focus + .svg-icon {
            transform: translateY(-50%) scale(1.25);
        }
    }
}
</style>
