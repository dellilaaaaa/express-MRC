const books = require("../models/book");

module.exports = {
  getAllBook: (req, res) => {
    res.json(books);
  },

  getBookById: (req, res) => {
    const { id } = req.params;

    let buku = books.find((item) => item.id == id);
    if (buku) {
      res.json(buku);
    } else {
      res.json("book not found");
    }
  },

  addBook: (req, res) => {
    let add = req.body;

    if (books.find((item) => item.id === add.id)) {
      res.json("book already exist");
    } else if (add) {
      books.push(add);
      res.json(add);
    }
  },

  deleteBook: (req, res) => {
    const { id } = req.params;
    let hapus = books.find((item) => item.id == id);
    if (hapus) {
      books.splice(books.indexOf(hapus), 1);
      res.json("success");
    } else {
      res.json("book not found");
    }
  },

  editBook: (req, res) => {
    const { id } = req.params;
    let edit = books.find((item) => item.id == id);

    if (edit) {
      let ganti = { id: edit.id, nama: req.body.nama, pages: req.body.pages };
      books.splice(books.indexOf(edit), 1, ganti);
      res.json("success");
    }
  },
};
