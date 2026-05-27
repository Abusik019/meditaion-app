<script setup lang="ts">
const { label, value, color } = defineProps<{ label: string, value: number, color: string }>();
</script>

<template>
    <li class="stat" :style="{ backgroundColor: color }">
        <h1>{{ value }}</h1>
        <p>{{ label }}</p>
    </li>
</template>

<style lang="scss" scoped>
.stat {
    width: 300px;
    height: 200px;

    padding: 8px 23px;

    border-radius: 20px;

    position: relative;

    &>h1 {
        position: absolute;
        top: 8px;
        right: 23px;

        font-family: var(--font-sans);
        font-weight: 700;
        font-size: 80px;
    }

    &>p {
        position: absolute;
        bottom: 40px;
        left: 23px;

        font-family: var(--font-sans);
        font-weight: 500;
        font-size: 18px;
    }
}
</style>