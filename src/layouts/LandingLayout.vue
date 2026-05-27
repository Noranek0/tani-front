<template>
    <div>
        <router-view />
        <BackToTop />
    </div>
</template>

<script setup lang="ts">
import BackToTop from '~/components/backtotop/BacktoTop.vue'
</script>