<template>
  <div>
    <div v-for="item in items" :key="item.id">
        <stack-item :item="item"></stack-item>
    </div>
  </div>
</template>

<script>
import StackItem from '@/components/StackItem.vue';
export default {
    props: {
        items: Array
    },
    components: {
        StackItem
    }    
}
</script>

<style>

</style>