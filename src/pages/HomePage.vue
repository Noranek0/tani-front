<template>
  <div class="landing-page-wrapper">
    <TopSidebar></TopSidebar>
    Ini Home
  </div>
</template>

<script setup lang="ts">
import TopSidebar from "~/components/navigation/TopSidebar.vue";
import { useSetHtmlAttr } from "~/hook/set-html-attr";

useSetHtmlAttr();
</script>
