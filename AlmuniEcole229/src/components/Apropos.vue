<script setup lang="ts"></script>

<template>
  <section>
    <div class="container">
      <div class="content">
        <h1>À propos de la communauté des alumni de l'Ecole 229</h1>
        <div id="mission">
          <div class="photos">
            <img src="/src/assets/images/IMAGE-iN_334.jpg" alt="">
          </div>
          <div class="texte">
            <h2>Qui sommes-nous?</h2>
            <p>
              Depuis 2020, l'ECOLE 229 a formé des milliers de diplômés qui sont
              devenus des leaders, innovateurs, et experts dans leurs domaines
              respectifs. Aujourd’hui, notre réseau comprend 4 promotions d'alumni
              dans le pays, unis par une expérience académique commune et une volonté
              de faire la différence dans le pays.
            </p>
          </div>
        </div>
         <div id="values">
          <div class="value_content">
            <h2>Nos Valeurs</h2>
            <ul>
              <li>
                <strong>Excellence :</strong> Nos alumni incarnent l’excellence
                académique et professionnelle.
              </li>
              <li>
                <strong>Solidarité :</strong> Nous croyons en l'importance du soutien
                mutuel au sein de la communauté.
              </li>
              <li>
                <strong>Innovation :</strong> Nos alumni sont des pionniers dans leurs
                secteurs respectifs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="Info">
    <header>
      <h1>À propos de la communauté des alumni de l'Ecole 229</h1>
    </header>

    <section id="mission">
      <div class="texte">
        <h2>Qui sommes-nous?</h2>
        <p>
          Depuis 2020, l'ECOLE 229 a formé des milliers de diplômés qui sont
          devenus des leaders, innovateurs, et experts dans leurs domaines
          respectifs. Aujourd’hui, notre réseau comprend 4 promotions d'alumni
          dans le pays, unis par une expérience académique commune et une volonté
          de faire la différence dans le pays.
        </p>
      </div>
      <div class="photos">
        <img src="/src/assets/images/IMAGE-iN_334.jpg" alt="">
      </div>

    </section>

    <section id="values">
      <div class="value_content">
        <h2>Nos Valeurs</h2>
        <ul>
          <li>
            <strong>Excellence :</strong> Nos alumni incarnent l’excellence
            académique et professionnelle.
          </li>
          <li>
            <strong>Solidarité :</strong> Nous croyons en l'importance du soutien
            mutuel au sein de la communauté.
          </li>
          <li>
            <strong>Innovation :</strong> Nos alumni sont des pionniers dans leurs
            secteurs respectifs.
          </li>
        </ul>
      </div>
    </section>
  </div> -->
</template>

<style scoped>
/* .Info {
  line-height: 1.6rem;
  background-color: #f9f9f9;
  color: #333;
  padding: 20px;
}

header {
  margin-top: 80px;
  text-align: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 2.5rem;
  color: #0056b3;
}
 */
.container {
  max-width: 80%;
  margin: 0 auto;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 60px;
}

h1 {
  font-size: 40px;
  color: #0D0460;
}

section {
  padding: 40px 0;
}
h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
.photos{
  width: 40%;
}
.photos img {
  width: 100%;
  border-radius: 15px;
}

.photos p {
  text-align: center;
}
#mission {
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

#values {
  width: 100%;
  background-color: #f9f9f9;
}

.texte {
  width: 400px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
/*   position: absolute;
  top: 60%;
  left: 45%; */
}

.value_content {
  width: 40%;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
ul {
  margin-top: 10px;
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
  list-style-type: square;
}
</style>
