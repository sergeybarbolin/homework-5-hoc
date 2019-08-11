import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (WrapedComponent) => {
  return class extends Component {
    static displayName = `HOC${WrapedComponent.displayName || 'Component'}`;
    
    render() {
      <WrapedComponent />
    }
  }
}
