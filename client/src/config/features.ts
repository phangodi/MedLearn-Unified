/**
 * Feature flags for enabling/disabling various features
 * This allows for easy toggling of features without code changes
 */

export const features = {
  /**
   * Show "Active Now" panel in Community page
   * Set to false to hide online status tracking
   * Code is preserved but hidden for potential future activation
   */
  showActiveNow: false,

  /**
   * Allow public profile viewing
   * When false, only the profile owner can view their own profile
   * When true, profiles are publicly viewable (respecting privacy settings)
   */
  allowPublicProfiles: false,

  /**
   * Require email verification for new accounts
   */
  requireEmailVerification: false,

  /**
   * Enable anonymous posting feature
   */
  allowAnonymousPosts: true,

  /**
   * Show trending discussions panel
   */
  showTrendingDiscussions: true,
} as const

export type FeatureFlags = typeof features
