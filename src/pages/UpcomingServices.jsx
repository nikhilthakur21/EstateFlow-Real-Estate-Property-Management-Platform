import React from "react";

const UpcomingServices = () => {
  const marqueeStyle = `
    @keyframes marqueeScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `;

  return (
    <section className="py-10 bg-white overflow-hidden">
      <style>{marqueeStyle}</style>

      {/* Main Container with Parallel Lines */}
      <div className="relative flex items-center border-t border-b border-orange-500 py-3">
        {/* Fixed Heading - Not Moving */}
        <div className="relative z-20 bg-white pr-6 pl-10 flex items-center gap-3">
          <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
          <h2 className="text-lg font-black text-slate-900 uppercase tracking-tighter whitespace-nowrap">
            Upcoming Services
          </h2>
          {/* Subtle separator between heading and moving text */}
          <div className="h-8 w-[1px] bg-slate-200 ml-4"></div>
        </div>

        {/* Moving Text Container */}
        <div className="flex-1 overflow-hidden flex items-center">
          <div
            className="flex items-center whitespace-nowrap"
            style={{
              animation: "marqueeScroll 30s linear infinite",
              display: "flex",
              width: "max-content",
            }}
          >
            {/* Set of Names */}
            <div className="flex items-center gap-12 px-6">
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Home Loans
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Legal Verification
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Interior Design
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Vastu Consulting
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Rental Care
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Property Resale
              </span>
              <span className="text-orange-500">/</span>
            </div>

            {/* Duplicate for Seamless Loop */}
            <div className="flex items-center gap-12 px-6">
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Home Loans
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Legal Verification
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Interior Design
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Vastu Consulting
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Rental Care
              </span>
              <span className="text-orange-500">/</span>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em]">
                Property Resale
              </span>
              <span className="text-orange-500">/</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingServices;
