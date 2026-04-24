import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRuler, 
  faDollarSign, 
  faHardHat, 
  faCheckCircle,
  faArrowRight,
  faDoorOpen,
  faLayerGroup,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

export default function PerimeterWallCalculator() {
  const [length, setLength] = useState(50);
  const [height, setHeight] = useState(2.1);
  const [gateIncluded, setGateIncluded] = useState(true);
  const [gateCount, setGateCount] = useState(1);
  const [wallType, setWallType] = useState('standard');

  // Cost calculations based on wall type
  const wallTypeCosts = {
    standard: 8500,
    reinforced: 12000,
    decorative: 15000
  };
  
  const wallTypeNames = {
    standard: 'Standard Wall',
    reinforced: 'Reinforced Wall',
    decorative: 'Decorative Wall'
  };

  const wallArea = length * height;
  const costPerSqm = wallTypeCosts[wallType];
  const baseWallCost = wallArea * costPerSqm;
  const gateCost = gateIncluded ? 75000 * gateCount : 0;
  const totalCost = baseWallCost + gateCost;

  const formatCurrency = (amount) => {
    return `KES ${amount.toLocaleString()}`;
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, rgba(255,147,6,0.03) 0px, rgba(255,147,6,0.03) 1px, transparent 1px, transparent 60px),
              repeating-linear-gradient(0deg, rgba(255,147,6,0.03) 0px, rgba(255,147,6,0.03) 1px, transparent 1px, transparent 60px)
            `,
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF9306]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">COST CALCULATOR</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Perimeter Wall
            </span>
            <br />
            <span className="text-white">Cost Calculator</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Get accurate estimates for your property wall construction based on your specific requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Calculator */}
          <div className="space-y-8">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faRuler} className="text-[#FF9306]" />
                Wall Specifications
              </h2>

              {/* Wall Length Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-300 font-semibold text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faRuler} className="text-[#FF9306]" />
                    Wall Length
                  </label>
                  <span className="text-[#FF9306] font-bold text-sm">{length} meters</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="5"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF9306]"
                  style={{
                    background: `linear-gradient(to right, #FF9306 0%, #FF9306 ${((length - 20) / 180) * 100}%, rgba(255,255,255,0.2) ${((length - 20) / 180) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>20m</span>
                  <span>60m</span>
                  <span>120m</span>
                  <span>200m</span>
                </div>
              </div>

              {/* Wall Height Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-300 font-semibold text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faBuilding} className="text-[#FF9306]" />
                    Wall Height
                  </label>
                  <span className="text-[#FF9306] font-bold text-sm">{height} meters</span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="3"
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF9306]"
                  style={{
                    background: `linear-gradient(to right, #FF9306 0%, #FF9306 ${((height - 1.5) / 1.5) * 100}%, rgba(255,255,255,0.2) ${((height - 1.5) / 1.5) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1.5m</span>
                  <span>2.0m</span>
                  <span>2.5m</span>
                  <span>3.0m</span>
                </div>
              </div>

              {/* Wall Type Selection */}
              <div className="mb-6">
                <label className="block text-gray-300 font-semibold mb-3 text-sm flex items-center gap-2">
                  <FontAwesomeIcon icon={faLayerGroup} className="text-[#FF9306]" />
                  Wall Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['standard', 'reinforced', 'decorative'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setWallType(type)}
                      className={`px-3 py-2 rounded-xl capitalize text-sm font-medium transition-all duration-300 ${
                        wallType === type
                          ? 'bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black shadow-lg scale-105'
                          : 'bg-white/10 text-gray-400 hover:text-white border border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  {wallType === 'standard' && 'Standard concrete block wall with plaster finish'}
                  {wallType === 'reinforced' && 'Reinforced wall with extra pillars and steel bars'}
                  {wallType === 'decorative' && 'Decorative wall with premium stone cladding'}
                </p>
              </div>

              {/* Gate Options */}
              <div className="mb-6">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={gateIncluded}
                    onChange={(e) => setGateIncluded(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-white/10 text-[#FF9306] focus:ring-[#FF9306] focus:ring-offset-0"
                  />
                  <span className="text-gray-300 font-semibold text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faDoorOpen} className="text-[#FF9306]" />
                    Include Gate(s)
                  </span>
                </label>
              </div>

              {gateIncluded && (
                <div className="mb-6 pl-6 border-l-2 border-[#FF9306]/30">
                  <label className="block text-gray-300 font-semibold mb-3 text-sm">
                    Number of Gates
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map(num => (
                      <button
                        key={num}
                        onClick={() => setGateCount(num)}
                        className={`w-12 h-10 rounded-lg font-medium transition-all duration-300 ${
                          gateCount === num
                            ? 'bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black'
                            : 'bg-white/10 text-gray-400 hover:text-white border border-white/20'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Total Cost Display */}
              <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-5 border border-[#FF9306]/20 text-center">
                <p className="text-gray-400 text-sm mb-2">Estimated Total Cost</p>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                  {formatCurrency(totalCost)}
                </div>
                <div className="text-xs text-gray-500 mt-2 space-y-1">
                  <p>Wall Construction: {formatCurrency(baseWallCost)}</p>
                  {gateIncluded && <p>Gates: {formatCurrency(gateCost)}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            {/* Cost Components */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faDollarSign} className="text-[#FF9306]" />
                Cost Components
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                  <FontAwesomeIcon icon={faHardHat} className="text-[#FF9306] text-2xl mb-2" />
                  <h3 className="text-white font-semibold text-sm">Materials (60%)</h3>
                  <p className="text-gray-500 text-xs">Blocks, cement, sand, reinforcement</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                  <FontAwesomeIcon icon={faDollarSign} className="text-[#FF9306] text-2xl mb-2" />
                  <h3 className="text-white font-semibold text-sm">Labor (30%)</h3>
                  <p className="text-gray-500 text-xs">Masonry work and construction</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                  <FontAwesomeIcon icon={faRuler} className="text-[#FF9306] text-2xl mb-2" />
                  <h3 className="text-white font-semibold text-sm">Finishing (10%)</h3>
                  <p className="text-gray-500 text-xs">Plastering and painting</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#FF9306] text-2xl mb-2" />
                  <h3 className="text-white font-semibold text-sm">Quality Assurance</h3>
                  <p className="text-gray-500 text-xs">Engineer supervision included</p>
                </div>
              </div>
            </div>

            {/* Why Choose Tibos */}
            <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-6 border border-[#FF9306]/20">
              <h3 className="text-lg font-bold text-white mb-4">Why Choose Tibos for Your Perimeter Wall?</h3>
              <ul className="space-y-2">
                {[
                  "Professional engineering design",
                  "High-quality materials from trusted suppliers",
                  "Experienced construction team",
                  "Timely project completion",
                  "5-year structural warranty"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-gray-500 text-xs">Wall Area</p>
                <p className="text-white font-bold text-lg">{wallArea} m²</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-gray-500 text-xs">Cost per m²</p>
                <p className="text-white font-bold text-lg">{formatCurrency(costPerSqm)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Secure Your Property?</h3>
            <p className="text-gray-400 mb-6">Get a professional, detailed quote from our construction experts</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Request Professional Quote
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            *Prices include materials, labor, and standard finishing. Final costs may vary based on location and specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}