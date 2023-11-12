<template>
    <div class="bloc-modale" v-if="revele">

        <div class="overlay" @click="toggleModale"></div>

        <div class="modale">
            <button @click="toggleModale">x</button>
            <h2>{{ project.title }}</h2>
            <div class="contenu">
                <a v-bind:href="project.open_project" target="_blank"><img class="projet" :src="project.picture"
                        :alt="project.alt"></a>
                <div class="text">
                    <p>Créé le {{ project.date }}</p>
                    <p v-if="project.logos">Made with <img class="logo" v-for="logo in project.logos" :src="logo" alt="logos des outils uyilisés pour créer le site">
                    </p>
                    <p v-if="project.gh_link">Retrouvez ce projet sur <a v-bind:href="project.gh_link" target="_blank"><img
                                class="logo" src="/src/assets/icons/github.png" alt=""></a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modale",
    props: ['revele', 'toggleModale', 'project']
}
</script>

<style scoped>
img {
    width: 400px;
    border-radius: 10px;
}

.logo {
    height: 50px;
    width: 50px;
}

.contenu {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.projet {
    padding: 20px;
}

button {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
    background: #FE4365;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>