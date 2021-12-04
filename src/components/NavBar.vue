<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <a @click="menu_visible = !menu_visible" role="button" class="navbar-burger" :class="{ 'is-active': menu_visible }" aria-label="menu" aria-expanded="false" data-target="navbar-top">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
        <div @click="mobile ? menu_visible = !menu_visible : menu_visible = true" v-show="menu_visible" id="navbar-top" class="navbar-menu container" :class="{ 'background-mobile': mobile }">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Главная</router-link>
                <router-link to="/stack" class="navbar-item">Навыки</router-link>
                <router-link to="/works" class="navbar-item">Опыт работы</router-link>
                <router-link to="/contacts" class="navbar-item">Контакты</router-link>
                <router-link to="/about" class="navbar-item">Обо мне</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        let menu_visible = ref(true);
        let mobile = ref(false);
        if(window.innerWidth < 1024) mobile = true;

        return { menu_visible, mobile };
    }
}
</script>

<style>
.navbar {
    background: linear-gradient(135deg, rgb(84, 158, 255), rgb(0, 110, 255));
}
.navbar-item, .navbar-burger {
    color: white;
    transition: all .7s ease;
}
.background-mobile {
    background: linear-gradient(135deg, rgb(84, 158, 255), rgb(0, 110, 255));
}
a.navbar-item:hover, .navbar-burger:hover {
    background-color: rgb(187, 216, 255);
    color: rgb(0, 110, 255);
}
</style>