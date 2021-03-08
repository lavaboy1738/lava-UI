<template>
    <div>
        <div class="top-nav">
            <router-link to="/" class="logo">
                <svg width="100" height="87" viewBox="0 0 100 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.494 14.7075L75.9853 6.12184e-06L0 0L37.9926 65.8052L46.0622 51.8284L24.6304 14.7075H67.494Z" fill="#0F0E0E"/>
                    <path d="M64.0369 21.1739L50.8778 43.9662L37.7186 21.1739L64.0369 21.1739Z" fill="#0F0E0E"/>
                    <path d="M42.5905 72.67L50.3172 86.053L99.9999 3.66394e-05L84.5466 3.78854e-05L42.5905 72.67Z" fill="#0F0E0E"/>
                </svg>
            </router-link>
            <ul class="menu">
                <li>Menu1</li>
                <li>Menu2</li>
            </ul>
            <span class="toggleMenu" @click="toggleMenu">
                <i class='bx bx-menu'></i>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup(){
        const menuVisible = inject<Ref<boolean>>("menuVisible");
        const toggleMenu = ()=>{
            menuVisible.value = !menuVisible.value;
        }
        return {toggleMenu}
    }
}
</script>

<style lang="scss" scoped>
    .top-nav{
        display: flex;
        padding: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        justify-content: center;
        align-items: center;
        .logo{
            max-width: 3rem;
            max-height: 3rem;
            margin-right: auto;
            svg{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .menu{
            display: flex;
            white-space: nowrap;
            flex-wrap: no-wrap;
            li{
                margin: 0 1rem;
            }
        }
        .toggleMenu{
            display: none;
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            i{
                font-size: 1.5rem;
            }
        }
        @media (max-width: 500px){
            justify-content: flex-end;
            .menu{
                display: none;
            }
            .logo{
                margin: 0;
            }
            .toggleMenu{
                display: inline-block;
            }
        }
    }
</style>