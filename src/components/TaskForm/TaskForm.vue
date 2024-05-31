<template>
  <div :class="$style.formContainer">
    <form @submit.prevent="onSubmit">
      <input :class="$style.input" type="text" v-model="title" placeholder="Add a new task" required />
      <button :class="$style.button" type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import styles from './TaskForm.module.css'; 

export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    ...mapActions(['addTask']),
    async onSubmit() {
      if (this.title.trim()) {
        try {
          await this.addTask({ title: this.title });
          this.$emit('add-task');
          this.title = '';
        } catch (error) {
          console.error('Ошибка при добавлении задачи:', error);
        }
      }
    }
  },
  computed: {
    $style() {
      return styles;
    }
  }
};
</script>





