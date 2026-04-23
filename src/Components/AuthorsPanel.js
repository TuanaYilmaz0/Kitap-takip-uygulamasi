function AuthorsPanel({ authors }) {
  return (
    <section className="section-block">
      <div className="section-header">
        <div>
          <h2>Favori Yazarlarim</h2>
          <p>Bana ilham veren yazarlar.</p>
        </div>
      </div>

      <div className="cards-grid">
        {authors.map((author) => (
          <div key={author.id} className="author-card">
            <span className="author-tag">{author.genre}</span>
            <h3>{author.name}</h3>
            <p>{author.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AuthorsPanel;
