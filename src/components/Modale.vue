<template>
    <div class="bloc-modale" v-if="revele">

        <div class="overlay" @click="toggleModale">

            <div class="modale">
                <button @click="toggleModale">x</button>
                <h2>Mon CV en ligne</h2>
                <div class="contenu">
                    <a href="/src/assets/projects/Creer_un_CV-1/index.html" target="_blank"><img
                            src="/src/assets/pictures/MiniatureCV.png" alt="Mon CV en ligne"></a>
                    <div class="text">
                        <p>Créé le <time datetime="2023-10-09">9 octobre 2023</time></p>
                        <p>Made with <img class="logo" src="/src/assets/icons/html-5.png" alt="logo html5"> <img
                                class="logo" src="/src/assets/icons/css-3.png" alt="logo css3"></p>
                        <p>Retrouvez ce projet sur <a href="https://github.com/cgwena/Creer_un_CV" target="_blank"><img
                                    class="logo" src="/src/assets/icons/github.png" alt=""></a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bloc-modale" v-if="revele2">

        <div class="overlay" @click="toggleModale2">

            <div class="modale">
                <button @click="toggleModale2">x</button>
                <h2>Un espace de commentaire</h2>
                <div class="contenu">
                    <a href="/src/assets/projects/DynamiserUnEspaceDeCommentaires-1/index.html" target="_blank"><img
                            src="/src/assets/pictures/MiniatureCommentaires.png" alt="Mon CV en ligne"></a>
                    <div class="text">
                        <p>Créé le <time datetime="2023-10-17">17 octobre 2023</time></p>
                        <p>Made with <img class="logo" src="/src/assets/icons/html-5.png" alt="logo html5"> <img
                                class="logo" src="/src/assets/icons/css-3.png" alt="logo css3"> <img class="logo"
                                src="/src/assets/icons/js.png" alt="logo javascript"></p>
                        <p>Retrouvez ce projet sur <a href="https://github.com/cgwena/DynamiserUnEspaceDeCommentaires"
                                target="_blank"><img class="logo" src="/src/assets/icons/github.png" alt=""></a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bloc-modale" v-if="revele3">

        <div class="overlay" @click="toggleModale3">

            <div class="modale">
                <button @click="toggleModale3">x</button>
                <h2>Un cahier des charges</h2>
                <div class="contenu">
                    <a href="/src/assets/projects/Cahier_des_charges-La_Socketterie.pdf" target="_blank"><img
                            src="/src/assets/pictures/MiniatureCahierDesCharges.png"
                            alt="la couverture du document cahier des charges"></a>
                    <div class="text">
                        <p>Créé le <time datetime="2023-10-15">15 octobre 2023</time></p>
                        <p>La société "La Socketterie" veut créer une boutique en ligne. Voici le cahier des charges que je
                            leur propose.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modale",
    props: ['revele', 'revele2','revele3', 'toggleModale', 'toggleModale2', 'toggleModale3']
}

</script>

<style scoped>
@font-face {
    font-family: "Kreon";
    src: url("/src/assets/fonts/Kreon/Kreon-VariableFont_wght.woff");
    src: url("/src/assets/fonts/Kreon/Kreon-VariableFont_wght.ttf") format("truetype");
}

h2,
p {
    font-family: 'Kreon', serif;
}

h2 {
    font-size: 2rem;
}

p {
    font-size: 1.4rem;
}

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
    position: fixed;
    left: 20%;
    top: 25%;
    border-radius: 20px;
    background: #C8C8A9;
    width: 60%;
    padding: 10px;
}

.contenu {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #FE4365;
    border-radius: 50%;
}
</style>