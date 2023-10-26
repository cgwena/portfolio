<template>
    <section>
        <div>
        <p>Bonjour, moi c'est</p>
            <h1>Gwenaëlle Boussès</h1>
            <p>et je suis</p>
            <h2>Développeuse Web !!!</h2>
        </div>
        <img src="/src/assets/pictures/greetings.png" alt="">
    </section>
</template>

<script>

</script>

<style scoped>

img {
    height: 300px;
    width: 300px;
    object-fit: cover; 
    border-radius: 50%;
    border: 1px solid #EB9F9F;
}

section {
    display: flex;
    flex-direction: column;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1, h2, p {
    line-height: 0;
    margin: 22px;
}

</style>