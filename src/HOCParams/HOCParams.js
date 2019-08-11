import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = ({...params}) => WrappedComponent => {
  return class extends Component {
    render() {
      const {props} = this.props;
      return <WrappedComponent {...props} {...params} />
    }
  }
}
