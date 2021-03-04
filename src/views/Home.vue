<template>
    <div>
        <TopNav/>
        <div class="banner">
            <h1>Lava UI</h1>
            <h2>Vue UI library developed by Lavaboy1738</h2>
            <p class="actions">
                <a href="">Github</a>
                <router-link to="/docs">Get Started</router-link>
            </p>
        </div>
        <div class="features">
            <div class="container">
                <ul>
                    <li>
                        <div class="icon">
                            <svg version="1.1" viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)"><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/></g><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/></g></g></svg>
                        </div>
                        <div class="info">
                            <h1>Built with Vue3</h1>
                            <h2>Utilizes Vue3 Composition API</h2>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <svg fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></svg>
                        </div>
                        <div class="info">
                            <h1>Typescript Enabled</h1>
                            <h2>Source code written in Typescript</h2>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wrench" class="svg-inline--fa fa-wrench fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path></svg>
                        </div>
                        <div class="info">
                            <h1>Easy to Use</h1>
                            <h2>It's just easy to use, that's all.</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
    components: {TopNav}
}
</script>

<style lang="scss" scoped>
    .banner{
        padding: 6.25rem 0 2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            margin: 1rem;
            font-weight: 800;
            font-size: 3rem;
        }
        .actions{
            padding: 0.5rem 0;
            a{
                position: relative;
                font-weight: 600;
                color: white;
                margin: 1rem 0.5rem;
                background-color: #ff8a00;
                display: inline-block;
                border-radius: 20rem;
                padding: 0.5rem 1rem;
                z-index: 1;
                transition: 0.1s all ease 0.15s;
                overflow: hidden;
                box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
                &::before{
                    position: absolute;
                    left: -120%;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    content: "";
                    background-color: white;
                    transition: all 0.3s ease-in-out;
                    z-index: -1;
                }
                &:hover{
                    color: #ff8a00;
                    transition: 0.1s all ease 0.15s;
                    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
                    &::before{
                        left: 0%;
                        transition: all 0.3s ease-in-out;
                    }
                }
            }
        }
    }
    .features{
        text-align: center;
        .container{
            margin: 0 auto;
            display: inline-block;
            ul{
                display: flex;

                li{
                    display: flex;
                    margin: 2rem;
                    .icon{
                        width: 4rem;
                        svg{
                            width: 100%;
                        }
                    }
                    .info{
                        margin-left: 1rem;
                        text-align: left;
                        h1{
                            font-size: 1.5rem;
                            font-weight: 400;
                            margin-bottom: 0.25rem;
                        }
                        h2{
                            font-size: 1rem;
                            font-weight: 200;
                        }
                    }
                }
            }
        }
    }
</style>

