<template>
    <a :href="props.link || '#'" v-if="props.tag === 'a'" class="svg-icon">
        <svg>
            <use :xlink:href="`${svgSpritePath}#${name}`"></use>
        </svg>
    </a>
    <button type="button" v-else-if="props.tag === 'button'" class="svg-icon">
        <svg>
            <use :xlink:href="`${svgSpritePath}#${name}`"></use>
        </svg>
    </button>
    <div v-else class="svg-icon">
        <svg>
            <use :xlink:href="`${svgSpritePath}#${name}`"></use>
        </svg>
    </div>
</template>

<script lang="ts" setup>
const svgSpritePath = __WEBPACK_MODE__ === 'production' ? '/vue-donation-form/svg-sprite.svg' : '/svg-sprite.svg'

const props = defineProps<{
    name: String
    tag?: 'a' | 'button'
    link?: string
}>()
</script>

<style lang="scss">
.svg-icon {
    display: flex;
    width: 24px;
    height: 24px;
    fill: currentColor;
    flex: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;

    &.mr {
        margin-right: var(--spacing-xs);
    }
    &.ml {
        margin-left: var(--spacing-xs);
    }

    &--stroke {
        fill: none;
        stroke: currentColor;
        svg {
            fill: inherit;
            stroke: inherit;
        }
    }

    &--standalone {
        fill: none;
        stroke: none;
    }

    svg {
        display: block;
        width: inherit;
        height: inherit;
        fill: inherit;
    }

    &:focus-visible {
        outline-offset: 2px;
        outline: 1px dashed currentColor;
    }
}
</style>
