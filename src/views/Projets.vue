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
import Modale from '../components/Modale.vue'

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

section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

div {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
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
