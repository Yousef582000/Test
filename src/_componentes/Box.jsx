import React from 'react'

const Box = ({title}) => {
  return (
    
<div className={`w-72 bg-white rounded-xl shadow-xl box ${title} p-6 text-center shadow-2xl hover:scale-105 cursor-pointer hover:shadow-blue-500 transition-all`}>
  <div className="text-sm text-gray-600 font-medium mb-2 ">P2-HOST</div>
  
  <div className="text-4xl font-bold text-gray-800 mb-2">

   91.30 
     <sub>
    <span className="text-lg text-gray-500">د.ب</span> 
  </sub>
  </div>
<div className=' mt-5 flex justify-center align-middle gap-2.5'>
      <div className="text-sm mt-2 text-gray-400 line-through">120 د.ب</div>

  <div className="inline-block mt-1 mb-4 px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
    خصم %30
  </div>
</div>

  <button className="bg-blue-950 hover:bg-indigo-800 text-white text-sm py-2 px-5 rounded-lg mb-6 transition">
    اطلب الآن
  </button>

  <ul className="text-sm text-left text-gray-700 space-y-5">
    <li><span className="font-bold">60GB</span> NVMe Storage</li>
    <li><span className="font-bold">15</span> Website (s)</li>
    <li><span className="font-bold">4</span> RAM</li>
    <li><span className="font-bold">3</span> CPU</li>
    <li>cPanel Control Panel</li>
    <li><span className="font-bold">Unlimited</span> Subdomains</li>
    <li><span className="font-bold">Unlimited</span> MySQL & SQL Databases</li>
    <li><span className="font-bold">Unlimited</span> Email Account</li>
    <li><span className="font-bold">Unlimited</span> FTP Accounts</li>
    <li className="text-xs text-gray-400 pt-2">Dedicated Name Server(ns1,ns2)</li>
  </ul>
<br />

  <div className="text-xs text-blue-500 hover:underline cursor-pointer">
    compare packages
  </div>
</div>

  )
}

export default Box