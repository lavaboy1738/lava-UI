<template>
    <template v-if="isVisible">
        <Teleport to="body">
            <div class="lava-dialogue-overlay" @click="onClickOverlay"></div>
                <div class="lava-dialogue-wrapper">
                    <div class="lava-dialogue">
                        <header>
                            <slot name="title"/>
                            <span @click="close" class="lava-dialogue-close"></span> </header>
                        <main>
                            <slot name="content"/>
                        </main>
                        <footer>
                            <Button priority="primary" @click="confirm">Confirm</Button>
                            <Button @click="cancel">Cancel</Button>
                        </footer>
                    </div>
                </div>
        </Teleport>
    </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
    props: {
        title:{
            type: String,
            default: "Title"
        },
        isVisible: {
            type: Boolean,
            default: false,
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true,
        },
        confirmFn:{
            type: Function,
        },
        cancelFn: {
            type: Function
        }
    },
    components: {Button},
    setup(props, context){
        const close = ()=>{
            context.emit("update:isVisible", false)
        }
        const onClickOverlay = ()=>{
            if(props.closeOnClickOverlay){
                close();
            }
        }
        const cancel = ()=>{
            if(props.cancelFn?.()!==false){
                close();
            }
        }
        const confirm = ()=>{
            if(props.confirmFn?.()!== false){
                close();
            }
        }
        return{
            close,
            onClickOverlay,
            cancel,
            confirm
        }
    }
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
            width: 1rem;
            height: 1rem;
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