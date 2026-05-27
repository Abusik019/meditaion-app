<script setup lang="ts">
const data = defineModel<string>();
const props = withDefaults(defineProps<{
    type?: string
}>(), {
    type: 'text'
})
</script>

<template>
    <input :type="props.type" v-model="data" class="default-input">
</template>

<style lang="scss" scoped>
.default-input {
    width: 100%;

    border: none;
    border-bottom: 1px solid var(--color-primary);

    font-family: var(--font-sans);
    font-size: 18px;
    font-weight: 400;

    background-color: transparent;
    outline: none;

    padding-bottom: 10px;

    &::placeholder {
        color: var(--color-placeholder);
    }
}
</style>