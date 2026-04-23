function BookCard({ book, onEdit, onDelete }) {
  const badgeText = book.category === "okundu" ? "Okudugum" : "Almak Istedigim";

  return (
    <div className="book-card">
      <div className="book-card-top">
        <div>
          <span className="book-badge">{badgeText}</span>
          <h3>{book.title}</h3>
          <p className="book-author">{book.author}</p>
        </div>

        <div className="rating-chip">{book.rating}/5</div>
      </div>

      <p className="book-note">{book.note}</p>

      <div className="book-actions">
        <button type="button" className="btn-light-custom" onClick={() => onEdit(book)}>
          Guncelle
        </button>
        <button type="button" className="btn-danger-custom" onClick={() => onDelete(book.id)}>
          Sil
        </button>
      </div>
    </div>
  );
}

export default BookCard;
