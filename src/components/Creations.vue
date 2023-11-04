<template>
    <section id="projects">
        <h2>Mes projets...</h2>
        <Projects />
    </section>
</template>

<script setup>

import Projects from './Projects.vue'

  components:{
   Projects
  }

</script>

<style scoped>

section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

</style>
