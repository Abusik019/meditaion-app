<script setup lang="ts">
</script>

<template>
    <button class="button">
        <slot />
    </button>
</template>

<style scoped>
.button {
    width: 326px;
    height: 61px;

    font-family: var(--font-sans);
    font-size: 25px;
    font-weight: 500;

    border-radius: 10px;

    background-color: var(--color-btn);
}
</style>