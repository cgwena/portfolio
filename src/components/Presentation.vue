<template>
    <section>
        <div>
            <h1>Gwenaëlle Boussès</h1>
            <p>Développeuse Web</p>
        </div>
        <img src="/src/assets/pictures/greetings.png" alt="">
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

h1 {
    font-family: 'Great Vibes', cursive;
    font-size: 3rem;
}

p {
    font-family: 'Kreon', serif;
    font-size: 2rem;
}

section  {
    box-sizing: border-box;
    margin: 0;
    padding-top: 120px;
    height: 100vh;
    width: 100vw;
    border: 2px solid black;
    display: flex;
    justify-content: space-around;
}

img {
    height: 300px;
}
</style>