<template>
    <section>
        <img src="/src/assets/pictures/magnifying glass.png" alt="">
        <h2>404 - Page not found !</h2>
        
    </section>
    <Footer />
    
</template>

<script>
import Footer from '../components/Footer.vue'
</script>

<style scoped>
img {
    height: 500px;
    border-radius: 0 0 0 50%;
}

section {
    display: flex;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 30px;
    height: 100vh;
}

h2 {
    font-family: 'Kreon';
}
</style>