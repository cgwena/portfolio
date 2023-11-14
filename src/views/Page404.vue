<template>
    <Header />
    <NotFound />
    <Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue'
import NotFound from '../components/NotFound.vue';
import Header from '../components/Header.vue'

components: {
    Footer,
    NotFound
}
</script>
