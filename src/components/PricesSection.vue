<script setup>
const prices = [
  {
    label: "Bart",
    title: "Bart schneiden",
    description: "Trimmen, formen und exakt konturieren.",
    price: "20"
  },
  {
    label: "Augenbrauen",
    title: "Augenbrauen Reinigung",
    description: "Saubere Reinigung der Augenbrauen.",
    price: "10"
  },
  {
    label: "Form",
    title: "Augenbrauen perfekte Form",
    description: "Exakte Form für einen gepflegten Look.",
    price: "20"
  },
  {
    label: "Farbe",
    title: "Haare / Bart färben",
    description: "Inklusive Waschen und Styling.",
    price: "30"
  },
  {
    label: "Pflege",
    title: "Gesichtsbehandlung",
    description: "Black Mask, Wax, Dampfreinigung und Cremes.",
    price: "10-30",
    wide: true
  }
];
</script>

<template>
  <section id="preise" class="section prices-section">
    <div class="container">
      <div class="prices-top">
        <div>
          <p class="section-kicker">Preise</p>
          <h2>Klare Preise. Exklusiver Service.</h2>
        </div>

        <p>Transparent, einfach verständlich und passend zu einem Premium-Barbershop.</p>
      </div>

      <div class="pricing-layout">
        <article class="pricing-feature">
          <div class="pricing-feature-top">
            <span>Signature</span>
            <b>Meist gebucht</b>
          </div>

          <h3>Haarschnitt</h3>
          <p>Haarschnitt im gewünschten Stil, sauber und präzise ausgeführt.</p>

          <div class="pricing-feature-price">
            <small>CHF</small>
            <strong>30</strong>
          </div>

          <div class="pricing-feature-extra">
            <span>Waschen & Styling</span>
            <b>+10 CHF</b>
          </div>
        </article>

        <div class="pricing-list">
          <article
            v-for="item in prices"
            :key="item.title"
            class="pricing-item"
            :class="{ 'pricing-item-wide': item.wide }"
          >
            <div>
              <span>{{ item.label }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
            <strong><small>CHF</small>{{ item.price }}</strong>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
