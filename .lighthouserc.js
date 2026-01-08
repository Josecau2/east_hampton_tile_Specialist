module.exports = {
  ci: {
    collect: {
      // Build and serve the production build
      startServerCommand: 'npm run build && npm run start',
      url: ['http://localhost:3001/'],
      numberOfRuns: 3, // Run 3 times and average the results
      // Chrome flags for Windows compatibility (fixes permission errors)
      chromeFlags: '--no-sandbox --disable-setuid-sandbox --disable-dev-shm-usage --disable-gpu --disable-software-rasterizer --disable-extensions --headless=new',
      settings: {
        preset: 'desktop',
        // Throttling settings for consistent results
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
        },
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Performance budgets (based on your current optimizations)
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        
        // Core Web Vitals
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        
        // JavaScript budget (you optimized to reduce ~85KB)
        'total-byte-weight': ['warn', { maxNumericValue: 500000 }], // 500KB total
        'bootup-time': ['warn', { maxNumericValue: 2000 }],
        
        // SEO checks
        'document-title': 'error',
        'meta-description': 'error',
        'link-text': 'warn',
        'crawlable-anchors': 'error',
        'is-crawlable': 'error',
        'robots-txt': 'off', // May fail in local dev
        'canonical': 'error',
        
        // Accessibility
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'aria-allowed-attr': 'error',
        'aria-required-attr': 'error',
        'heading-order': 'error',
        
        // Best practices
        'uses-http2': 'off', // May not be available in local dev
        'uses-passive-event-listeners': 'warn',
        'no-document-write': 'error',
        'external-anchors-use-rel-noopener': 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage', // Free public storage for 7 days
      // For production, consider using filesystem or custom server
      // target: 'filesystem',
      // outputDir: './lighthouse-reports',
    },
  },
};
