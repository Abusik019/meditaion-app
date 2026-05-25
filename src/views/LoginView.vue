<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import FormInput from '@/components/FormInput.vue';
import IconLogo from '@/icons/IconLogo.vue';
import { useAuthStore } from '@/store/auth.store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref<{ username: string, password: string }>({
    username: '',
    password: ''
});

const authStore = useAuthStore();
const router = useRouter();

async function login() {
    if (!form.value.username.trim() && !form.value.password.trim()) {
        return;
    }

    try {
        await authStore.login(form.value.username, form.value.password);
        router.push({ name: 'meditations' })
    } catch (e) {
        console.error('Ошибка входа: ', e);
    }
}
</script>

<template>
    <div class="content">
        <IconLogo :width="202" :height="213" />
        <form class="login-form" @submit.prevent="login">
            <FormInput v-model="form.username" placeholder="Имя пользователя" />
            <FormInput v-model="form.password" placeholder="Пароль" type="password" />
            <ButtonText type="submit" :style="{ marginTop: '40px' }">Войти в приложение</ButtonText>
        </form>
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

    &>.login-form {
        width: 320px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        margin-top: 60px;
    }
}
</style>