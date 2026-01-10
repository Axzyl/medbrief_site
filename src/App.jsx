import { useState } from 'react'
import PrototypeA from './pages/PrototypeA'
import PrototypeB from './pages/PrototypeB'
import PrototypeC from './pages/PrototypeC'

function App() {
  const [activePrototype, setActivePrototype] = useState('A')

  const prototypes = [
    {
      id: 'A',
      name: 'Corporate Precision',
      desc: 'Editorial, geometric, serif typography',
      colors: 'Navy + Gold'
    },
    {
      id: 'B',
      name: 'Bold Tech',
      desc: 'Brutalist, dark mode, dramatic',
      colors: 'Indigo + Cyan'
    },
    {
      id: 'C',
      name: 'Soft Modern',
      desc: 'Organic, light, approachable',
      colors: 'Sky Blue + Coral'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Prototype Selector - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-500">Prototype:</span>
              <div className="flex gap-2">
                {prototypes.map((proto) => (
                  <button
                    key={proto.id}
                    onClick={() => setActivePrototype(proto.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activePrototype === proto.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {proto.id}: {proto.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-xs text-gray-500">
              {prototypes.find(p => p.id === activePrototype)?.desc} • {prototypes.find(p => p.id === activePrototype)?.colors}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Active Prototype */}
      {activePrototype === 'A' && <PrototypeA />}
      {activePrototype === 'B' && <PrototypeB />}
      {activePrototype === 'C' && <PrototypeC />}
    </div>
  )
}

export default App
