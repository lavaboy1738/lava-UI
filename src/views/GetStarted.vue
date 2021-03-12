<template>
    <article class="markdown-body">
        <h1>Get Started</h1>
        <h2>Import Components</h2>
            <pre><code>import {Button} from "lava-ui";<br>import "lava-ui/dist/index.css";</code></pre>
        <h2>Register Components</h2>
            <pre><code>export default {
  name: "ComponentName",
  components: {
    "lava-button": Button,
  },
}</code></pre>
        <h2>Usage</h2>
        <p>code</p>
        <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;lava-button&gt;默认按钮&lt;/lava-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>
        <p>example</p>
        <Button>Default Button</Button>
    </article>
</template>

<script>
import Button from "../library/Button.vue";
export default {
    components:{
        Button,
    }
}
</script>