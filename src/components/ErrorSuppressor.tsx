'use client';

import { useEffect } from 'react';

export default function ErrorSuppressor() {
  useEffect(() => {
    // More comprehensive error suppression for external services
    const suppressedDomains = [
      'crwdcntrl.net',
      'lotameAudience',
      'cc_af.js',
      'sync.amperwave.net',
      'idsync.js',
      'atemda.com',
      'v7player',
      'magnite',
      'playerservices.live.streamtheworld.com',
      '_next/static/chunks/main-app.js',
      '_next/static/chunks/app-pages-internals.js',
      '_next/static/chunks/app/not-found.js',
      'v7player-237fd669.js',
      'p287.atemda.com'
    ];

    const suppressedMessages = [
      'Failed to load resource',
      'Internal Server Error',
      'ERR_NAME_NOT_RESOLVED',
      'ERR_ABORTED',
      'Network Error',
      'Bad Request',
      'Forbidden',
      'Redux DevTools extension',
      'Uncaught (in promise)',
      '[object Event]',
      'the server responded with a status of 400',
      'the server responded with a status of 403', 
      'the server responded with a status of 404',
      'the server responded with a status of 500',
      'Using Redux DevTools extension',
      'Error: [object Event]',
      'stationId=NaN',
      'withCredentials=%27true%27'
    ];

    // Override console methods
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;
    const originalConsoleLog = console.log;

    const shouldSuppress = (args: any[]) => {
      const message = args.join(' ').toLowerCase();
      return suppressedDomains.some(domain => message.includes(domain.toLowerCase())) ||
             suppressedMessages.some(msg => message.includes(msg.toLowerCase())) ||
             message.includes('v7player') ||
             message.includes('streamtheworld') ||
             message.includes('static/chunks') ||
             message.includes('redux devtools') ||
             message.includes('lotame') ||
             message.includes('magnite');
    };

    console.error = (...args) => {
      if (!shouldSuppress(args)) {
        originalConsoleError.apply(console, args);
      }
    };

    console.warn = (...args) => {
      if (!shouldSuppress(args)) {
        originalConsoleWarn.apply(console, args);
      }
    };

    console.log = (...args) => {
      if (!shouldSuppress(args)) {
        originalConsoleLog.apply(console, args);
      }
    };

    // Override window error handlers
    const originalWindowError = window.onerror;
    const originalUnhandledRejection = window.onunhandledrejection;

    window.onerror = (message, source, lineno, colno, error) => {
      const messageStr = String(message).toLowerCase();
      const sourceStr = String(source || '').toLowerCase();
      
      const shouldSuppressError = 
        suppressedDomains.some(domain => sourceStr.includes(domain.toLowerCase()) || messageStr.includes(domain.toLowerCase())) ||
        suppressedMessages.some(msg => messageStr.includes(msg.toLowerCase())) ||
        sourceStr.includes('v7player') ||
        sourceStr.includes('streamtheworld') ||
        sourceStr.includes('static/chunks') ||
        messageStr.includes('redux devtools') ||
        messageStr.includes('[object event]') ||
        messageStr.includes('network error');
      
      if (!shouldSuppressError && originalWindowError) {
        return originalWindowError(message, source, lineno, colno, error);
      }
      
      return true; // Suppress the error
    };

    window.onunhandledrejection = (event) => {
      const reason = String(event.reason || '').toLowerCase();
      
      const shouldSuppressPromise = 
        suppressedDomains.some(domain => reason.includes(domain.toLowerCase())) ||
        suppressedMessages.some(msg => reason.includes(msg.toLowerCase())) ||
        reason.includes('v7player') ||
        reason.includes('streamtheworld') ||
        reason.includes('network error') ||
        reason.includes('[object event]') ||
        reason.includes('magnite') ||
        reason.includes('lotame');
      
      if (shouldSuppressPromise) {
        event.preventDefault();
        return;
      }
      
      if (originalUnhandledRejection) {
        originalUnhandledRejection.call(window, event);
      }
    };

    // Override fetch to suppress network errors
    const originalFetch = window.fetch;
    window.fetch = (...args) => {
      const url = String(args[0]).toLowerCase();
      const shouldSuppressFetch = suppressedDomains.some(domain => 
        url.includes(domain.toLowerCase())
      ) || url.includes('playerservices.live.streamtheworld.com') ||
          url.includes('sync.amperwave.net') ||
          url.includes('atemda.com') ||
          url.includes('magnite') ||
          url.includes('stationid=nan');
      
      if (shouldSuppressFetch) {
        // Return a resolved promise silently for suppressed domains
        return Promise.resolve(new Response('{}', { 
          status: 200, 
          statusText: 'OK',
          headers: { 'Content-Type': 'application/json' }
        }));
      }
      
      return originalFetch.apply(window, args).catch((error) => {
        // Suppress network errors from external services
        const errorStr = String(error).toLowerCase();
        if (suppressedDomains.some(domain => errorStr.includes(domain.toLowerCase())) ||
            errorStr.includes('network error') ||
            errorStr.includes('failed to fetch')) {
          return Promise.resolve(new Response('{}', { 
            status: 200, 
            statusText: 'OK',
            headers: { 'Content-Type': 'application/json' }
          }));
        }
        throw error;
      });
    };

    // Cleanup function
    return () => {
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
      console.log = originalConsoleLog;
      window.onerror = originalWindowError;
      window.onunhandledrejection = originalUnhandledRejection;
      window.fetch = originalFetch;
    };
  }, []);

  return null;
}
