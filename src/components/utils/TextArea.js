import React, { Component } from 'react'
import theme from '../../styles/theme'

export default class TextArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      value: '', 
      characterLimitExceeded:false
    }
    if (process.browser)
      this.myRef = React.createRef()
  }
  onChange(event) {
    let characterLimitExceeded = this.props.countLimit && event.target.value.length > this.props.countLimit
    this.setState({ 
      value: event.target.value, 
      characterLimitExceeded
    })
    if (this.props.onChange)
      this.props.onChange(event)
  }
  onBlur(event) {
    this.setState({ focused: this.state.value !== '' })
    if (this.props.onBlur)
      this.props.onBlur(event)
  }
  setFocus() {
    if (this.myRef && this.myRef.current)
      this.myRef.current.focus()
  }
  render() {
    return (<div className={`centered-vertical ${this.props.disabled? 'disabled' : ''}`} >
      <div className='wrapper' >
        <div className='textarea'>
          <div className={`text-area-wrapper ${this.state.focused || this.props.value ? 'focused' : ''} `}    >
            <label onClick={this.setFocus.bind(this)} 
              className='text-area-label' data-test='text-area-label'> {this.props.label ? this.props.label : 'label'} 
            </label>
            <textarea rows='4' ref={this.myRef}
              disabled={this.props.disabled? true: false}
              required={this.props.required}
              onFocus={() => { this.setState({ focused: true }) }}
              className='input-field'
              name={this.props.name ? this.props.name : ''}
              type={this.props.type ? this.props.type : 'text'}
              onChange={this.onChange.bind(this)}
              onBlur={this.onBlur.bind(this)}
              value={this.props.value}
            />
            {this.props.touched && this.props.errorMsg && <span className='error'></span>}
            <span className='focus-border'></span>
          </div>
        </div>
        <div className={`info space-between ${this.props.touched && this.props.errorMsg? 'error-msg':''}`} >
          <div className='text'>
            {this.props.touched && this.props.errorMsg && <div data-test='error-msg'> {this.props.errorMsg}</div> }
            {this.props.helperText && !this.props.errorMsg && <div > {this.props.helperText}</div> }
          </div>
          <div className='count' data-test='count'>
            {this.props.countLimit && <div > 
              {this.state.characterLimitExceeded? '-' : ''}
              {this.state.value.length}/{this.props.countLimit}
            </div>}
          </div>
        </div>
      </div>
      <style jsx>{`
      .disabled{
        opacity: 0.5;
        user-select: none;
        pointer-events: none; 
      }
      .info{
        margin-top: 10px;
        height: 15px;
        font-size: 12px;
        color: ${theme.info};
      }
      textarea{
        padding-right:12px;
        line-height: 1.67;
      }
      .textarea{
        background-color: #f9fafbff;
        padding:30px 14px 5px 14px;
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid ${theme.input.border};
      }
      .textarea:hover{
        border-bottom: 1px solid ${theme.primary};
      }
      .error-msg{
        color: ${theme.errorMsg};
      }
    `}</style>
      <style jsx>{`
      .count{
        color: ${this.state.characterLimitExceeded? theme.errorMsg: ' ' }
      }
      .wrapper{
        position: auto;
        width: ${this.props.width ? this.props.width : '400px'};
      }
      textarea:hover{
        cursor:pointer;
      }
      .text-area-wrapper {
        position:relative;  
      }
      label{
        user-select: none;
        font-size: 18px;
      }
      .text-area-label {
        position: absolute;
        top:-15px;
        left: 2px;
        color: ${this.props.errorMsg && this.props.touched? theme.errorMsg : theme.input.labelPlaceHolder};
        z-index: 10;
        font-size: 18px;
        font-family:Montserrat;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
      }
      .input-field {
        resize:none;
        position: relative;
        width: 100%;
        outline: 0;
        border: 0;
        background-color: #f9fafbff;
        margin-top:0px;
        font-family: Montserrat;
        font-size: 18px;
        color: #4f5769;
      }
      .focused .text-area-label {
        transform: translateY(-25%) translateX(-13%) scale(0.75);
        color: ${this.props.errorMsg && this.props.touched? theme.errorMsg : theme.input.label};
      }
      textarea::-webkit-scrollbar {
        cursor: pointer;
        width: 5px;
        margin-right:80px;
        background-color: #F5F5F5; 
      }

      label:hover{
        cursor:text;
      }
      input:required {
        box-shadow:none;
      }
      input:invalid {
        box-shadow:none;
      }
      `}</style>
      <style jsx>{`
      .input-field:focus{
        color: #2c3956;
      }
      .input-field ~ .focus-border{
        position: absolute; 
        bottom: -6px; 
        left: -14px;
        width: 0; 
        height: 2px; 
        background-color: ${theme.primary}; 
        transition: 0.15s;
      }
      .error {
        position: absolute; 
        bottom: -6px; 
        left: -14px;
        width: 100%;
        height: 1px;
        background-color: ${theme.errorMsg}; 
        border-right:solid 28px ${theme.errorMsg}; 
        transition: 0.15s;
      }
      .input-field:focus ~ .focus-border{
        width: 109%;
        border-right:solid 28px ${theme.primary}; 
        transition: 0.12s;
      }
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover, 
      textarea:-webkit-autofill:focus, 
      textarea:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
      }
    `}</style>
    </div>)
  }
}
