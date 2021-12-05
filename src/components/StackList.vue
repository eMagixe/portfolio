<template>
  <div>
    <transition-group
      appear
      name="staggered-fade"
      tag="div"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div v-for="(item, index) in items" :key="item.id" :data-index="index">
          <stack-item :item="item"></stack-item>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import StackItem from '@/components/StackItem.vue';
export default {
    props: {
        items: Array
    },
    components: {
        StackItem
    },
    setup() {
      const beforeEnter = (el) => {
        el.style.opacity = 0;
        el.style.width = "0%"
      }
      const enter = (el, done) => {
        gsap.to(el, {
          opacity: 1,
          width: '100%',
          duration: 1,
          delay: el.dataset.index * 0.15,
          onConplete: done
        });
      }
      const leave = (el, done) => {
        gsap.to(el, {
          opacity: 0,
          height: 0,
          delay: el.dataset.index * 0.15,
          onConplete: done
        });
      }

      return { beforeEnter, enter, leave };
    }
}
</script>

<style>

</style>