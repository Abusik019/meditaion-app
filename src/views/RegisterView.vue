<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import FormInput from '@/components/FormInput.vue';
import IconLogo from '@/icons/IconLogo.vue';
import { useAuthStore } from '@/store/auth.store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref<{ email: string, username: string, password: string }>({
    email: '',
    username: '',
    password: ''
});

const authStore = useAuthStore();

const router = useRouter();

async function register() {
    if (!form.value.email.trim() && !form.value.username.trim() && !form.value.password.trim()) {
        return;
    }

    try {
        await authStore.registration(form.value.email, form.value.username, form.value.password)
        router.push({ name: "login" })
    } catch (e) {
        console.error('Ошибка входа: ', e);
    }
}
</script>

<template>
    <div class="content">
        <IconLogo :width="202" :height="213" />
        <form class="reg-form" @submit.prevent="register">
            <FormInput v-model="form.email" placeholder="Электронная почта" />
            <FormInput v-model="form.username" placeholder="Имя" />
            <FormInput v-model="form.password" placeholder="Пароль" type="password" />
            <ButtonText type="submit" :style="{ marginTop: '40px' }">Создать аккаунт</ButtonText>
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

    &>.reg-form {
        width: 320px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        margin-top: 60px;
    }
}
</style>