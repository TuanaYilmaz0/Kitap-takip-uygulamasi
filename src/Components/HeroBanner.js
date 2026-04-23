function HeroBanner({ totalBooks, readCount, wishlistCount }) {
  return (
    <section className="hero-card">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <span className="hero-badge">Benim Minik Kitap Kosem</span>
          <h1 className="mt-3">
            Okuduklarimi, almak istediklerimi ve favori yazarlarimi tek yerde
            topluyorum.
          </h1>
          <p className="hero-text">
            Bu uygulama ile kitap listemi duzenliyorum, yeni kitaplar ekliyorum
            ve notlarimla birlikte takip ediyorum.
          </p>
        </div>

        <div className="col-lg-5">
          <div className="stats-grid">
            <div className="stat-box">
              <span>Toplam Kitap</span>
              <strong>{totalBooks}</strong>
            </div>
            <div className="stat-box">
              <span>Okunan</span>
              <strong>{readCount}</strong>
            </div>
            <div className="stat-box">
              <span>Alinacak</span>
              <strong>{wishlistCount}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
