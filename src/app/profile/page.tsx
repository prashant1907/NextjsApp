

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "User Profile",
};


export default async function ProfilePage() {
  const res = await fetch("https://fakestoreapi.in/api/users/100", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const user: User = (await res.json()).user;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex items-center space-x-6">
        <img
          src={`https://i.pravatar.cc/150?u=${user.email}`} 
          alt={`${user.name.firstname} ${user.name.lastname}`}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">
            {user.name.firstname} {user.name.lastname}
          </h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Phone</h2>
        <p className="text-gray-700">{user.phone}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Location</h2>
        <p className="text-gray-700">
          {user.address.street}, {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
}
