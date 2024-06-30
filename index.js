const express = require("express");
const app = express();
const port = 3000;

// in-stock-products

let products = [
  { name: "Product A", inStock: true },
  { name: "Product B", inStock: false },
  { name: "Product C", inStock: true },
  { name: "Product D", inStock: false },
  { name: "Product E", inStock: true },
  { name: "Product F", inStock: false },
  { name: "Product G", inStock: true },
];

function filterInStockProducts(product) {
  return product.inStock;
}

app.get("/in-stock-products", (req, res) => {
  let inStockProducts = products.filter((product) =>
    filterInStockProducts(product),
  );
  res.json(inStockProducts);
});

// adult-users
let users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 18 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 17 },
  { name: "Mike", age: 30 },
  { name: "Sarah", age: 19 },
  { name: "David", age: 22 },
];

function filterAdults(user) {
  return user.age >= 18;
}

app.get("/adult-users", (req, res) => {
  let adultUsers = users.filter((user) => filterAdults(user));
  res.json(adultUsers);
});

// expensive-products
let productPrice = [
  { name: "Product A", price: 50 },
  { name: "Product B", price: 30 },
  { name: "Product C", price: 70 },
  { name: "Product D", price: 240 },
  { name: "Product E", price: 120 },
  { name: "Product F", price: 80 },
];

function filterExpensiveProducts(product, price) {
  return product.price > price;
}

app.get("/expensive-products", (req, res) => {
  let price = parseFloat(req.query.price);
  let result = productPrice.filter((product) =>
    filterExpensiveProducts(product, price),
  );
  res.json(result);
});

// long-articles
let articles = [
  { title: "Article A", wordCount: 300 },
  { title: "Article B", wordCount: 200 },
  { title: "Article C", wordCount: 500 },
  { title: "Article D", wordCount: 400 },
  { title: "Article E", wordCount: 750 },
];

function filterLongArticles(article, minWord) {
  return article.wordCount > minWord;
}

app.get("/long-articles", (req, res) => {
  let minWord = parseInt(req.query.minWord);
  let result = articles.filter((article) =>
    filterLongArticles(article, minWord),
  );
  res.json(result);
});

// high-rated-movies
let movies = [
  { title: "Movie A", rating: 4.5 },
  { title: "Movie B", rating: 3.8 },
  { title: "Movie C", rating: 4.2 },
  { title: "Movie D", rating: 7.0 },
  { title: "Movie E", rating: 8.9 },
];

function filterHighRatedMovies(movie, rating) {
  return movie.rating > rating;
}

app.get("/high-rated-movies", (req, res) => {
  let rating = parseFloat(req.query.rating);
  let result = movies.filter((movie) => filterHighRatedMovies(movie, rating));
  res.json(result);
});

// experienced-employees
let employees = [
  { name: "Employee A", experience: 3 },
  { name: "Employee B", experience: 5 },
  { name: "Employee C", experience: 2 },
  { name: "Employee D", experience: 7 },
  { name: "Employee E", experience: 4 },
];

function filterExperiencedEmployees(employee, year) {
  return employee.experience > year;
}

app.get("/experienced-employees", (req, res) => {
  let year = parseFloat(req.query.years);
  let result = employees.filter((employee) =>
    filterExperiencedEmployees(employee, year),
  );
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
