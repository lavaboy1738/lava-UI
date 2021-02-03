<template>
    <button> <span></span> </button>
</template>

<style lang="scss" scoped>
    $height: 1.5rem;
    $height2: 1.3rem;
    button{
        height: $height;
        width: $height * 2;
        border: none;
        background: blue;
        border-radius: $height/2;
        position: relative;
    }
    span{
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        height: $height2;
        width: $height2;
        background: white;
        border-radius: $height2 / 2;
    }
</style>