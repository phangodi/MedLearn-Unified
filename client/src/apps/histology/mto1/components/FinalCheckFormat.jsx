import React from 'react';
import { Lightbulb, AlertCircle, Target, Stethoscope } from 'lucide-react';

const FinalCheckFormat = ({ data }) => {
  const fc = data?.finalCheckData;

  if (!fc) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
        <p className="text-yellow-800 font-semibold">
          Final Check content not available for this slide yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {fc.slideGroup && (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-black mb-2">{fc.slideGroup}</h2>
          {fc.groupNote && <p className="text-indigo-100 font-semibold">{fc.groupNote}</p>}
          {fc.bigPicture && (
            <div className="mt-3 bg-white/20 rounded-lg p-3">
              <p className="text-indigo-50 leading-relaxed">
                <strong>THE BIG PICTURE:</strong> {fc.bigPicture}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="border-4 border-emerald-500 rounded-2xl overflow-hidden bg-white shadow-xl">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-black">SLIDE {data.slideNumber}: {data.name.toUpperCase()}</h2>
            <div className="bg-white text-emerald-700 px-4 py-2 rounded-full font-bold text-sm">
              Slide {data.slideNumber}
            </div>
          </div>
          <p className="text-emerald-100 font-semibold">Stain: {data.stain}</p>
        </div>

        <div className="p-6 space-y-6">
          {!fc.slideGroup && fc.bigPicture && (
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="text-blue-600" size={24} />
                <h3 className="text-xl font-black text-blue-900">THE BIG PICTURE:</h3>
              </div>
              <p className="text-gray-800 leading-relaxed">{fc.bigPicture}</p>
            </div>
          )}

          {fc.essentialStructures && (
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-purple-600" size={24} />
                <h3 className="text-xl font-black text-purple-900">ESSENTIAL STRUCTURES:</h3>
              </div>

              {Array.isArray(fc.essentialStructures) && (
                <div className="space-y-4">
                  {fc.essentialStructures.map((struct, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
                      <h4 className="font-bold text-lg text-purple-900 mb-2">
                        {i + 1}. {struct.name} {struct.isMain && <span className="text-red-600">(MAIN STRUCTURE)</span>}
                      </h4>
                      <ul className="space-y-1 text-gray-700">
                        {struct.points?.map((point, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {struct.subComponents && (
                        <div className="ml-6 space-y-2 mt-2">
                          {struct.subComponents.map((sub, k) => (
                            <div key={k} className="bg-purple-50 rounded-md p-3">
                              <p className="font-semibold text-purple-900">• {sub.name}</p>
                              <p className="text-sm text-gray-600">{sub.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {!Array.isArray(fc.essentialStructures) && fc.essentialStructures.insideFascicles && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900 mb-3">INSIDE FASCICLES:</h4>
                    <div className="space-y-4">
                      {fc.essentialStructures.insideFascicles.map((struct, i) => (
                        <div key={i} className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
                          <h5 className="font-bold text-lg text-purple-900 mb-2">{i + 1}. {struct.name}</h5>
                          <ul className="space-y-1 text-gray-700">
                            {struct.points.map((point, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {fc.essentialStructures.connectiveTissueLayers && (
                    <div>
                      <h4 className="font-bold text-lg text-purple-900 mb-3">CONNECTIVE TISSUE LAYERS (Inside → Outside):</h4>
                      <div className="space-y-4">
                        {fc.essentialStructures.connectiveTissueLayers.map((struct, i) => (
                          <div key={i} className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
                            <h5 className="font-bold text-lg text-purple-900 mb-2">{i + 5}. {struct.name}</h5>
                            <ul className="space-y-1 text-gray-700">
                              {struct.points.map((point, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-purple-500 mt-1">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {fc.essentialStructures.additional && (
                    <div>
                      <h4 className="font-bold text-lg text-purple-900 mb-3">ADDITIONAL STRUCTURES:</h4>
                      <div className="space-y-4">
                        {fc.essentialStructures.additional.map((struct, i) => (
                          <div key={i} className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
                            <h5 className="font-bold text-lg text-purple-900 mb-2">{i + 8}. {struct.name}</h5>
                            <ul className="space-y-1 text-gray-700">
                              {struct.points.map((point, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-purple-500 mt-1">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {fc.examShortcuts && (
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="text-amber-600" size={24} />
                <h3 className="text-xl font-black text-amber-900">EXAM SHORTCUTS:</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(fc.examShortcuts).map(([key, items]) => {
                  // Convert camelCase to Title Case with spaces
                  const formatTitle = (str) => {
                    return str
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (s) => s.toUpperCase())
                      .trim()
                      .toUpperCase()
                      .replace('VS', 'vs');
                  };
                  
                  return (
                    <div key={key} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-amber-900 mb-2">{formatTitle(key)}:</h4>
                      <ul className="space-y-1 text-gray-700">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {fc.clinicalPearl && (
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope className="text-red-600" size={24} />
                <h3 className="text-xl font-black text-red-900">CLINICAL PEARL:</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                {fc.clinicalPearl.map((pearl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>
                      <strong className="text-red-900">{pearl.disease}:</strong> {pearl.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {fc.studyTip && (
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg p-5 shadow-lg">
              <h3 className="text-xl font-black mb-2">💡 STUDY TIP:</h3>
              <p className="text-teal-50 leading-relaxed">{fc.studyTip}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalCheckFormat;