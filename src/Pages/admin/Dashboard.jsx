import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MyBarChart from '../../Components/Charts';



export default function AdminDashboard() {
  return (
       <div className="bg-gray-50 min-h-screen w-full">





    <main className="flex-grow p-6">
      {/* ======= FIRST ROW CARDS ======= */}
      <div className="mb-6">
        <div className="w-full ">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md h-36 p-4 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-2xl font-bold">$500.00</p>
                    <p className="text-gray-200 text-sm mt-1">Total Earning</p>
                  </div>
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CreditCardIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl shadow-md h-36 p-4 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-2xl font-bold">$900.00</p>
                    <p className="text-gray-200 text-sm mt-1">Total Order</p>
                  </div>
                  <div className="bg-white/20 p-2 rounded-lg">
                    <ShoppingBagIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    

      {/* ======= SECOND ROW ======= */}
      <div className="mb-6">
        <div className="w-full ">
          <div className="bg-white rounded-xl shadow-md p-4 h-[60vh]">
            <MyBarChart />
          </div>
        </div>
      </div>

      {/* ======= FOOTER ======= */}
    </main>
     
</div>
  )
}
