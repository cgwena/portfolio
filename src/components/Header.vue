<template>
    <div>
        <header>
        <a href="#about" @click="updateActiveSection('about')"><img class="header__img" src="/src/assets/pictures/sticker.png" alt=""></a>
            <nav>
                <ul>
                    <li @click="updateActiveSection('about')">
                        <a href="#about" :class="{ 'header__link': true, 'active': activeSection === 'about' }">Accueil</a>
                    </li>
                    <li @click="updateActiveSection('projects')">
                        <a href="#projects" :class="{ 'header__link': true, 'active': activeSection === 'projects' }">Mes Projets</a>
                    </li>
                    <li @click="updateActiveSection('contact')">
                        <a href="#contact" :class="{ 'header__link': true, 'active': activeSection === 'contact' }">Contactez-moi</a>
                    </li>
                </ul>
            </nav>
        </header>

    </div>
</template>

<script>
export default {
    data() {
        return {
            activeSection: 'about',
        };
    },
    methods: {
        // Mettre à jour la section active
        updateActiveSection(section) {
            this.activeSection = section;
        },
    },
};
</script>

<style scoped>
.active {
    text-decoration: underline;
}
</style>