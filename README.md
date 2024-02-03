MVC (Model-View-Controller) is a design pattern commonly used in web development to structure and organize code in a way that separates concerns related to data (Model), presentation (View), and application logic (Controller). While Node.js doesn't come with built-in support for MVC like some other frameworks, you can implement an MVC architecture in your Node.js applications.

Here's a basic example of how you might structure an MVC application in Node.js:

### 1. Project Structure:

```plaintext
project-root/
|-- controllers/
|   |-- UserController.js
|-- models/
|   |-- UserModel.js
|-- views/
|   |-- userView.ejs
|-- routes/
|   |-- routes.js
|-- app.js
```

### 2. Dependencies:

- Express: A popular web framework for Node.js.
- EJS (Embedded JavaScript): A simple templating engine.

Install the dependencies:

```bash
npm install express ejs
```

### 3. Model:

**models/UserModel.js**

```javascript
class UserModel {
  constructor() {
    this.users = [];
  }

  getAllUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }
}

module.exports = new UserModel();
```

### 4. View:

**views/userView.ejs**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User List</title>
</head>
<body>
    <h1>User List</h1>
    <ul>
        <% users.forEach(function(user) { %>
            <li><%= user %></li>
        <% }); %>
    </ul>
</body>
</html>
```

### 5. Controller:

**controllers/UserController.js**

```javascript
const userModel = require('../models/UserModel');

class UserController {
  getAllUsers(req, res) {
    const users = userModel.getAllUsers();
    res.render('userView', { users });
  }

  addUser(req, res) {
    const { username } = req.body;
    userModel.addUser(username);
    res.redirect('/users');
  }
}

module.exports = new UserController();
```

### 6. Routes:

**routes/routes.js**

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/users', userController.getAllUsers);
router.post('/add-user', userController.addUser);

module.exports = router;
```

### 7. App Entry Point:

**app.js**

```javascript
const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### 8. Running the App:

```bash
node app.js
```

Visit http://localhost:3000/users in your browser to see the user list page. You can also add users by submitting the form.

This is a basic example, and in a real-world application, you might want to include additional features like input validation, error handling, and a more complex folder structure based on your project's needs.