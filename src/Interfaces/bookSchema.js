export const categoryOptions = [
  { value: "alinacak", label: "Almak Istedigim Kitaplar" },
  { value: "okundu", label: "Okudugum Kitaplar" }
];

export const emptyBookForm = {
  title: "",
  author: "",
  category: "alinacak",
  note: "",
  rating: "4"
};

export const starterBooks = [
  {
    id: 1,
    title: "Simyaci",
    author: "Paulo Coelho",
    category: "okundu",
    note: "Her yeniden baslangic bana iyi geliyor.",
    rating: 5
  },
  {
    id: 2,
    title: "Kurk Mantolu Madonna",
    author: "Sabahattin Ali",
    category: "okundu",
    note: "Duygusu cok guclu, tekrar okumak istiyorum.",
    rating: 5
  },
  {
    id: 3,
    title: "Seker Portakali",
    author: "Jose Mauro de Vasconcelos",
    category: "alinacak",
    note: "Uzun suredir listemde, yakin zamanda almak istiyorum.",
    rating: 4
  }
];

export const favoriteAuthors = [
  {
    id: 1,
    name: "Stefan Zweig",
    genre: "Psikolojik / Klasik",
    reason: "Kisa ama etkili hikayeler yaziyor."
  },
  {
    id: 2,
    name: "Sabahattin Ali",
    genre: "Turk Edebiyati",
    reason: "Karakter duygularini cok guzel hissettiriyor."
  },
  {
    id: 3,
    name: "Ahmet Umit",
    genre: "Polisiye",
    reason: "Surukleyici olay orgusu kuruyor."
  }
];
