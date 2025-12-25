import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapDisplay from './MapDisplay';

function App() {
  const [hoveredState, setHoveredState] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    const fetchDetails = async () => {
      setDetails(null); // Reset details immediately on new hover
      if (!hoveredState) {
        return;
      }

      setLoading(true);
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
        const response = await axios.get(`${apiUrl}/api/state-details/${hoveredState.slug}`);
        if (active) {
          setDetails(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
        if (active) setLoading(false);
      }
    };

    fetchDetails();
    return () => { active = false; };
  }, [hoveredState]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 overflow-hidden text-gray-100 font-sans selection:bg-purple-500 selection:text-white">

      {/* Map Area */}
      <main className="flex-1 relative order-1 md:order-1 h-[60%] md:h-full transition-all duration-300">
        <MapDisplay
          activeState={null}
          onHover={setHoveredState}
        />
      </main>

      {/* Details Pane - Professional Glassmorphism UI */}
      <aside className="w-full md:w-[28rem] bg-gray-900/95 backdrop-blur-xl border-t md:border-t-0 md:border-l border-gray-800 p-8 shadow-2xl z-20 flex flex-col justify-center order-2 md:order-2 h-[40%] md:h-full transition-all duration-500 relative overflow-hidden">

        {/* Subtle decorative gradient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        {hoveredState ? (
          <div className={`space-y-8 animate-fade-in relative z-10 ${loading ? 'opacity-50 blur-[2px]' : 'opacity-100 blur-0'} transition-all duration-300`}>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-8 h-[2px] bg-blue-500 rounded-full"></span>
                <span className="text-blue-400 uppercase tracking-widest text-xs font-bold">Region Details</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                {hoveredState.name}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/40 p-4 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/60 transition-colors">
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Capital City</span>
                <div className="text-xl font-bold text-white tracking-wide">
                  {details ? details.capital : "..."}
                </div>
              </div>
              <div className="bg-gray-800/40 p-4 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/60 transition-colors">
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Population</span>
                <div className="text-xl font-bold text-white tracking-wide">
                  {details ? details.population : "..."}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-200 mb-2 flex items-center">
                  About
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm font-light">
                  {details ? details.description : "Loading description..."}
                </p>
              </div>

              {details && details.funFact && (
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-xl border-l-4 border-blue-500">
                  <h4 className="text-blue-200 text-xs font-bold uppercase mb-1">Did You Know?</h4>
                  <p className="text-gray-300 text-sm italic">
                    "{details.funFact}"
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600 flex flex-col items-center justify-center h-full animate-pulse-slow">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-6 shadow-inner ring-1 ring-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-500 mb-2">Explore India</h3>
            <p className="text-sm font-light max-w-xs mx-auto">
              Hover over any state on the map to discover its rich history, culture, and demographics.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}

export default App;
