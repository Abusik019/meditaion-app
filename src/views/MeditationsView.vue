<script setup lang="ts">
import MeditationsList from '@/components/MeditationsList.vue';
import MindStates from '@/components/MindStates.vue';
</script>

<template>
    <div class="meditations">
        <div class="meditations-content">
            <img src="/user.png" width="129" height="129" alt="user">
            <h1>Добро пожаловать, Наталья!</h1>
            <p>Как вы сегодня себя чувствуете?</p>
            <MindStates />
        </div>
        <MeditationsList />
    </div>
</template>

<style lang="scss" scoped>
.meditations {
    width: 100%;

    padding: 50px 0;
    box-sizing: border-box;

    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    &>.meditations-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &>h1 {
            font-size: 30px;
            font-weight: 500;

            margin-top: 30px;
        }

        &>p {
            font-family: var(--font-sans);
            font-size: 22px;
            font-weight: 400;

            color: #FFFFFFB2;
        }
    }
}
</style>
