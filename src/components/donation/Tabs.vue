<template>
    <form class="app-block" @submit.prevent="onSubmit($event)" role="tablist">
        <div class="tabs" v-if="tabs.length">
            <div class="tabs__titles">
                <button
                    role="tab"
                    type="button"
                    class="tabs__titles-item"
                    v-for="tab in tabs"
                    :class="{ 'is-active': tab.active }"
                    :key="tab.name"
                    @click="tabChange(tab)"
                >
                    {{ tab.title }}
                </button>
            </div>
            <div class="tabs__bodies">
                <template v-for="tab in tabs" :key="tab.name">
                    <div class="tabs__bodies-item" v-show="tab.active" role="tabpanel">
                        <component :is="tab.component"></component>
                    </div>
                </template>
            </div>
        </div>
        <div class="app-block__footer">
            <div class="tabs__form-buttons">
                <button type="submit" class="app-button app-button--success">Save changes</button>
                <button type="button" class="app-button app-button--secondary">Cancel</button>
            </div>
        </div>
    </form>
</template>

<script lang="ts" setup>
import BehaviorTab from '@/components/donation/BehaviorTab.vue'
import SimpleTab from '@/components/donation/SimpleTab.vue'
import { reactive, markRaw } from 'vue'

interface TabItem {
    active: boolean
    name: string
    title: string
    component: any
}

const tabs: TabItem[] = reactive([
    {
        active: true,
        title: 'Behavior',
        name: 'behavior',
        component: markRaw(BehaviorTab),
    },
    {
        active: false,
        title: 'Appearance',
        name: 'appearance',
        component: markRaw(SimpleTab),
    },
    {
        active: false,
        title: 'Custom Fields',
        name: 'custom_fields',
        component: markRaw(SimpleTab),
    },
    {
        active: false,
        title: 'Questions',
        name: 'questions',
        component: markRaw(SimpleTab),
    },
    {
        active: false,
        title: 'Url Control',
        name: 'url_control',
        component: markRaw(SimpleTab),
    },
])

const tabChange = (tabItem: TabItem) => {
    if (tabItem.active) return
    tabs.forEach((tab) => (tab.active = tab.name == tabItem.name))
}
const onSubmit = (event: Event) => {}
</script>

<style lang="scss" scoped>
@import '@/styles/base/vars.scss';

.tabs {
    &__titles {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        overflow: auto hidden;
        padding: var(--spacing-xl) var(--spacing-lg) 0;
        margin-bottom: -1px;
        @include customs-scrollbar;
    }

    &__titles-item {
        cursor: pointer;
        flex: none;
        font-weight: 600;
        font-size: 12px;
        line-height: 20px;
        text-transform: uppercase;
        color: var(--text-primary);
        padding: 10px var(--spacing-md);
        border: 1px solid transparent;
        border-bottom: none;
        transition: var(--transiton-general);
        border-radius: var(--radius-xxs) var(--radius-xxs) 0 0;
        background: transparent;
        outline: none;
        letter-spacing: 0.2px;

        &:focus {
            border-color: var(--line-base);
        }

        &.is-active {
            background: var(--bg-light);
            cursor: default;
            color: var(--text-success);
            border-color: var(--line-base);
        }
    }

    &__bodies {
        position: relative;
        z-index: 1;
        border-top: 1px solid var(--line-base);
    }

    &__bodies-item {
        padding: var(--spacing-xxl) var(--spacing-xl) 33px;
    }

    &__form-buttons {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-right: calc(var(--spacing-md) * -1);

        .app-button {
            margin-right: var(--spacing-sm);

            @media (min-width: $screen-md) {
                margin-right: var(--spacing-md);
            }
        }
    }
}
</style>
