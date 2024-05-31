import { createStore } from 'vuex';
import mainApi from '../utils/mainApi'

const store = createStore({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        const tasks = await mainApi.getTasks();
        commit('setTasks', tasks);
      } catch (error) {
        console.error('Ошибка при получении списка задач:', error);
      }
    },
    async addTask({ commit }, task) {
      try {
        const newTask = await mainApi.addTask(task);
        commit('addTask', newTask);
      } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
      }
    },
    async toggleStatus({ commit, state }, { taskId }) {
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        try {
          const updatedTask = await mainApi.toggleStatus(taskId, !task.completed);
          commit('updateTask', updatedTask);
        } catch (error) {
          console.error('Ошибка при изменении статуса задачи:', error);
        }
      }
    },
    async deleteTask({ commit }, { taskId }) {
      try {
        await mainApi.deleteTask(taskId);
        commit('deleteTask', taskId);
      } catch (error) {
        console.error('Ошибка при удалении задачи:', error);
      }
    }
  }
});

export default store;
