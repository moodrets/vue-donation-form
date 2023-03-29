<template>
    <section class="donation-info app-block">
        <div class="app-block__header donation-info__header">
            <div class="donation-info__header-part-start">
                <div class="donation-info__label">
                    <SvgIcon name="dollar" class="svg-icon--stroke mr"></SvgIcon>
                    <span class="donation-info__label-text">Donation</span>
                </div>
                <div class="donation-info__sum">
                    <div class="donation-info__sum-value">$20.60 USD</div>
                    <div class="donation-info__sum-conversion">≈ €17.92 EUR</div>
                </div>
            </div>
            <div class="donation-info__header-part-end">
                <div class="donation-info__id-label">ID</div>
                <div class="donation-info__id-value">
                    <div>TYNY694Y</div>
                    <SvgIcon name="copy" class="svg-icon--stroke ml"></SvgIcon>
                </div>
            </div>
        </div>
        <div class="app-block__body donation-info__body">
            <div class="donation-info__columns">
                <div class="donation-info__columns-item">
                    <div class="donation-info__columns-label">Status</div>
                    <div class="donation-info__status donation-info__status--success">
                        <SvgIcon name="success" class="svg-icon--standalone mr"></SvgIcon>
                        <div>Succeeded</div>
                    </div>
                </div>
                <div class="donation-info__columns-item">
                    <div class="donation-info__columns-label">Supporter</div>
                    <a href="#">Charlotte Ann</a>
                </div>
                <div class="donation-info__columns-item">
                    <div class="donation-info__columns-label">Campaign</div>
                    <a href="#">Heart walk</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/common/SvgIcon.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/base/vars.scss';

.donation-info {
    &__header {
        display: flex;
        flex-direction: column-reverse;

        @media (min-width: $screen-md) {
            flex-direction: row;
            justify-content: space-between;
        }

        &-part-end {
            margin-bottom: var(--spacing-xl);

            @media (min-width: $screen-md) {
                margin-bottom: 0;
            }
        }
    }

    &__body {
        padding-bottom: 0;
    }

    &__label {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.43;

        .svg-icon {
            width: 18px;
            height: 18px;
            color: var(--text-accent);
        }
    }

    &__sum {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        margin-top: 4px;

        &-value {
            font-weight: 400;
            font-size: 24px;
            line-height: 1.33;
            color: var(--text-success);
            margin-right: var(--spacing-xs);
        }

        &-conversion {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5;
            color: var(--text-neutral);
        }
    }

    &__id-label {
        color: var(--text-secondary);
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
    }

    &__id-value {
        display: flex;
        align-items: center;
        margin-top: 4px;

        .svg-icon {
            cursor: pointer;
            width: 18px;
            height: 18px;
            color: var(--icons-secondary);
        }
    }

    &__columns {
        @media (min-width: $screen-md) {
            display: flex;
            flex-wrap: wrap;
        }

        &-item {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: var(--spacing-md);

            @media (min-width: $screen-md) {
                padding-right: var(--spacing-xl);
            }
        }

        &-item + &-item {
            border-top: 1px solid var(--line-base);
            padding-top: var(--spacing-md);

            @media (min-width: $screen-md) {
                border-top: none;
                padding-top: 0;
                padding-left: var(--spacing-xl);
                border-left: 1px solid var(--line-base);
            }
        }

        &-label {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: var(--text-neutral);
            margin-bottom: 2px;
        }
    }

    &__status {
        display: flex;
        align-items: center;

        &--success {
            color: var(--text-success);
        }
    }
}
</style>
