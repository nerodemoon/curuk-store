
import Image from 'next/image';

const products = [
  {
    name: "Yas Tutmayanlar",
    price: "499₺",
    description: "Soğukkanlılıkla giyilen, her ortamda olay çıkaran parça.",
    image: "/tshirt1.jpg",
  },
  {
    name: "Kendi Mezuniyetine Gitmeyen Adam",
    price: "469₺",
    description: "Diploması yırtık, tarzı sağlam.",
    image: "/tshirt2.jpg",
  },
  {
    name: "Sistemden Çıkış Yapıldı",
    price: "459₺",
    description: "Devre dışı kalmak isteyenler için birebir.",
    image: "/tshirt3.jpg",
  },
  {
    name: "Çaydan Önce Konuşma",
    price: "489₺",
    description: "Aşırı asabi ama yumuşak dokulu.",
    image: "/tshirt4.jpg",
  }
];

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>🍎 çürük</h1>
      <p style={{ marginBottom: '2rem' }}>
        "Herkes giyer" demiyorum,<br />
        "Kimse böyle giyemez" diyoruz
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
        {products.map((product, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px' }}>
            <Image src={product.image} alt={product.name} width={300} height={300} />
            <h2 style={{ fontSize: '1.25rem', marginTop: '1rem' }}>{product.name}</h2>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
