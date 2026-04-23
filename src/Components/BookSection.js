import BookCard from "./BookCard";

function BookSection({ title, description, books, onEdit, onDelete }) {
  return (
    <section className="section-block">
      <div className="section-header">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <span className="section-count">{books.length} kitap</span>
      </div>

      <div className="cards-grid">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="empty-box">Bu bolum su an bos. Yeni kitap ekleyebilirsin.</div>
        )}
      </div>
    </section>
  );
}

export default BookSection;
