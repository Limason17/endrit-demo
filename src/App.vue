<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import IntroSection from "./components/IntroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import PricesSection from "./components/PricesSection.vue";
import ProductsSection from "./components/ProductsSection.vue";
import GallerySection from "./components/GallerySection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import MobileBookingBar from "./components/MobileBookingBar.vue";
</script>

<template>
  <SiteHeader />

  <main>
    <HeroSection />
    <IntroSection />
    <ServicesSection />
    <PricesSection />
    <ProductsSection />
    <GallerySection />
    <ContactSection />
  </main>

  <SiteFooter />
  <MobileBookingBar />
</template>
