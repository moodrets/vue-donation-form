<template>
    <div class="app-container">
        <section class="app-block">
            <div class="app-block__header">
                <h1 class="app-block__title">Donations</h1>
            </div>
            <div class="app-block__body">
                <Filter></Filter>
            </div>
        </section>
        <section class="app-content-layout">
            <aside class="app-content-layout__aside">
                <Aside></Aside>
            </aside>
            <main class="app-content-layout__main">
                <Info></Info>
                <Tabs></Tabs>
            </main>
        </section>
    </div>
</template>

<script setup lang="ts">
import Filter from '@/components/donation/Filter.vue'
import Info from '@/components/donation/Info.vue'
import Aside from '@/components/donation/Aside.vue'
import Tabs from '@/components/donation/Tabs.vue'
</script>
