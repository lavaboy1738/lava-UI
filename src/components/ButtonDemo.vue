<template>
<h1>Example 1</h1>
    <div>
        <Button theme="button" size="large">Large</Button>
        <Button theme="button" size="normal">Normal</Button>
        <Button theme="button" size="small">Small</Button>
    </div>
    <h1>Example 2</h1>
    <div>
        <Button theme="link" size="large" >Large Link</Button>
        <Button theme="link" size="normal">Normal Link</Button>
        <Button theme="link" size="small">Small Link</Button>
    </div>
    <h1>Example 3</h1>
    <div>
        <Button theme="text" size="large">Large Text</Button>
        <Button theme="text" size="normal">Normal Text</Button>
        <Button theme="text" size="small">Small Text</Button>
    </div>
    <h1>Example 4</h1>
    <div>
        <Button priority="primary">Primary</Button>
        <Button>Default</Button>
        <Button priority="danger">Danger</Button>
    </div>
    <h1>Disabled</h1>
    <div>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button disabled theme="link">Link</Button>
        <Button disabled theme="text">Text</Button>
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