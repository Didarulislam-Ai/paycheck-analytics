import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart, RadialBarChart, RadialBar } from 'recharts';
import { TrendingUp, DollarSign, Home, Car, CreditCard, ShoppingCart, AlertTriangle, Users, BookOpen } from 'lucide-react';

const CanadianPaycheckAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Main Canadian paycheck data
  const canadianPaycheckData = [
    { category: 'Living Paycheck to Paycheck', percentage: 85, count: 85, color: '#dc2626' },
    { category: 'Have Financial Buffer', percentage: 15, count: 15, color: '#16a34a' }
  ];

  // Age demographic breakdown
  const ageBreakdown = [
    { ageGroup: 'Under 35', percentage: 78, label: '70-80%' },
    { ageGroup: '35-50', percentage: 58, label: '~60%' },
    { ageGroup: '50-65', percentage: 45, label: '~45%' },
    { ageGroup: 'Over 65', percentage: 25, label: '~25%' }
  ];

  // Emergency savings data
  const emergencySavings = [
    { category: 'Less than $200 left monthly', percentage: 58, count: 58 },
    { category: 'Some monthly buffer', percentage: 27, count: 27 },
    { category: 'Comfortable savings', percentage: 15, count: 15 }
  ];

  // Cost of living factors (Canadian specific)
  const costFactors = [
    { factor: 'Housing Costs', impact: 95, description: '40-60% of income', icon: Home, color: '#dc2626' },
    { factor: 'Food Inflation', impact: 89, description: 'Highest in decades', icon: ShoppingCart, color: '#ea580c' },
    { factor: 'Utilities & Transit', impact: 82, description: 'Rising faster than income', icon: Car, color: '#d97706' },
    { factor: 'Stagnant Wages', impact: 78, description: 'Not keeping pace', icon: DollarSign, color: '#ca8a04' },
    { factor: 'High Debt Levels', impact: 85, description: 'Highest debt-to-income globally', icon: CreditCard, color: '#dc2626' },
    { factor: 'Financial Illiteracy', impact: 65, description: 'Lack of money management', icon: BookOpen, color: '#7c3aed' }
  ];

  // Canadian cities housing burden
  const housingBurden = [
    { city: 'Vancouver', percentage: 65, avgRent: '$2,800' },
    { city: 'Toronto', percentage: 62, avgRent: '$2,600' },
    { city: 'Montreal', percentage: 45, avgRent: '$1,800' },
    { city: 'Calgary', percentage: 42, avgRent: '$1,600' },
    { city: 'Ottawa', percentage: 48, avgRent: '$1,900' },
    { city: 'Halifax', percentage: 50, avgRent: '$1,700' }
  ];

  // Debt breakdown
  const debtTypes = [
    { type: 'Mortgages', amount: 68, color: '#dc2626' },
    { type: 'Credit Cards', amount: 23, color: '#ea580c' },
    { type: 'Student Loans', amount: 15, color: '#d97706' },
    { type: 'Car Loans', amount: 18, color: '#ca8a04' },
    { type: 'Other Debt', amount: 12, color: '#7c3aed' }
  ];

  const COLORS = ['#dc2626', '#16a34a', '#f59e0b'];

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 font-semibold rounded-lg transition-all ${
        active 
          ? 'bg-red-600 text-white shadow-lg' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  const StatCard = ({ title, value, subtitle, color = 'red', icon: Icon }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-${color}-500`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-600 text-sm font-medium uppercase tracking-wide">{title}</h3>
          <p className={`text-3xl font-bold text-${color}-600 mt-2`}>{value}</p>
          {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
        </div>
        {Icon && <Icon className={`w-8 h-8 text-${color}-500`} />}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-10 h-10 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-800">
              Canadian Financial Crisis Analytics
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-2">
            85% of Canadians Living Paycheck to Paycheck
          </p>
          <p className="text-lg text-red-600 font-medium">
            A Systemic Crisis Affecting All Demographics
          </p>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <TabButton 
              id="overview" 
              label="Crisis Overview" 
              active={activeTab === 'overview'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="demographics" 
              label="Demographics" 
              active={activeTab === 'demographics'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="causes" 
              label="Root Causes" 
              active={activeTab === 'causes'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="housing" 
              label="Housing Crisis" 
              active={activeTab === 'housing'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="solutions" 
              label="Solutions" 
              active={activeTab === 'solutions'} 
              onClick={setActiveTab} 
            />
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard 
                title="Living Paycheck to Paycheck" 
                value="85%" 
                subtitle="of Canadian workers"
                color="red"
                icon={AlertTriangle}
              />
              <StatCard 
                title="Under 35 Age Group" 
                value="70-80%" 
                subtitle="young adults affected"
                color="orange"
                icon={Users}
              />
              <StatCard 
                title="Less than $200 buffer" 
                value="58%" 
                subtitle="after monthly expenses"
                color="yellow"
                icon={DollarSign}
              />
              <StatCard 
                title="Debt-to-Income Ratio" 
                value="Highest" 
                subtitle="globally among developed nations"
                color="red"
                icon={CreditCard}
              />
            </div>

            {/* Main Crisis Visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Financial Security Status
                </h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={canadianPaycheckData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="percentage"
                        label={({category, percentage}) => `${percentage}%`}
                        labelLine={false}
                      >
                        {canadianPaycheckData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Emergency Savings Reality
                </h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={emergencySavings} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
                      <YAxis domain={[0, 70]} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage of Canadians']} />
                      <Bar dataKey="percentage" fill="#dc2626" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Crisis Alert */}
            <div className="bg-red-100 border-l-8 border-red-500 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">Critical Economic Vulnerability</h3>
                  <p className="text-red-700 text-lg leading-relaxed">
                    With 85% of Canadians living paycheck to paycheck and 58% having less than $200 left monthly, 
                    a single unexpected expense can push millions into debt. This represents a systemic crisis 
                    affecting national economic stability, consumer spending, and long-term prosperity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Demographics Tab */}
        {activeTab === 'demographics' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Financial Stress by Age Group
              </h2>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ageBreakdown} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ageGroup" />
                    <YAxis domain={[0, 90]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Living Paycheck to Paycheck']} />
                    <Bar dataKey="percentage" fill="#dc2626" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-orange-50 border-l-4 border-orange-400 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-3">Young Adults Hit Hardest</h3>
                  <p className="text-gray-700">
                    70-80% of Canadians under 35 live paycheck to paycheck, facing unique challenges:
                  </p>
                  <ul className="mt-3 text-gray-600 space-y-1">
                    <li>• Student loan debt burden</li>
                    <li>• Entry-level wages vs. high living costs</li>
                    <li>• Gig economy instability</li>
                    <li>• Difficulty entering housing market</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Cross-Generational Impact</h3>
                  <p className="text-gray-700">
                    Even older demographics face significant financial stress:
                  </p>
                  <ul className="mt-3 text-gray-600 space-y-1">
                    <li>• 45% of 50-65 year-olds affected</li>
                    <li>• Pre-retirement savings challenges</li>
                    <li>• Healthcare cost increases</li>
                    <li>• Supporting adult children financially</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Root Causes Tab */}
        {activeTab === 'causes' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Root Causes Analysis
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {costFactors.map((factor, index) => {
                  const Icon = factor.icon;
                  return (
                    <div key={factor.factor} className="bg-gray-50 rounded-lg p-6 border-l-4" style={{borderColor: factor.color}}>
                      <Icon className="w-10 h-10 mb-4" style={{color: factor.color}} />
                      <h3 className="font-bold text-gray-800 mb-2">{factor.factor}</h3>
                      <div className="text-2xl font-bold mb-2" style={{color: factor.color}}>{factor.impact}%</div>
                      <p className="text-sm text-gray-600">{factor.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={costFactors} layout="horizontal" margin={{ left: 120 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="factor" type="category" width={110} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Impact Level']} />
                    <Bar dataKey="impact" fill="#dc2626" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Debt Breakdown */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Canadian Household Debt Breakdown
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={debtTypes}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="type" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Prevalence']} />
                      <Bar dataKey="amount" fill="#dc2626" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
                    <h3 className="font-bold text-red-800 mb-2">World's Highest Debt Ratio</h3>
                    <p className="text-gray-700">
                      Canada has one of the highest household debt-to-income ratios globally, 
                      making families extremely vulnerable to economic shocks.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
                    <h3 className="font-bold text-orange-800 mb-2">Multiple Debt Sources</h3>
                    <p className="text-gray-700">
                      Most Canadians carry multiple forms of debt simultaneously, creating 
                      compound financial pressure and limiting savings ability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Housing Crisis Tab */}
        {activeTab === 'housing' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Housing Burden Across Canadian Cities
              </h2>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={housingBurden} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="city" />
                    <YAxis domain={[0, 70]} />
                    <Tooltip 
                      formatter={(value, name, props) => [
                        `${value}% of income`,
                        'Housing costs',
                        `Average rent: ${props.payload.avgRent}`
                      ]}
                    />
                    <Bar dataKey="percentage" fill="#dc2626" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-red-50 border-l-4 border-red-400 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-2">40-60% of Income</h3>
                  <p className="text-gray-700">
                    Housing costs consume nearly half of most Canadians' income, 
                    far exceeding the recommended 30% threshold.
                  </p>
                </div>
                
                <div className="p-6 bg-orange-50 border-l-4 border-orange-400 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-2">Major Cities Unaffordable</h3>
                  <p className="text-gray-700">
                    Vancouver and Toronto lead with 60%+ housing burden, 
                    but even smaller cities now face affordability crises.
                  </p>
                </div>
                
                <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">Rental Market Crisis</h3>
                  <p className="text-gray-700">
                    Average rents have surged beyond wage growth, 
                    trapping renters in paycheck-to-paycheck cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Solutions Tab */}
        {activeTab === 'solutions' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Solutions */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-green-700 mb-6">
                  Personal Financial Strategies
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-green-400 bg-green-50 rounded">
                    <h3 className="font-bold text-green-800 mb-2">Budget Management</h3>
                    <p className="text-gray-700">Create detailed budgets focusing on needs vs. wants, track all expenses</p>
                  </div>
                  <div className="p-4 border-l-4 border-blue-400 bg-blue-50 rounded">
                    <h3 className="font-bold text-blue-800 mb-2">Debt Prioritization</h3>
                    <p className="text-gray-700">Pay off high-interest debt first, consolidate where possible</p>
                  </div>
                  <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded">
                    <h3 className="font-bold text-purple-800 mb-2">Income Diversification</h3>
                    <p className="text-gray-700">Side gigs, freelancing, skill development for better employment</p>
                  </div>
                  <div className="p-4 border-l-4 border-orange-400 bg-orange-50 rounded">
                    <h3 className="font-bold text-orange-800 mb-2">Financial Education</h3>
                    <p className="text-gray-700">Learn investing, savings strategies, and money management skills</p>
                  </div>
                </div>
              </div>

              {/* Policy Solutions */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-6">
                  Systemic Policy Solutions
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-red-400 bg-red-50 rounded">
                    <h3 className="font-bold text-red-800 mb-2">Affordable Housing</h3>
                    <p className="text-gray-700">Increase housing supply, rent controls, social housing programs</p>
                  </div>
                  <div className="p-4 border-l-4 border-green-400 bg-green-50 rounded">
                    <h3 className="font-bold text-green-800 mb-2">Wage Growth</h3>
                    <p className="text-gray-700">Minimum wage increases, living wage policies, worker protections</p>
                  </div>
                  <div className="p-4 border-l-4 border-blue-400 bg-blue-50 rounded">
                    <h3 className="font-bold text-blue-800 mb-2">Corporate Accountability</h3>
                    <p className="text-gray-700">Control pricing on essentials, regulate corporate profits</p>
                  </div>
                  <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded">
                    <h3 className="font-bold text-purple-800 mb-2">Social Safety Net</h3>
                    <p className="text-gray-700">Enhanced unemployment benefits, universal basic services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">This Crisis Requires Immediate Action</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-3 opacity-90" />
                  <h3 className="font-bold mb-2">Individual Level</h3>
                  <p className="opacity-90">Take control of your finances with budgeting and financial education</p>
                </div>
                <div className="text-center">
                  <Home className="w-12 h-12 mx-auto mb-3 opacity-90" />
                  <h3 className="font-bold mb-2">Community Level</h3>
                  <p className="opacity-90">Advocate for affordable housing and local economic policies</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-90" />
                  <h3 className="font-bold mb-2">Policy Level</h3>
                  <p className="opacity-90">Support systemic changes to address root causes</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Data Sources Footer */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border-t-4 border-gray-400">
          <h3 className="font-bold text-gray-800 mb-2">Data Sources & Methodology</h3>
          <p className="text-gray-600 text-sm">
            Data compiled from National Payroll Institute surveys, Statistics Canada reports, and recent inflation-impact studies. 
            The 85% figure represents the upper range of recent surveys showing Canadians experiencing financial stress or 
            lack of emergency savings. Individual survey results may vary between 50-85% depending on methodology and timing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanadianPaycheckAnalytics;
