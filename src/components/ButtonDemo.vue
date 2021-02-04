<template>
<h1>Example 1</h1>
    <div>
        <Button @click="onClick" @mouseover="onMouseOver" @focus="onFocus" theme="button" >Button</Button>
        <Button @click="onClick" @mouseover="onMouseOver" @focus="onFocus">Default</Button>
        <Button @click="onClick" @mouseover="onMouseOver" @focus="onFocus" theme="link" >Link</Button>
        <Button @click="onClick" @mouseover="onMouseOver" @focus="onFocus" theme="text" >Text</Button>
    </div>
    <h1>Example 2</h1>
    <div>
        <Button @click="onClick" @mouseover="onMouseOver" @focus="onFocus" size="large" >Large</Button>
        <Button @click="onClick" @mouseover="onMouseOver" @focus="onFocus">Default</Button>
        <Button @click="onClick" @mouseover="onMouseOver" @focus="onFocus" size="small" >Small</Button>
    </div>
</template>

<script lang="ts">
import Button from "../library/Button.vue";
export default {
    components: {Button},
    // setup(){
    //     const onClick = ()=>{

    //     }
    //     const onMouseOver = ()=>{

    //     }
    //     const onFocus = ()=>{

    //     }

    //     return{onClick, onMouseOver, onFocus}
    // }
}
</script>