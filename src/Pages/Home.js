import { useState } from "react";
import AuthorsPanel from "../Components/AuthorsPanel";
import BookForm from "../Components/BookForm";
import BookSection from "../Components/BookSection";
import HeroBanner from "../Components/HeroBanner";
import {
  emptyBookForm,
  favoriteAuthors,
  starterBooks
} from "../Interfaces/bookSchema";

function Home() {
  const [books, setBooks] = useState(starterBooks);
  const [formData, setFormData] = useState(emptyBookForm);
  const [editingBookId, setEditingBookId] = useState(null);

  const wantedBooks = books.filter((book) => book.category === "alinacak");
  const readBooks = books.filter((book) => book.category === "okundu");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData(emptyBookForm);
    setEditingBookId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      ...formData,
      rating: Number(formData.rating)
    };

    if (editingBookId) {
      setBooks((prev) =>
        prev.map((book) =>
          book.id === editingBookId ? { ...book, ...newBook, id: editingBookId } : book
        )
      );
    } else {
      setBooks((prev) => [{ ...newBook, id: Date.now() }, ...prev]);
    }

    resetForm();
  };

  const handleDelete = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
    if (editingBookId === id) resetForm();
  };

  const handleEdit = (book) => {
    setEditingBookId(book.id);
    setFormData({
      title: book.title,
      author: book.author,
      category: book.category,
      note: book.note,
      rating: String(book.rating)
    });
  };

  return (
    <main className="app-shell">
      <div className="container py-5">
        <HeroBanner
          totalBooks={books.length}
          readCount={readBooks.length}
          wishlistCount={wantedBooks.length}
        />

        <div className="row g-4 mt-3">
          <div className="col-lg-4">
            <BookForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              isEditing={Boolean(editingBookId)}
              onCancelEdit={resetForm}
            />
          </div>

          <div className="col-lg-8">
            <BookSection
              title="Almak Istedigim Kitaplar"
              description="Yakin zamanda okumayi planladigim kitaplar."
              books={wantedBooks}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

            <BookSection
              title="Okudugum Kitaplar"
              description="Bitirdigim ve not biraktigim kitaplar."
              books={readBooks}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>

        <AuthorsPanel authors={favoriteAuthors} />
      </div>
    </main>
  );
}

export default Home;
