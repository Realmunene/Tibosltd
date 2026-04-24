import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalculator, 
  faHome, 
  faRuler, 
  faMoneyBillWave,
  faHardHat,
  faCheckCircle,
  faArrowRight,
  faBuilding,
  faLayerGroup,
  faFileSignature
} from '@fortawesome/free-solid-svg-icons';

export default function MaisonetteCost() {
  const [squareMeters, setSquareMeters] = useState(150);
  const [finishLevel, setFinishLevel] = useState('standard');

  const costPerSqm = {
    basic: 35000,
    standard: 55000,
    luxury: 85000
  };

  const finishDescriptions = {
    basic: "Essential finishes with standard materials, ideal for budget-conscious projects",
    standard: "Quality finishes with premium materials, excellent value for money",
    luxury: "High-end finishes with imported materials, luxury fixtures and fittings"
  };

  const totalCost = squareMeters * costPerSqm[finishLevel];

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
              Maisonette Cost
            </span>
            <br />
            <span className="text-white">Distribution Calculator</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Plan your investment with our interactive cost calculator. Get accurate estimates based on your preferences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Calculator */}
          <div className="space-y-8">
            {/* Calculator Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCalculator} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Cost Calculator</h2>
              </div>

              {/* Square Meter Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-300 font-semibold text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faRuler} className="text-[#FF9306]" />
                    Floor Area (Square Meters)
                  </label>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                    {squareMeters} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="300"
                  step="10"
                  value={squareMeters}
                  onChange={(e) => setSquareMeters(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF9306]"
                  style={{
                    background: `linear-gradient(to right, #FF9306 0%, #FF9306 ${((squareMeters - 80) / 220) * 100}%, rgba(255,255,255,0.2) ${((squareMeters - 80) / 220) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>80 m²</span>
                  <span>150 m²</span>
                  <span>220 m²</span>
                  <span>300 m²</span>
                </div>
              </div>

              {/* Finish Level Selection */}
              <div className="mb-6">
                <label className="block text-gray-300 font-semibold mb-3 text-sm flex items-center gap-2">
                  <FontAwesomeIcon icon={faLayerGroup} className="text-[#FF9306]" />
                  Finish Quality
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['basic', 'standard', 'luxury'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setFinishLevel(level)}
                      className={`px-4 py-3 rounded-xl capitalize font-medium transition-all duration-300 ${
                        finishLevel === level
                          ? 'bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black shadow-lg scale-105'
                          : 'bg-white/10 text-gray-400 hover:text-white border border-white/20 hover:border-[#FF9306]/50'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  {finishDescriptions[finishLevel]}
                </p>
              </div>

              {/* Total Cost Display */}
              <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-5 border border-[#FF9306]/20 text-center">
                <p className="text-gray-400 text-sm mb-2">Estimated Total Cost</p>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                  {formatCurrency(totalCost)}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  *Includes materials, labor, and basic finishes
                </p>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <FontAwesomeIcon icon={faHome} className="text-[#FF9306] text-xl mb-2" />
                <p className="text-white font-semibold text-sm">Average Size</p>
                <p className="text-gray-400 text-xs">150-250 m²</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <FontAwesomeIcon icon={faBuilding} className="text-[#FF9306] text-xl mb-2" />
                <p className="text-white font-semibold text-sm">Build Time</p>
                <p className="text-gray-400 text-xs">6-12 months</p>
              </div>
            </div>
          </div>

          {/* Right Column - Cost Breakdown */}
          <div className="space-y-8">
            {/* Cost Breakdown Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9306]/20 to-[#FF6A00]/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-[#FF9306] text-lg" />
                </div>
                <h2 className="text-xl font-bold text-white">Cost Breakdown</h2>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-gray-300 text-sm">Materials (40%)</span>
                  <span className="text-white font-semibold">{formatCurrency(totalCost * 0.4)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-gray-300 text-sm">Labor (30%)</span>
                  <span className="text-white font-semibold">{formatCurrency(totalCost * 0.3)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-gray-300 text-sm">Professional Fees (15%)</span>
                  <span className="text-white font-semibold">{formatCurrency(totalCost * 0.15)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-gray-300 text-sm">Permits & Approvals (10%)</span>
                  <span className="text-white font-semibold">{formatCurrency(totalCost * 0.1)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-gray-300 text-sm">Contingency (5%)</span>
                  <span className="text-white font-semibold">{formatCurrency(totalCost * 0.05)}</span>
                </div>
              </div>

              {/* Total Line */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl">
                  <span className="text-white font-semibold">Total Estimated Cost</span>
                  <span className="text-[#FF9306] font-bold text-lg">{formatCurrency(totalCost)}</span>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faHardHat} className="text-[#FF9306] text-lg mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-2">What's Included</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-gray-400 text-xs">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                      Structural construction
                    </li>
                    <li className="flex items-center gap-2 text-gray-400 text-xs">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                      Electrical and plumbing
                    </li>
                    <li className="flex items-center gap-2 text-gray-400 text-xs">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                      Flooring and wall finishes
                    </li>
                    <li className="flex items-center gap-2 text-gray-400 text-xs">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                      Windows and doors
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
              <p className="text-amber-500 text-xs text-center">
                ⚠️ This is an estimate only. Final costs may vary based on location, material availability, and specific requirements. Contact us for a detailed quote.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">Get a personalized quote from our construction experts</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Request Detailed Quote
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            Prices are in Kenyan Shillings (KES) and are subject to change based on market conditions.
          </p>
        </div>
      </div>
    </section>
  );
}