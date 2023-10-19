<script setup>
import { RouterView } from 'vue-router'
import Presentation from './components/Presentation.vue'
import Projets from './components/Projets.vue'
import Formulaire from './components/Formulaire.vue'
import Header from './components/Header.vue'

</script>

<template>
  <Header />
  <Presentation />
  <Projets />
  <Formulaire />
  <RouterView />
</template>

<style>

</style>