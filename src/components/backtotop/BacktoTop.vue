<template>
    <div class="scrollToTop" ref="scrollToTop" style="display: flex;">
        <span class="arrow lh-1"><i class="ti ti-caret-up fs-20"></i></span>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollToTop = ref<any>(null);

const onScroll = () => {
    if (scrollToTop.value) {
        if (window.scrollY > 100) {
            scrollToTop.value.style.display = 'flex';
        } else {
            scrollToTop.value.style.display = 'none';
        }
    }
};

onMounted(() => {
    window.addEventListener('scroll', onScroll);

    if (scrollToTop.value) {
        scrollToTop.value.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);

    if (scrollToTop.value) {
        scrollToTop.value.onclick = null; // cleanup click handler
    }
});
</script>