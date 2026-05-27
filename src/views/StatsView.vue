<script lang="ts" setup>
import StatItem from '@/components/StatItem.vue';
import { useStatsStore } from '@/store/stats.store';
import { onMounted, computed } from 'vue';

const statsStore = useStatsStore();

const statCards = computed(() => {
    if (!statsStore.summary) return [];

    return [
        { key: 'total_anxiety', label: 'Тревожных дней', value: statsStore.summary.total_anxiety, color: '#69B09C' },
        { key: 'total_calm', label: 'Спокойных дней', value: statsStore.summary.total_calm, color: '#69B069' },
        { key: 'total_focus', label: 'Фокусированных дней', value: statsStore.summary.total_focus, color: '#69A1B0' },
        { key: 'total_minutes', label: 'Минут медитации', value: statsStore.summary.total_minutes, color: '#9CB069' },
        { key: 'total_relax', label: 'Расслабленных дней', value: statsStore.summary.total_relax, color: '#B0696A' },
    ];
});

onMounted(() => {
    statsStore.fetchStats();
})
</script>

<template>
    <div class="stats">
        <ul class="stat-list" v-if="statsStore.summary">
            <StatItem v-for="stat in statCards" :key="stat.key" :label="stat.label" :value="stat.value"
                :color="stat.color" />
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.stats {
    width: 100%;
    height: calc(100vh - 172px);

    display: flex;
    align-items: center;
    justify-content: center;

    &>.stat-list {
        width: fit-content;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 48px;
    }
}
</style>