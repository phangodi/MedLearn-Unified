import React from 'react';
import { useAudioPlayer, RepeatMode } from '../hooks';
import { useAudioPlayerContext } from '../context';
import styles from './MiniAudioPlayer.module.css';

/**
 * MiniAudioPlayer - Compact inline audio player for exam answers
 * Features: play/pause, progress bar with seek, time display, speed control, repeat
 */
const MiniAudioPlayer = ({ audioUrl, loId, isCritical }) => {
  const player = useAudioPlayer();
  const { registerPlayer, isActive, activePlayerId } = useAudioPlayerContext();

  React.useEffect(() => {
    if (audioUrl) {
      player.load(audioUrl);
    }
  }, [audioUrl]);

  // Auto-convert ONCE to LOOP on mobile (since mobile only supports OFF/LOOP)
  React.useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && player.repeat === RepeatMode.ONCE) {
      player.setRepeatMode(RepeatMode.LOOP);
    }
  }, [player.repeat]);

  // Reset player to defaults when component unmounts (user leaves topic page)
  React.useEffect(() => {
    return () => {
      player.reset();
    };
  }, []);

  // Pause this player when another player becomes active
  React.useEffect(() => {
    if (activePlayerId && activePlayerId !== loId && player.isPlaying) {
      player.pause();
    }
  }, [activePlayerId, loId, player.isPlaying]);

  // Custom play handler that registers this player first
  const handlePlayPause = () => {
    if (!player.isPlaying) {
      // Register as active BEFORE playing to pause others first
      registerPlayer(loId);
    }
    player.togglePlayPause();
  };

  // Mobile-specific repeat toggle: only OFF and LOOP
  const handleRepeatToggle = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // Mobile: simple toggle between OFF and LOOP only (skip ONCE)
      if (player.repeat === RepeatMode.OFF || player.repeat === RepeatMode.ONCE) {
        // Go directly to LOOP
        player.setRepeatMode(RepeatMode.LOOP);
      } else {
        // LOOP -> OFF
        player.setRepeatMode(RepeatMode.OFF);
      }
    } else {
      // Desktop: normal 3-way toggle (OFF -> ONCE -> LOOP)
      player.toggleRepeat();
    }
  };

  const progressPercent = player.duration > 0
    ? (player.currentTime / player.duration) * 100
    : 0;

  if (!audioUrl) return null;

  // Use critical status to determine color scheme
  const colorClass = isCritical ? 'critical' : 'nonCritical';
  const stateClass = player.isPlaying ? 'playing' : 'paused';

  return (
    <div className={`${styles.miniAudioPlayer} ${styles[colorClass]} ${styles[stateClass]}`}>
      {/* Restart Button */}
      <button
        onClick={() => player.seek(0)}
        disabled={player.isLoading}
        className={`${styles.miniPlayerBtn} ${styles.miniPlayerBtnRestart}`}
        aria-label="Restart"
        title="Restart from beginning"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
        </svg>
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        disabled={player.isLoading}
        className={`${styles.miniPlayerBtn} ${styles.miniPlayerBtnPlay}`}
        aria-label={player.isPlaying ? 'Pause' : 'Play'}
      >
        {player.isLoading ? (
          <span className={styles.miniPlayerLoader}>⏳</span>
        ) : player.isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      {/* Progress Bar + Time */}
      <div className={styles.miniPlayerProgressContainer}>
        {/* Progress Bar */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
            const width = rect.width || 1;
            let pct = x / width;
            if (pct < 0) pct = 0;
            if (pct > 1) pct = 1;
            // Delegate to player so it uses Howler's live duration
            player.seekToProgress(pct);
          }}
          className={styles.miniPlayerProgressBar}
          role="slider"
          aria-valuemin="0"
          aria-valuemax={player.duration}
          aria-valuenow={player.currentTime}
          aria-label="Seek audio"
          title={`${player.formatTime(player.currentTime)} / ${player.formatTime(player.duration)}`}
        >
          <div
            className={styles.miniPlayerProgressFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Time Display - Compact */}
        <div className={styles.miniPlayerTime}>
          {player.formatTime(player.currentTime)}
        </div>
      </div>

      {/* Speed Control */}
      <div className={styles.miniPlayerSpeedContainer}>
        <span className={styles.miniPlayerSpeedLabel}>Speed:</span>
        <select
          value={player.speed}
          onChange={(e) => player.changeSpeed(Number(e.target.value))}
          className={styles.miniPlayerSpeed}
          aria-label="Playback speed"
        >
          <option value="0.75">0.75×</option>
          <option value="1">1×</option>
          <option value="1.25">1.25×</option>
          <option value="1.5">1.5×</option>
          <option value="2">2×</option>
        </select>
      </div>

      {/* Repeat Button */}
      <button
        onClick={handleRepeatToggle}
        className={`${styles.miniPlayerBtnRepeat} ${
          player.repeat !== RepeatMode.OFF ? styles.miniPlayerBtnRepeatActive : ''
        }`}
        data-repeat-mode={player.repeat === RepeatMode.LOOP ? 'loop' : ''}
        data-critical={isCritical ? 'true' : 'false'}
        aria-label={`Repeat: ${player.repeat}`}
        title={player.repeat === RepeatMode.OFF ? 'No repeat' :
               player.repeat === RepeatMode.ONCE ? 'Repeat once (play twice)' :
               'Loop forever'}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 1l4 4-4 4"/>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
          <path d="M7 23l-4-4 4-4"/>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
        </svg>
        <span className={styles.miniPlayerRepeatText}>
          {player.repeat === RepeatMode.OFF && 'No Repeat'}
          {player.repeat === RepeatMode.ONCE && 'Repeat Once'}
          {player.repeat === RepeatMode.LOOP && 'Loop ∞'}
        </span>
      </button>
    </div>
  );
};

export default MiniAudioPlayer;
