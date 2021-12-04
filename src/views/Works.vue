<template>
<div>
  <h2 class="is-size-3">Опыт работы</h2>
  <div class="table">
    <div class="columns mb-5" :class="{ 'columns-works': work.id !== 1 }" v-for="work in works" :key="work.id">
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
  </div>
</div>
</template>

<script>
import works from '@/data/workList';

export default {
  setup() {
    return { works };
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