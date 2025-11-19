"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("q")?.toLowerCase() || "";

  // SAMPLE SEARCH DATA — You can add more items later
  const data = [
    { title: "Adopt a Dog", href: "/adopt/dogs" },
    { title: "Adopt a Cat", href: "/adopt/cats" },
    { title: "Pet Grooming Guides", href: "/care/grooming" },
    { title: "Vet Directory", href: "/care/vets" },
    { title: "Pet Food", href: "/shop/food" },
    { title: "Toys & Accessories", href: "/shop/accessories" },
    { title: "Health & Wellness", href: "/care/health" },
    { title: "Partner Stores", href: "/shop/partners" },
  ];

  const results = data.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for: <span className="text-emerald-700">"{query}"</span>
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-600 text-lg">
          No results found. Try another search.
        </p>
      ) : (
        <ul className="space-y-4">
          {results.map((item, i) => (
            <li
              key={i}
              className="border p-4 rounded-lg hover:bg-emerald-50 transition"
            >
              <Link
                href={item.href}
                className="text-xl text-emerald-700 font-semibold"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
