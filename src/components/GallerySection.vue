<script setup>
const galleryItems = [
  {
    image: "/assets/images/Inside_2.png",
    alt: "Innenbereich Barbershop",
    label: "Salon",
    title: "Clean & modern"
  },
  {
    image: "/assets/images/Inside_1.jpeg",
    alt: "Innenbereich Coiffeur EK Exklusiv",
    label: "Innenbereich",
    title: "Premium Atmosphäre"
  },
  {
    image: "/assets/images/Outside_1.png",
    alt: "Aussenansicht Coiffeur EK Exklusiv",
    label: "Aussenansicht",
    title: "Coiffeur EK Exklusiv",
    wide: true
  }
];

const haircuts = [
  { image: "/assets/images/Haircut_1.png", alt: "Haircut Beispiel 1", label: "Haircut" },
  { image: "/assets/images/Haircut_2.png", alt: "Haircut Beispiel 2", label: "Fade" },
  { image: "/assets/images/Haircut_3.png", alt: "Haircut Beispiel 3", label: "Style" },
  { image: "/assets/images/Haircut_4.png", alt: "Haircut Beispiel 4", label: "Barber Work" }
];
</script>

<template>
  <section id="galerie" class="section gallery-section">
    <div class="container">
      <div class="section-head">
        <p class="section-kicker">Galerie</p>
        <h2>Ein Blick in den Salon und auf unsere Arbeit.</h2>
        <p>Echte Eindrücke vom Salon, vom Standort und von präzisen Haircuts.</p>
      </div>

      <div class="gallery">
        <div
          v-for="item in galleryItems"
          :key="item.image"
          class="gallery-card"
          :class="{ 'gallery-wide': item.wide }"
        >
          <img :src="item.image" :alt="item.alt" />
          <div>
            <span>{{ item.label }}</span>
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </div>

      <div class="haircut-gallery">
        <article v-for="haircut in haircuts" :key="haircut.image" class="haircut-card">
          <img :src="haircut.image" :alt="haircut.alt" />
          <span>{{ haircut.label }}</span>
        </article>
      </div>

      <a
        href="https://www.instagram.com/coiffeur_ek_exklusi"
        target="_blank"
        rel="noopener"
        class="instagram-strip"
      >
        Weitere Arbeiten auf Instagram ansehen →
      </a>
    </div>
  </section>
</template>
