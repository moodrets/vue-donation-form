<template>
    <section class="donation-info app-block">
        <h2 class="visually-hidden">Donation info</h2>
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
            <div class="donation-info__header-part-end font-secondary">
                <div class="donation-info__id-label">ID</div>
                <div class="donation-info__id-value">
                    <div>TYNY694Y</div>
                    <SvgIcon name="copy" tag="button" class="svg-icon--stroke ml" aria-label="copy id"></SvgIcon>
                </div>
            </div>
        </div>
        <div class="app-block__body donation-info__body">
            <div class="donation-info__columns">
                <div class="donation-info__columns-item">
                    <div class="donation-info__columns-label">Status</div>
                    <div class="donation-info__status donation-info__status--success" tabindex="0">
                        <SvgIcon name="success" class="svg-icon--standalone mr"></SvgIcon>
                        <span class="visually-hidden">status</span>
                        <div>Succeeded</div>
                    </div>
                </div>
                <div class="donation-info__columns-item">
                    <div class="donation-info__columns-label">Supporter</div>
                    <a href="#"><span class="visually-hidden">Supporter</span>Charlotte Ann</a>
                </div>
                <div class="donation-info__columns-item">
                    <div class="donation-info__columns-label">Campaign</div>
                    <a href="#"><span class="visually-hidden">Campaign</span>Heart walk</a>
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
            margin-right: -2px;
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
            letter-spacing: 0.12px;
        }

        &-conversion {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5;
            color: var(--text-neutral);
            padding-bottom: 2px;
        }
    }

    &__id-label {
        color: var(--text-secondary);
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        margin-top: -2px;
        margin-bottom: 2px;
    }

    &__id-value {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

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
            padding-bottom: var(--spacing-md);

            @media (min-width: $screen-md) {
                padding-right: var(--spacing-xl);
                padding-bottom: 0;
                margin-bottom: var(--spacing-md);

                &:first-child {
                    padding-right: 13px;
                }
            }
        }

        &-item + &-item {
            border-top: 1px solid var(--line-base);
            padding-top: var(--spacing-md);

            @media (min-width: $screen-md) {
                border-top: none;
                padding-top: 0;
                padding-left: 31px;
                border-left: 1px solid var(--line-base);
            }
        }

        &-label {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: var(--text-neutral);
            margin-top: -1px;
            padding-bottom: 2px;
        }
    }

    &__status {
        display: flex;
        align-items: center;

        .svg-icon {
            width: 18px;
            height: 18px;
        }

        &--success {
            color: var(--text-success);
        }

        &:focus-visible {
            outline-offset: 2px;
            outline: 1px dashed currentColor;
        }
    }
}
</style>
