<template>
    <section id="contact">
        <h2>Contactez-moi !</h2>
        <Form />
        
    </section>
</template>

<script setup>
import Form from './Form.vue'


  components:{
   Form
  }

</script>

<style scoped>
section {
    flex-direction: column;
    text-align: center;
}
</style>
