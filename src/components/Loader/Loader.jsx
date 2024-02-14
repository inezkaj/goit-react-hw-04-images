import { Component } from 'react';
import { Rings } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <Rings color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
