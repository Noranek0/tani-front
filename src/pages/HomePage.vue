<template>
  <div class="landing-page-wrapper">
    <TopSidebar></TopSidebar>

    <div class="main-content landing-main" id="">
      <LandingBanner />
      <FooterSection />
    </div>

    <CopyrightSection />
  </div>
</template>

<script setup lang="ts">
import CopyrightSection from "~/components/CopyrightSection.vue";
import LandingBanner from "~/components/landing-page/LandingBanner.vue";
import FooterSection from "~/components/navigation/FooterSection.vue";
import TopSidebar from "~/components/navigation/TopSidebar.vue";
import { useSetHtmlAttr } from "~/hook/set-html-attr";

useSetHtmlAttr();
</script>
