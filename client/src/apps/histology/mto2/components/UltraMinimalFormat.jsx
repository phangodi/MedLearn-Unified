import React from 'react';
import { safe } from '../utils/helpers';

const UltraMinimalFormat = ({ data }) => {
  const umf = data.ultraMinimalFacts || {};
  
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <p className="text-sm font-semibold text-red-800">🎯 ULTRA-MINIMAL: Only must-know facts</p>
      </div>

      {/* Must-Know Facts */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black">⚠️ MUST-KNOW FACTS</h2>
        </div>
        
        <div className="space-y-4">
          {/* 1. STAINING */}
          {umf.staining && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">1</span>
                <h3 className="text-xl font-bold">STAINING</h3>
              </div>
              <div className="ml-11 text-lg">{umf.staining}</div>
            </div>
          )}

          {/* 2. THE LAYERS */}
          {safe(umf.layers).length > 0 && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">2</span>
                <h3 className="text-xl font-bold">THE LAYERS</h3>
              </div>
              <div className="ml-11 space-y-2">
                {safe(umf.layers).map((layer, idx) => (
                  <div key={idx} className="text-base">{layer}</div>
                ))}
              </div>
            </div>
          )}

          {/* 3. INSIDE FASCICLES (Exam Essential) - DYNAMIC */}
          {data.examEssentialStructures && (data.examEssentialStructures?.grouped || data.examEssentialStructures?.additional) && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">3</span>
                <h3 className="text-xl font-bold">⭐ INSIDE FASCICLES (EXAM ESSENTIALS)</h3>
              </div>
              <div className="ml-11 space-y-1 font-mono text-sm">
                {safe(data.examEssentialStructures.grouped).map((group, idx) => (
                  <div key={idx}>
                    <div className="text-base"><strong>• {group.parent}</strong></div>
                    {safe(group.children).length > 0 && (
                      <div className="ml-4">
                        {safe(group.children).map((child, childIdx) => (
                          <div key={childIdx} className="text-base capitalize">→ {typeof child === 'string' ? child : child?.name || String(child)}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {safe(data.examEssentialStructures.additional).filter(item => item.toLowerCase().includes('fibrocyte')).map((item, idx) => (
                  <div key={idx} className="text-base capitalize"><strong>• {item}</strong></div>
                ))}
              </div>
            </div>
          )}

          {/* 4. OUTSIDE FASCICLES (Exam Essential) - DYNAMIC */}
          {data.examEssentialStructures?.additional && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">4</span>
                <h3 className="text-xl font-bold">⭐ OUTSIDE FASCICLES (EXAM ESSENTIAL)</h3>
              </div>
              <div className="ml-11 space-y-2">
                {safe(data.examEssentialStructures.additional).filter(item => item.toLowerCase().includes('adipocyte')).map((item, idx) => {
                  const detail = safe(data.aroundOrOutside).find(s => s.structure?.toLowerCase().includes('adipocyte'));
                  const desc = detail?.description || detail?.spotIt || 'Large white spaces in tissue';
                  return (
                    <div key={idx} className="text-base capitalize"><strong>• {item}:</strong> {desc}</div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. CNS CONNECTION */}
          {umf.cnsConnection && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">5</span>
                <h3 className="text-xl font-bold">CNS CONNECTION</h3>
              </div>
              <div className="ml-11 text-lg">{umf.cnsConnection}</div>
            </div>
          )}

          {/* 6. DON'T CONFUSE */}
          {safe(umf.dontConfuse).length > 0 && (
            <div className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">6</span>
                <h3 className="text-xl font-bold">DON'T CONFUSE</h3>
              </div>
              <div className="ml-11 space-y-2">
                {safe(umf.dontConfuse).map((item, idx) => (
                  <div key={idx} className="text-base">{item}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    {/* One-Sentence Summaries */}
    {(data.examEssentialStructures?.grouped || data.layers) && (
      <div className="bg-yellow-50 border-4 border-yellow-400 rounded-xl p-6">
        <h3 className="font-black text-yellow-900 mb-4 text-2xl text-center">ONE-SENTENCE SUMMARIES</h3>
        <div className="space-y-3 text-lg">
          {safe(data.examEssentialStructures?.grouped).filter(group => !group.parent.toLowerCase().includes('supporting')).map((group, idx) => (
            <div key={`grouped-${idx}`} className="flex gap-3">
              <span className="font-black text-blue-600 min-w-fit">{group.parent.toUpperCase()}:</span>
              <span>{group.quickID || group.appearance || group.where || 'Main structural component'}</span>
            </div>
          ))}
          
          {safe(data.layers).map((layer, idx) => {
            const colors = ['pink', 'orange', 'green', 'blue'];
            return (
              <div key={`layer-${idx}`} className="flex gap-3">
                <span className={`font-black text-${colors[idx % colors.length]}-600 min-w-fit`}>{layer.name.toUpperCase()}:</span>
                <span>{layer.quickID}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* 30-Second Drill */}
    <div className="bg-black text-white rounded-xl p-6">
      <h3 className="font-black mb-4 text-2xl text-center">⏱️ 30-SECOND DRILL</h3>
      <div className="space-y-2 font-mono text-sm">
        {safe(data.examEssentialStructures?.grouped).filter(group => !group.parent.toLowerCase().includes('supporting')).map((group, idx) => (
          <div key={`drill-grouped-${idx}`}>
            <div>Q: What does {group.parent} do?</div>
            <div className="text-blue-400 ml-4 mb-2">A: {group.function || 'Conducts electrical nerve impulses through organized myelinated fibers'}</div>
          </div>
        ))}
        
        {safe(data.layers).map((layer, idx) => (
          <div key={`drill-layer-${idx}`}>
            <div>Q: What does {layer.name} do?</div>
            <div className="text-blue-400 ml-4 mb-2">A: {layer.function}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default UltraMinimalFormat;
