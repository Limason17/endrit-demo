<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const isVisible = ref(false);

function updateVisibility() {
  isVisible.value = window.scrollY > 520;
}

onMounted(() => {
  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateVisibility);
});
</script>

<template>
  <div class="mobile-booking-bar" :class="{ show: isVisible }">
    <a href="https://wa.me/41762320738" target="_blank" rel="noopener">
      Termin per WhatsApp buchen
    </a>
  </div>
</template>
