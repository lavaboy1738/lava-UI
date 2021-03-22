<template>
    <h1>Button Component Demo</h1>
    <ComponentDemo v-bind:sourceCode="defaultButtonCode" title="Default Buttons">
        <Button theme="button" size="large">Large</Button>
        <Button theme="button" size="normal">Normal</Button>
        <Button theme="button" size="small">Small</Button>
    </ComponentDemo>
    <ComponentDemo v-bind:sourceCode="linkButtonCode" title="Link Buttons">
        <Button theme="link" size="large" >Large Link</Button>
        <Button theme="link" size="normal">Normal Link</Button>
        <Button theme="link" size="small">Small Link</Button>
    </ComponentDemo>
    <ComponentDemo v-bind:sourceCode="textButtonCode" title="Text Buttons">
        <Button theme="text" size="large">Large Text</Button>
        <Button theme="text" size="normal">Normal Text</Button>
        <Button theme="text" size="small">Small Text</Button>
    </ComponentDemo>
    <ComponentDemo v-bind:sourceCode="priorityLevelsCode" title="Priority Levels">
        <Button priority="primary">Primary</Button>
        <Button>Default</Button>
        <Button priority="danger">Danger</Button>
    </ComponentDemo>
    <ComponentDemo v-bind:sourceCode="disabledButtonCode" title="Disabled Buttons">
        <Button disabled>Disabled</Button>
        <Button disabled theme="link">Link</Button>
        <Button disabled theme="text">Text</Button>
    </ComponentDemo>
    <ComponentDemo v-bind:sourceCode="loadingButtonCode" title="Loading Status">
        <Button loading>Loading</Button>
        <Button theme="link" loading>Link</Button>
        <Button theme="text" loading>Text</Button>
    </ComponentDemo>
</template>

<script lang="ts">
import ComponentDemo from "./ComponentDemo.vue";
import Button from "../library/Button.vue";
export default {
    components: {Button, ComponentDemo},
    setup(){
        const defaultButtonCode = `<template>\r\n    <Button theme=\"button\" size=\"large\">Large<\/Button>\r\n    <Button theme=\"button\" size=\"normal\">Normal<\/Button>\r\n    <Button theme=\"button\" size=\"small\">Small<\/Button>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport Button from \"..\/library\/Button.vue\";\r\nexport default {\r\n    components: {Button},\r\n}\r\n<\/script>`;
        const linkButtonCode = `<template>\r\n    <Button theme=\"link\" size=\"large\" >Large Link<\/Button>\r\n    <Button theme=\"link\" size=\"normal\">Normal Link<\/Button>\r\n    <Button theme=\"link\" size=\"small\">Small Link<\/Button>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport Button from \"..\/library\/Button.vue\";\r\nexport default {\r\n    components: {Button},\r\n}\r\n<\/script>`;
        const textButtonCode = `<template>\r\n    <Button theme=\"text\" size=\"large\">Large Text<\/Button>\r\n    <Button theme=\"text\" size=\"normal\">Normal Text<\/Button>\r\n    <Button theme=\"text\" size=\"small\">Small Text<\/Button>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport Button from \"..\/library\/Button.vue\";\r\nexport default {\r\n    components: {Button},\r\n}\r\n<\/script>`;
        const priorityLevelsCode = `<template>\r\n    <Button priority=\"primary\">Primary<\/Button>\r\n    <Button>Default<\/Button>\r\n    <Button priority=\"danger\">Danger<\/Button>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport Button from \"..\/library\/Button.vue\";\r\nexport default {\r\n    components: {Button},\r\n}\r\n<\/script>`;
        const disabledButtonCode = `<template>\r\n    <Button disabled>Disabled<\/Button>\r\n    <Button disabled theme=\"link\">Link<\/Button>\r\n    <Button disabled theme=\"text\">Text<\/Button>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport Button from \"..\/library\/Button.vue\";\r\nexport default {\r\n    components: {Button},\r\n}\r\n<\/script>`;
        const loadingButtonCode = `<template>\r\n    <Button loading>Loading<\/Button>\r\n    <Button theme=\"link\" loading>Link<\/Button>\r\n    <Button theme=\"text\" loading>Text<\/Button>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport Button from \"..\/library\/Button.vue\";\r\nexport default {\r\n    components: {Button},\r\n}\r\n<\/script>`;
        return{
            defaultButtonCode,
            linkButtonCode,
            textButtonCode,
            priorityLevelsCode,
            disabledButtonCode,
            loadingButtonCode,
        }
    }
}
</script>