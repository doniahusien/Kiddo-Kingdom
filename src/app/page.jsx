"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchProducts } from "@/redux/features/productSlice";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectToys } from "@/redux/selectors/productSelectors";
const HomePage = () => {
  const user = useAuth();
  const router = useRouter();

  const dispatch = useDispatch();
  const status = useSelector((state) => state.products?.status || "idle");
  const toys = useSelector(selectToys);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <main className="w-full min-h-screen  bg-gradient-to-r from-red-200 via-yellow-100 to-yellow-200">
      {/* Welcome Banner */}
      <section className="relative w-full h-[400px] bg-[url('/ban.png')] bg-cover bg-center text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
        <div className="relative p-8 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-bounce">Welcome Back, {user.name}!</h1>
          <p className="text-lg md:text-xl">Discover our exclusive collection for your kids.</p>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { title: "Free Shipping", desc: "On all orders over $50" },
            { title: "24/7 Support", desc: "We're here to help anytime" },
            { title: "Easy Returns", desc: "Hassle-free returns within 30 days" },
          ].map((service, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {toys
            .map((toy, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <div className="h-56 rounded-md mb-4 flex items-center justify-center">
                  <Image src={toy.image} alt="toy" width={200} height={150} className="w-full h-auto" />
                </div>
                <h3 className="text-lg font-semibold">{toy.name}</h3>
                <p className="text-sm text-gray-600">{toy.price}</p>
                <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white py-2 rounded-full shadow-md hover:from-pink-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </section>

    </main>
  );
};

export default HomePage;
