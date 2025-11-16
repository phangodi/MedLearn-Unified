import React from 'react';

// Simple Audio Player Hook
function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [speed, setSpeed] = React.useState(1);
  const [repeat, setRepeat] = React.useState(false);
  const soundRef = React.useRef(null);
  const progressIntervalRef = React.useRef(null);

  const load = React.useCallback((audioPath) => {
    // Stop current sound if any
    if (soundRef.current) {
      soundRef.current.unload();
    }

    // If no audio path, don't try to load
    if (!audioPath) {
      setIsLoading(false);
      setIsPlaying(false);
      setError(null);
      setDuration(0);
      setCurrentTime(0);
      return;
    }

    // Verify Howl constructor is available
    if (typeof window.Howl !== 'function') {
      console.error('Howl constructor is not available');
      setIsLoading(false);
      setIsPlaying(false);
      setError('Howl constructor is not available');
      return;
    }

    // Set loading state immediately when trying to load
    setIsLoading(true);
    setIsPlaying(false);
    setError(null);
    setDuration(0);
    setCurrentTime(0);
    setSpeed(1); // Reset speed state to 1 when loading new audio
    
    // Create a simple timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setIsPlaying(false);
      setError('Loading timeout reached');
    }, 8000); // 8 second timeout

    // Create new Howl instance
    try {
      soundRef.current = new window.Howl({
        src: [audioPath],
        html5: true,
        rate: 1,
        onload: () => {
          clearTimeout(loadingTimeout);
          setIsLoading(false);
          setDuration(soundRef.current.duration());
        },
        onloaderror: (id, error) => {
          console.error('Error loading audio:', audioPath, 'ID:', id, 'Error:', error);
          clearTimeout(loadingTimeout);
          setIsLoading(false);
          setIsPlaying(false);
          setError(`Error loading audio: ${error}`);
        },
        onplay: () => {
          setIsPlaying(true);

          // Start progress tracking
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
          }
          progressIntervalRef.current = setInterval(() => {
            if (soundRef.current && soundRef.current.playing()) {
              setCurrentTime(soundRef.current.seek());
            }
          }, 100);
        },
        onpause: () => {
          setIsPlaying(false);

          // Stop progress tracking
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
          }
        },
        onstop: () => {
          setIsPlaying(false);
          setCurrentTime(0);

          // Stop progress tracking
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
          }
        },
        onend: () => {
          // Stop progress tracking
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
          }
          
          if (repeat) {
            // Restart playback if repeat is enabled
            if (soundRef.current) {
              soundRef.current.seek(0);
              soundRef.current.play();
            }
          } else {
            setIsPlaying(false);
            setCurrentTime(0);
          }
        }
      });
    } catch (error) {
      console.error('Error creating Howl instance:', error);
      clearTimeout(loadingTimeout);
      setIsLoading(false);
      setIsPlaying(false);
    }
  }, [speed, repeat]);

  const togglePlayPause = React.useCallback(() => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
  }, [isPlaying]);

  const reset = React.useCallback(() => {
    if (soundRef.current) {
      soundRef.current.unload();
      soundRef.current = null;
    }
    
    setIsPlaying(false);
    setIsLoading(false);
    setDuration(0);
    setCurrentTime(0);
    setSpeed(1);
    setRepeat(false);
    
    // Clear progress interval
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  }, []);

  // Function to seek to a specific position
  const seek = React.useCallback((position) => {
    if (soundRef.current) {
      soundRef.current.seek(position);
      setCurrentTime(position);
    }
  }, []);

  // Function to change playback speed
  const changeSpeed = React.useCallback((newSpeed) => {
    setSpeed(newSpeed);
    if (soundRef.current) {
      soundRef.current.rate(newSpeed);
    }
  }, []);

  // Function to toggle repeat
  const toggleRepeat = React.useCallback(() => {
    setRepeat(prev => !prev);
  }, []);

  // Function to restart playback from the beginning
  const restart = React.useCallback(() => {
    if (soundRef.current) {
      soundRef.current.seek(0);
      soundRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      // Clear progress interval on unmount
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // Format time for display
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    isPlaying,
    isLoading,
    duration,
    currentTime,
    speed,
    repeat,
    load,
    togglePlayPause,
    reset,
    seek,
    changeSpeed,
    toggleRepeat,
    restart,
    formatTime
  };
}

// MiniAudioPlayer Component
function MiniAudioPlayer({ audioUrl }) {
  const player = useAudioPlayer();
  
  React.useEffect(() => {
    if (audioUrl) {
      player.load(audioUrl);
    } else {
      player.reset();
    }

    // Cleanup function
    return () => {
      player.reset();
    };
  }, [audioUrl]);

  const handlePlayPause = () => {
    player.togglePlayPause();
  };

  const handleRestart = () => {
    player.seek(0);
  };

  const handleRepeatToggle = () => {
    player.toggleRepeat();
  };
  
  if (!audioUrl) return null;

  // Test if audio file exists by making a HEAD request
  React.useEffect(() => {
    fetch(audioUrl, { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          console.error('Audio file does not exist or is not accessible:', audioUrl);
        }
      })
      .catch(error => {
        console.error('Error checking audio file existence:', audioUrl, error);
      });
  }, [audioUrl]);

  const stateClass = player.isPlaying ? 'playing' : 'paused';
  const progressPercent = player.duration > 0 ? (player.currentTime / player.duration) * 100 : 0;

  // Handle progress bar click
  const handleProgressClick = (e) => {
    e.stopPropagation();
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const seekTime = clickPosition * player.duration;
    player.seek(seekTime);
  };

  // Handle speed change
  const handleSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    player.changeSpeed(newSpeed);
  };

  return React.createElement('div', {
    className: `mini-audio-player ${stateClass}`,
    style: { backgroundColor: 'transparent', border: 'none' }
  },
    // Restart Button
    React.createElement('button', {
      onClick: handleRestart,
      disabled: player.isLoading,
      className: 'mini-player-btn mini-player-btn-restart',
      'aria-label': 'Restart',
      title: 'Restart from beginning'
    },
      React.createElement('svg', {
        width: '18',
        height: '18',
        viewBox: '0 0 24 24',
        fill: 'currentColor'
      },
        React.createElement('path', {
          d: 'M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z'
        })
      )
    ),
    
    // Play/Pause Button
    React.createElement('button', {
      onClick: handlePlayPause,
      disabled: player.isLoading,
      className: 'mini-player-btn mini-player-btn-play',
      'aria-label': player.isPlaying ? 'Pause' : 'Play'
    },
      player.isLoading ? 
        React.createElement('span', { className: 'mini-player-loader' }, '⏳') :
        player.isPlaying ?
          React.createElement('svg', {
            width: '18',
            height: '18',
            viewBox: '0 0 24 24',
            fill: 'currentColor'
          },
            React.createElement('rect', { x: '6', y: '4', width: '4', height: '16', rx: '1' }),
            React.createElement('rect', { x: '14', y: '4', width: '4', height: '16', rx: '1' })
          ) :
          React.createElement('svg', {
            width: '18',
            height: '18',
            viewBox: '0 0 24 24',
            fill: 'currentColor'
          },
            React.createElement('path', { d: 'M8 5v14l11-7z' })
          )
    ),
    
    // Progress Bar + Time
    React.createElement('div', { className: 'mini-player-progress-container' },
      // Progress Bar
      React.createElement('div', {
        onClick: handleProgressClick,
        className: 'mini-player-progress-bar',
        role: 'slider',
        'aria-valuemin': '0',
        'aria-valuemax': player.duration,
        'aria-valuenow': player.currentTime,
        'aria-label': 'Seek audio',
        title: `${player.formatTime(player.currentTime)} / ${player.formatTime(player.duration)}`
      },
        React.createElement('div', {
          className: 'mini-player-progress-fill',
          style: { width: `${progressPercent}%` }
        })
      ),
      
      // Time Display - Compact
      React.createElement('div', { className: 'mini-player-time' },
        player.formatTime(player.currentTime)
      )
    ),
    
    // Speed Control
    React.createElement('div', { className: 'mini-player-speed-container' },
      React.createElement('span', { className: 'mini-player-speed-label' }, 'Speed:'),
      React.createElement('select', {
        value: player.speed,
        onChange: handleSpeedChange,
        className: 'mini-player-speed',
        'aria-label': 'Playback speed'
      },
        React.createElement('option', { value: 0.75 }, '0.75×'),
        React.createElement('option', { value: 1 }, '1×'),
        React.createElement('option', { value: 1.25 }, '1.25×'),
        React.createElement('option', { value: 1.5 }, '1.5×'),
        React.createElement('option', { value: 2 }, '2×')
      )
    ),
    
    // Repeat Button
    React.createElement('button', {
      onClick: handleRepeatToggle,
      className: `mini-player-btn-repeat ${
        player.repeat ? 'mini-player-btn-repeat-active' : ''
      }`,
      'aria-label': `Repeat: ${player.repeat ? 'on' : 'off'}`,
      title: player.repeat ? 'Repeat is on' : 'Repeat is off'
    },
      React.createElement('svg', {
        width: '14',
        height: '14',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2'
      },
        React.createElement('path', { d: 'M17 1l4 4-4 4' }),
        React.createElement('path', { d: 'M3 11V9a4 4 0 0 1 4-4h14' }),
        React.createElement('path', { d: 'M7 23l-4-4 4-4' }),
        React.createElement('path', { d: 'M21 13v2a4 4 0 0 1-4 4H3' })
      ),
      React.createElement('span', { className: 'mini-player-repeat-text' },
        player.repeat ? 'Repeat On' : 'Repeat Off'
      )
    )
  );
}

