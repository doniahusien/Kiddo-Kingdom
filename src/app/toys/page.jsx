"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/productSlice";
import { selectToys } from "@/redux/selectors/productSelectors";

const ToysPage = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.products?.status || "idle");
    const toys = useSelector(selectToys);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-blue-100 py-10">
            <h1 className="text-5xl font-extrabold text-red-600 text-center mb-10">
                Our Toys Collection
            </h1>

            {status === "loading" && (
                <p className="text-center text-gray-700 text-xl">Loading toys...</p>
            )}

            {status === "succeeded" && (
                <div className="overflow-y-auto max-h-[80vh]"> {/* Scrollable container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                        {toys.length === 0 ? (
                            <p className="text-center text-red-500 text-2xl">No toys available.</p>
                        ) : (
                            toys.map((toy) => (
                                <div
                                    key={toy.id}
                                    className="bg-gradient-to-br from-white to-yellow-50 shadow-lg rounded-2xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
                                >
                                    <Image
                                        src={toy.image}
                                        alt={toy.name}
                                        width={150}
                                        height={150}
                                        className="w-full object-cover rounded-lg"
                                    />
                                    <h2 className="text-2xl font-extrabold text-blue-700 mt-4 text-center">{toy.name}</h2>
                                    <p className="text-lg font-semibold text-gray-600 text-center">${toy.price}</p>
                                    <button className="mt-6 w-full bg-gradient-to-r from-pink-400 to-yellow-400 text-white py-2 rounded-full shadow-md hover:from-pink-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {status === "failed" && (
                <p className="text-center text-red-700 text-2xl">Failed to load toys.</p>
            )}
        </div>
    );
};

export default ToysPage;
