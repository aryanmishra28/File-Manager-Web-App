# 📁 BE-REV - File Manager Web App

A simple, responsive web app built with **Node.js**, **Express**, and **EJS** that allows users to **create**, **read**, **rename**, **edit**, and **delete** `.txt` files stored on the local file system. Styled beautifully using **TailwindCSS**.

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

