import React from 'react';

/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

export const wrapWithAbsolutePosition = (WrapedComponent) => () => (
  <div style={{position: 'absolute'}}><WrapedComponent/></div>
)