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



section  {
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


button {
    margin-top: 10px;
    font-family: 'Kreon';
    font-size: 2rem;
    border-radius: 10px;
    background-color: #EB9F9F;
}

</style>