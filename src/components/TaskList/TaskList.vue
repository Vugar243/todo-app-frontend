<template>
  <div>
    <h1 :class="$style.heading">Task Manager</h1>
    <task-form @add-task="fetchTasks"></task-form>
    <ul :class="$style.list">
      <task-item
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-status="handleToggleStatus"
        @delete-task="handleDeleteTask"
      ></task-item>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TaskItem from '../TaskItem/TaskItem.vue';
import TaskForm from '../TaskForm/TaskForm.vue';
import styles from './TaskList.module.css'; 

export default {
  components: {
    TaskItem,
    TaskForm
  },
  computed: {
    ...mapState(['tasks']),
    $style() {
      return styles;
    }
  },
  methods: {
    ...mapActions(['fetchTasks', 'toggleStatus', 'deleteTask']),
    async handleToggleStatus(taskId) {
      await this.toggleStatus({ taskId });
    },
    async handleDeleteTask(taskId) {
      await this.deleteTask({ taskId });
    }
  },
  created() {
    this.fetchTasks();
  }
};
</script>

<style scoped>

</style>

