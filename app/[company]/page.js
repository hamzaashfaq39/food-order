"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { companies, sampleOrders, Order } from "@/config/companies";
import Image from "next/image";

export default function CompanyPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const companyId = params.company;

  const [ordersPerPage, setOrdersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const company = companies[companyId];
  const companyOrders = sampleOrders[companyId] || [];

  if (!company) {
    return <div>Company not found</div>;
  }

  const totalOrders = companyOrders.length;
  const totalPages = Math.ceil(totalOrders / ordersPerPage);

  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const currentOrders = companyOrders.slice(startIndex, endIndex);

  const handleOrdersPerPageChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setOrdersPerPage(value);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // router.push(`/${companyId}?page=${page}&perPage=${ordersPerPage}`);
  };

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    const perPage = parseInt(searchParams.get("perPage") || "10");

    if (page) setCurrentPage(page);
    if (perPage) setOrdersPerPage(perPage);
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Image
            src={company.logo}
            alt={company.name}
            width={100}
            height={100}
            className="mr-4"
          />
          <h1 className="text-3xl font-bold">{company.name} Orders</h1>
        </div>
        <div className="flex items-center">
          <label className="mr-2">Orders per page:</label>
          <input
            type="number"
            min="1"
            value={ordersPerPage}
            onChange={handleOrdersPerPageChange}
            className="p-2 rounded border"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">Order ID</th>
              <th className="px-6 py-3 border-b">Customer</th>
              <th className="px-6 py-3 border-b">Amount</th>
              <th className="px-6 py-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.orderId}>
                <td className="px-6 py-4 border-b">{order.orderId}</td>
                <td className="px-6 py-4 border-b">{order.customerName}</td>
                <td className="px-6 py-4 border-b">{order.amount}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-2 py-1 rounded ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "Cancelled"
                        ? "bg-red-100 text-red-800"
                        : order.status === "In Transit"
                        ? "bg-blue-100 text-blue-800"
                        : order.status === "Shipped"
                        ? "bg-purple-100 text-purple-800"
                        : order.status === "Preparing"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
