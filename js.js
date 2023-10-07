function getUserData(userID) {
    return fetch(`https://example.com/api/users/${userID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Пользователь не найден');
        }
        return response.json();
      })
      .then(userData => {
        return userData;
      })
      .catch(error => {
        return Promise.reject(error.message);
      });
  }


  function saveUserData(userData) {
    const url = '/users'; // Замените на фактический URL для сохранения данных на сервере
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при сохранении данных пользователя');
        }
      });
  }


  function changeStyleDelayed(elementId, delay) {
    // Находим элемент по его идентификатору
    const element = document.getElementById(elementId);
  
    // Проверяем, существует ли элемент
    if (element) {
      // Используем setTimeout для задержки изменения стиля
      setTimeout(() => {
        // Изменяем стиль элемента здесь, например:
        element.style.color = 'red';
        element.style.backgroundColor = 'blue';
      }, delay);
    } else {
      console.error(`Элемент с id '${elementId}' не найден`);
    }
  }
  
  // Пример использования функции
  changeStyleDelayed('myElement', 2000);