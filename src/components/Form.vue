<template>
  <form @submit.prevent="onSubmit" class="form" ref="form">
    <div>
      <label for="name">Entrez votre nom...</label>
      <input ref="name" type="text" placeholder="Marie Dupont" required>
    </div>
    <div>
      <label for="subject">Le sujet de votre message...</label>
      <input ref="subject" type="text" placeholder="À propos de..." required>
    </div>
    <div>
      <label for="message">Et votre message !</label>
      <textarea ref="message" rows="20" cols="100" placeholder="Mon message" required />
    </div>
    <button type="submit" value="send" @click="showMessage">C'est parti !</button>
    <p class="message_sent" v-show="message_sent">Message envoyé à {{ mail }}</p>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      //Import de l'adresse mail du dossier .env
      mail: import.meta.env.VITE_MAIL_ADRESS,
      message_sent: false
    }
  },
  methods: {
    //Affichage de l'adresse mail quand un message est envoyé après vérification des champs
    showMessage() {
      let name = this.$refs.name.value
      let subject = this.$refs.subject.value
      let message = this.$refs.message.value
      if (name != "" && subject != "" && message != "") {
        this.message_sent = true
        this.$refs.name.value = "";
        this.$refs.subject.value = "";
        this.$refs.message.value = "";
      }
    }
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
