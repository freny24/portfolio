"use client";

import { Component, type ReactNode } from "react";

type SceneBoundaryProps = { children: ReactNode; fallback: ReactNode };
type SceneBoundaryState = { hasError: boolean };

export class SceneErrorBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  state: SceneBoundaryState = { hasError: false };

  static getDerivedStateFromError(): SceneBoundaryState {
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
