<template>
    <section id="about">
        <div>
            <p>Bonjour, moi c'est</p>
            <h1>Gwenaëlle Boussès</h1>
            <p>et je suis</p>
            <h2>Développeuse Web !!!</h2>
        </div>
        <img src="/src/assets/pictures/greetings.png" alt="">
    </section>
</template>

<style scoped>


#about {
    display: flex;
    flex-direction: column;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1,
h2,
p {
    line-height: 0;
    margin: 22px;
}
</style>