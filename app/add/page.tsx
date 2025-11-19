"use client";
import { useState } from "react";

export default function AddPet() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    age: "",
    location: "",
    image: "",
  });
  const [added, setAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdded(true);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
        Post a Pet for Adoption 🐾
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        {["name", "type", "age", "location", "image"].map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="w-full p-3 border rounded-lg"
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            required
          />
        ))}
        <button
          type="submit"
          className="bg-emerald-600 text-white w-full py-3 rounded-lg hover:bg-emerald-700"
        >
          Post Pet
        </button>
      </form>

      {added && (
        <p className="text-center text-emerald-700 mt-4 font-semibold">
          ✅ Pet added (demo mode)
        </p>
      )}
    </div>
  );
}
