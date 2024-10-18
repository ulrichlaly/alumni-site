<template>
    <div class="first-promo">
        <section class="banner">
            <div class="container">
                <div class="banner-content">
                    <h1>Promo I</h1>
                    <h3>Présentation de la Promotion 1</h3>
                    <p>
                        La promotion 1 regroupe 25 apprenants aux parcours divers et prometteurs,
                        tous passionnés par le développement web et mobile. Cette promotion se distingue
                        par sa créativité, son esprit d'équipe et son ambition à transformer ses connaissances
                        en projets concrets, avec des domaines d'expertise tels que le développement web, le
                        design UX/UI, et la gestion de projets.
                    </p>
                    <div class="visiter">
                        Découvrez nos Apprenants
                    </div>
                </div>
                <div style="display:flex;justify-content: center;width:100%; z-index: 6; gap: 100px;">
                    <img src="/src/assets/images/bx-mouse.svg" alt="" style="color:white ; " >
                </div>
            </div>
        </section>
        <section class="infos">

        </section>
    </div>
</template>

<style scoped>
.first-promo {
    width: 100%;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
}

.container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around
}

.banner {
    background-image: url(/src/assets/images/medium-shot-smiley-graduate-student.jpg);
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
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
    background: linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.882) 50%, rgba(0, 0, 0, 0.438) 100%);
    z-index: 5;
}

.banner-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    z-index: 6;
    text-align: justify;
    padding: 10px;
    gap: 20px;
    margin-top: 40px
}

p {
    line-height: 24px;
    font-size: 20px;
}

.visiter {
    padding: 7px;
    border: #fff solid 0.1px;
    border-radius: 15px;
    width: 40%;
    justify-content: center;
    display: flex;
}
.infos{
    width: 100%;
    height: 100vh;
    background-color: black;
}
</style>
<script setup lang="ts">

</script>