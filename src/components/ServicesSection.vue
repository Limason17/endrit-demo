<script setup>
const services = [
  {
    label: "Signature Service",
    title: "Haarschnitte in jedem Stil",
    text: "Klassisch, modern, elegant oder auffällig - jeder Schnitt wird präzise an Stil, Kopfform und Wunsch des Kunden angepasst.",
    featured: true
  },
  {
    label: "Fade",
    title: "Fade Cuts",
    text: "Saubere Übergänge, scharfe Konturen und ein frischer Barber-Look."
  },
  {
    label: "Styling",
    title: "Haarstyling",
    text: "Passendes Finish für Alltag, Business oder besondere Anlässe."
  },
  {
    label: "Beard",
    title: "Bartstyling",
    text: "Bart schneiden, formen, pflegen und exakt konturieren."
  },
  {
    label: "Color",
    title: "Haare & Bart färben",
    text: "Färben inklusive Waschen und Styling für einen gepflegten Look."
  },
  {
    label: "Brows",
    title: "Augenbrauenpflege",
    text: "Reinigung oder perfekte Form für ein sauberes Erscheinungsbild."
  }
];
</script>

<template>
  <section id="leistungen" class="section services-section">
    <div class="container">
      <div class="services-layout">
        <div class="services-heading">
          <p class="section-kicker">Leistungen</p>
          <h2>Services für einen präzisen Look.</h2>
          <p>
            Clean geschnitten, sauber gestylt und klar auf den Kunden abgestimmt.
            Ohne unnötigen Schnickschnack.
          </p>
        </div>

        <div class="services-list">
          <article
            v-for="service in services"
            :key="service.title"
            class="service-line"
            :class="{ 'service-line-featured': service.featured }"
          >
            <div class="service-main">
              <span>{{ service.label }}</span>
              <h3>{{ service.title }}</h3>
            </div>
            <p>{{ service.text }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
