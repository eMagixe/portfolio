<template>
  <div>
      <div v-for="group in stacks" :key="group.id">
          <h2 class="is-size-3 m-3">{{ group.name }}</h2>
          <stack-list :items="group.items"></stack-list>
      </div>
  </div>
</template>

<script>
import StackList from '@/components/StackList.vue';
import stacks from '@/data/stackList';

export default {
    components: {
        StackList
    },
    setup() {
        return { stacks };
    }
}
</script>

<style>

</style>