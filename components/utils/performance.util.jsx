import { useEffect } from 'react';

/**
 * Performance monitoring utility
 * Tracks Core Web Vitals and provides analytics
 */
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals reporting
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      function sendToAnalytics(metric) {
        // Send to your analytics service
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
          });
        }
        
        // Console log in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Web Vital:', metric);
        }
      }

      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    });

    // Performance Observer for navigation timing
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navTiming = entry;
            const pageLoadTime = navTiming.loadEventEnd - navTiming.fetchStart;
            
            if (window.gtag) {
              window.gtag('event', 'page_load_time', {
                event_category: 'Performance',
                value: Math.round(pageLoadTime),
                non_interaction: true,
              });
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);
}

/**
 * Image lazy loading intersection observer hook
 */
export function useLazyLoading(ref, threshold = 0.1) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      },
      { threshold }
    );

    const images = ref.current.querySelectorAll('img[data-src]');
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, [ref, threshold]);
}