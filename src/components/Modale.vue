<template>
    <div class="bloc-modale" v-if="revele">

        <div class="overlay" @click="toggleModale(project)">

            <div class="modale" >
                <button>X</button>
                <h2>{{ project.title }}</h2>
                <div class="contenu">
                    <a v-bind:href="project.open_project" target="_blank"><img
                            :src="project.picture" :alt="project.alt"></a>
                    <div class="text">
                        <p>Créé le {{ project.date }}</p>
                        <p v-if="project.logos">Made with <img class="logo"  v-for="logo in project.logos" :src="logo" alt=""></p>
                        <p v-if="project.gh_link">Retrouvez ce projet sur <a v-bind:href="project.gh_link" target="_blank"><img
                                    class="logo" src="/src/assets/icons/github.png" alt=""></a></p>
                    </div>
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

.bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale {
    text-align: center;
    position: fixed;
    left: 20%;
    top: 25%;
    border-radius: 20px;
    background: #F8ECC9;
    width: 60%;
    padding-bottom: 30px;
}

.contenu {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

p {
    font-size: 1.6rem;
}

button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #FE4365;
    border-radius: 50%;
}
</style>