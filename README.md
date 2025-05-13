# 📚 Book Review App

A full-stack Node.js application where users can explore books, read detailed reviews, submit their own reviews with ratings, and discover books by genre.

## 🚀 Features

### 📝 Book Management
- **Add new books** with the following details:
  - 📖 Title
  - ✍️ Author
  - 🧠 Genre
  - 📄 Description

### 🌟 Review System
- View user reviews on individual book pages.
- Add your own review with:
  - 👤 Username
  - 💬 Comment
  - ⭐ Rating (1–5 stars)

### 📊 Rating System
- Each review includes a rating.
- Books can be displayed with an average rating (optional future feature).

### 🔍 Genre Support
- View the genre of each book on its detail page.
- Categorize books for easier discovery by genre.

### ❤️ Like Button (Optional Feature)
- Users can **like books** to show appreciation.
- Likes are stored and displayed in real-time.

## 🛠️ Tech Stack
- **Frontend**: EJS + CSS (with Server-Side Rendering)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM

## 📂 Folder Structure
```bash
├── views/
│ ├── books.ejs # Home page listing all books
│ ├── bookDetails.ejs # Single book page with reviews
│ ├── newBook.ejs # Form to add a new book
│ └── partials/ # Header and footer includes
├── public/ # Static CSS files
├── models/
│ ├── Book.js
│ └── Review.js
├── routes/
│ └── books.js
├── app.js # Main server file
```
## 🧪 Future Improvements
- ✅ Show average star rating on book cards
- ✅ Filter books by genre
- 🔄 Edit/delete reviews
- 🔐 Add user authentication
- 📱 Mobile responsive improvements

## Set Up Introduction
To set up and run the project locally:
visit: http://localhost:3000

```bash
git clone https://github.com/your-username/book-review-app.git
cd book-review-app
npm install
npm start