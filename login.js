import React from 'react';

const ApBookLogin = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center p-4">
      {/* Brand Header */}
      <h1 className="text-4xl font-bold text-[#32cd32] mb-8">APBOOK</h1>
      
      <div className="bg-[#112240] p-8 rounded-xl shadow-2xl w-full max-w-md border-t-4 border-[#1e90ff]">
        <h2 className="text-white text-xl font-semibold mb-6 text-center">Login to your Account</h2>
        
        {/* Input Fields */}
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Username / Mobile" 
            className="w-full p-3 rounded bg-[#0a192f] border border-[#1e90ff] text-white focus:outline-none focus:ring-2 focus:ring-[#32cd32]"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 rounded bg-[#0a192f] border border-[#1e90ff] text-white focus:outline-none focus:ring-2 focus:ring-[#32cd32]"
          />
        </div>

        {/* Action Buttons */}
        <button className="w-full mt-6 bg-[#32cd32] text-[#0a192f] font-bold py-3 rounded hover:bg-green-400 transition duration-300">
          LOGIN NOW
        </button>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-[#1e90ff] hover:underline">Forgot Password?</a>
        </div>
      </div>

      {/* WhatsApp Section */}
      <div className="mt-8">
        <button className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-full font-bold shadow-lg">
          <span>Get ID on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default ApBookLogin;