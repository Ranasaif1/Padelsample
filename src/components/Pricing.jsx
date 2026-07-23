import React from 'react';

const Pricing = () => {
  const plans = [
    { title: "1 TIME", price: "$20.00", desc: "Single court booking for one hour." },
    { title: "5 TIMES", price: "$90.00", desc: "Pack of 5 hours. Save $10." },
    { title: "10 TIMES", price: "$160.00", desc: "Pack of 10 hours. Best value." },
  ];

  return (
    <div className="bg-gray-50 py-20 px-10 md:px-20 text-center">
      <h4 className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">Pricing Plans</h4>
      <h2 className="text-4xl font-bold uppercase mb-12" style={{ fontFamily: "'Oswald', sans-serif" }}>Choose Your Plan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-white p-10 shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-bold text-gray-500 uppercase mb-4 tracking-wider">{plan.title}</h3>
            <div className="text-5xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>{plan.price}</div>
            <p className="text-gray-500 mb-8 text-sm">{plan.desc}</p>
            <button className="border-2 border-black text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition w-full">
              Book Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;