<script setup>
const products = [
  {
    brand: "Reuzel",
    title: "Pomade",
    text: "Klassischer Barber-Look mit kontrolliertem Styling und gepflegtem Finish.",
    image: "/assets/images/product_reuzel.png",
    alt: "Reuzel Pomade",
    featured: true
  },
  {
    brand: "Slick Gorilla",
    title: "Styling Powder",
    text: "Für Volumen, matte Textur und einen natürlichen Look ohne Glanz.",
    image: "/assets/images/product_slickgorilla.png",
    alt: "Slick Gorilla Styling Powder"
  },
  {
    brand: "Uppercut Deluxe",
    title: "Matte Clay",
    text: "Für starken Halt, klare Struktur und ein modernes mattes Finish.",
    image: "/assets/images/product_uppercut.png",
    alt: "Uppercut Deluxe Matte Clay"
  },
  {
    brand: "Proraso",
    title: "Beard Oil",
    text: "Pflegt den Bart, macht ihn weicher und sorgt für einen sauberen Duft.",
    image: "/assets/images/product_proraso.png",
    alt: "Proraso Beard Oil"
  },
  {
    brand: "Marmara Barber",
    title: "Aftershave Cologne",
    text: "Frisches Finish nach Rasur, Konturen oder Bartstyling.",
    image: "/assets/images/product_marmara.png",
    alt: "Marmara Barber Aftershave"
  },
  {
    brand: "Depot",
    title: "Hair & Beard Shampoo",
    text: "Reinigung für Haare und Bart, passend für die Pflege zuhause.",
    image: "/assets/images/product_depot.png",
    alt: "Depot Hair and Beard Shampoo"
  }
];
</script>

<template>
  <section id="produkte" class="section product-section">
    <div class="container">
      <div class="products-top">
        <div>
          <p class="section-kicker">Produkte</p>
          <h2>Professionelle Pflege für zuhause.</h2>
        </div>

        <p>
          Ausgewählte Styling- und Pflegeprodukte direkt im Salon erhältlich.
          Keine festen Online-Preise, da Produkte und Verfügbarkeit variieren.
        </p>
      </div>

      <div class="product-showcase">
        <article
          v-for="product in products"
          :key="product.title"
          class="product-item"
          :class="{ 'product-featured': product.featured }"
        >
          <img :src="product.image" :alt="product.alt" />
          <span>{{ product.brand }}</span>
          <h3>{{ product.title }}</h3>
          <p>{{ product.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
