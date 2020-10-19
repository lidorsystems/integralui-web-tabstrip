/*
  filename: react.integralui.tab.js
  version : 20.2.0
  Copyright © 2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web Lite" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web Lite License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/lite/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1;r.configurable=!0;if("value"in r)r.writable=!0;Object.defineProperty(t,r.key,r)}}return function(e,i,r){if(i)t(e.prototype,i);if(r)t(e,r);return e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"===typeof e||"function"===typeof e)?e:t}function _inherits(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}});if(e)Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e}import React,{Component}from"react";import"../components/integralui.tab.js";var IntegralUITabComponent=function(t){_inherits(e,Component);function e(t){_classCallCheck(this,e);var i=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));i.ctrlRef=React.createRef();return i}_createClass(e,[{key:"_isCtrlDefined",value:function(){return this.ctrlRef&&this.ctrlRef.current?!0:!1}},{key:"componentDidMount",value:function(){this._initProps()}},{key:"componentDidUpdate",value:function(t){this._updateData(t)}},{key:"_initProps",value:function(){if(this._isCtrlDefined()){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.allowDrag))this.ctrlRef.current.allowDrag=this.props.allowDrag;if(this._isDefined(this.props.allowDrop))this.ctrlRef.current.allowDrop=this.props.allowDrop;if(this._isDefined(this.props.animation))this.ctrlRef.current.animation=this.props.animation;if(this._isDefined(this.props.controlStyle))this.ctrlRef.current.controlStyle=this.props.controlStyle;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.icon))this.ctrlRef.current.icon=this.props.icon;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.selected))this.ctrlRef.current.selected=this.props.selected;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.text))this.ctrlRef.current.text=this.props.text;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_isDefined",value:function(t){return void 0!==t?!0:!1}},{key:"_updateData",value:function(t){if(this._isCtrlDefined()){if(this.props.allowAnimation!==t.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.allowDrag!==t.allowDrag)this.ctrlRef.current.allowDrag=this.props.allowDrag;if(this.props.allowDrop!==t.allowDrop)this.ctrlRef.current.allowDrop=this.props.allowDrop;if(this.props.animation!==t.animation)this.ctrlRef.current.animation=this.props.animation;if(this.props.controlStyle!==t.controlStyle)this.ctrlRef.current.controlStyle=this.props.controlStyle;if(this.props.customStyle!==t.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==t.data)this.ctrlRef.current.data=this.props.data;if(this.props.enabled!==t.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this.props.icon!==t.icon)this.ctrlRef.current.icon=this.props.icon;if(this.props.name!==t.name)this.ctrlRef.current.name=this.props.name;if(this.props.selected!==t.selected)this.ctrlRef.current.selected=this.props.selected;if(this.props.size!==t.size)this.ctrlRef.current.size=this.props.size;if(this.props.state!==t.state)this.ctrlRef.current.state=this.props.state;if(this.props.text!==t.text)this.ctrlRef.current.text=this.props.text;if(this.props.theme!==t.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"refresh",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.refresh()}},{key:"render",value:function(){return React.createElement("iui-tab",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return e}();export default IntegralUITabComponent;