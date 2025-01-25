# Frontend README

This directory contains the **React-based frontend** for the project.

## **Setup Instructions**

### **Install Dependencies**

```bash
npm install
```

### **Run the Frontend Locally**

```bash
npm run dev
```

### **Environment Variables**

If your frontend interacts with an API, configure the `VITE_API_URL` in a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:5000
```

### **Build for Production**

To create a production-ready build:

```bash
npm run build
```

The build files will be generated in the `dist/` folder.

# License

This project is licensed under the [MIT License](./LICENSE).
