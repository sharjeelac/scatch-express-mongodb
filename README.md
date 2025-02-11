# 🛍️ Scatch - Modern E-Commerce Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green)](https://www.mongodb.com/)

A full-stack e-commerce platform with dynamic product theming, user authentication, and admin controls. Built to demonstrate modern web development practices.

![Scatch Demo](https://via.placeholder.com/800x400.png?text=Scatch+Demo+Screenshots)

## ✨ Features

- **User System**  
  🔐 Secure authentication with JWT & encrypted passwords  
  🛒 Cart management with persistent storage  
  👤 Profile management  

- **Admin Panel**  
  🎨 Custom product color theming (BG/panel/text colors)  
  📦 Product CRUD operations  
  📊 Inventory management  

- **Shopping Experience**  
  🏷️ Discount pricing display  
  🔍 Product filtering/sorting  
  📱 Fully responsive design  

- **Tech Highlights**  
  🖼️ Image upload with Base64 encoding  
  🎭 Dynamic CSS styling from database  
  ⚡ RESTful API architecture  

## 🛠️ Tech Stack

**Frontend**  
📦 Tailwind CSS | 🌀 EJS Templates | 🎮 Vanilla JavaScript  

**Backend**  
🟢 Node.js | 🚀 Express | 🔑 JWT Authentication  

**Database**  
🍃 MongoDB | 🐒 Mongoose ODM  

**Dev Tools**  
🔄 Nodemon | 🌱 Dotenv | 🛠️ Postman  

## 🚀 Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/scatch.git
   cd scatch
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**  
   Create `.env` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/scatch
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

4. **Start Development Server**
   ```bash
   npm start
   ```
   App will run at `http://localhost:3000`

## 📚 API Endpoints

| Method | Endpoint          | Description                 |
|--------|-------------------|-----------------------------|
| POST   | /users/register   | User registration           |
| POST   | /users/login      | User authentication         |
| GET    | /products         | Get all products            |
| POST   | /products/create  | Create new product (Admin)  |
| POST   | /cart/add/:id     | Add item to cart            |

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under MIT License. See `LICENSE` for more information.

---

> **Note**: Replace placeholder credentials with actual values in production.  
> ✉️ **Contact**: sharjeelac@gmail.com | 💻 **Portfolio**: yourportfolio.com
```
