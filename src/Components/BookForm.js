import { categoryOptions } from "../Interfaces/bookSchema";

function BookForm({
  formData,
  onChange,
  onSubmit,
  isEditing,
  onCancelEdit
}) {
  return (
    <div className="panel-card">
      <div className="panel-body">
        <div className="panel-header">
          <div>
            <h2>{isEditing ? "Kitabi Guncelle" : "Yeni Kitap Ekle"}</h2>
            <p>Ekleme, guncelleme ve duzenleme islemleri burada.</p>
          </div>

          {isEditing && (
            <button type="button" className="btn-light-custom" onClick={onCancelEdit}>
              Vazgec
            </button>
          )}
        </div>

        <form onSubmit={onSubmit} className="form-grid">
          <div>
            <label>Kitap Adi</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <label>Yazar</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <label>Kategori</label>
            <select name="category" value={formData.category} onChange={onChange}>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Puan</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={onChange}
            />
          </div>

          <div>
            <label>Kisa Not</label>
            <textarea
              name="note"
              rows="4"
              value={formData.note}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn-dark-custom">
            {isEditing ? "Degisiklikleri Kaydet" : "Kitabi Listeye Ekle"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
