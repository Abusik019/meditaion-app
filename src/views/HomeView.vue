<script setup lang="ts">
import NavPanel from '@/components/NavPanel.vue';

</script>

<template>
    <div class="content">
        <NavPanel />
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.content {
    width: 100%;
    min-height: 100vh;

    padding: 40px 60px;
    box-sizing: border-box;

    &>.main {
        width: 100%;

        padding: 50px 0;
        box-sizing: border-box;

        display: flex;
        align-items: flex-start;
        justify-content: space-around;

        &>.main-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            &>h1 {
                font-size: 30px;
                font-weight: 500;

                margin-top: 30px;
            }

            &>p {
                font-family: var(--font-sans);
                font-size: 22px;
                font-weight: 400;

                color: #FFFFFFB2;
            }
        }
    }
}
</style>
