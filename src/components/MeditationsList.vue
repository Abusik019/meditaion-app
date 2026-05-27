<script lang="ts" setup>
import MeditationItem from '@/components/MeditationItem.vue';
import { useMeditationsStore } from '@/store/meditations.store';
import { onMounted } from 'vue';

const store = useMeditationsStore();

onMounted(() => {
    store.fetchMeditations();
})
</script>

<template>
    <ul v-if="store.meditations" class="meditation-list">
        <MeditationItem v-for="item in store.meditations" :key="item.id" v-bind="item" />
    </ul>
</template>

<style lang="scss" scoped>
.meditation-list {
    max-width: 700px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 22px;
}
</style>