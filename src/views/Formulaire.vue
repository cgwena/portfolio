<template>
    <section>
        <h2>Contactez-moi !</h2>
        <form action="" method="get">
            <div>
                <label for="name">Entrez votre nom...</label>
                <input type="text" name="name" id="name" placeholder="Marie Dupont" required>
            </div>
            <div>
                <label for="email">Votre email...</label>
                <input type="email" name="email" id="email" placeholder="moi@mail.com" required>
            </div>
            <div>
                <label for="message">Et votre message !</label>
                <textarea rows="20" cols="100" name="message" id="message" placeholder="Mon message" required />
            </div>
            <button>C'est parti !</button>
        </form>
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

h2 {
    font-family: 'Great Vibes', cursive;
    font-size: 3rem;
}

label {
    font-family: 'Kreon', serif;
    font-size: 1.6;
}

section  {
    padding-top: 120px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

form {
    border: 2px solid black;
    border-radius: 5%;
    padding: 20px;
}

button {
    margin-top: 10px;
}
</style>