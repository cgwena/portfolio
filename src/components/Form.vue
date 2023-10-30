<template>
  <p v-show="message_sent">Message envoyé à {{ mail }}</p>
  <form @submit.prevent="onSubmit" class="form" ref="form">
    <div>
      <label for="name">Entrez votre nom...</label>
      <input ref="name" type="text" placeholder="Marie Dupont" required />
    </div>
    <div>
      <label for="subject">Le sujet de votre message...</label>
      <input ref="subject" type="text" placeholder="À propos de..." required />
    </div>
    <div>
      <label for="message">Et votre message !</label>
      <textarea ref="message" rows="20" cols="100" placeholder="Mon message" required />
    </div>
    <button type="submit" value="send" @click="showMessage">C'est parti !</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      mail: import.meta.env.VITE_MAIL_ADRESS,
      message_sent: false
    }
  },
  methods: {
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

button {
  margin-top: 10px;
  font-family: "Kreon";
  font-size: 2rem;
  border-radius: 10px;
  background-color: #eb9f9f;
}

p {
  background-color: #eb9f9f;
  border-radius: 20px;
  padding: 10px;
}
</style>
