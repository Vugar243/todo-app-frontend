class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getTasks() {
    return fetch(`${this.baseUrl}/tasks`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(this._checkResponse);
  }

  addTask({ title }) {
    return fetch(`${this.baseUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    })
      .then(this._checkResponse);
  }

  toggleStatus(taskId, completed) {
    return fetch(`${this.baseUrl}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed })
    })
      .then(this._checkResponse);
  }

  deleteTask(taskId) {
    return fetch(`${this.baseUrl}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse);
  }
}

const mainApi = new MainApi({ baseUrl: 'http://localhost:3000' });

export default mainApi;
