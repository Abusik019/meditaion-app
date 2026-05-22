<script setup lang="ts">
import IconAnxious from '@/icons/IconAnxious.vue';
import IconCalm from '@/icons/IconCalm.vue';
import IconFocus from '@/icons/IconFocus.vue';
import IconRelax from '@/icons/IconRelax.vue';
</script>

<template>
    <ul class="mind-states">
        <li>
            <div class="icon">
                <IconCalm />
            </div>
            <span>Спокойно</span>
        </li>
        <li>
            <div class="icon">
                <IconRelax />
            </div>
            <span>Расслабленно</span>
        </li>
        <li>
            <div class="icon">
                <IconFocus />
            </div>
            <span>Фокусировано</span>
        </li>
        <li>
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