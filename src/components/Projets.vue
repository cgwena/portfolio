<template>
    <section>
        <h2>Mes projets...</h2>
        <div>
            <article id="projet1" @click="toggleModale">
                <img src="/src/assets/pictures/MiniatureCV.png" alt="Mon CV en ligne" />
                <p>Mon CV en ligne</p>
                <modale v-bind:revele="revele" :toggleModale="toggleModale"></modale>
            </article>
            <article id="projet2" @click="toggleModale2">
                <img src="/src/assets/pictures/MiniatureCommentaires.png" alt="Un espace de commentaire dynamisé" />
                <p>Un espace de commentaire</p>
                <modale v-bind:revele2="revele2" :toggleModale="toggleModale2"></modale>
            </article>
            <article id="projet3" @click="toggleModale3">
                <img src="/src/assets/pictures/MiniatureCahierDesCharges.png" alt="Un cahier des charges" />
                <p>Un cahier des charges</p>
                <modale v-bind:revele3="revele3" :toggleModale="toggleModale3"></modale>
            </article>
        </div>
    </section>
</template>

<script>
import Modale from './Modale.vue'

export default {
    name: "Projets", 
    data() {
        return {
            revele: false,
            revele2: false,
            revele3: false
        }
    },
    methods: {
        toggleModale: function(){
            this.revele = !this.revele
        },
        toggleModale2: function(){
            this.revele2 = !this.revele2
        },
        toggleModale3: function(){
            this.revele3 = !this.revele3
        }
    },
    components: {
        "modale": Modale
    }
}

</script>

<style scoped>
@font-face {
    font-family: "Great Vibes";
    src: url("/src/assets/fonts/Great_Vibes/GreatVibes-Regular.woff");
    src: url("/src/assets/fonts/Great_Vibes/GreatVibes-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Kreon";
    src: url("/src/assets/fonts/Kreon/Kreon-VariableFont_wght.woff");
    src: url("/src/assets/fonts/Kreon/Kreon-VariableFont_wght.ttf") format("truetype");
}

h2 {
    font-family: 'Great Vibes', cursive;
    font-size: 3rem;
}

p {
    font-family: 'Kreon', serif;
    font-size: 1.8rem;
}

section {
    box-sizing: border-box;
    margin: 0;
    padding-top: 120px;
    height: 100vh;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

div {
    display: flex;
    justify-content: space-around;
    text-align: center;
}

article {
    width: 30%;
    border: 2px solid black;
    border-radius: 15%;
    padding-top: 10px ;
}

img {
    width: 95%;
    height: 75%;
    border-radius: 17% 17% 0 0;
    content: unset;
}
</style>
