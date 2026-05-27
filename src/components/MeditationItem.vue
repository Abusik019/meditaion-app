<script lang="ts" setup>
import IconPlay from '@/icons/IconPlay.vue';
import { useRouter } from 'vue-router';

const { id, title, description, duration_min } = defineProps<{ id: number, title: string, description: string, duration_min: number }>();
const router = useRouter();

function onClick() {
    router.push({ name: 'start', params: { id: id } })
}
</script>

<template>
    <li class="card">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <div>
            <button @click="onClick">
                <span>Начать</span>
                <IconPlay />
            </button>
            <span>{{ duration_min }} мин</span>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.card {
    width: 339px;
    height: 170px;

    background-color: var(--color-card);
    color: var(--color-primary-inverted);

    padding: 20px 30px;
    box-sizing: border-box;

    border-radius: 20px;

    &>h2 {
        font-size: 25px;
        font-weight: 500;
    }

    &>p {
        font-family: var(--font-sans);
        font-size: 15px;
        font-weight: 500;
    }

    &>div {
        margin-top: 10px;

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        &>button {
            width: 111px;
            height: 39px;

            background-color: var(--color-bg);

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 11px;

            border-radius: 10px;

            &>span {
                font-family: var(--font-sans);
                font-size: 15px;
                font-weight: 500;

                color: var(--color-primary);
            }
        }

        &>span {
            font-family: var(--font-sans);
            font-size: 15px;
            font-weight: 500;

            color: var(--color-bg);

            opacity: .75;
        }
    }
}
</style>