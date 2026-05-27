<script setup lang="ts">
import IconAnxious from '@/icons/IconAnxious.vue';
import IconCalm from '@/icons/IconCalm.vue';
import IconFocus from '@/icons/IconFocus.vue';
import IconRelax from '@/icons/IconRelax.vue';
import { useStatsStore } from '@/store/stats.store';
import { computed, onMounted } from 'vue';

const statsStore = useStatsStore();

onMounted(() => {
    statsStore.fetchStats();
})

const todayStat = computed(() => {
    if (!statsStore.stats) return null;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    return statsStore.stats.find(stat => stat.date === currentDate);
});

function setFeeling(type: string, value: number) {
    statsStore.saveStat(type, value);
}
</script>

<template>
    <ul class="mind-states">
        <li @click="setFeeling('feeling_calm', todayStat?.feeling_calm == 0 ? 1 : 0)"
            :class="{ active: todayStat?.feeling_calm == 1 }">
            <div class="icon">
                <IconCalm />
            </div>
            <span>Спокойно</span>
        </li>
        <li @click="setFeeling('feeling_relax', todayStat?.feeling_relax == 0 ? 1 : 0)"
            :class="{ active: todayStat?.feeling_relax == 1 }">
            <div class="icon">
                <IconRelax />
            </div>
            <span>Расслабленно</span>
        </li>
        <li @click="setFeeling('feeling_focus', todayStat?.feeling_focus == 0 ? 1 : 0)"
            :class="{ active: todayStat?.feeling_focus == 1 }">
            <div class="icon">
                <IconFocus />
            </div>
            <span>Фокусировано</span>
        </li>
        <li @click="setFeeling('feeling_anxiety', todayStat?.feeling_anxiety == 0 ? 1 : 0)"
            :class="{ active: todayStat?.feeling_anxiety == 1 }">
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

        cursor: pointer;

        &>.icon {
            background-color: var(--color-card);

            display: flex;
            align-items: center;
            justify-content: center;

            width: 62px;
            height: 65px;

            border-radius: 20px;
        }

        &.active>.icon {
            background-color: var(--color-green);
        }
    }

    &>li:last-child {
        &>div {
            padding-top: 30px;
        }
    }
}
</style>