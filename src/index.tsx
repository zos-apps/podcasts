import React, { useState } from 'react';

interface PodcastsProps { onClose: () => void; }

const PODCASTS = [
  { name: 'The Daily', author: 'NY Times', icon: '📰', episodes: 1200 },
  { name: 'Lex Fridman Podcast', author: 'Lex Fridman', icon: '🧠', episodes: 400 },
  { name: 'Huberman Lab', author: 'Andrew Huberman', icon: '🔬', episodes: 200 },
  { name: 'Joe Rogan Experience', author: 'Joe Rogan', icon: '🎙️', episodes: 2000 },
  { name: 'This American Life', author: 'Ira Glass', icon: '🇺🇸', episodes: 800 },
  { name: 'Conan O\\'Brien Needs A Friend', author: 'Conan', icon: '😄', episodes: 200 },
];

const Podcasts: React.FC<PodcastsProps> = ({ onClose }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-purple-900 to-purple-950">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2"><span>🎙️</span> Podcasts</h1>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-lg font-bold text-white mb-4">Top Shows</h2>
        <div className="grid grid-cols-3 gap-4">
          {PODCASTS.map(p => (
            <button key={p.name} onClick={() => setSelected(p.name)} className={`p-4 rounded-xl text-left transition-all ${selected === p.name ? 'bg-purple-600' : 'bg-white/10 hover:bg-white/20'}`}>
              <div className="text-4xl mb-3">{p.icon}</div>
              <div className="text-white font-bold">{p.name}</div>
              <div className="text-white/60 text-sm">{p.author}</div>
              <div className="text-white/40 text-xs mt-1">{p.episodes} episodes</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
