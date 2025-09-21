# RaitStore - MERN Stack E-Commerce Project

![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![Express](https://img.shields.io/badge/Express-4.18-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-8.0-green)
![Node.js](https://img.shields.io/badge/Node.js-20.0-brightgreen)

A modern, full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring product management, responsive design, and a clean UI.

## ✨ Features

- **🛍️ Product Management** - Create, read, update, and delete products
- **🎨 Responsive Design** - Built with Chakra UI for beautiful, mobile-first interfaces
- **⚡ Real-time Updates** - Zustand state management for seamless UI updates
- **🎯 Modern UI** - Clean, intuitive user interface with hover effects and animations
- **🔐 Environment Variables** - Secure configuration management
- **🚀 Production Ready** - Optimized build and deployment configuration

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **Chakra UI** - Modern component library
- **React Router** - Navigation and routing
- **Zustand** - Lightweight state management
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MdRohit786/Rait_store.git
   cd Rait_store
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your environment variables:
     ```
     PORT=8000
     MONGO_URI=your_mongodb_connection_string
     NODE_ENV=development
     ```

4. **Start the application**
   ```bash
   # Development mode (with hot reload)
   npm run dev
   
   # Production build
   npm run build
   npm start
   ```

## 🚀 Usage

1. **Access the application** at `http://localhost:8000`
2. **View products** on the home page
3. **Add new products** using the create page
4. **Edit existing products** using the edit modal
5. **Delete products** with the delete button

## 📁 Project Structure

```
Rait_store/
├── backend/
│   ├── config/
│   │   └── db.js          # Database configuration
│   ├── controller/
│   │   └── product.controller.js  # Business logic
│   ├── models/
│   │   └── product.model.js       # Data models
│   ├── routes/
│   │   └── product.route.js       # API routes
│   └── server.js          # Express server
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand store
│   │   └── App.js         # Main App component
│   └── package.json       # Frontend dependencies
└── package.json           # Root package.json
```

## 🎨 UI Components

- **ProductCard** - Display product information with edit/delete options
- **Navbar** - Navigation with theme toggle and create button
- **Home** - Product grid layout with responsive design
- **CreatePage** - Form for adding new products
- **Modal** - Edit product modal with form inputs

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## 🌟 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm install --prefix frontend` - Install frontend dependencies

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Md Rohit**  
- GitHub: [@MdRohit786](https://github.com/MdRohit786)
- Project Link: [https://github.com/MdRohit786/Rait_store](https://github.com/MdRohit786/Rait_store)

## 🙏 Acknowledgments

- Inspired by MERN stack best practices
- UI components powered by Chakra UI
- Icons by Lucide React
- Backend structure参考了 industry standards

---

⭐ Star this repo if you found it helpful!