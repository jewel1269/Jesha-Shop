"use client"
import React from 'react';
import logo from "../../Images/download-removebg-preview.png"
import Image from 'next/image';

const Invoice: React.FC = () => {
  return (
    <div className="lg:h-screen p-5">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
        {/* Invoice Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <Image src={logo} alt='logo' width={400} height={200} className='h-12 w-auto' />
            <p>Company Jesha Here</p>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold text-green-500">INVOICE</h2>
            <p>Invoice Number: #123456</p>
            <p>Invoice Date: April 05, 2020</p>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold">Invoice To:</h3>
            <p>Jhone Doe.</p>
            <p>Managing Director, Company Ltd.</p>
            <p>Phone: +123 4567 8910</p>
            <p>Email: example@mail.com</p>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-semibold">Invoice From:</h3>
            <p>Jhone Smith.</p>
            <p>Managing Director, Company Ltd.</p>
            <p>Phone: +123 4567 8910</p>
            <p>Email: example@mail.com</p>
          </div>
        </div>

        {/* Product Table */}
        <table className="w-full overflow-y-auto table-auto border-collapse mb-6">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="border p-2">No.</th>
              <th className="border p-2">Product Description</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Qty</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">Business Card Design</td>
                <td className="border p-2">$50</td>
                <td className="border p-2">2</td>
                <td className="border p-2">$100.00</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Payment & Total */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Payment Method:</h3>
            <p>Account No: 1234 5678 910</p>
            <p>Account Name: Jhone Doe</p>
            <p>Branch Name: XYZ</p>
          </div>
          <div className="text-right">
            <p>Subtotal: $3150.00</p>
            <p>Discount: $0.00</p>
            <p>Tax (10%): $315.00</p>
            <h3 className="text-2xl font-bold">Total: $3465.00</h3>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-10 flex justify-between items-center">
          <div>
            <p className="text-center text-xl">𝒥𝑒𝓌𝑒𝓁_</p>
            <div className="border-b-2 w-40"></div>
          </div>
          <div className="text-right">
            <p>Thank You For Your Business</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-sm text-center border-t pt-4 text-gray-500">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci magna.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <p>Phone: +123 4567 8910</p>
            <p>Email: example@mail.com</p>
            <p>Your Location Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
