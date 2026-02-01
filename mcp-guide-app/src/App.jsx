import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Zap, Shield, Layers, ArrowRight, Menu, X } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">MCP Documentation</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {[
                { id: 'overview', label: 'Overview', icon: Zap },
                { id: 'comparison', label: 'Comparison', icon: Layers },
                { id: 'guide', label: 'Guide', icon: Shield },
                { id: 'concepts', label: 'Concepts', icon: ChevronRight },
                { id: 'protocols', label: 'Protocols', icon: Code },
                { id: 'technical', label: 'Technical', icon: Layers },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            <div className="px-4 py-2 space-y-1">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'comparison', label: 'Comparison' },
                { id: 'guide', label: 'Guide' },
                { id: 'concepts', label: 'Concepts' },
                { id: 'protocols', label: 'Protocols' },
                { id: 'technical', label: 'Technical' },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeSection === 'overview' && <OverviewSection onNavigate={scrollToSection} />}
          {activeSection === 'comparison' && <ComparisonSection />}
          {activeSection === 'guide' && <GuideSection />}
          {activeSection === 'concepts' && <ConceptsSection />}
          {activeSection === 'protocols' && <ProtocolsSection />}
          {activeSection === 'technical' && <TechnicalSection />}
        </div>
      </div>
    </div>
  );
};

