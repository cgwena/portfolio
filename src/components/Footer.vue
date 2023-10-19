<template>
    <section>
        <p>Mis à jour le <time datetime="2023-10-19">19 octobre 2023</time></p>
        <div>
           <a href="https://github.com/cgwena" target="_blank"><img src="/src/assets/icons/github.png" alt="logo github"></a>
           <a href="https://www.linkedin.com/in/gwena%C3%ABlle-bouss%C3%A8s-499b13258" target="_blank"><img src="/src/assets/icons/linkedin-2.png" alt="logo linkedin"></a>
           <a href="https://www.freecodecamp.org/GwenaelleBousses" target="_blank"><img src="/src/assets/icons/free-code-camp.png" alt="logo freecodecamp"></a>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
@font-face {
    font-family: 'Kreon';
    src: url('/src/assets/fonts/Kreon/Kreon-VariableFont_wght.woff');
    src: url('/src/assets/fonts/Kreon/Kreon-VariableFont_wght.ttf') format('truetype');
}

section {
    width: 100vw;
    box-sizing: border-box;
    margin: 0;
    padding: 20px;
    border: 2px solid black;
    display: flex;
    justify-content: space-between;
}

p {
    font-family: 'Kreon', serif;
}
div {
    width: 15%;
    display: flex;
    justify-content: space-around;
}

img {
    height: 50px;
}
</style>