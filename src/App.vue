<script setup>
import { RouterView } from 'vue-router'
import Presentation from './components/Presentation.vue'
import Projets from './components/Projets.vue'
import Formulaire from './components/Formulaire.vue'

</script>

<template>
  <Presentation />
  <Projets />
  <Formulaire />
  <RouterView />
</template>

<style>

</style>