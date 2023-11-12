<template>
    <header>
        <a href="#about" @click="updateActiveSection('about')"><img class="header__img"
                src="/src/assets/pictures/sticker.png" alt=""></a>
        <nav>
            <ul>
                <li @click="updateActiveSection('about')">
                    <a href="#about" :class="{ 'header__link': true, 'active': activeSection === 'about' }">Accueil</a>
                </li>
                <li @click="updateActiveSection('projects')">
                    <a href="#projects" :class="{ 'header__link': true, 'active': activeSection === 'projects' }">Mes
                        Projets</a>
                </li>
                <li @click="updateActiveSection('contact')">
                    <a href="#contact"
                        :class="{ 'header__link': true, 'active': activeSection === 'contact' }">Contactez-moi</a>
                </li>
            </ul>
        </nav>
    </header>
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
        handleScroll() {
            //Récupération des sections
            const aboutSection = document.getElementById('about');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');

            //Position pendant le scroll
            const scrollPosition = window.scrollY;

            // Mise à jour de la section active en fonction de la position du scroll
            if (scrollPosition >= aboutSection.offsetTop && scrollPosition < projectsSection.offsetTop) {
                this.activeSection = 'about';
            } else if (scrollPosition >= projectsSection.offsetTop && scrollPosition < contactSection.offsetTop) {
                this.activeSection = 'projects';
            } else if (scrollPosition >= contactSection.offsetTop) {
                this.activeSection = 'contact';
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>
