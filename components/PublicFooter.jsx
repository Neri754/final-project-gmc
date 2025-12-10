"use client";

export default function PublicFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} NaijaPetPlace — Connecting pets to loving
          homes.
        </p>
      </div>
    </footer>
  );
}
