<template>
  <div class="page">
    <div>
      <router-link to="/ui/element">element</router-link>
      <router-link to="/ui/iview">iview</router-link>
      <router-link to="/ui/vuetify">vuetify</router-link>
    </div>
    <div>
      <router-view/>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
