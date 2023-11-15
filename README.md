# Auth Form

Это простое приложение позволяет вводить учетные данные, проверять их на сервере и получать соответствующие уведомления в зависимости от результатов проверки.

👀 **Демо:** [https://ku13shov.github.io/auth-form/](https://ku13shov.github.io/auth-form/)

💡 **Корректные данные для входа**

_email:_ `john@mail.com`  
_password:_ `changeme`

🚀 **Функциональность:**

-   Два поля ввода для email и пароля.
-   После ввода данных пользователь нажимает кнопку "Login" для отправки запроса на фейковое API для проверки аутентификации.
-   Ответ от API:
    -   При неверных данных: появляется сообщение об ошибке, уведомляющее пользователя о неверных учетных данных.
    -   При верных данных: выводится приветственное сообщение.

## 🛠 Технологии:

-   **ReactJS 18**
-   **Fetch**
-   React Hooks
-   CSS-Modules / SCSS
-   Prettier
-   ESLint
-   Platzi Fake Store API — [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/)
