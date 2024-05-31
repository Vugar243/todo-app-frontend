<template>
  <div id="app">
    <task-list></task-list>
  </div>
</template>

<script>
import TaskList from './components/TaskList/TaskList.vue';


export default {
  name: 'App',
  components: {
    TaskList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 1280px;
  min-width: 320px;
}
</style>




