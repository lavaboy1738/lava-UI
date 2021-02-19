<template>
    <template v-if="isVisible">
        <div class="lava-dialogue-overlay"></div>
        <div class="lava-dialogue-wrapper">
            <div class="lava-dialogue">
                <header>Title <span class="lava-dialogue-close"></span> </header>
                <main>
                    <p>Biscuits and gravy</p>
                    <p>Strawberry Shortcake</p>
                </main>
                <footer>
                    <Button priority="primary">Confirm</Button>
                    <Button>Cancel</Button>
                </footer>
            </div>
        </div>
    </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        }
    },
    components: {Button}
}
</script>

<style lang="scss">
    $radius: 0.25rem;
    $border-color: #d9d9d9;
    .lava-dialogue-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade-out(black, 0.5);
        z-index: 10;
    }
    .lava-dialogue-wrapper{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }
    .lava-dialogue{
        background: white;
        border-radius: $radius;
        box-shadow: 0 0 3px fade-out(black, 0.5);
        min-width: 15rem;
        max-width: 90%;
        header{
            padding: 0.75rem 1rem;
            border-bottom: 1px solid $border-color;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.25rem;
        }
        main{
            padding: 0.75rem 1rem;
        }

        footer{
            border-top: 1px solid $border-color;
            padding: 0.75rem 1rem;
            text-align: right;
        }

        &-close{
            position: relative;
            display: inline-block;
            width: 16px;
            height: 16px;
            cursor: pointer;

            &::before,
            &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
            }

            &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
            }

            &::after {
            transform: translate(-50%, -50%) rotate(45deg);
            }
        }
    }

</style>