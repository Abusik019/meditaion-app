<script setup lang="ts">
import IconRemove from '@/icons/IconRemove.vue';
import IconRepeat from '@/icons/IconRepeat.vue';
import { useMeditationsStore } from '@/store/meditations.store';
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import IconPause from '@/icons/IconPause.vue';
import IconDone from '@/icons/IconDone.vue';
import IconNavPlay from '@/icons/IconNavPlay.vue';
import { useStatsStore } from '@/store/stats.store';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const meditationsStore = useMeditationsStore();
const statsStore = useStatsStore();

const timerState = ref<'pause' | 'play' | 'done'>('pause');
const timeLeft = ref(0);
const intervalRef = ref<ReturnType<typeof setInterval> | null>(null);

const startTimer = () => {
    if (intervalRef.value) clearInterval(intervalRef.value);
    timerState.value = 'pause';
    intervalRef.value = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value--;
        } else {
            clearInterval(intervalRef.value!);
            intervalRef.value = null;
            timerState.value = 'done';
        }
    }, 1000);
};

const pauseTimer = () => {
    if (intervalRef.value) clearInterval(intervalRef.value);
    intervalRef.value = null;
    timerState.value = 'play';
};

const repeatTimer = () => {
    timeLeft.value = (currentMeditation.value?.duration_min || 0) * 60;
    startTimer();
};

onMounted(() => {
    if (meditationsStore.meditations.length === 0) {
        meditationsStore.fetchMeditations();
    }
});

onUnmounted(() => {
    if (intervalRef.value) clearInterval(intervalRef.value);
});

const currentMeditation = computed(() =>
    meditationsStore.meditations.find(el => el.id == Number(id))
);

watch(currentMeditation, (newVal) => {
    if (newVal && timeLeft.value === 0 && timerState.value !== 'done') {
        timeLeft.value = newVal.duration_min * 60;
        startTimer();
    }
}, { immediate: true });

const formattedTime = computed(() => {
    const m = Math.floor(timeLeft.value / 60);
    const s = timeLeft.value % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
});


function saveResult() {
    statsStore.saveStat("duration_min", currentMeditation.value?.duration_min);
    router.push({ name: 'meditations' });
}
</script>

<template>
    <div class="meditation">
        <div class="meditation-timer">
            <span>{{ formattedTime }}</span>
        </div>
        <h1>{{ currentMeditation?.title }}</h1>
        <p>{{ currentMeditation?.description }}</p>
        <div class="actions">
            <button @click="router.push({ name: 'meditations' });" class="btn-remove">
                <IconRemove />
            </button>
            <button v-if="timerState == 'pause'" @click="pauseTimer">
                <IconPause />
            </button>
            <button v-else-if="timerState == 'play'" class="btn-play" @click="startTimer">
                <IconNavPlay color="black" width="36" height="36" />
            </button>
            <button v-else @click="saveResult" class="btn-done">
                <IconDone />
            </button>
            <button class="btn-repeat" @click="repeatTimer">
                <IconRepeat />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.meditation {
    width: 100%;
    height: calc(100vh - 172px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &>.meditation-timer {
        width: 250px;
        height: 250px;

        border-radius: 50%;

        background-image: url('/public/timer-bg.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        font-size: 44px;
        font-weight: 400;
        font-family: var(--font-sans);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    &>h1 {
        margin-top: 27px;

        font-size: 35px;
        font-weight: 500;
    }

    &>p {
        font-size: 25px;
        font-weight: 400;
        font-family: var(--font-sans);

        opacity: .5;
    }

    &>.actions {
        display: flex;
        align-items: center;
        gap: 33px;

        margin-top: 27px;

        &>.btn-play,
        >.btn-done {
            width: 75px;
            height: 75px;

            background-color: var(--color-primary);

            border-radius: 50%;

            display: grid;
            place-items: center;
        }
    }
}
</style>