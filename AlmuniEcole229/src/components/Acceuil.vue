<script setup lang="ts">

</script>

<template>
    <section class="banner">
            <h1>Bienvenue dans la communauté des anciens élèves de l'ecole229</h1>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.banner::before{
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #00000057;
    z-index: 5;
}
h1{
    z-index: 13;
}

</style>