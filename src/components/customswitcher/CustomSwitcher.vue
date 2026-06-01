<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Switcher</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body"></div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { switcherStore } from '~/stores/switcher';

const switcher = switcherStore();

const custompageLocalStorage = () => {
    switcher.custompageLocalStorage();
}

onMounted(() => {
    custompageLocalStorage();
});
</script>
