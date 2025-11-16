import { useState, useRef, useEffect } from 'react';
import { Howl } from 'howler';

export const RepeatMode = {
  OFF: 'off',
  ONCE: 'once',
  LOOP: 'loop'
};

export const useAudioPlayer = (onTrackEnd) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [repeat, setRepeat] = useState(RepeatMode.OFF);
  const [isLoading, setIsLoading] = useState(false);
  
  const soundRef = useRef(null);
  const animationRef = useRef(null);
  const intervalRef = useRef(null);
  const repeatCountRef = useRef(0);
  const wasPlayingRef = useRef(false);
  const repeatRef = useRef(RepeatMode.OFF);
  const skipNextTickRef = useRef(false);

  const load = (audioPath) => {
    // Remember if we were playing
    wasPlayingRef.current = isPlaying;

    // Stop current sound if any
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
    }

    // Cancel any ongoing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setIsLoading(true);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    repeatCountRef.current = 0;

    soundRef.current = new Howl({
      src: [audioPath],
      html5: true,
      preload: true,
      onload: () => {
        const dur = soundRef.current.duration();
        setDuration(dur);
        setIsLoading(false);
        // Restore playback speed
        soundRef.current.rate(speed);
        // Auto-play if we were playing before
        if (wasPlayingRef.current) {
          soundRef.current.play();
        }
      },
      onloaderror: (id, error) => {
        console.error('Error loading audio:', error);
        setIsLoading(false);
      },
      onend: () => {
        handleEnd();
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onplay: () => {
        setIsPlaying(true);
      },
      onseek: () => {
        const pos = soundRef.current ? soundRef.current.seek() : 0;
        if (typeof pos === 'number' && !isNaN(pos)) {
          setCurrentTime(pos);
        }
      }
    });
  };

  const handleEnd = () => {
    // Use ref to get current repeat mode (avoids stale closure)
    const currentRepeat = repeatRef.current;

    if (currentRepeat === RepeatMode.LOOP) {
      setCurrentTime(0); // Reset time display for loop
      soundRef.current?.seek(0);
      soundRef.current?.play();
      repeatCountRef.current++;
    } else if (currentRepeat === RepeatMode.ONCE && repeatCountRef.current === 0) {
      setCurrentTime(0); // Reset time display for repeat once
      soundRef.current?.seek(0);
      repeatCountRef.current++;
      soundRef.current?.play();
    } else {
      setIsPlaying(false);
      repeatCountRef.current = 0;
      if (onTrackEnd) onTrackEnd();
    }
  };

  const play = () => {
    if (soundRef.current && !isLoading) {
      soundRef.current.play();
    } else if (isLoading) {
      // Queue play for when audio finishes loading
      wasPlayingRef.current = true;
    }
  };

  const pause = () => {
    if (soundRef.current) {
      soundRef.current.pause();
    }
    // Cancel queued play
    wasPlayingRef.current = false;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const seek = (time) => {
    const s = soundRef.current;
    if (!s) return;

    const dur = typeof s.duration === 'function' ? s.duration() : duration;
    let t = Number(time);
    if (!Number.isFinite(t)) return;
    if (Number.isFinite(dur) && dur > 0) {
      t = Math.min(Math.max(0, t), dur);
    }

    // Set flag to skip next progress update to prevent race condition
    skipNextTickRef.current = true;
    s.seek(t);
    // Do not set currentTime directly - let polling and onseek handle it
  };

  const seekToProgress = (progress01) => {
    const s = soundRef.current;
    if (!s) return;
    const dur = typeof s.duration === 'function' ? s.duration() : duration;
    if (typeof dur === 'number' && dur > 0 && Number.isFinite(progress01)) {
      const clamped = progress01 < 0 ? 0 : progress01 > 1 ? 1 : progress01;
      seek(clamped * dur);
    }
  };

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
    if (soundRef.current) {
      soundRef.current.rate(newSpeed);
    }
  };

  const skipForward = (seconds = 10) => {
    if (soundRef.current) {
      const newTime = Math.min(soundRef.current.seek() + seconds, duration);
      seek(newTime);
    }
  };

  const skipBackward = (seconds = 10) => {
    if (soundRef.current) {
      const newTime = Math.max(soundRef.current.seek() - seconds, 0);
      seek(newTime);
    }
  };

  const toggleRepeat = () => {
    const modes = [RepeatMode.OFF, RepeatMode.ONCE, RepeatMode.LOOP];
    const currentIndex = modes.indexOf(repeat);
    const nextIndex = (currentIndex + 1) % modes.length;
    setRepeat(modes[nextIndex]);
    repeatCountRef.current = 0;
  };

  const setRepeatMode = (mode) => {
    setRepeat(mode);
    repeatCountRef.current = 0;
  };

  const reset = () => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
      soundRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setSpeed(1);
    setRepeat(RepeatMode.OFF);
    setIsLoading(false);
    repeatCountRef.current = 0;
    wasPlayingRef.current = false;
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    intervalRef.current = setInterval(() => {
      const s = soundRef.current;
      if (!s) return;
      
      // Skip update if we just performed a seek to prevent race condition
      if (skipNextTickRef.current) {
        skipNextTickRef.current = false;
        return;
      }
      
      const pos = s.seek();
      if (typeof pos === 'number' && Number.isFinite(pos)) {
        setCurrentTime(pos);
      }
      const durNow = typeof s.duration === 'function' ? s.duration() : null;
      if (typeof durNow === 'number' && Number.isFinite(durNow) && durNow > 0) {
        setDuration(prev => (prev !== durNow ? durNow : prev));
      }
    }, 100);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // Update speed when it changes
  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.rate(speed);
    }
  }, [speed]);

  // Keep repeatRef in sync with repeat state
  useEffect(() => {
    repeatRef.current = repeat;
  }, [repeat]);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    isPlaying,
    currentTime,
    duration,
    speed,
    repeat,
    isLoading,
    load,
    play,
    pause,
    togglePlayPause,
    seek,
    seekToProgress,
    changeSpeed,
    skipForward,
    skipBackward,
    toggleRepeat,
    setRepeatMode,
    reset,
    formatTime
  };
};
