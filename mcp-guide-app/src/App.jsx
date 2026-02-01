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
                { id: 'technical', label: 'Technical', icon: Code },
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
