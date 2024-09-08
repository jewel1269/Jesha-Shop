import { useState } from 'react';

interface Order {
  id: number;
  productName: string;
  address: string;
  date: string;
  price: string;
  status: 'Complete' | 'Pending' | 'Canceled';
}

const ordersData: Order[] = [
  { id: 1, productName: 'Smart Watch', address: '351 Sherwood Forest Drive', date: '20/03/2021', price: '$376.00', status: 'Complete' },
  { id: 2, productName: 'Headphones', address: '6391 Elgin St. Celina', date: '21/03/2021', price: '$276.00', status: 'Pending' },
  { id: 3, productName: 'iPhone Pro', address: '8502 Preston Rd. Inglewood', date: '01/04/2021', price: '$300.00', status: 'Canceled' },
  { id: 4, productName: 'Apple AirPods Pro', address: '4517 Washington Ave. Manchester', date: '01/04/2021', price: '$200.00', status: 'Complete' },
  { id: 5, productName: 'Nike Air Max', address: '3891 Ranchview Dr. Richardson', date: '02/04/2021', price: '$100.00', status: 'Complete' },
  { id: 6, productName: 'Girls Bag', address: '2972 Westheimer Rd. Santa Ana', date: '02/04/2021', price: '$76.00', status: 'Pending' },
  { id: 7, productName: 'Canon 600d', address: '3517 W. Gray St. Utica', date: '03/04/2021', price: '$500.00', status: 'Pending' },
  { id: 8, productName: 'Apple Watch', address: '4140 Parker Rd. Allentown', date: '07/04/2021', price: '$300.00', status: 'Complete' },
  { id: 9, productName: 'Alexa Box', address: '2464 Royal Ln. Mesa', date: '09/04/2021', price: '$76.00', status: 'Complete' },
  { id: 10, productName: 'Apple Macbook Air 13"', address: '3517 W. Gray St. Utica', date: '10/04/2021', price: '$600.00', status: 'Canceled' },
  { id: 10, productName: 'Apple Macbook Air 13"', address: '3517 W. Gray St. Utica', date: '10/04/2021', price: '$600.00', status: 'Canceled' },
];

const OrderDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<'All' | 'Complete' | 'Pending' | 'Canceled'>('All');
  const ordersPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Filter orders based on the selected filter
  const filteredOrders = filter === 'All' 
    ? ordersData 
    : ordersData.filter((order) => order.status === filter);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">
        Order <span className="text-gray-500">({filteredOrders.length} Orders found)</span>
      </h2>

      {/* Tabs for Order Categories */}
      <div className="mb-4 space-x-4">
        <button
          onClick={() => setFilter('All')}
          className={`px-4 py-2 font-semibold ${filter === 'All' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          All Orders
        </button>
        <button
          onClick={() => setFilter('Complete')}
          className={`px-4 py-2 font-semibold ${filter === 'Complete' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('Pending')}
          className={`px-4 py-2 font-semibold ${filter === 'Pending' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter('Canceled')}
          className={`px-4 py-2 font-semibold ${filter === 'Canceled' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          Canceled
        </button>
      </div>

      {/* Orders Table */}
      <table className="min-w-full overflow-x-auto bg-white">
        <thead className="overflow-x-auto">
          <tr className="overflow-x-auto">
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-left">Address</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto">
          {currentOrders.map((order) => (
            <tr className="overflow-x-auto" key={order.id}>
              <td className="py-2 px-4">#{order.id}</td>
              <td className="py-2 px-4">{order.productName}</td>
              <td className="py-2 px-4">{order.address}</td>
              <td className="py-2 px-4">{order.date}</td>
              <td className="py-2 px-4">{order.price}</td>
              <td className="py-2 px-4">
                <span
                  className={`inline-block px-2 py-1 text-sm font-semibold rounded-lg ${
                    order.status === 'Complete' ? 'bg-green-100 text-green-600' :
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                    'bg-red-100 text-red-600'
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <span>Showing {indexOfFirstOrder + 1} to {Math.min(indexOfLastOrder, filteredOrders.length)} of {filteredOrders.length} entries</span>
        <div className="flex space-x-2">
          {[...Array(Math.ceil(filteredOrders.length / ordersPerPage)).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              className={`px-3 py-1 ${currentPage === page + 1 ? 'bg-blue-100' : 'bg-gray-200'} rounded-md`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
