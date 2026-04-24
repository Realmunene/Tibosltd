import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faChartLine, 
  faPiggyBank, 
  faBullseye,
  faArrowRight,
  faCheckCircle,
  faClock,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

export default function WeekChallenge() {
  const [weeklySavings, setWeeklySavings] = useState(5000);
  const [weeksCompleted, setWeeksCompleted] = useState(0);

  const totalSaved = weeklySavings * weeksCompleted;
  const projectedTotal = weeklySavings * 52;
  const progressPercentage = (weeksCompleted / 52) * 100;
  const remainingWeeks = 52 - weeksCompleted;
  const remainingToSave = projectedTotal - totalSaved;

  const presetAmounts = [2000, 5000, 10000, 20000];

  const challengeTips = [
    "Save your loose change at the end of each day",
    "Cut one non-essential expense per week",
    "Automate your weekly transfers",
    "Track your progress visually",
    "Share your goal with family for accountability"
  ];

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
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF9306]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">FINANCIAL FREEDOM</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              52 Week Housing
            </span>
            <br />
            <span className="text-white">Challenge</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Save your way to home ownership in one year with our systematic savings challenge
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Challenge Info */}
          <div className="space-y-8">
            {/* Overview Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faBullseye} className="text-[#FF9306]" />
                Challenge Overview
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                The 52 Week Housing Challenge helps you save systematically for your dream home. 
                Start small and increase your savings gradually - by the end of 52 weeks, you'll 
                have substantial funds for a down payment or construction materials.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-[#FF9306] text-2xl mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-sm">52 Weeks</h3>
                <p className="text-gray-500 text-xs">One year to transform your housing dreams</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group">
                <FontAwesomeIcon icon={faChartLine} className="text-[#FF9306] text-2xl mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-sm">Progressive Savings</h3>
                <p className="text-gray-500 text-xs">Start small, increase gradually</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group">
                <FontAwesomeIcon icon={faPiggyBank} className="text-[#FF9306] text-2xl mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-sm">Goal Tracking</h3>
                <p className="text-gray-500 text-xs">Monitor your progress</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#FF9306]/40 transition-all duration-300 group">
                <FontAwesomeIcon icon={faBullseye} className="text-[#FF9306] text-2xl mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-sm">Achievable Targets</h3>
                <p className="text-gray-500 text-xs">Realistic weekly goals</p>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-xl p-5 border border-[#FF9306]/20">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faRocket} className="text-[#FF9306]" />
                Pro Tips for Success
              </h3>
              <ul className="space-y-2">
                {challengeTips.map((tip, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-400 text-xs">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Tracker */}
          <div className="space-y-8">
            {/* Progress Tracker Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faChartLine} className="text-[#FF9306]" />
                Track Your Progress
              </h2>

              {/* Weekly Savings Input */}
              <div className="mb-6">
                <label className="block text-gray-300 font-semibold mb-3 text-sm">
                  Weekly Savings Amount (KES)
                </label>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setWeeklySavings(amount)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                        weeklySavings === amount
                          ? "bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black"
                          : "bg-white/10 text-gray-400 hover:text-white border border-white/20"
                      }`}
                    >
                      KES {amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={weeklySavings}
                  onChange={(e) => setWeeklySavings(Number(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-colors"
                />
              </div>

              {/* Weeks Completed Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-300 font-semibold text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-[#FF9306]" />
                    Weeks Completed
                  </label>
                  <span className="text-[#FF9306] font-bold text-sm">{weeksCompleted} / 52</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="52"
                  value={weeksCompleted}
                  onChange={(e) => setWeeksCompleted(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF9306]"
                  style={{
                    background: `linear-gradient(to right, #FF9306 0%, #FF9306 ${progressPercentage}%, rgba(255,255,255,0.2) ${progressPercentage}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Week 0</span>
                  <span>Week 13</span>
                  <span>Week 26</span>
                  <span>Week 39</span>
                  <span>Week 52</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Overall Progress</span>
                  <span>{progressPercentage.toFixed(0)}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#FF9306] to-[#FF6A00] rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Savings Summary */}
              <div className="space-y-3">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Total Saved So Far</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
                    KES {totalSaved.toLocaleString()}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-gray-500 text-xs mb-1">Projected Annual Total</p>
                    <p className="text-sm font-bold text-white">KES {projectedTotal.toLocaleString()}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-gray-500 text-xs mb-1">Remaining Weeks</p>
                    <p className="text-sm font-bold text-white">{remainingWeeks} weeks left</p>
                  </div>
                </div>
                <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
                  <p className="text-amber-500 text-xs text-center">
                    You need to save KES {remainingToSave.toLocaleString()} more to reach your yearly goal!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Journey?</h3>
            <p className="text-gray-400 mb-6">Join thousands of Kenyans saving towards their dream home</p>
            <button className="group relative bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-8 py-3.5 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Join the 52 Week Challenge
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9306] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            Start today and be one step closer to owning your dream home. Every shilling counts!
          </p>
        </div>
      </div>
    </section>
  );
}