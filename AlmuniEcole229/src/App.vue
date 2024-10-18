<script setup lang="ts"></script>

<template>
  <div class="app">
    <header>
      <div class="container">
        <div class="content">
          <nav>
            <router-link to="/"><img src="/src/assets/images/Logo_Ecole_229_Horizontal_petit-1.jpeg" alt=""
                class="logo" />
            </router-link>
            <router-link to="/">Acceuil</router-link>
            <ul class="allumni">
              <li>Allumni <div class="arrow"></div>
              </li>
              <ul class="promo_menu">
                <router-link to="/Promo1">
                  <li>Promotion 1</li>
                </router-link>
                <router-link to="/Promo2">
                  <li>Promotion 2</li>
                </router-link>
                <router-link to="/Promo3">
                  <li>Promotion 3</li>
                </router-link>
              </ul>
            </ul>
            <router-link to="/Apropos">A propos</router-link>
            <div class="nav-droite">
              <div class="langage">EN</div>
              <img src="/src/assets/images/icons8-soleil.svg" alt="" />
            </div>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="container">
        <div class="footer_content">
          <div class="ecole">
            <h5>ECOLE299</h5>
            <ul>
              <li>
                <img src="/src/assets/images/house_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                <span>Cotonou, Zogbohouè, von du collège Félix Houphouet Boigny, dernier immeuble à gauche.</span>
              </li>
              <li>
                <img src="/src/assets/images/call_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                <span>+229 52 12 41 12</span>
              </li>
              <li>
                <img src="/src/assets/images/mail_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                <span>contact@ecole229.bj</span>
              </li>
              <li>
                <img src="/src/assets/images/schedule_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                <span>Lundi - Vendredi de 09h à 18h</span>
              </li>
            </ul>
          </div>
          <div class="alumni">
            <h4>Liens utiles</h4>
            <ul>
              <li>Alumni</li>
              <li>Acceuil</li>
            </ul>
          </div>
          <div class="promo">
            <h4>Promotions</h4>
            <ul>
              <router-link to="/Promo1">
                <li>Promotion 1</li>
              </router-link>
              <router-link to="/Promo2">
                <li>Promotion 2</li>
              </router-link>
              <router-link to="/Promo3">
                <li>Promotion 3</li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  border-bottom: black solid 0.5px;
}

.container {
  max-width: 80%;
  margin: 0 auto;
}

.content {
  width: 100%;
  position: relative;
  display: inline-block;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
}

.logo {
  width: 100px;
  border-radius: 10px
}

.langage {
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.nav-droite {
  display: flex;
  align-items: center;
  gap: 15px;
}

a {
  text-decoration: none;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  cursor: pointer;
}

.promo_menu {
  display: none;
  position: absolute;
  color: #0D0460;
  background-color: #fff;
  border: none;
  width: 120px;
  margin: 0;
  padding: 0;
  list-style: none;
  left: 50%;
}

.allumni li {
  display: flex;
  align-items: center;
  gap: 5px;
}

.allumni:hover>.promo_menu {
  display: block;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #0D0460;
}


.promo_menu li {
  padding: 10px;
  cursor: pointer;
}

.promo_menu li:hover {
  background-color: #e0e0e0;
}

main {
  width: 100%;
}

footer {
  width: 100%;
  background-color: #030115;
  color: #e7e5e5;
  padding: 30px 0;
}

.footer_content {
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
}

h5,
h4 {
  color: #fff;
}

.ecole,
.alumni {
  width: 300px;
}

.ecole ul,
.alumni ul, .promo ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ecole ul li {
  display: flex;
  align-items: start;
  gap: 15px;
  font-size: 15px;
  color: #e7e5e5;
}
</style>
