"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  const user = {
    firstname: "Celestine",
    lastname: "Ogar",
    email: "celestineogar13@gmail.com",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-4">
        {/* SIDEBAR */}
        <div className="bg-emerald-700 text-white p-6 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">My Account</h2>
            <p className="text-white/70 text-sm">Manage your details & pets</p>
          </div>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-300 cursor-pointer">
              Account Details
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">My Pets</li>
            <li className="hover:text-yellow-300 cursor-pointer">Favorites</li>
            <li className="hover:text-yellow-300 cursor-pointer">
              Notifications
            </li>
            <Link href="/auth/login">
              <li className="hover:text-red-300 cursor-pointer pt-10">
                Logout
              </li>
            </Link>
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="p-8 md:col-span-3">
          <h1 className="text-3xl font-bold text-emerald-800 mb-6">
            Account Details
          </h1>

          <div className="flex items-center gap-6 mb-8">
            <Image
              src="/images/profile-avatar.jpg"
              width={80}
              height={80}
              className="rounded-full bg-gray-200"
              alt="User Avatar"
            />
            <div>
              <p className="text-lg font-semibold">
                {user.firstname} {user.lastname}
              </p>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">First Name</label>
              <input
                value={user.firstname}
                className="w-full border rounded-lg px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Last Name</label>
              <input
                value={user.lastname}
                className="w-full border rounded-lg px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600">
                Email Address
              </label>
              <input
                value={user.email}
                className="w-full border rounded-lg px-4 py-2"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
