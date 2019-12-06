import React, { Component } from 'react'

class Spinner extends Component {
  render() {
    return ( <div className='wrapper'>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <style jsx>{`
      .wrapper{
        opacity: ${this.props.opaque? 0.3 : 1};
      }
      .spinner {
        margin: 100px auto 0;
        width: 70px;
        text-align: center;
      }

      .spinner > div {
        width: 12px;
        height: 12px;
        margin:0 5px 0 5px;
        background-color: #333;

        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      }

      .spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
      }

      .spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
      }

      @-webkit-keyframes sk-bouncedelay {
        0%, 80%, 100% { -webkit-transform: scale(0) }
        40% { -webkit-transform: scale(1.0) }
      }

      @keyframes sk-bouncedelay {
        0%, 80%, 100% { 
          -webkit-transform: scale(0);
          transform: scale(0);
        } 40% { 
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
        }
      }
      `}</style>
    </div>)
  }
}

export default Spinner 