const OverviewSection = ({ onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Understanding MCP
        </h2>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
          Model Context Protocol - The Universal Language for AI Integration
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
            <span className="text-4xl">🎯</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">What is MCP?</h3>
          <p className="text-gray-300 leading-relaxed">
            MCP (Model Context Protocol) is a standardized protocol created by Anthropic that allows AI assistants like Claude to connect to external data sources and tools through standardized servers. Think of it as USB for AI - a universal standard that works everywhere.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
            <span className="text-4xl">⚡</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Why MCP Matters</h3>
          <p className="text-gray-300 leading-relaxed">
            Before MCP, connecting AI to each service required custom code. MCP standardizes this - build once, works with any MCP-compatible AI. It's the difference between having 20 different chargers vs. one universal charger.
          </p>
        </div>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <h3 className="text-3xl font-bold text-white mb-6">Key Benefits</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🔌', title: 'Standardization', desc: 'One protocol for all integrations' },
            { icon: '🔐', title: 'Security', desc: 'Built-in auth and permissions' },
            { icon: '⚡', title: 'Efficiency', desc: 'Direct access, no manual steps' },
            { icon: '🧩', title: 'Modularity', desc: 'Mix and match any servers' },
          ].map((benefit, idx) => (
            <div key={idx} className="text-center p-6 bg-slate-900/50 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h4 className="text-lg font-bold text-purple-300 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => onNavigate('comparison')}
          className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
        >
          <span>See How It Works</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const ComparisonSection = () => {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">With MCP vs Without MCP</h2>
        <p className="text-xl text-gray-300">See the dramatic difference MCP makes</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Without MCP */}
        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-8 border border-red-500/30">
          <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center">
            <span className="mr-3">❌</span> Without MCP
          </h3>
          
          <div className="space-y-4">
            {[
              { title: 'User Request', desc: '"Show me my Q3 sales data from Google Drive"' },
              { title: 'AI Response', desc: 'AI can only provide general guidance: "I cannot access your Google Drive directly. You\'ll need to download the file and upload it to me."' },
              { title: 'Manual Steps', desc: '• Navigate to Google Drive\n• Search for the file\n• Download it\n• Upload to AI interface' },
              { title: 'AI Analysis', desc: 'AI can now analyze, but lost context and time' },
              { title: 'Limitations', desc: '❌ Fragmented workflow\n❌ Multiple manual steps\n❌ No real-time access' },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-red-500">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-gray-300 text-sm whitespace-pre-line">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* With MCP */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30">
          <h3 className="text-3xl font-bold text-green-300 mb-6 flex items-center">
            <span className="mr-3">✅</span> With MCP
          </h3>
          
          <div className="space-y-4">
            {[
              { title: 'User Request', desc: '"Show me my Q3 sales data from Google Drive"' },
              { title: 'AI Uses MCP', desc: 'AI connects to Google Drive MCP server through standardized protocol' },
              { title: 'MCP Server', desc: '• Authenticates securely\n• Searches Google Drive\n• Retrieves the file\n• Returns data to AI' },
              { title: 'AI Response', desc: 'AI immediately analyzes and provides insights in one seamless interaction' },
              { title: 'Benefits', desc: '✅ Seamless workflow\n✅ Fully automated\n✅ Real-time access' },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-green-500">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-gray-300 text-sm whitespace-pre-line">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">🎯 Key Advantages of MCP</h3>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          {[
            'Standardization: One protocol works across all tools',
            'Security: Built-in authentication and permissions',
            'Efficiency: Direct access eliminates manual steps',
            'Scalability: Easy to add new integrations',
            'Modularity: Mix and match different MCP servers',
            'Developer-Friendly: Build once, works everywhere',
          ].map((advantage, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <span className="text-purple-400 font-bold">✓</span>
              <span>{advantage}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const GuideSection = () => {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">Understanding MCP in Detail</h2>
        <p className="text-xl text-gray-300">How Claude identifies and uses MCP servers</p>
      </div>

      <div className="space-y-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-3xl font-bold text-purple-300 mb-6">🎯 How Claude Identifies MCP Servers</h3>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/20 mb-6">
            <p className="text-gray-300 text-lg">
              Think of it like a universal remote - you still tell it WHICH device to control, but Claude figures it out automatically based on your request!
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'MCP Servers are Pre-Connected',
                desc: 'Before you chat, MCP servers are already set up (like installing apps on your phone)',
                examples: ['Google Drive MCP server', 'Slack MCP server', 'Database MCP server', 'GitHub MCP server'],
              },
              {
                step: 2,
                title: 'Claude Reads Your Request',
                desc: 'Example: "Get my Q3 report from Google Drive"',
                examples: ['Keywords: "Google Drive"', 'Action needed: Get/retrieve a file', 'What to look for: Q3 report'],
              },
              {
                step: 3,
                title: 'Claude Checks Available Tools',
                desc: 'Claude looks at all connected servers and their capabilities',
                examples: ['✅ Google Drive server - can search and retrieve files (RELEVANT!)', '❌ Slack server - sends messages (not relevant)', '❌ Database server - queries data (not relevant)'],
              },
              {
                step: 4,
                title: 'Claude Picks the Right One',
                desc: 'Claude automatically selects the Google Drive MCP server and uses it',
                examples: ['Decision made based on context and keywords', 'No manual selection needed from user'],
              },
            ].map((item) => (
              <div key={item.step} className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 mb-3">{item.desc}</p>
                    <ul className="space-y-1">
                      {item.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start space-x-2">
                          <span className="text-purple-400">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">💡 Real-World Example</h3>
          <div className="bg-slate-900/50 p-6 rounded-xl font-mono text-sm">
            <div className="text-green-400 mb-2">User Request:</div>
            <div className="text-gray-300 mb-4">"Send the sales report from my drive to the #sales Slack channel"</div>
            
            <div className="text-blue-400 mb-2">Claude's Decision Process:</div>
            <div className="text-gray-300 space-y-1 ml-4">
              <div>├─ "sales report from my drive"</div>
              <div className="ml-4">→ Identifies: Google Drive MCP server needed</div>
              <div className="ml-4">→ Action: Retrieve file</div>
              <div>└─ "send to #sales Slack channel"</div>
              <div className="ml-4">→ Identifies: Slack MCP server needed</div>
              <div className="ml-4">→ Action: Send message</div>
            </div>
            
            <div className="text-purple-400 mt-4 mb-2">Execution:</div>
            <div className="text-gray-300 space-y-1 ml-4">
              <div>1. Calls Google Drive MCP → retrieves sales report</div>
              <div>2. Calls Slack MCP → sends report to #sales channel</div>
              <div>3. Returns: "Done! Sent your sales report to #sales"</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-3xl font-bold text-purple-300 mb-6">🎮 The Universal Remote Analogy</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-6 rounded-xl border border-red-500/30">
              <h4 className="text-xl font-bold text-red-300 mb-3">Without MCP</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• TV has its own remote</li>
                <li>• AC has its own remote</li>
                <li>• Music system has its own remote</li>
                <li>• Learn each one separately</li>
                <li>• New device = new remote to learn</li>
              </ul>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/30">
              <h4 className="text-xl font-bold text-green-300 mb-3">With MCP</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✅ ONE universal remote for ALL</li>
                <li>✅ All devices speak same language</li>
                <li>✅ Automatically knows capabilities</li>
                <li>✅ Add device? Works instantly!</li>
                <li>✅ Just say what you want</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-3xl font-bold text-white mb-6">🏗️ MCP Server = API for LLMs</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="text-left p-4 text-purple-300 font-bold">Traditional API</th>
                  <th className="text-left p-4 text-purple-300 font-bold">MCP Server</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-purple-500/10">
                  <td className="p-4">Designed for human developers</td>
                  <td className="p-4">Designed specifically for LLMs</td>
                </tr>
                <tr className="border-b border-purple-500/10">
                  <td className="p-4">Requires custom code for each LLM</td>
                  <td className="p-4">Standardized interface for all LLMs</td>
                </tr>
                <tr className="border-b border-purple-500/10">
                  <td className="p-4">No standard format for LLM interaction</td>
                  <td className="p-4">Built-in patterns for tool discovery & usage</td>
                </tr>
                <tr>
                  <td className="p-4">Each integration built from scratch</td>
                  <td className="p-4">Build once, works everywhere</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConceptsSection = () => {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">MCP Core Concepts</h2>
        <p className="text-xl text-gray-300">Context, Cache, Performance & Efficiency Explained</p>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30 mb-12">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">🎯 The Big Picture</h3>
        <p className="text-xl text-gray-300 text-center leading-relaxed mb-6">
          MCP has four components, each optimized for different scenarios based on <span className="text-purple-300 font-bold">context size</span>, <span className="text-blue-300 font-bold">caching</span>, <span className="text-green-300 font-bold">performance</span>, and <span className="text-yellow-300 font-bold">efficiency</span>.
        </p>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-purple-900/30 p-4 rounded-xl">
            <div className="text-3xl mb-2">🔧</div>
            <div className="text-purple-300 font-bold">Tools</div>
            <div className="text-xs text-gray-400">Actions</div>
          </div>
          <div className="bg-blue-900/30 p-4 rounded-xl">
            <div className="text-3xl mb-2">🗂️</div>
            <div className="text-blue-300 font-bold">Resources</div>
            <div className="text-xs text-gray-400">Data</div>
          </div>
          <div className="bg-green-900/30 p-4 rounded-xl">
            <div className="text-3xl mb-2">💬</div>
            <div className="text-green-300 font-bold">Prompts</div>
            <div className="text-xs text-gray-400">Workflows</div>
          </div>
          <div className="bg-yellow-900/30 p-4 rounded-xl">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-yellow-300 font-bold">Sampling</div>
            <div className="text-xs text-gray-400">Generation</div>
          </div>
        </div>
      </div>

      {/* How LLM Decides */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <h3 className="text-3xl font-bold text-purple-300 mb-6">🧠 How LLM Decides Which Component to Use</h3>
        
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 mb-6">
          <p className="text-xl text-gray-300 leading-relaxed">
            The LLM analyzes your request and chooses based on <span className="text-purple-300 font-bold">what needs to happen</span>, <span className="text-blue-300 font-bold">how much data is involved</span>, and <span className="text-green-300 font-bold">what's most efficient</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 p-6 rounded-xl border-l-4 border-purple-500">
            <h4 className="text-xl font-bold text-purple-300 mb-3">🔍 Decision Factors</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-purple-400">•</span>
                <span><strong>Action Type:</strong> Need to DO something? → Tools</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">•</span>
                <span><strong>Data Access:</strong> Need to READ data? → Resources</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400">•</span>
                <span><strong>Workflow:</strong> Common task? → Prompts</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-400">•</span>
                <span><strong>Generation:</strong> Need AI to write? → Sampling</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border-l-4 border-blue-500">
            <h4 className="text-xl font-bold text-blue-300 mb-3">⚡ Efficiency Considerations</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">•</span>
                <span><strong>Context Size:</strong> Is data large? Use Resources (cached)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400">•</span>
                <span><strong>Reusability:</strong> Repeated task? Use Prompts (templates)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-400">•</span>
                <span><strong>Round Trips:</strong> Minimize calls with Sampling</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-400">•</span>
                <span><strong>Real-time:</strong> Dynamic action? Use Tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources - Context & Cache Focus */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-4xl">
            🗂️
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-300">Resources</h3>
            <p className="text-gray-400">Optimized for Context Management & Caching</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/20">
            <h4 className="text-xl font-bold text-white mb-3">💡 Key Purpose</h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              Resources are designed to <span className="text-blue-300 font-bold">keep large data OUT of the context window</span> while still making it accessible. They support <span className="text-cyan-300 font-bold">caching</span> for repeated access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
              <h4 className="text-lg font-bold text-blue-300 mb-3">📊 Context Efficiency</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-red-400 font-bold mb-1">❌ Without Resources:</div>
                  <div className="text-gray-400">User uploads 50MB PDF → entire content sent to LLM → context window explodes → expensive!</div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-green-400 font-bold mb-1">✅ With Resources:</div>
                  <div className="text-gray-400">LLM gets URI: "gdrive://report.pdf" → fetches only needed sections → context stays small!</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
              <h4 className="text-lg font-bold text-blue-300 mb-3">💾 Caching Benefits</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>First access:</strong> Fetches from source (slow)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>Subsequent access:</strong> Served from cache (fast)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>Cost savings:</strong> No repeated API calls</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>Performance:</strong> Instant access after first fetch</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-3">🎯 When LLM Chooses Resources</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                <div className="font-bold text-blue-300 mb-2">Large Data</div>
                <div className="text-gray-400">Files, documents, databases that would overflow context</div>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                <div className="font-bold text-blue-300 mb-2">Static Content</div>
                <div className="text-gray-400">Data that doesn't change frequently (good for caching)</div>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                <div className="font-bold text-blue-300 mb-2">Repeated Access</div>
                <div className="text-gray-400">Same data needed multiple times in conversation</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-500/20">
            <h4 className="text-lg font-bold text-white mb-3">📈 Performance Metrics</h4>
            <div className="space-y-2 text-gray-300 font-mono text-sm">
              <div className="flex justify-between">
                <span>Context Usage:</span>
                <span className="text-green-400">Minimal (only URI)</span>
              </div>
              <div className="flex justify-between">
                <span>Cache Hit Rate:</span>
                <span className="text-green-400">High (70-90%)</span>
              </div>
              <div className="flex justify-between">
                <span>Latency (cached):</span>
                <span className="text-green-400">~10-50ms</span>
              </div>
              <div className="flex justify-between">
                <span>Cost Efficiency:</span>
                <span className="text-green-400">Very High</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prompts - Reusability & Efficiency */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-4xl">
            💬
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-300">Prompts</h3>
            <p className="text-gray-400">Optimized for Reusability & Workflow Efficiency</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-xl font-bold text-white mb-3">💡 Key Purpose</h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              Prompts are <span className="text-green-300 font-bold">pre-compiled workflows</span> that reduce context size, eliminate repeated instructions, and <span className="text-emerald-300 font-bold">standardize common tasks</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/30">
              <h4 className="text-lg font-bold text-green-300 mb-3">🎯 Context Savings</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-red-400 font-bold mb-1">❌ Without Prompts:</div>
                  <div className="text-gray-400">Every time: "Get tasks from DB, check status, format as report, add summary..." (500+ tokens each time)</div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-green-400 font-bold mb-1">✅ With Prompts:</div>
                  <div className="text-gray-400">"Use daily-standup prompt" (20 tokens) → server executes full workflow</div>
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/30">
              <h4 className="text-lg font-bold text-green-300 mb-3">⚡ Efficiency Gains</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>Consistency:</strong> Same workflow every time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>Speed:</strong> No need to explain steps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>Reliability:</strong> Tested, proven workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>Cost:</strong> Minimal tokens used</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-3">🎯 When LLM Chooses Prompts</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/20">
                <div className="font-bold text-green-300 mb-2">Repeated Tasks</div>
                <div className="text-gray-400">User often asks for same type of report or analysis</div>
              </div>
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/20">
                <div className="font-bold text-green-300 mb-2">Complex Workflows</div>
                <div className="text-gray-400">Multi-step process that's been standardized</div>
              </div>
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/20">
                <div className="font-bold text-green-300 mb-2">Templates</div>
                <div className="text-gray-400">Pre-formatted outputs (reports, emails, etc.)</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-lg font-bold text-white mb-3">📈 Performance Metrics</h4>
            <div className="space-y-2 text-gray-300 font-mono text-sm">
              <div className="flex justify-between">
                <span>Context Reduction:</span>
                <span className="text-green-400">90-95% (vs manual)</span>
              </div>
              <div className="flex justify-between">
                <span>Execution Time:</span>
                <span className="text-green-400">Instant (pre-compiled)</span>
              </div>
              <div className="flex justify-between">
                <span>Token Savings:</span>
                <span className="text-green-400">500+ tokens per use</span>
              </div>
              <div className="flex justify-between">
                <span>Error Rate:</span>
                <span className="text-green-400">Near zero (tested)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sampling - Round-trip Optimization */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-4xl">
            🎨
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-300">Sampling</h3>
            <p className="text-gray-400">Optimized for Reducing Round Trips & Latency</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border border-yellow-500/20">
            <h4 className="text-xl font-bold text-white mb-3">💡 Key Purpose</h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              Sampling lets the <span className="text-yellow-300 font-bold">MCP server request LLM generation</span> without a full round trip to the user, reducing <span className="text-orange-300 font-bold">latency and network overhead</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-900/20 p-6 rounded-xl border border-yellow-500/30">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">🔄 Round Trip Reduction</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-red-400 font-bold mb-1">❌ Without Sampling:</div>
                  <div className="text-gray-400 space-y-1">
                    <div>1. User → LLM → MCP (get data)</div>
                    <div>2. MCP → LLM → User (show data)</div>
                    <div>3. User → LLM (ask to summarize)</div>
                    <div>4. LLM generates → User</div>
                    <div className="text-red-300 mt-2">= 4 round trips!</div>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-green-400 font-bold mb-1">✅ With Sampling:</div>
                  <div className="text-gray-400 space-y-1">
                    <div>1. User → LLM → MCP</div>
                    <div>2. MCP asks LLM to generate</div>
                    <div>3. MCP → User (complete result)</div>
                    <div className="text-green-300 mt-2">= 1 round trip!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/20 p-6 rounded-xl border border-yellow-500/30">
              <h4 className="text-lg font-bold text-yellow-300 mb-3">⚡ Performance Benefits</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-400">•</span>
                  <span><strong>Latency:</strong> 75% reduction in total time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-400">•</span>
                  <span><strong>Network:</strong> Fewer HTTP requests</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-400">•</span>
                  <span><strong>Context:</strong> Server handles intermediate steps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-400">•</span>
                  <span><strong>UX:</strong> Faster, smoother experience</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-3">🎯 When LLM Triggers Sampling</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/20">
                <div className="font-bold text-yellow-300 mb-2">Server-Side Generation</div>
                <div className="text-gray-400">MCP server needs AI-generated content for a file/email</div>
              </div>
              <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/20">
                <div className="font-bold text-yellow-300 mb-2">Batch Processing</div>
                <div className="text-gray-400">Generate multiple items without user interaction</div>
              </div>
              <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/20">
                <div className="font-bold text-yellow-300 mb-2">Automation</div>
                <div className="text-gray-400">Workflows that need AI generation as a step</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-6 rounded-xl border border-yellow-500/20">
            <h4 className="text-lg font-bold text-white mb-3">📈 Performance Metrics</h4>
            <div className="space-y-2 text-gray-300 font-mono text-sm">
              <div className="flex justify-between">
                <span>Round Trips Saved:</span>
                <span className="text-green-400">60-80%</span>
              </div>
              <div className="flex justify-between">
                <span>Total Latency:</span>
                <span className="text-green-400">-75% (vs multi-trip)</span>
              </div>
              <div className="flex justify-between">
                <span>Network Efficiency:</span>
                <span className="text-green-400">High</span>
              </div>
              <div className="flex justify-between">
                <span>User Wait Time:</span>
                <span className="text-green-400">Minimal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools - Real-time Performance */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-4xl">
            🔧
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-300">Tools</h3>
            <p className="text-gray-400">Optimized for Real-time Actions & Dynamic Data</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20">
            <h4 className="text-xl font-bold text-white mb-3">💡 Key Purpose</h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              Tools perform <span className="text-purple-300 font-bold">real-time actions</span> and fetch <span className="text-pink-300 font-bold">dynamic data</span> that can't be cached. Used when freshness matters more than caching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30">
              <h4 className="text-lg font-bold text-purple-300 mb-3">🔄 Dynamic vs Static</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-purple-400 font-bold mb-1">Tools (Dynamic):</div>
                  <div className="text-gray-400">Search files NOW, send message NOW, create record NOW → Always fresh, can't cache</div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-blue-400 font-bold mb-1">Resources (Static):</div>
                  <div className="text-gray-400">Read existing file, view data → Can be cached, doesn't change often</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30">
              <h4 className="text-lg font-bold text-purple-300 mb-3">⚡ Performance Trade-offs</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-pink-400">•</span>
                  <span><strong>Freshness:</strong> ✅ Always current data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-400">•</span>
                  <span><strong>Caching:</strong> ❌ Can't cache results</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-400">•</span>
                  <span><strong>Latency:</strong> ⚠️ Network + processing time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-400">•</span>
                  <span><strong>Cost:</strong> ⚠️ API call each time</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-3">🎯 When LLM Chooses Tools</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <div className="font-bold text-purple-300 mb-2">Actions Needed</div>
                <div className="text-gray-400">Send, create, update, delete - anything that changes state</div>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <div className="font-bold text-purple-300 mb-2">Real-time Data</div>
                <div className="text-gray-400">Stock prices, current status, live search results</div>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <div className="font-bold text-purple-300 mb-2">User-specific</div>
                <div className="text-gray-400">Search "my files", get "my tasks" - dynamic queries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Matrix */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">🎯 LLM Decision Matrix</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-purple-500/30">
                <th className="text-left p-4 text-purple-300 font-bold">Scenario</th>
                <th className="text-left p-4 text-purple-300 font-bold">Best Choice</th>
                <th className="text-left p-4 text-purple-300 font-bold">Why?</th>
                <th className="text-left p-4 text-purple-300 font-bold">Key Benefit</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10 bg-blue-900/10">
                <td className="p-4">Read a large PDF (100MB)</td>
                <td className="p-4 font-bold text-blue-300">Resources</td>
                <td className="p-4 text-xs">Doesn't bloat context, cacheable</td>
                <td className="p-4 text-xs text-green-400">90% context savings</td>
              </tr>
              <tr className="border-b border-purple-500/10 bg-green-900/10">
                <td className="p-4">Generate weekly reports</td>
                <td className="p-4 font-bold text-green-300">Prompts</td>
                <td className="p-4 text-xs">Repeated task, standardized workflow</td>
                <td className="p-4 text-xs text-green-400">95% token reduction</td>
              </tr>
              <tr className="border-b border-purple-500/10 bg-yellow-900/10">
                <td className="p-4">Create file with AI summary</td>
                <td className="p-4 font-bold text-yellow-300">Sampling</td>
                <td className="p-4 text-xs">Server needs LLM, avoids round trip</td>
                <td className="p-4 text-xs text-green-400">75% latency reduction</td>
              </tr>
              <tr className="border-b border-purple-500/10 bg-purple-900/10">
                <td className="p-4">Search files right now</td>
                <td className="p-4 font-bold text-purple-300">Tools</td>
                <td className="p-4 text-xs">Dynamic action, real-time results</td>
                <td className="p-4 text-xs text-green-400">Always fresh data</td>
              </tr>
              <tr className="border-b border-purple-500/10 bg-blue-900/10">
                <td className="p-4">Access same doc 10 times</td>
                <td className="p-4 font-bold text-blue-300">Resources</td>
                <td className="p-4 text-xs">Cache after first fetch</td>
                <td className="p-4 text-xs text-green-400">9/10 requests instant</td>
              </tr>
              <tr className="bg-green-900/10">
                <td className="p-4">Daily standup automation</td>
                <td className="p-4 font-bold text-green-300">Prompts</td>
                <td className="p-4 text-xs">Consistent format, multi-step</td>
                <td className="p-4 text-xs text-green-400">Zero errors</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-purple-900/50 rounded-2xl p-8 border border-purple-500/30">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">📊 Performance Comparison</h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-900/50 p-6 rounded-xl border-t-4 border-purple-500">
            <div className="text-3xl mb-2">🔧</div>
            <h4 className="font-bold text-purple-300 mb-3">Tools</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Context:</span>
                <span className="text-yellow-400">Medium</span>
              </div>
              <div className="flex justify-between">
                <span>Cache:</span>
                <span className="text-red-400">No</span>
              </div>
              <div className="flex justify-between">
                <span>Latency:</span>
                <span className="text-yellow-400">Variable</span>
              </div>
              <div className="flex justify-between">
                <span>Freshness:</span>
                <span className="text-green-400">Perfect</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border-t-4 border-blue-500">
            <div className="text-3xl mb-2">🗂️</div>
            <h4 className="font-bold text-blue-300 mb-3">Resources</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Context:</span>
                <span className="text-green-400">Minimal</span>
              </div>
              <div className="flex justify-between">
                <span>Cache:</span>
                <span className="text-green-400">Yes</span>
              </div>
              <div className="flex justify-between">
                <span>Latency:</span>
                <span className="text-green-400">Low</span>
              </div>
              <div className="flex justify-between">
                <span>Freshness:</span>
                <span className="text-yellow-400">Delayed</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border-t-4 border-green-500">
            <div className="text-3xl mb-2">💬</div>
            <h4 className="font-bold text-green-300 mb-3">Prompts</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Context:</span>
                <span className="text-green-400">Tiny</span>
              </div>
              <div className="flex justify-between">
                <span>Cache:</span>
                <span className="text-green-400">Template</span>
              </div>
              <div className="flex justify-between">
                <span>Latency:</span>
                <span className="text-green-400">Very Low</span>
              </div>
              <div className="flex justify-between">
                <span>Consistency:</span>
                <span className="text-green-400">Perfect</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border-t-4 border-yellow-500">
            <div className="text-3xl mb-2">🎨</div>
            <h4 className="font-bold text-yellow-300 mb-3">Sampling</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Context:</span>
                <span className="text-green-400">Low</span>
              </div>
              <div className="flex justify-between">
                <span>Round Trips:</span>
                <span className="text-green-400">Minimal</span>
              </div>
              <div className="flex justify-between">
                <span>Latency:</span>
                <span className="text-green-400">Low</span>
              </div>
              <div className="flex justify-between">
                <span>Automation:</span>
                <span className="text-green-400">High</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-slate-900/50 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-white mb-4 text-center">🔑 Key Takeaway</h4>
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            The LLM automatically chooses the most <span className="text-purple-300 font-bold">efficient</span> component based on whether you need <span className="text-blue-300 font-bold">cached data</span>, <span className="text-green-300 font-bold">reusable workflows</span>, <span className="text-yellow-300 font-bold">reduced latency</span>, or <span className="text-pink-300 font-bold">real-time freshness</span>. Each component is optimized for different performance goals!
          </p>
        </div>
      </div>
    </div>
  );
};

const ProtocolsSection = () => {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">MCP Communication Protocols</h2>
        <p className="text-xl text-gray-300">Understanding JSON-RPC 2.0, HTTP, stdio, and SSE</p>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30 mb-12">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">🎯 The Big Picture</h3>
        <p className="text-xl text-gray-300 text-center leading-relaxed">
          MCP uses <span className="text-purple-300 font-bold">JSON-RPC 2.0</span> as its communication format, which can travel over <span className="text-blue-300 font-bold">stdio</span> or <span className="text-green-300 font-bold">HTTP/SSE</span>. Think of JSON-RPC as the "language" and stdio/HTTP as the "delivery method".
        </p>
      </div>

      {/* JSON-RPC 2.0 Explained */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-4xl">
            📜
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-300">JSON-RPC 2.0</h3>
            <p className="text-gray-400">A Simple Request-Response Format</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20">
            <h4 className="text-xl font-bold text-white mb-3">🎨 Simple Analogy</h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              Imagine ordering food at a restaurant. JSON-RPC is like filling out an <span className="text-purple-300 font-bold">order form</span> with specific fields: your name, what you want, special requests. The waiter takes it to the kitchen and brings back your food with a receipt. It's <span className="text-pink-300 font-bold">structured and clear</span>!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30">
              <h4 className="text-lg font-bold text-purple-300 mb-3">📝 What It Is</h4>
              <p className="text-gray-300 mb-3">
                JSON-RPC 2.0 is a <span className="font-bold text-purple-300">remote procedure call (RPC) protocol</span> encoded in JSON. It's a way to call a function on another computer as if it were local.
              </p>
              <div className="bg-slate-900/50 p-4 rounded-lg mt-3">
                <div className="text-sm text-gray-400 space-y-2">
                  <div>✅ Lightweight (just JSON)</div>
                  <div>✅ Simple structure</div>
                  <div>✅ Clear request/response</div>
                  <div>✅ Error handling built-in</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30">
              <h4 className="text-lg font-bold text-purple-300 mb-3">🏗️ Structure</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-purple-400 font-bold mb-1">Request:</div>
                  <div className="text-gray-300 font-mono text-xs space-y-1">
                    <div>• jsonrpc: "2.0"</div>
                    <div>• method: "search_files"</div>
                    <div>• params: {'{query: "report"}'}</div>
                    <div>• id: "123"</div>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded">
                  <div className="text-green-400 font-bold mb-1">Response:</div>
                  <div className="text-gray-300 font-mono text-xs space-y-1">
                    <div>• jsonrpc: "2.0"</div>
                    <div>• result: {'{files: [...]}'}</div>
                    <div>• id: "123"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold text-white mb-4">📋 Complete Example</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-purple-400 font-bold mb-2">Request (LLM → MCP):</div>
                <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-xs">
                  <code className="text-green-400">{`{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "search_files",
    "arguments": {
      "query": "Q3 report"
    }
  },
  "id": "req-123"
}`}</code>
                </pre>
              </div>
              <div>
                <div className="text-green-400 font-bold mb-2">Response (MCP → LLM):</div>
                <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-xs">
                  <code className="text-green-400">{`{
  "jsonrpc": "2.0",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Found 3 files"
      }
    ]
  },
  "id": "req-123"
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-RPC vs HTTP */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">⚔️ JSON-RPC 2.0 vs Regular HTTP</h3>

        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/20 mb-6">
          <h4 className="text-xl font-bold text-white mb-3">🎯 Key Difference</h4>
          <p className="text-gray-300 leading-relaxed text-lg">
            <span className="text-blue-300 font-bold">HTTP</span> is like sending a letter with an address. <span className="text-purple-300 font-bold">JSON-RPC</span> is like making a phone call - you're asking someone to do something specific and waiting for the answer. JSON-RPC <span className="text-cyan-300 font-bold">rides on top of HTTP</span> or stdio!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold text-blue-300 mb-4">🌐 Regular HTTP (REST)</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="font-bold text-blue-300 mb-2">How it works:</div>
                <div>GET /api/files?query=report</div>
                <div className="text-xs text-gray-400 mt-1">Uses URLs and HTTP verbs</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="font-bold text-blue-300 mb-2">Multiple endpoints:</div>
                <div className="space-y-1 text-xs">
                  <div>GET /files - list files</div>
                  <div>POST /files - create file</div>
                  <div>DELETE /files/:id - delete</div>
                </div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="font-bold text-blue-300 mb-2">Characteristics:</div>
                <div className="space-y-1 text-xs">
                  <div>✅ Standard web protocol</div>
                  <div>✅ Easy caching</div>
                  <div>⚠️ Multiple URLs to manage</div>
                  <div>⚠️ Less structured</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30">
            <h4 className="text-xl font-bold text-purple-300 mb-4">📜 JSON-RPC 2.0</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="font-bold text-purple-300 mb-2">How it works:</div>
                <div>POST /rpc</div>
                <div className="text-xs text-gray-400 mt-1">Single endpoint, method in body</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="font-bold text-purple-300 mb-2">Single endpoint:</div>
                <div className="space-y-1 text-xs">
                  <div>POST {'{method: "list_files"}'}</div>
                  <div>POST {'{method: "create_file"}'}</div>
                  <div>POST {'{method: "delete_file"}'}</div>
                </div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded">
                <div className="font-bold text-purple-300 mb-2">Characteristics:</div>
                <div className="space-y-1 text-xs">
                  <div>✅ Single endpoint (simple)</div>
                  <div>✅ Highly structured</div>
                  <div>✅ Built-in error handling</div>
                  <div>⚠️ Less cacheable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20">
          <h4 className="text-lg font-bold text-white mb-3">💡 Why MCP Uses JSON-RPC</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="text-purple-400">•</span>
              <span><strong>Consistency:</strong> Every request follows the same format</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-400">•</span>
              <span><strong>Simplicity:</strong> One endpoint instead of dozens</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-400">•</span>
              <span><strong>Language-agnostic:</strong> Works with any programming language</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-400">•</span>
              <span><strong>Error handling:</strong> Standardized error responses</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Transport Methods: stdio vs HTTP/SSE */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">🚚 Transport Methods: How JSON-RPC Travels</h3>

        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/20 mb-6">
          <h4 className="text-xl font-bold text-white mb-3">📦 Simple Analogy</h4>
          <p className="text-gray-300 leading-relaxed text-lg">
            JSON-RPC is the <span className="text-purple-300 font-bold">message</span> (like a letter). The transport method is <span className="text-green-300 font-bold">how it gets delivered</span>:
            <br/>• <span className="text-blue-300 font-bold">stdio</span> = Passing notes under the door (local, fast)
            <br/>• <span className="text-cyan-300 font-bold">HTTP/SSE</span> = Mailing the letter (remote, flexible)
          </p>
        </div>

        {/* stdio Explanation */}
        <div className="bg-slate-900/50 p-6 rounded-xl mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl">
              ⚡
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-300">stdio (Standard Input/Output)</h4>
              <p className="text-gray-400 text-sm">Direct communication via command line pipes</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-900/20 p-5 rounded-xl border border-blue-500/30">
              <h5 className="text-lg font-bold text-blue-300 mb-3">🎯 What It Is</h5>
              <p className="text-gray-300 mb-3 text-sm">
                stdio is like <span className="font-bold text-blue-300">talking directly</span> to a program through the terminal. The LLM and MCP server run on the same machine and exchange messages through standard input/output streams.
              </p>
              <div className="bg-slate-900/50 p-3 rounded text-xs font-mono text-gray-400">
                $ mcp-server | llm-client
                <div className="mt-2 text-green-400">Data flows through pipe</div>
              </div>
            </div>

            <div className="bg-blue-900/20 p-5 rounded-xl border border-blue-500/30">
              <h5 className="text-lg font-bold text-blue-300 mb-3">⚡ Advantages</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">✓</span>
                  <span><strong>Speed:</strong> No network overhead</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">✓</span>
                  <span><strong>Simplicity:</strong> No server setup needed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">✓</span>
                  <span><strong>Security:</strong> No network exposure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">✓</span>
                  <span><strong>Latency:</strong> Microseconds, not milliseconds</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-5 rounded-xl border border-blue-500/20">
            <h5 className="text-lg font-bold text-white mb-3">📊 Flow Diagram: stdio</h5>
            <div className="bg-slate-950 p-6 rounded-lg">
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 px-4 py-2 rounded text-white">LLM Process</div>
                  <div className="text-purple-400">→ stdout →</div>
                  <div className="bg-blue-600 px-4 py-2 rounded text-white">MCP Server Process</div>
                </div>
                <div className="text-gray-400 text-xs ml-4">JSON-RPC Request: {'{method: "search_files"}'}</div>
                
                <div className="flex items-center space-x-3 mt-4">
                  <div className="bg-blue-600 px-4 py-2 rounded text-white">MCP Server Process</div>
                  <div className="text-blue-400">→ stdin →</div>
                  <div className="bg-purple-600 px-4 py-2 rounded text-white">LLM Process</div>
                </div>
                <div className="text-gray-400 text-xs ml-4">JSON-RPC Response: {'{result: {...}}'}</div>

                <div className="mt-4 bg-green-900/20 p-3 rounded border border-green-500/30">
                  <div className="text-green-400 font-bold mb-1">✓ Same Machine Communication</div>
                  <div className="text-gray-400 text-xs">Latency: ~1-10ms | No network | No HTTP overhead</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HTTP/SSE Explanation */}
        <div className="bg-slate-900/50 p-6 rounded-xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl">
              🌐
            </div>
            <div>
              <h4 className="text-2xl font-bold text-green-300">HTTP/SSE (Server-Sent Events)</h4>
              <p className="text-gray-400 text-sm">Network-based communication over the web</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-900/20 p-5 rounded-xl border border-green-500/30">
              <h5 className="text-lg font-bold text-green-300 mb-3">🎯 What It Is</h5>
              <p className="text-gray-300 mb-3 text-sm">
                <span className="font-bold text-green-300">HTTP</span> is the standard web protocol. <span className="font-bold text-emerald-300">SSE</span> (Server-Sent Events) allows the server to push updates to the client. Perfect for remote MCP servers.
              </p>
              <div className="bg-slate-900/50 p-3 rounded text-xs font-mono text-gray-400">
                POST https://mcp-server.com/rpc
                <div className="mt-2 text-green-400">Data over network</div>
              </div>
            </div>

            <div className="bg-green-900/20 p-5 rounded-xl border border-green-500/30">
              <h5 className="text-lg font-bold text-green-300 mb-3">⚡ Advantages</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong>Remote:</strong> Works across internet</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong>Scalable:</strong> Many clients, one server</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong>Familiar:</strong> Standard web tech</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong>SSE:</strong> Real-time server updates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-5 rounded-xl border border-green-500/20">
            <h5 className="text-lg font-bold text-white mb-3">📊 Flow Diagram: HTTP/SSE</h5>
            <div className="bg-slate-950 p-6 rounded-lg">
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 px-4 py-2 rounded text-white">LLM Client</div>
                  <div className="text-purple-400">→ HTTP POST →</div>
                  <div className="bg-green-600 px-4 py-2 rounded text-white">MCP Server (Remote)</div>
                </div>
                <div className="text-gray-400 text-xs ml-4">JSON-RPC over HTTP: POST /rpc with body</div>
                
                <div className="flex items-center space-x-3 mt-4">
                  <div className="bg-green-600 px-4 py-2 rounded text-white">MCP Server (Remote)</div>
                  <div className="text-green-400">→ HTTP Response →</div>
                  <div className="bg-purple-600 px-4 py-2 rounded text-white">LLM Client</div>
                </div>
                <div className="text-gray-400 text-xs ml-4">JSON-RPC Response in HTTP body</div>

                <div className="mt-4 bg-blue-900/20 p-3 rounded border border-blue-500/30">
                  <div className="text-blue-400 font-bold mb-1">🌐 Network Communication</div>
                  <div className="text-gray-400 text-xs">Latency: ~50-200ms | Works remotely | HTTP overhead</div>
                </div>

                <div className="mt-3 bg-cyan-900/20 p-3 rounded border border-cyan-500/30">
                  <div className="text-cyan-400 font-bold mb-1">⚡ SSE for Real-time Updates</div>
                  <div className="text-gray-400 text-xs">Server can push notifications to LLM (progress, events)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When to Use Which */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">🎯 When to Use stdio vs HTTP/SSE</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-purple-500/30">
                <th className="text-left p-4 text-purple-300 font-bold">Scenario</th>
                <th className="text-left p-4 text-blue-300 font-bold">stdio</th>
                <th className="text-left p-4 text-green-300 font-bold">HTTP/SSE</th>
                <th className="text-left p-4 text-yellow-300 font-bold">Best Choice</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10 bg-blue-900/10">
                <td className="p-4 font-bold">Local development</td>
                <td className="p-4 text-green-400">✅ Perfect</td>
                <td className="p-4 text-yellow-400">⚠️ Overkill</td>
                <td className="p-4 text-blue-300">stdio</td>
              </tr>
              <tr className="border-b border-purple-500/10 bg-green-900/10">
                <td className="p-4 font-bold">Cloud deployment</td>
                <td className="p-4 text-red-400">❌ Can't work</td>
                <td className="p-4 text-green-400">✅ Required</td>
                <td className="p-4 text-green-300">HTTP/SSE</td>
              </tr>
              <tr className="border-b border-purple-500/10 bg-blue-900/10">
                <td className="p-4 font-bold">Desktop app</td>
                <td className="p-4 text-green-400">✅ Fast & simple</td>
                <td className="p-4 text-yellow-400">⚠️ Unnecessary</td>
                <td className="p-4 text-blue-300">stdio</td>
              </tr>
              <tr className="border-b border-purple-500/10 bg-green-900/10">
                <td className="p-4 font-bold">Web application</td>
                <td className="p-4 text-red-400">❌ Browser can't</td>
                <td className="p-4 text-green-400">✅ Only option</td>
                <td className="p-4 text-green-300">HTTP/SSE</td>
              </tr>
              <tr className="border-b border-purple-500/10 bg-blue-900/10">
                <td className="p-4 font-bold">Low latency needed</td>
                <td className="p-4 text-green-400">✅ Sub-millisecond</td>
                <td className="p-4 text-yellow-400">⚠️ Network delay</td>
                <td className="p-4 text-blue-300">stdio</td>
              </tr>
              <tr className="border-b border-purple-500/10 bg-green-900/10">
                <td className="p-4 font-bold">Multiple clients</td>
                <td className="p-4 text-yellow-400">⚠️ Hard to scale</td>
                <td className="p-4 text-green-400">✅ Easy scaling</td>
                <td className="p-4 text-green-300">HTTP/SSE</td>
              </tr>
              <tr className="bg-green-900/10">
                <td className="p-4 font-bold">Real-time updates</td>
                <td className="p-4 text-yellow-400">⚠️ Polling needed</td>
                <td className="p-4 text-green-400">✅ SSE built-in</td>
                <td className="p-4 text-green-300">HTTP/SSE</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold text-blue-300 mb-4">⚡ Choose stdio When:</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">✓</span>
                <span>MCP server runs on <strong>same machine</strong> as LLM</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">✓</span>
                <span>You need <strong>maximum speed</strong> (local AI tools)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">✓</span>
                <span>Desktop applications or CLI tools</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">✓</span>
                <span>Development and testing</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">✓</span>
                <span>Security is critical (no network exposure)</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/30">
            <h4 className="text-xl font-bold text-green-300 mb-4">🌐 Choose HTTP/SSE When:</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-green-400">✓</span>
                <span>MCP server is <strong>remote</strong> (cloud, different machine)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400">✓</span>
                <span>Web-based applications (browsers)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400">✓</span>
                <span>Multiple clients connecting to one server</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400">✓</span>
                <span>Need real-time server notifications (SSE)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400">✓</span>
                <span>Standard web infrastructure</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Complete Comparison */}
      <div className="bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-purple-900/50 rounded-2xl p-8 border border-purple-500/30">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">📊 Complete Performance Comparison</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-900/50 p-6 rounded-xl border-t-4 border-blue-500">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="text-2xl font-bold text-blue-300">stdio</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Latency:</span>
                <span className="text-green-400 font-bold">1-10ms</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Setup:</span>
                <span className="text-green-400 font-bold">Very Simple</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Location:</span>
                <span className="text-yellow-400 font-bold">Local Only</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Scaling:</span>
                <span className="text-red-400 font-bold">Difficult</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Best for:</span>
                <span className="text-blue-300 font-bold">Desktop/CLI</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border-t-4 border-green-500">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🌐</div>
              <h4 className="text-2xl font-bold text-green-300">HTTP/SSE</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Latency:</span>
                <span className="text-yellow-400 font-bold">50-200ms</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Setup:</span>
                <span className="text-yellow-400 font-bold">Moderate</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Location:</span>
                <span className="text-green-400 font-bold">Anywhere</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Scaling:</span>
                <span className="text-green-400 font-bold">Excellent</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                <span className="text-gray-400">Best for:</span>
                <span className="text-green-300 font-bold">Web/Cloud</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-white mb-4 text-center">🔑 Key Takeaway</h4>
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            JSON-RPC 2.0 is the <span className="text-purple-300 font-bold">communication format</span> (what you say), while stdio and HTTP/SSE are the <span className="text-blue-300 font-bold">delivery methods</span> (how you send it). Use <span className="text-blue-300 font-bold">stdio for speed and simplicity</span> on local machines, and <span className="text-green-300 font-bold">HTTP/SSE for remote access and scalability</span>!
          </p>
        </div>
      </div>
    </div>
  );
};

const TechnicalSection = () => {
  const steps = [
    {
      number: 1,
      title: '👤 User Sends Request',
      description: 'User makes a request through the chat interface.',
      details: 'Example: "Get my Q3 sales report from Google Drive"',
    },
    {
      number: 2,
      title: '🤖 LLM Analyzes Request',
      description: 'Claude analyzes the message to understand intent, extract keywords, and determine needed tools.',
      details: 'Intent: Retrieve a file\nService: Google Drive\nTarget: Q3 sales report\nAction: Search and fetch',
    },
    {
      number: 3,
      title: '🔍 LLM Queries Available MCP Servers',
      description: 'Claude checks which MCP servers are connected and what capabilities they offer.',
      code: `// LLM internally checks connected servers
Available MCP Servers:
- Google Drive MCP
  → Capabilities: search_files, get_file, upload_file
- Slack MCP
  → Capabilities: send_message, list_channels
- Database MCP
  → Capabilities: query, insert, update

Decision: Use Google Drive MCP server`,
    },
    {
      number: 4,
      title: '📤 LLM Sends Tool Call to MCP Server',
      description: 'Claude formulates a tool call request using the MCP protocol.',
      code: `// MCP Protocol Request (JSON-RPC format)
{
  "jsonrpc": "2.0",
  "id": "request-123",
  "method": "tools/call",
  "params": {
    "name": "search_files",
    "arguments": {
      "query": "Q3 sales report",
      "file_type": "document"
    }
  }
}`,
    },
    {
      number: 5,
      title: '🔌 MCP Server Processes Request',
      description: 'The MCP server receives, validates, and prepares to interact with the external service.',
      details: '• Receives JSON-RPC request\n• Validates tool name and parameters\n• Checks authentication/permissions\n• Prepares API call to Google Drive',
    },
    {
      number: 6,
      title: '☁️ MCP Server Calls External Service',
      description: 'The MCP server makes an API call to Google Drive using its native API.',
      code: `// MCP Server makes actual API call
GET https://www.googleapis.com/drive/v3/files
Headers:
  Authorization: Bearer [access_token]
  
Query Parameters:
  q: "name contains 'Q3 sales report'"
  fields: "files(id, name, mimeType)"`,
    },
    {
      number: 7,
      title: '📥 External Service Returns Data',
      description: 'Google Drive returns the search results to the MCP server.',
      code: `// Google Drive API Response
{
  "files": [
    {
      "id": "1abc...xyz",
      "name": "Q3 2024 Sales Report.pdf",
      "mimeType": "application/pdf"
    }
  ]
}`,
    },
    {
      number: 8,
      title: '🔄 MCP Server Formats Response',
      description: 'The MCP server translates the Google Drive response into MCP protocol format.',
      code: `// MCP Protocol Response
{
  "jsonrpc": "2.0",
  "id": "request-123",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Found file: Q3 2024 Sales Report.pdf"
      }
    ],
    "isError": false
  }
}`,
    },
    {
      number: 9,
      title: '🤖 LLM Receives MCP Response',
      description: 'Claude receives the standardized response and processes it.',
      details: '• Parses MCP response\n• Extracts relevant information\n• Determines if more actions needed\n• Prepares user-friendly response',
    },
    {
      number: 10,
      title: '💬 LLM Responds to User',
      description: 'Claude formulates a natural language response for the user.',
      details: 'Response: "I found your Q3 2024 Sales Report in Google Drive. Would you like me to retrieve the contents and summarize it for you?"',
    },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">How MCP Works Behind the Scenes</h2>
        <p className="text-xl text-gray-300">Complete technical interaction flow</p>
      </div>

      {/* Main Actors */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { icon: '👤', title: 'User', subtitle: 'Makes requests', color: 'from-pink-500 to-rose-500' },
          { icon: '🤖', title: 'LLM (Claude)', subtitle: 'Processes & orchestrates', color: 'from-blue-500 to-cyan-500' },
          { icon: '🔌', title: 'MCP Server', subtitle: 'Translates & executes', color: 'from-green-500 to-emerald-500' },
          { icon: '☁️', title: 'External Service', subtitle: 'Google Drive, Slack, etc.', color: 'from-yellow-500 to-orange-500' },
        ].map((actor, idx) => (
          <div key={idx} className={`bg-gradient-to-br ${actor.color} p-6 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300`}>
            <div className="text-5xl mb-3">{actor.icon}</div>
            <h3 className="text-xl font-bold text-white mb-1">{actor.title}</h3>
            <p className="text-sm text-white/80">{actor.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Step-by-Step Flow */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">📋 Complete Interaction Flow</h3>
        
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300 mb-3">{step.description}</p>
                    
                    {step.details && (
                      <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                        <p className="text-blue-200 text-sm whitespace-pre-line">{step.details}</p>
                      </div>
                    )}
                    
                    {step.code && (
                      <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto border border-purple-500/30 mt-3">
                        <code className="text-green-400 text-sm">{step.code}</code>
                      </pre>
                    )}
                  </div>
                </div>
              </div>
              
              {idx < steps.length - 1 && (
                <div className="text-center text-purple-400 text-3xl">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Technical Details */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">🔬 MCP Protocol Details</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="text-purple-400">•</span>
              <span><strong>Based on:</strong> JSON-RPC 2.0</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-400">•</span>
              <span><strong>Transport:</strong> stdio or HTTP/SSE</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-400">•</span>
              <span><strong>Stateless:</strong> Each request is independent</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-400">•</span>
              <span><strong>Language-agnostic:</strong> Works with any programming language</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">🔐 Security Features</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="text-blue-400">•</span>
              <span><strong>OAuth 2.0:</strong> Secure authentication</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-400">•</span>
              <span><strong>Permissions:</strong> Granular access control</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-400">•</span>
              <span><strong>Isolation:</strong> Servers run independently</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-400">•</span>
              <span><strong>Validation:</strong> All requests validated</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-purple-900/50 rounded-2xl p-8 border border-purple-500/30">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">💡 The Big Picture</h3>
        <p className="text-xl text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
          MCP acts as a <span className="text-purple-300 font-bold">universal translator</span> between the LLM's standardized way of requesting actions and each external service's unique API. This means you write an MCP server once, and any MCP-compatible LLM can use it immediately - no custom integration needed!
        </p>
      </div>
    </div>
  );
};

export default App;
