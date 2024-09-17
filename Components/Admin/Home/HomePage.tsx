import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const HomePage = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: '2022',
        data: [12, 19, 3, 5, 2, 3, 12],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: '2021',
        data: [-10, -12, 10, -4, 20, 15, 5],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Growth',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {/* Profile Summary */}
      <div className="grid lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-orange-500 text-white shadow-lg shadow-black p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Profile</h2>
          <p>Profit: $12,628</p>
          <p>Sales: $4,679</p>
        </div>
        <div className="bg-red-500 text-white shadow-lg shadow-black  p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <p>Payments: $2,456</p>
          <p>Total Transactions: $14,857</p>
        </div>

          {/* Balance and Transactions */}
   
        <div className="bg-orange-500 text-white shadow-lg shadow-black p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p>Total Balance: $459.10</p>
        </div>
        <div className=" bg-red-500 text-white shadow-lg shadow-black p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Income</h2>
          <p>PayPal: +82.6 USD</p>
          <p>Wallet: +270.69 USD</p>
        </div>
  
      </div>

{/* Charts */}
       <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  mb-4">
        <div className="bg-white w-full h-auto shadow-black shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <Bar data={barData} />
        </div>

        <div className="bg-white w-full h-auto shadow-lg shadow-black p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Profile Report</h2>
          <p>Total: $84,686k</p>
          <Line data={lineData} />
        </div>
      </div>

     
      <div className="bg-white shadow-lg shadow-black p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Order Statistics</h2>
          <p>Total Orders: 8,258</p>
          <p>Weekly Growth: 38%</p>
        </div>

    
    </div>
  );
};

export default HomePage;
