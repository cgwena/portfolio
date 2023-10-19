<script setup>
import { RouterView } from 'vue-router'
import Presentation from './components/Presentation.vue'
import Projets from './components/Projets.vue'
import Formulaire from './components/Formulaire.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Header />
  <Presentation />
  <Projets />
  <Formulaire />
  <RouterView />
  <Footer />
</template>

<style>

</style>