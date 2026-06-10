'use client'

import React, { Component, Suspense, lazy } from 'react'

// Error Boundary specifically to contain lazy-load or WebGL-load failures of @splinetool/react-spline
interface ErrorBoundaryProps {
  fallback: React.ReactNode
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class SplineErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // @ts-ignore
  state: ErrorBoundaryState = { hasError: false };
  // @ts-ignore
  props: ErrorBoundaryProps;

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.warn("Spline 3D Scene loading failed. Rendering gorgeous performance grid fallback.", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

const Spline = lazy(() => import('@splinetool/react-spline').catch((err) => {
  console.warn("Falling back to high-performance SVG, spline load error caught:", err);
  // Return a dummy component that throws, which triggers the ErrorBoundary gracefully!
  return {
    default: () => {
      throw new Error("Spline import dynamic failure");
    }
  };
}))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const beautifulFallback = (
    <div className={`relative flex items-center justify-center bg-radial from-blue-500/5 via-transparent to-transparent ${className || ''}`}>
      {/* Absolute center pulse */}
      <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-blue-500/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />
      <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border border-purple-500/15 animate-[pulse_3s_infinite] pointer-events-none" />
      <div className="absolute w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border border-dashed border-blue-400/20 animate-[spin_12s_linear_infinite] pointer-events-none" />

      {/* Cybernetic Tech Core Illustration */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-48 h-48 md:w-64 md:h-64 text-neutral-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.2)]"
        >
          {/* Animated concentric rings */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="opacity-20 animate-[spin_20s_linear_infinite]" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="40 10" className="text-blue-500/30 animate-[spin_10s_linear_infinite]" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="5 3" className="text-purple-500/40 animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Glowing central CPU grid */}
          <rect x="75" y="75" width="50" height="50" rx="6" fill="#0c0c0e" stroke="url(#cyber-grad)" strokeWidth="2" className="animate-[pulse_2s_infinite]" />
          
          {/* Connecting digital nodes */}
          <path d="M 100 20 L 100 75" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
          <path d="M 100 125 L 100 180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
          <path d="M 20 100 L 75 100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
          <path d="M 125 100 L 180 100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />

          {/* Glowing nodes */}
          <circle cx="100" cy="20" r="3" fill="#3b82f6" className="animate-ping" />
          <circle cx="100" cy="180" r="3" fill="#8b5cf6" />
          <circle cx="20" cy="100" r="3" fill="#3b82f6" />
          <circle cx="180" cy="100" r="3" fill="#8b5cf6" className="animate-ping" />

          {/* Central Core Signal */}
          <circle cx="100" cy="100" r="8" fill="#3b82f6" className="animate-pulse" />
          <circle cx="100" cy="100" r="4" fill="#ffffff" />

          {/* Definitions for gradient */}
          <defs>
            <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dynamic status labels */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
            Performance Signal Active
          </span>
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
            Optimized Core Active
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <SplineErrorBoundary fallback={beautifulFallback}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <span className="w-8 h-8 rounded-full border-t-2 border-r-2 border-blue-500 animate-spin" />
              <span className="text-sm font-mono text-neutral-500 tracking-wider">Loading System Visuals...</span>
            </div>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
        />
      </Suspense>
    </SplineErrorBoundary>
  )
}
