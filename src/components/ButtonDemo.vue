<template>
    <div>
        <Button @click="onClick" @mouseover="onMouseOver" theme="button" >Button</Button>
        <Button @click="onClick" @mouseover="onMouseOver" >Default</Button>
        <Button @click="onClick" @mouseover="onMouseOver" theme="link" >Link</Button>
        <Button @click="onClick" @mouseover="onMouseOver" theme="text" >Text</Button>
    </div>
</template>

<script lang="ts">
import Button from "../library/Button.vue";
export default {
    components: {Button},
    setup(){
        const onClick = ()=>{

        }
        const onMouseOver = ()=>{

        }

        return{onClick, onMouseOver}
    }
}
</script>