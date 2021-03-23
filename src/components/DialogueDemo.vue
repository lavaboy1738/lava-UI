<template>
    <h1>Dialogue Component</h1>
    <ComponentDemo title="Default Dialogue" v-bind:sourceCode="defaultDialogueCode">
        <Button @click="toggle">Toggle Dialogue</Button>
        <Dialogue v-model:isVisible="isVisible" 
        :closeOnClickOverlay="true"
        v-bind:confirmFn="confirmFn"
        v-bind:cancelFn = "cancelFn"
        >
        <template v-slot:title>
            <div>Dialogue Title</div>
        </template>
        <template v-slot:content>
            <div>Click the outside overlay to close the window</div>
        </template>
        </Dialogue>
    </ComponentDemo>
    <ComponentDemo title="Open Dialogue with Function" v-bind:sourceCode = "functionDialogueCode">
        <Button @click="showDialogue">Show Dialogue</Button>
    </ComponentDemo>
</template>

<script lang="ts">
import Dialogue from "../library/Dialogue.vue";
import Button from "../library/Button.vue";
import {openDialogue} from "../library/openDialogue";
import { ref } from 'vue';
import ComponentDemo from "./ComponentDemo.vue";
export default {
    components:{Dialogue, Button, ComponentDemo},
    setup(){
        const isVisible = ref(false);
        const defaultDialogueCode = `<template>\r\n    <Button @click=\"toggle\">Toggle Dialogue<\/Button>\r\n    <Dialogue v-model:isVisible=\"isVisible\" \r\n    :closeOnClickOverlay=\"true\"\r\n    v-bind:confirmFn=\"confirmFn\"\r\n    v-bind:cancelFn = \"cancelFn\"\r\n    >\r\n        <template v-slot:title>\r\n            <div>Dialogue Title<\/div>\r\n        <\/template>\r\n        <template v-slot:content>\r\n            <div>Click the outside overlay to close the window<\/div>\r\n        <\/template>\r\n    <\/Dialogue>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport Dialogue from \"..\/library\/Dialogue.vue\";\r\nimport Button from \"..\/library\/Button.vue\";\r\nimport { ref } from 'vue';\r\nexport default {\r\n    components:{Dialogue, Button},\r\n    setup(){\r\n        const isVisible = ref(false);\r\n        const toggle = ()=>{\r\n            isVisible.value = !isVisible.value;\r\n        }\r\n        const confirmFn = ()=>{\r\n            return false; \/\/function fires when clicking confirm\r\n        }\r\n        const cancelFn = ()=>{\r\n            return false; \/\/function fires when clicking cancel\r\n        }\r\n        return{\r\n            isVisible,\r\n            toggle, \r\n            confirmFn, \r\n            cancelFn,\r\n        }\r\n    }\r\n}\r\n<\/script>`;
        const functionDialogueCode = `<template>\r\n    <Button @click=\"showDialogue\">Show Dialogue<\/Button>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport {openDialogue} from \"..\/library\/openDialogue\";\r\nimport Button from \"..\/library\/Button.vue\";\r\nimport { ref } from 'vue';\r\nexport default {\r\n    components:{Button},\r\n    setup(){\r\n        const showDialogue = ()=>{\r\n            openDialogue({\r\n                title: \"Open Dialogue Function\",\r\n                content: \"This dialogue is opened through a function.\",\r\n            });\r\n        }\r\n        return{\r\n            showDialogue,\r\n        }\r\n    }\r\n}\r\n<\/script>`;
        const toggle = ()=>{
            isVisible.value = !isVisible.value;
        }
        const confirmFn = ()=>{
            return false;
        }
        const cancelFn = ()=>{
            return false;
        }
        const showDialogue = ()=>{
            openDialogue({
                title: "Open Dialogue Function",
                content: "This dialogue is opened through a function.",
            });
        }
        return{
            isVisible,
            toggle, confirmFn, cancelFn,
            showDialogue,
            defaultDialogueCode,
            functionDialogueCode,
        }
    }
}
</script>