// Helper function to escape regex special characters
const escapeRegex = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// Helper function to format text with bold keywords
const formatText = (text) => {
  if (!text) return null;
  
  // List of keywords and phrases to bold (based on histology terminology)
  const boldPatterns = [
    // Layers
    'endoneurium', 'perineurium', 'epineurium', 'pia mater', 'arachnoid mater', 'dura mater',
    'blood-nerve barrier', 'blood-brain barrier',
    // Structures
    'neuromuscular junction', 'motor end plate', 'synaptic cleft', 'synaptic vesicles',
    'junctional folds', 'acetylcholine', 'acetylcholinesterase', 'AChE',
    'myelin sheath', 'Schwann cells', 'nodes of Ranvier', 'saltatory conduction',
    'pseudounipolar neurons', 'multipolar neurons', 'satellite glial cells',
    'peripheral nerve', 'motor neuron', 'sensory ganglion', 'autonomic ganglion',
    // Specialized structures
    'Meissner\'s corpuscles', 'Vater-Pacinian corpuscles', 'Purkinje cells',
    'molecular layer', 'granular layer', 'Purkinje cell layer',
    'white matter', 'gray matter', 'central canal', 'spinal cord',
    'epidermis', 'dermis', 'hypodermis',
    'meninges', 'subarachnoid space', 'arachnoid granulations',
    'medulla oblongata', 'cerebellum', 'pyramids', 'olivary nucleus',
    // Cellular components
    'fibrocytes', 'adipocytes', 'capillaries', 'reticular fibers',
    'collagen', 'tight junctions', 'basement membranes',
    'voltage-gated sodium channels', 'calcium channels',
    'presynaptic', 'postsynaptic', 'action potential',
    'axon', 'dendrites', 'cell bodies', 'fascicles',
    // Processes
    'exocytosis', 'vesicle fusion', 'signal transmission',
    'motor control', 'sensory processing',
  ];
  
  // Sort patterns by length (longest first) to avoid substring matching issues
  const sortedPatterns = [...boldPatterns].sort((a, b) => b.length - a.length);
  
  // Split text into parts and apply bold formatting
  let parts = [text];
  
  sortedPatterns.forEach((pattern, patternIdx) => {
    const newParts = [];
    parts.forEach((part, partIdx) => {
      if (typeof part === 'string') {
        // Escape special regex characters and use word boundaries
        const escapedPattern = escapeRegex(pattern);
        const regex = new RegExp(`\\b(${escapedPattern})\\b`, 'gi');
        const splitParts = part.split(regex);
        
        splitParts.forEach((subPart, idx) => {
          if (subPart && subPart.toLowerCase() === pattern.toLowerCase()) {
            // Create unique key using pattern index, part index, and subpart index
            newParts.push(
              React.createElement('strong', { key: `bold-${patternIdx}-${partIdx}-${idx}` }, subPart)
            );
          } else if (subPart) {
            // Keep non-empty strings to preserve spacing
            newParts.push(subPart);
          }
        });
      } else {
        // Keep React elements (already bolded text)
        newParts.push(part);
      }
    });
    parts = newParts;
  });
  
  return parts;
};

