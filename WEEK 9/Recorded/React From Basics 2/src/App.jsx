import React, { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>
      <ErrorBoundary>
        <Card2 />
      </ErrorBoundary>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            padding: 20,
          }}>
          Something went wrong
        </div>
      );
    }

    return this.props.children;
  }
}

function Card1() {
  // throw new Error("Error while rendering");

  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
      }}>
      Hi there
    </div>
  );
}

function Card2() {
  // throw new Error("Error while rendering");

  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: 20,
        padding: 20,
        margin: 20,
      }}>
      Hello
    </div>
  );
}

export default App;
