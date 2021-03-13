<template>
    <button class="lava-switch" :class="{'lava-checked': value}" :disabled="disabled" @click="toggle" > <span></span> </button>
</template>

<script lang="ts">
export default {
    props: {
        value: {
            tyoe: Boolean,
            default: false,
        },
        disabled:{
            type: Boolean,
            default: false,
        }
    },
    setup(props, context){
        const toggle = () => {
            context.emit("update:value", !props.value)
        }
        return {toggle}
    }
}
</script>

<style lang="scss">
    $height: 1.5rem;
    $height2: 1.3rem;
    .lava-switch{
        height: $height;
        width: $height * 2;
        outline: none;
        border: none;
        background: grey;
        border-radius: $height/2;
        position: relative;
        cursor: pointer;
        transition: 0.3s all ease;
        span{
            position: absolute;
            top: 0.1rem;
            left: 0.1rem;
            height: $height2;
            width: $height2;
            background: white;
            border-radius: $height2 / 2;
            transition: 0.3s all ease;
        }
        &.lava-checked{
            background: #40a9ff;
            transition: 0.3s all ease;
            span{
                transition: 0.3s all ease;
                left: calc(100% - #{$height2} - 0.1rem);
            }
            &:active{
                span{
                    width: $height2 + 0.6rem;
                    left: calc(100% - #{$height2} - 0.7rem);
                }
            }
        }
        &:active{
            span{
                width: $height2 + 0.6rem;
            }
        }
    }
</style>