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
    min-height: 100vh;
}

.projects {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}



article {
    width: 30%;
    border: 2px solid #EB9F9F;
    border-radius: 15%;
    background-color: #F8ECC9;
    padding-top: 10px ;
}

article:hover {
    box-shadow: 10px 10px 5px #EB9F9F;
}

img {
    width: 95%;
    height: 75%;
    border-radius: 17% 17% 0 0;
    content: unset;
}
</style>
