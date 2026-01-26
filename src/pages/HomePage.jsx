
import {useState} from "react";

const productsData = [
  {id: 1, name: "T-shirt", category: "clothes"},
  {id: 2, name: "iPhone", category: "devices"},
  {id: 3, name: "Lipstick", category: "beauty"},
  {id: 4, name: "Jeans", category: "clothes"},
];

function HomePage() {
  // 1) نخزن القائمة الأصلية
  const [products] = useState(productsData);

  // 2) نخزن اختيار المستخدم للكاتيقوري
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 3) نشتق قائمة جديدة بناءً على الفلتر
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true; // لا تطبق فلترة
    return product.category === selectedCategory;
  });

  return (
    <div>
      {/* 4) اختيارات الفلترة */}
      <div style={{display: "flex", gap: "10px", marginBottom: "16px", direction: "rtl"}}>
        <button onClick={() => setSelectedCategory("all")}>الكل</button>
        <button onClick={() => setSelectedCategory("clothes")}>ملابس</button>
        <button onClick={() => setSelectedCategory("beauty")}>جمال</button>
        <button onClick={() => setSelectedCategory("devices")}>أجهزة</button>
      </div>


      {/* 5) نعرض اللي بعد الفلترة */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} – {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
