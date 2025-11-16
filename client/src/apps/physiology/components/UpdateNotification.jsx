import React, { useState, useEffect } from 'react';

const UpdateNotification = () => {
  const [showBanner, setShowBanner] = useState(false);
  const APP_VERSION = '1.2.0'; // Increment this with each deployment

  useEffect(() => {
    const storedVersion = localStorage.getItem('appVersion');
    if (storedVersion !== APP_VERSION) {
      setShowBanner(true);
    }
  }, []);

  const handleRefresh = () => {
    localStorage.setItem('appVersion', APP_VERSION);
    window.location.reload(true);
  };

  const handleDismiss = () => {
    localStorage.setItem('appVersion', APP_VERSION);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
      color: 'white',
      padding: '12px 20px',
      zIndex: 9999,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      <div style={{ flex: 1, minWidth: '200px' }}>
        <strong>📱 New Content Available!</strong>
        <div style={{ fontSize: '14px', marginTop: '4px' }}>
          Tap "Refresh" to see the latest updates
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleRefresh}
          style={{
            background: 'white',
            color: '#6d28d9',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Refresh Now
        </button>
        <button
          onClick={handleDismiss}
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: '1px solid white',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default UpdateNotification;
