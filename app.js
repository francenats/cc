const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk parsing form data
app.use(express.urlencoded({ extended: true }));

// Halaman utama
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1><a href="/form">Go to Form</a>');
});

// Halaman form
app.get('/form', (req, res) => {
    res.send(`
        <h1>Form Input</h1>
        <form action="/submit" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <button type="submit">Submit</button>
        </form>
        <a href="/">Back to Home</a>
    `);
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log(`Name: ${name}, Email: ${email}`);
    res.send(`<h1>Data Received</h1><p>Name: ${name}</p><p>Email: ${email}</p><a href="/">Back to Home</a>`);
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});