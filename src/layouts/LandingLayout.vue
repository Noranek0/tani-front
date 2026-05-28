<template>
    <div>
        <router-view />
        <BackToTop />
    </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onUnmounted} from 'vue'
import BackToTop from '~/components/backtotop/BacktoTop.vue'

// Add the body class before the component is mounted
onBeforeMount(() => {
  document.body.classList.add('landing-body')
})

// Remove the body class when the component unmounts
onUnmounted(() => {
  document.body.classList.remove('landing-body')
})
</script>