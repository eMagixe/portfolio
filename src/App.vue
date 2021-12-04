<template>
  <div><nav-bar></nav-bar>
    <div class="container view">
      <router-view v-slot="{ Component }">
        <transition appear name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>
    <app-footer class="mt-5"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar, AppFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap');

* {
  font-family: 'Ubuntu', sans-serif;
}

h2 {
  color: rgb(0, 110, 255);
}

.view {
  margin-top: 90px;
  padding: 2rem;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}


p {
  margin: 30px;
}

.fade-enter-from {
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}
.fade-enter-active {
    transition: all 1s ease;
}
</style>
