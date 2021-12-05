<template>
<div>
  <h2 class="is-size-3">Опыт работы</h2>
  <div class="table">
    <transition-group
      appear
      name="up-fade"
      tag="div"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="columns mb-5" :class="{ 'columns-works': work.id !== 1 }" v-for="(work, index) in works" :key="work.id" :data-index="index">
          <div class="column is-one-fifth">{{ work.date.begin }} - {{ work.date.end }}</div>
          <div class="column">
            <h3 class="is-size-5">{{ work.place.name }}</h3>
            <p>{{ work.place.description }}</p>
          </div>
          <div class="column">
            <h3 class="is-size-5">{{ work.position.name }}</h3>
            <p>{{ work.position.description }}</p>
          </div>
      </div>
    </transition-group>
  </div>
</div>
</template>

<script>
import { gsap } from 'gsap';
import works from '@/data/workList';

export default {
    setup() {
      const beforeEnter = (el) => {
        el.style.opacity = 0;
      }
      const enter = (el, done) => {
        gsap.to(el, {
          opacity: 1,
          duration: 2,
          delay: el.dataset.index * 0.25,
          onConplete: done
        });
      }
      const leave = (el, done) => {
        gsap.to(el, {
          opacity: 0,
          delay: el.dataset.index * 0.15,
          onConplete: done
        });
      }

      return { beforeEnter, enter, leave, works };
    }
}
</script>

<style>
.table {
  margin-top: 4rem;
}
.columns-works {
  border-bottom: rgb(190, 190, 190) 1px solid;
}
</style>