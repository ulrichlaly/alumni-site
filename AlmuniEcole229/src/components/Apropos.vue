<script setup lang="ts"></script>

<template>
  <div class="Info">
    <header>
      <h1>À propos de la communauté des alumni de l'Ecole 229</h1>
    </header>

    <section id="mission" style="  background-color: #f9f9f9;height: auto;">   
      <div class="texte" style="width: 40%;background-color: #fff;box-shadow:  0px 4px 6px rgba(0, 0, 0, 0.1);padding: 20px;">
        <h2>Qui sommes-nous?</h2>
        <p>
        Depuis 2020, l'ECOLE 229 a formé des milliers de diplômés qui sont
        devenus des leaders, innovateurs, et experts dans leurs domaines
        respectifs. Aujourd’hui, notre réseau comprend 4 promotions d'alumni
        dans le pays, unis par une expérience académique commune et une volonté
        de faire la différence dans le pays.
      </p>
      </div>
      <div class="photos" style="width: 40%;position: absolute;top:50%;left:50%">
        <img src="/src/assets/IMAGE-iN_334.jpg" alt="" style="width: 400px;border-radius: 15px;">
      </div>
    
    </section>

    <section id="values">
      <div style="width: 40%;background-color: #fff;box-shadow:  0px 4px 6px rgba(0, 0, 0, 0.1);padding: 20px;" >
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
  </div>
</template>

<style scoped>
.Info {
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

section{
  margin: 20px 0;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  
}

section h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

ul {
  margin-top: 10px;
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
  list-style-type: square;
}

.hidden {
  display: none;
}
.photos{
  display: flex;
}

.photos p{
  text-align: center;
}
#mission{
  display: flex;
  width: 80%;
  margin: auto;
}
#values{
  width: 80%;
  margin: auto;
  background-color: #f9f9f9;
}
</style>
