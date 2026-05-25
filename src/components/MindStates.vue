<script setup lang="ts">
import IconAnxious from '@/icons/IconAnxious.vue';
import IconCalm from '@/icons/IconCalm.vue';
import IconFocus from '@/icons/IconFocus.vue';
import IconRelax from '@/icons/IconRelax.vue';
import { useStatsStore } from '@/store/stats.store';

const statsStore = useStatsStore();

function setFeeling(type: string, value: number) {
    statsStore.saveTheFeeling(type, value);
}
</script>

<template>
    <ul class="mind-states">
        <li @click="setFeeling('feeling_calm', 1)">
            <div class="icon">
                <IconCalm />
            </div>
            <span>Спокойно</span>
        </li>
        <li @click="setFeeling('feeling_relax', 1)">
            <div class="icon">
                <IconRelax />
            </div>
            <span>Расслабленно</span>
        </li>
        <li @click="setFeeling('feeling_focus', 1)">
            <div class="icon">
                <IconFocus />
            </div>
            <span>Фокусировано</span>
        </li>
        <li @click="setFeeling('feeling_anxiety', 1)">
            <div class="icon">
                <IconAnxious />
            </div>
            <span>Тревожно</span>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.mind-states {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;

    margin-top: 40px;

    &>li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        &>.icon {
            background-color: var(--color-card);

            display: flex;
            align-items: center;
            justify-content: center;

            width: 62px;
            height: 65px;

            border-radius: 20px;
        }
    }

    &>li:last-child {
        &>div {
            padding-top: 30px;
        }
    }
}
</style>