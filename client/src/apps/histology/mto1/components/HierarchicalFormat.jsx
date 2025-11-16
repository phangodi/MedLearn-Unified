import React from 'react';
import { Target } from 'lucide-react';
import RecursiveStructureTree from './RecursiveStructureTree';
import { safe, safeString } from '../utils/helpers';

// Recursive helper to render nested structures at any depth (supports 6-8+ levels)
const RenderNestedStructure = ({ item, depth = 0 }) => {
  const hasChildren = item.children && item.children.length > 0;
  const indent = depth * 4; // ml-4 per level
  
  return (
    <div className="mb-2">
      <div className="bg-white/70 rounded-lg p-4 shadow">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-2 h-2 rounded-full ${depth === 0 ? 'bg-blue-600' : depth === 1 ? 'bg-blue-500' : 'bg-blue-400'}`}></div>
          <h4 className={`font-bold text-gray-900 capitalize ${depth === 0 ? 'text-base' : 'text-sm'}`}>{item.name}</h4>
        </div>
        {item.description && (
          <div className="ml-4 text-sm text-gray-700 mb-2">{item.description}</div>
        )}
        {item.relationship && (
          <div className="ml-4 text-sm bg-yellow-100 text-yellow-900 px-2 py-1 rounded inline-block">{item.relationship}</div>
        )}
        {item.clinicalNote && (
          <div className="ml-4 mt-2 text-sm text-blue-700 bg-blue-50 p-2 rounded">
            <span className="font-bold">Clinical:</span> {item.clinicalNote}
          </div>
        )}
        
        {/* Recursive children rendering */}
        {hasChildren && (
          <div className="ml-4 mt-3 border-l-2 border-gray-400 pl-4 space-y-2">
            {item.children.map((child, idx) => (
              <RenderNestedStructure key={idx} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const HierarchicalFormat = ({ data }) => (
  <div className="space-y-6">
  

    {/* Staining Info */}
    <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-5">
      <h3 className="text-xl font-bold text-purple-900 mb-3">🔬 STAINING: {data.stainingInfo.technique}</h3>
      <p className="text-purple-800 mb-3">{data.stainingInfo.description}</p>
      <div className="bg-white rounded p-3 space-y-1 text-sm">
        <div className="font-bold text-purple-900 mb-2">In THIS slide:</div>
        {data.stainingInfo.whatItStainsInThisSlide.map((item, idx) => (
          <div key={idx} className="text-purple-700">• {item}</div>
        ))}
      </div>
      <div className="mt-3 p-3 bg-purple-200 rounded-lg">
        <div className="font-bold text-purple-900">KEY:</div>
        <div className="text-purple-800 text-sm">{data.stainingInfo.keyEmphasis}</div>
      </div>
    </div>

    {/* EXAM ESSENTIALS - CLEAN FLAT STRUCTURE */}
    {data.examEssentialStructures && (
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
        {/* Professional Header with Icon Badge */}
        <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-200">
          <div className="bg-blue-500 p-3 rounded-xl shadow-lg">
            <span className="text-3xl text-white">🎯</span>
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900">EXAM ESSENTIALS</h2>
            <p className="text-gray-600 text-base font-medium mt-1">Must-know structures for identification and testing</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Bundle of Nerve Fibers with nested children */}
          {data.examEssentialStructures.grouped && data.examEssentialStructures.grouped.length > 0 && (
            <>
              {data.examEssentialStructures.grouped.map((group, idx) => {
                const isNestedFormat = group.children && group.children.length > 0 && typeof group.children[0] === 'object' && group.children[0].name;
                
                return (
                  <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                    {/* Parent Structure */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-gray-900 capitalize">{group.parent}</h3>
                      </div>
                    </div>
                    
                    {/* Additional Info */}
                    {(group.where || group.function) && (
                      <div className="ml-11 mb-4 space-y-2 text-base text-gray-700">
                        {group.where && <div><span className="font-bold">Location:</span> {group.where}</div>}
                        {group.function && <div><span className="font-bold">Function:</span> {group.function}</div>}
                      </div>
                    )}
                    
                    {/* Nested Children - ALL as white boxes like adipocytes */}
                    {group.children && group.children.length > 0 && (
                      <div className="ml-11 border-l-2 border-blue-300 pl-6 space-y-3">
                        {isNestedFormat ? (
                          // RECURSIVE FORMAT: Handles unlimited nesting depth (6-8+ levels)
                          group.children.map((child, childIdx) => (
                            <RenderNestedStructure key={childIdx} item={child} depth={0} />
                          ))
                        ) : (
                          // OLD FORMAT: Simple string children
                          group.children.map((child, childIdx) => (
                            <div key={childIdx} className="bg-white/70 rounded-lg p-3 shadow-sm">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span className="font-semibold text-base text-gray-900 capitalize">{child}</span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          )}
          
          {/* Layers - Each as separate card */}
          {data.examEssentialStructures.layers && data.examEssentialStructures.layers.map((layerName, layerIdx) => {
            // Smart matching: exact match first, then word-boundary substring matching
            // Prevents "dermis" from matching "Epidermis" (substring bug)
            const layer = data.layers?.find(l => {
              if (!l || !l.name) return false;
              const layerNameLower = l.name.toLowerCase();
              const searchLower = layerName.toLowerCase();
              
              // Remove parentheses content for base name comparison
              const baseLayerName = layerNameLower.split('(')[0].trim();
              const baseSearch = searchLower.split('(')[0].trim();
              
              // Exact match (ignoring case)
              if (baseLayerName === baseSearch) return true;
              
              // Substring match only if at word boundary (start of string or after space)
              // This allows "satellite cells" to match "Satellite Cells (Capsule Cells)"
              // But prevents "dermis" from matching "Epidermis"
              return layerNameLower.includes(searchLower) && 
                     (layerNameLower.startsWith(searchLower) || 
                      layerNameLower.includes(' ' + searchLower) ||
                      layerNameLower.includes('-' + searchLower));
            });
            if (!layer) return null;
            
            // All layers use purple color (matching "supporting layers" theme)
            const color = { 
              bg: 'from-purple-50 to-purple-100', 
              border: 'border-purple-500', 
              number: 'bg-purple-500' 
            };
            
            // Check if this layer has sublayers (e.g., adipocytes under epineurium)
            const hasSubStructures = layerName.toLowerCase() === 'epineurium' && 
              data.examEssentialStructures.additional && 
              data.examEssentialStructures.additional.some(item => item.toLowerCase().includes('adipocyte'));
            
            return (
              <div key={layerIdx} className={`bg-gradient-to-r ${color.bg} rounded-xl p-6 shadow-lg border-l-4 ${color.border}`}>
                {/* Layer Name */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-full ${color.number} text-white flex items-center justify-center flex-shrink-0 font-bold`}>
                    {layerIdx + 2}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-gray-900">{layer.name}</h3>
                  </div>
                </div>
                
                {/* Layer Details - ALL DATA RESTORED */}
                <div className="ml-11 space-y-2 text-base text-gray-700">
                  {layer.level && <div><span className="font-bold">Level:</span> {layer.level}</div>}
                  {layer.wraps && <div><span className="font-bold">Wraps:</span> {layer.wraps}</div>}
                  {layer.appearance && <div><span className="font-bold">Appearance:</span> {layer.appearance}</div>}
                  {layer.composition && <div><span className="font-bold">Composition:</span> {layer.composition}</div>}
                  {layer.contains && <div><span className="font-bold">Contains:</span> {layer.contains}</div>}
                  {layer.function && <div><span className="font-bold">Function:</span> {layer.function}</div>}
                  {layer.quickID && <div><span className="font-bold">Quick ID:</span> {layer.quickID}</div>}
                  {layer.cnsEquivalent && (
                    <div className="text-blue-600"><span className="font-bold">🧠 CNS Equivalent:</span> {layer.cnsEquivalent}</div>
                  )}
                </div>
                
                {/* Sublayers (e.g., Adipocytes under Epineurium) */}
                {hasSubStructures && (
                  <div className="ml-11 mt-4 border-l-2 border-gray-400 pl-6">
                    {data.examEssentialStructures.additional
                      .filter(item => item.toLowerCase().includes('adipocyte'))
                      .map((item, subIdx) => {
                        // Find details from aroundOrOutside array
                        const details = safe(data.aroundOrOutside).find(s => 
                          s.structure?.toLowerCase().includes('adipocyte')
                        );
                        
                        return (
                          <div key={subIdx} className="bg-white/70 rounded-lg p-4 shadow">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 rounded-full bg-green-600"></div>
                              <h4 className="font-bold text-gray-900 capitalize">{item}</h4>
                            </div>
                            {details && (
                              <div className="ml-4 space-y-1 text-base text-gray-700">
                                {details.description && <div>{details.description}</div>}
                                {details.function && <div><span className="font-bold">Function:</span> {details.function}</div>}
                                {details.spotIt && <div><span className="font-bold">How to spot:</span> {details.spotIt}</div>}
                              </div>
                            )}
                          </div>
                        );
                      })
                    }
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Other Additional Structures (non-adipocytes) */}
          {data.examEssentialStructures.additional && 
            data.examEssentialStructures.additional
              .filter(item => !item.toLowerCase().includes('adipocyte'))
              .map((item, idx) => {
                // Search for details in both insideTheFascicles and aroundOrOutside arrays
                const itemLower = item.toLowerCase();
                let details = safe(data.insideTheFascicles).find(s => 
                  s.structure?.toLowerCase().includes(itemLower)
                );
                if (!details) {
                  details = safe(data.aroundOrOutside).find(s => 
                    s.structure?.toLowerCase().includes(itemLower)
                  );
                }
                
                return (
                  <div key={idx} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg border-l-4 border-gray-500">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                        {(data.examEssentialStructures.layers?.length || 0) + idx + 2}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-gray-900 capitalize">{item}</h3>
                      </div>
                    </div>
                    
                    {/* Display structure details if found */}
                    {details && (
                      <div className="ml-11 space-y-2 text-base text-gray-700">
                        {details.description && <div>{details.description}</div>}
                        {details.function && <div><span className="font-bold">Function:</span> {details.function}</div>}
                        {details.spotIt && <div><span className="font-bold">How to spot:</span> {details.spotIt}</div>}
                      </div>
                    )}
                  </div>
                );
              })
          }
        </div>
      </div>
    )}

    {/* Big Picture - COMPLETELY REDESIGNED */}
    {data.bigPicture && (
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-white/30">
          <div className="bg-white/20 p-3 rounded-xl">
            <Target className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-white">BIG PICTURE</h2>
            <p className="text-blue-100 text-sm">The essential concept you need to understand</p>
          </div>
        </div>

        {/* Main Message */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
          <p className="text-2xl font-bold text-gray-900 leading-relaxed">{data.bigPicture}</p>
        </div>

        {/* Hierarchy Visual */}
        {data.hierarchy && (
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                Hierarchical Organization
              </h3>
              <div className="space-y-3">
                {data.hierarchy.map((line, idx) => {
                  // Parse the line to detect different levels
                  const isArrow = line.includes('→');
                  const isEquivalent = line.includes('(') && line.includes(')');
                  
                  return (
                    <div key={idx} className="bg-white/20 rounded-lg px-4 py-3 backdrop-blur-sm">
                      <div className="font-mono text-white font-bold text-lg tracking-wide">
                        {line}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Key Visual Insight for Slide 73 */}
        {data.slideNumber === "73" && (
          <div className="mt-6 bg-yellow-400 rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-2">KEY VISUAL INSIGHT</h3>
                <p className="text-gray-900 font-semibold text-lg">
                  OsO₄ stains myelin <span className="bg-gray-900 text-white px-2 py-1 rounded">BLACK</span> revealing nodes of Ranvier in longitudinal nerve sections
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">⚫</div>
                    <div className="font-bold text-sm text-gray-900">Myelin = BLACK</div>
                    <div className="text-xs text-gray-600">Lipid preserved</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">⚪</div>
                    <div className="font-bold text-sm text-gray-900">Axon = WHITE</div>
                    <div className="text-xs text-gray-600">Negative image</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">⭕</div>
                    <div className="font-bold text-sm text-gray-900">Nodes = GAPS</div>
                    <div className="text-xs text-gray-600">Periodic white</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )}

    {/* Critical Relationships - COMPLETELY REDESIGNED */}
    {data.criticalRelationships && data.criticalRelationships.length > 0 && (
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-blue-300">
          <div className="bg-blue-500 p-3 rounded-xl shadow-lg">
            <span className="text-3xl text-white">⚡</span>
          </div>
          <div>
            <h2 className="text-3xl font-black text-blue-900">CRITICAL RELATIONSHIPS</h2>
            <p className="text-blue-700 text-sm font-semibold">High-yield concepts frequently tested on exams</p>
          </div>
        </div>

        {/* Relationships Grid */}
        <div className="space-y-6">
          {data.criticalRelationships.map((rel, idx) => {
            // Uniform blue color scheme for all cards
            const colors = {
              bg: 'from-blue-50 to-indigo-50',
              border: 'border-blue-400',
              badge: 'bg-blue-500',
              text: 'text-blue-900',
              emphasis: 'bg-blue-100 text-blue-900'
            };
            
            return (
              <div key={idx} className={`bg-gradient-to-r ${colors.bg} rounded-xl border-2 ${colors.border} overflow-hidden shadow-lg`}>
                {/* Card Header */}
                <div className="bg-white/70 backdrop-blur-sm p-5 border-b-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className={`${colors.badge} text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-2xl font-black">{idx + 1}</span>
                    </div>
                    
                    {/* Title */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-black ${colors.text}`}>{rel.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Main Content */}
                  <div className="bg-white rounded-lg p-4 mb-4 shadow">
                    <p className={`${colors.text} font-semibold text-base leading-relaxed`}>{rel.content}</p>
                  </div>

                  {/* Details as bullet points in single block */}
                  {rel.details && rel.details.length > 0 && (
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <ul className="space-y-2">
                        {rel.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="text-gray-900 text-base leading-relaxed">
                            <span className="font-bold">•</span> {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Emphasis Box */}
                  {rel.emphasis && (
                    <div className={`mt-4 ${colors.emphasis} rounded-xl p-4 shadow-md border-2 ${colors.border}`}>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">💡</span>
                        <div className="flex-1">
                          <div className="font-bold text-sm mb-1">WHY CRITICAL:</div>
                          <p className="text-sm leading-relaxed">{rel.emphasis}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </div>
);

export default HierarchicalFormat;
