<template>
    <div class="projects">
        <div @click="toggleModale(project)" class="card" v-for="project in projects" :key="project.id">
            <img v-if="project.picture" :src="project.picture" :alt="project.alt">
            <h3>{{ project.title }}</h3>
        </div>
        <Modale :revele="revele" :toggleModale="toggleModale" :project="selectedProject"/>
    </div>
</template>

<script>
import Modale from './Modale.vue'
import {projects} from '../datas/projects'
export default {
    name: 'Projets',
    components: { 
        Modale,
    },
    data() {
        return {
            revele: false,
            projects: projects,
            selectedProject: null,
        }
    },
    methods: {
        //Fonction pour afficher ou cacher la modale
        toggleModale(project) {
            this.selectedProject = project;
            this.revele = !this.revele
        }
    }
}


</script>

<style scoped>
img {
    width: 90%;
    padding: 5px;
    border-radius: 15px 15px 0 0;
}
</style>