<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import IconLogo from '@/icons/IconLogo.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function btnClick() {
    router.push({ name: "register" })
}
</script>

<template>
    <div class="content">
        <IconLogo :width="202" :height="213" />
        <h1>Добро пожаловать!</h1>
        <p>Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>
        <ButtonText @click="btnClick" :style="{ marginTop: '64px' }">Войти в приложение</ButtonText>
    </div>
</template>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100vh;

    background-image: url('/public/main-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &>h1 {
        font-size: 34px;
        font-weight: 700;
        margin-top: 20px;
    }

    &>p {
        font-family: var(--font-sans);
        font-size: 20px;
        line-height: 26px;
        font-weight: 500;

        max-width: 317px;

        text-align: center;
    }
}
</style>