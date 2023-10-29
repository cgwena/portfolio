<template>
    <form class="form" ref="form">
            <div>
                <label for="name">Entrez votre nom...</label>
                <input name="from_name" type="text" placeholder="Marie Dupont" required />
            </div>
            <div>
                <label for="subject">Le sujet de votre message...</label>
                <input type="text" name="subject" placeholder="À propos de..." required />
            </div>
            <div>
                <label for="message">Et votre message !</label>
                <textarea rows="20" cols="100" name="message" placeholder="Mon message" required />
            </div>
            <button type="submit" value="send">C'est parti !</button>
        </form>
</template>

<script>
    export default {
        
    }
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
</style>