<template>
  <li @click="toggleStatus" :class="[styles.taskItem, task.completed ? styles.completed : styles.notCompleted]">
    <span :class="styles.taskTitle">{{ task.title }}</span>
    <button @click.stop="$emit('delete-task', task.id)" :class="styles.deleteButton">Delete</button>
  </li>
</template>

<script>
import styles from './TaskItem.module.css'; 

export default {
  props: {
    task: Object
  },
  methods: {
    toggleStatus() {
      this.$emit('toggle-status', this.task.id);
    }
  },
  computed: {
    styles() {
      return styles;
    }
  }
};
</script>

<style scoped>

</style>



