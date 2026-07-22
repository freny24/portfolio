"use client";

import { Component, type ReactNode } from "react";

export class SceneErrorBoundary extends Component
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    if (typeof console !== "undefined") {
      console.warn("3D scene disabled, using fallback:", error);
    }
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
