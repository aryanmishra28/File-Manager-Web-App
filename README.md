# 📁 File Manager Web App

A simple and elegant web-based file manager built with **Node.js**, **Express**, **EJS**, and **Tailwind CSS**. This app lets you **create**, **view**, **edit**, **rename**, and **delete** text files directly from the browser interface.

---

![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express-black?logo=express)
![EJS](https://img.shields.io/badge/View-EJS-yellow?logo=ejs)
![Tailwind CSS](https://img.shields.io/badge/Style-TailwindCSS-blue?logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

---

## 🔧 Features

- 📝 **Create** new `.txt` files
- 📂 **View** file contents
- ✍️ **Edit** file content and rename files
- 🗑️ **Delete** files
- 📁 Files are stored and managed from a local `files/` directory

---

## 📸 Screenshots

### 🏠 Home Page – List & Manage Files

![Home Page](https://github.com/aryanmishra28/File-Manager-Web-App/blob/main/images/Screenshot%20(160).png)



### ✏️ Edit Filename and File Content
![Edit File](https://github.com/aryanmishra28/File-Manager-Web-App/blob/main/images/Screenshot%20(161).png)


---

## 🚀 Features

- 📄 Create new text files
- 🔍 View the contents of a file
- ✏️ Rename existing files
- 📝 Edit file contents
- ❌ Delete files
- 🎨 Responsive UI using TailwindCSS
- ⚙️ Uses Node.js `fs` module for file operations

---

## 🛠 Tech Stack

| Tech | Usage |
|------|-------|
| **Node.js** | Backend runtime |
| **Express.js** | Web framework |
| **EJS** | Template engine for rendering views |
| **TailwindCSS** | CSS utility framework |
| **File System (`fs`)** | Reading, writing, editing files |

---


## 🚀 Getting Started

Follow these steps to run the app locally:

---

## 1. Clone the repository

```bash
git clone https://github.com/aryanmishra28/File-Manager-Web-App.git
cd File-Manager-Web-App
```
---

## 2. Install dependencies

```
npm install
```
 ---
 
## 3. Start the server

```
node index.js
```
---

## 4. Open in your browser
```
http://localhost:3000
``` 

## 📁 Folder Structure

```
---
BE-REV/
├── files/                 # All created .txt files are stored here
├── node_modules/
├── public/                # Static assets (if any)
├── views/                 # EJS templates
│   ├── index.ejs
│   ├── show.ejs
│   └── edit.ejs
├── .gitignore
├── index.js               # Main Express server file
├── package.json
└── README.md
```


## 📦 .gitignore

```
node_modules/
.env
files/
.DS_Store
```


---

## 👨‍💻 Author

Made with ❤️ by **Aryan Mishra**  
GitHub: [@aryanmishra28](https://github.com/aryanmishra28)

