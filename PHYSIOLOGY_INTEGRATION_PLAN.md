# Physiology Integration Plan

## ⚠️ IMPORTANT: Physiology App Compatibility Issues

**The physiology app is a Create React App (CRA) and has fundamental incompatibilities with Vite:**

1. **Router Conflict**: Uses `BrowserRouter` internally - conflicts with unified app's router
2. **JSX Extension Issue**: CRA allows `.js` files with JSX, Vite requires `.jsx`
3. **Import Resolution**: Different module resolution between CRA and Vite
4. **Build System**: CRA uses Webpack, MedLearn-Unified uses Vite

## 🎯 Recommended Approach for Tomorrow

### Option 1: Keep Physiology Separate (EASIEST)
**Deploy physiology as separate Netlify site, link from dashboard**
- Pros: No compatibility issues, preserves original functionality
- Cons: Separate deployment, user navigates to different URL
- Time: 5 minutes

### Option 2: Full Migration (DIFFICULT - NOT RECOMMENDED)
**Convert physiology from CRA to Vite-compatible structure**
- Requires extensive refactoring
- High risk of breaking functionality
- Estimated time: 3-4 hours minimum
- Many edge cases to handle

### Option 3: iframe Embedding (MODERATE)
**Embed physiology site in iframe within unified app**
- Deploy physiology separately
- Create wrapper page with iframe
- Pros: Appears integrated, preserves functionality
- Cons: iframe limitations (styling, communication)
- Time: 30 minutes

## 📋 If You Decide to Integrate Physiology (Option 2)

### Prompt to Use Tomorrow:

```
I want to integrate the physiology app from /Users/peti/Documents/GitHub/physiology-app into MedLearn-Unified.

Please read PHYSIOLOGY_INTEGRATION_PLAN.md first, then:

1. Copy physiology source to src/apps/physiology/
2. Rename ALL .js files containing JSX to .jsx (components, pages, contexts)
3. Update ALL import statements to include .jsx extensions
4. Change BrowserRouter to MemoryRouter in App.jsx
5. Update audio paths from /Audio/Topic-XXX/ to /audio/physiology/Topic-XXX/
6. Scope CSS under .physiology-app class
7. Create PhysiologyPage wrapper (no unified header, just sidebar)
8. Add /physiology route
9. Update dashboard physiology card with path: '/physiology'
10. Copy audio files to public/audio/physiology/

DO NOT modify any original physiology logic or functionality.
```

## 🔧 Technical Details

### Files That Need .js → .jsx Conversion:
```
components/*.js → .jsx (all component files)
pages/*.js → .jsx (HomePage, TopicPage)
context/*Context.js → .jsx (all context files)
```

### Import Updates Required:
```javascript
// In components/index.jsx:
export { default as Navigation } from './Navigation.jsx';
export { default as MiniAudioPlayer } from './MiniAudioPlayer.jsx';
// ... etc

// In pages/index.jsx:
export { default as HomePage } from './HomePage.jsx';
export { default as TopicPage } from './TopicPage.jsx';

// In context/index.js:
export { ContentModeProvider, useContentMode } from './ContentModeContext.jsx';
export { McqFilterProvider, useMcqFilter } from './McqFilterContext.jsx';
export { AudioPlayerProvider, useAudioPlayerContext } from './AudioPlayerContext.jsx';

// In App.jsx:
import { MemoryRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { HomePage, TopicPage } from './pages/index.jsx';
import { Navigation, UpdateNotification } from './components/index.jsx';
```

### Audio Path Updates:
```bash
# Run this command from MedLearn-Unified/client:
find src/apps/physiology/data/Topics -name "*.js" -type f -exec sed -i '' 's|/Audio/Topic-|/audio/physiology/Topic-|g' {} \;
```

### Physiology App Structure:
```
src/apps/physiology/
├── App.jsx (MemoryRouter, not BrowserRouter!)
├── components/
│   ├── Navigation.jsx
│   ├── MiniAudioPlayer.jsx
│   ├── UpdateNotification.jsx
│   └── index.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── TopicPage.jsx
│   └── index.jsx
├── context/
│   ├── ContentModeContext.jsx
│   ├── McqFilterContext.jsx
│   ├── AudioPlayerContext.jsx
│   └── index.js
├── data/
│   └── Topics/ (topic1.js - topic32.js - keep as .js, no JSX)
├── hooks/
├── services/
└── utils/
```

## ⚠️ Known Issues to Expect

1. **Vite may complain about dynamic imports** - physiology uses some dynamic requires
2. **Module resolution differences** - may need to add explicit .jsx extensions
3. **CSS conflicts** - scope everything under `.physiology-app`
4. **Router state** - MemoryRouter doesn't sync with browser URL

## 🎯 My Recommendation

**Deploy physiology separately and just link to it.** The integration effort vs. benefit doesn't make sense given the compatibility issues. You can always integrate later if needed.

If you must integrate, budget 3-4 hours and expect troubleshooting.
