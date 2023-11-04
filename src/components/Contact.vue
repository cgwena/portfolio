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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>
