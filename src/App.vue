<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img class="header__img" src="/src/assets/pictures/sticker.png" alt="">
    <nav>
      <ul>
        <li>
          <RouterLink to='/'>Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/projets">Mes Projets</RouterLink>
        </li>
        <li>
          <RouterLink to="/form">Contactez-moi</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main>
  
    <RouterView/>
    
  </main>

  <footer>
    <p>Mis à jour le <time datetime="2023-10-19">19 octobre 2023</time></p>
    <div>
      <a href="https://github.com/cgwena" target="_blank"><img class="footer__logo" src="/src/assets/icons/github.png"
          alt="logo github"></a>
      <a href="https://www.linkedin.com/in/gwena%C3%ABlle-bouss%C3%A8s-499b13258" target="_blank"><img
          class="footer__logo" src="/src/assets/icons/linkedin-2.png" alt="logo linkedin"></a>
      <a href="https://www.freecodecamp.org/GwenaelleBousses" target="_blank"><img class="footer__logo"
          src="/src/assets/icons/free-code-camp.png" alt="logo freecodecamp"></a>
    </div>
  </footer>
</template>

<style scoped>
@font-face {
  font-family: 'Kreon';
  src: url('/src/assets/fonts/Kreon/Kreon-VariableFont_wght.woff');
  src: url('/src/assets/fonts/Kreon/Kreon-VariableFont_wght.ttf') format('truetype');
}

header {
  background-color: white;
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 120px;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header__img {
  height: 100px;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  padding: 20px;
  font-family: 'Kreon', serif;
  font-size: 1.6rem;
  list-style-type: none;
  text-decoration: none;
  color: black;
}

footer {
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  font-family: 'Kreon', serif;
}

div {
  width: 15%;
  display: flex;
  justify-content: space-around;
  
}

.footer__logo {
  height: 50px;
}
</style>