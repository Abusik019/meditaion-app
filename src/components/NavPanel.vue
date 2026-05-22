<script setup lang="ts">
import IconLogo from '@/icons/IconLogo.vue';
import IconNavChart from '@/icons/IconNavChart.vue';
import IconNavExit from '@/icons/IconNavExit.vue';
import IconNavPlay from '@/icons/IconNavPlay.vue';
</script>

<template>
    <header class="header">
        <RouterLink to="/home/meditations">
            <IconLogo />
        </RouterLink>
        <ul class="nav-list">
            <li>
                <RouterLink active-class="active-link" to="/home/meditations">
                    <IconNavPlay />
                    <span>Медитация</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink active-class="active-link" to="/home/stats">
                    <IconNavChart />
                    <span>Статистика</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/">
                    <IconNavExit />
                    <span>Выход</span>
                </RouterLink>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-list {
    display: flex;
    align-items: center;

    &>li {
        width: 209px;
        height: 92px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &>a {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;

            opacity: .5;

            &>span {
                font-family: var(--font-sans);
                font-size: 22px;
                font-weight: 400;
            }
        }

        &>.active-link {
            opacity: 1;
        }
    }

    &>li:nth-child(2) {
        border-left: 3px solid var(--color-border);
        border-right: 3px solid var(--color-border);
    }
}
</style>