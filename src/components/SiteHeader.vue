<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const navItems = [
  { href: "#home", label: "Home", section: "home" },
  { href: "#leistungen", label: "Leistungen", section: "leistungen" },
  { href: "#preise", label: "Preise", section: "preise" },
  { href: "#produkte", label: "Produkte", section: "produkte" },
  { href: "#galerie", label: "Galerie", section: "galerie" },
  { href: "#kontakt", label: "Kontakt", section: "kontakt" }
];

const isMenuOpen = ref(false);
const activeSection = ref("");

const menuButtonLabel = computed(() =>
  isMenuOpen.value ? "Menü schließen" : "Menü öffnen"
);

function closeMenu() {
  isMenuOpen.value = false;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function updateActiveSection() {
  let currentSection = "";
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id") || "";
    }
  });

  activeSection.value = currentSection;
}

watch(isMenuOpen, (open) => {
  document.body.classList.toggle("menu-open", open);
});

onMounted(() => {
  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection, { passive: true });
});

onBeforeUnmount(() => {
  document.body.classList.remove("menu-open");
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<template>
  <header class="site-header">
    <nav class="nav">
      <a href="#home" class="brand" @click="closeMenu">
        <span class="brand-mark">EK</span>
        <span class="brand-text">
          <strong>Coiffeur EK Exklusiv</strong>
          <small>Premium Barbershop</small>
        </span>
      </a>

      <button
        class="menu-btn"
        :class="{ active: isMenuOpen }"
        :aria-label="menuButtonLabel"
        :aria-expanded="isMenuOpen"
        aria-controls="navPanel"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>

      <div id="navPanel" class="nav-panel" :class="{ active: isMenuOpen }">
        <span class="nav-menu-meta" aria-hidden="true">Baar / Premium Barbershop</span>
        <span class="nav-menu-watermark" aria-hidden="true">EK</span>

        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="{ 'active-link': activeSection === item.section }"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>

        <a
          href="https://wa.me/41762320738"
          target="_blank"
          rel="noopener"
          class="nav-cta"
          @click="closeMenu"
        >
          Termin buchen
        </a>
      </div>
    </nav>
  </header>
</template>
