<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img class="header__img" src="/src/assets/pictures/sticker.png" alt="">
    <nav>
      <ul>
        <li>
          <RouterLink class="header__link" active-class="active" to='/'>Accueil</RouterLink>
        </li>
        <li>
          <RouterLink class="header__link" active-class="active" to="/projets">Mes Projets</RouterLink>
        </li>
        <li>
          <RouterLink class="header__link" active-class="active" to="/form">Contactez-moi</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main>
  
    <RouterView/>
    
  </main>

  <footer>
    <small>Mis à jour le <time datetime="2023-10-19">19 octobre 2023</time></small>
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

div {
  width: 15%;
  display: flex;
  justify-content: space-around;
  
}

</style>