// Component to render formatted paragraphs
const FormattedParagraph = ({ text, isIntro = false }) => {
  const className = isIntro 
    ? "text-lg text-gray-800 leading-relaxed mb-6 font-semibold" 
    : "text-base text-gray-700 leading-relaxed mb-4";
  
  return (
    <p className={className}>
      {formatText(text)}
    </p>
  );
};

const ExamPresentationFormat = ({ data }) => {
  const presentation = data.examPresentation;

  // Check if audio file exists for this slide
  const slideNumber = Number(data.slideNumber);
  const audioFileExists = [
    15, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89
  ].includes(slideNumber);
  
  if (!presentation) {
    return (
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
        <p className="text-yellow-800 text-center">
          Exam Presentation content is being prepared for this slide.
        </p>
        <p className="text-xs text-gray-600 mt-2 text-center">
          Debug: Slide {data.slideNumber} - Available keys: {Object.keys(data).join(', ')}
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-green-500 p-2 rounded-lg">
            <span className="text-2xl">🎤</span>
          </div>
          <div>
            <h2 className="text-2xl font-black text-green-900">EXAM PRESENTATION</h2>
            <p className="text-sm text-green-700">Formatted for oral exam presentation</p>
          </div>
        </div>
      </div>
      
      {/* Audio Player */}
      {audioFileExists && (
        <div className="px-6">
          <MiniAudioPlayer audioUrl={`/Audio/histology/mto1/Slide_${data.slideNumber}.mp3`} />
        </div>
      )}
      
      {/* Introduction */}
      {presentation.introduction && (
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow">
          <FormattedParagraph text={presentation.introduction} isIntro={true} />
        </div>
      )}
      
      {/* Main Content Sections */}
      {presentation.sections && presentation.sections.map((section, idx) => (
        <div key={idx} className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow">
          {/* Section Header */}
          {section.title && (
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-blue-900">{formatText(section.title)}</h3>
            </div>
          )}
          
          {/* Section Content */}
          <div className="ml-11">
            {section.content && (
              <FormattedParagraph text={section.content} />
            )}
            
            {/* Bullet points */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 ml-4">
                {section.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span className="text-gray-700 leading-relaxed flex-1">
                      {formatText(bullet)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
      
      {/* Additional Structures */}
      {presentation.additionalStructures && presentation.additionalStructures.length > 0 && (
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold text-purple-900 mb-4">Additional Structures</h3>
          <div className="space-y-3">
            {presentation.additionalStructures.map((structure, idx) => (
              <div key={idx} className="bg-purple-50 rounded-lg p-4">
                <FormattedParagraph text={structure} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamPresentationFormat;