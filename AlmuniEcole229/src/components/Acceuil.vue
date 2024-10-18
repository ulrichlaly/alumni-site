<script setup lang="ts">

</script>

<template>
    <section class="banner">
        <div class="container">
            <div class="content">
                <div class="texte">
                    <h2>Bienvenue Dans La Communauté Des Alumni De l'Ecole229</h2>
                </div>
            </div>
        </div>
    </section>
    <section id="about">
        <div class="container">
            <div class="content_a">
                <h1>À propos de notre communauté</h1>
                <div id="mission">
                    <div class="photos">
                        <img src="/src/assets/images/IMAGE-iN_334.jpg" alt="">
                    </div>
                    <div class="text">
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
</template>

<style scoped>
.banner {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    background-image: url(/src/assets/images/jeunes-adultes-collaborent-dans-bureau-moderne_505557-56081.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    height: 100vh;
    color: #fff;
}

.banner::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #00000057;
    z-index: 5;
}

.container {
    max-width: 80%;
    margin: 0 auto;
}

.content {
    width: 100%;
    position: absolute;
    top: 40%;
    left: 10%;
    z-index: 20;
}

.texte {
    width: 400px;
    padding: 10px;
    border: 1px solid #fff;
}

.texte h2 {
    font-size: 30px;
    font-weight: 200;
}
.content_a {
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
  width: 50%;
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

.text {
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