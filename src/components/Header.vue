<template>
    <section>
        <img src="/src/assets/pictures/greetings.png" alt="">
        <p>Accueil</p>
        <p>Mes projets</p>
        <p>Contacts</p>
    </section>
</template>

<script>

</script>

<style scoped>
@font-face {
    font-family: 'Great Vibes';
    src: url('/src/assets/fonts/Great_Vibes/GreatVibes-Regular.woff');
    src: url('/src/assets/fonts/Great_Vibes/GreatVibes-Regular.ttf') format('truetype')
}

@font-face {
    font-family: 'Kreon';
    src: url('/src/assets/fonts/Kreon/Kreon-VariableFont_wght.woff');
    src: url('/src/assets/fonts/Kreon/Kreon-VariableFont_wght.ttf') format('truetype');
}

section {
    position: fixed;
    width: 100vw;
    height: 120px;
    box-sizing: border-box;
    margin: 0;
    border: 2px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

img {
    height: 100px;
}

p {
    font-family: 'Kreon', serif;
    font-size: 1.6rem;
}
</style>