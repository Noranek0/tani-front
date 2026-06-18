<template>
  <div class="landing-page-wrapper">
    <TopSidebar></TopSidebar>
    Ini Home

    <div data-vertical-style="closed" data-toggled="close-menu-close">
      <div class="app-sidebar">Ini Muncul</div>
    </div>

    <div class="accordion accordion-border-primary">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button">Accordion Item #1</button>
        </h2>
        <div class="accordion-collapse collapse show">
          <div class="accordion-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis optio dignissimos saepe illum nostrum architecto
              accusantium, debitis dolores nobis at facere, corrupti earum.
              Exercitationem vero magni quam magnam, voluptatum ea!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopSidebar from "~/components/navigation/TopSidebar.vue";
import { useSetHtmlAttr } from "~/hook/set-html-attr";

useSetHtmlAttr();
</script>
