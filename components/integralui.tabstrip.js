/*
  filename: integralui.tabstrip.js
  version : 20.2.0
  Copyright © 2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web Lite" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web Lite License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/lite/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIAnimationType,IntegralUISpeedMode,IntegralUITabStripPlacement,IntegralUITabDisplayMode,IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import IntegralUIBase from"./integralui.base.js";import IntegralUIDataService from"../services/integralui.data.service.js";import{iuiTabDefaultStyle}from"../styles/integralui.tab.style.js";import{iuiTabOfficeStyle}from"../themes/office/integralui.tab.office.js";import{iuiTabMidnightStyle}from"../themes/midnight/integralui.tab.midnight.js";import{iuiTabStripDefaultStyle}from"../styles/integralui.tabstrip.style.js";import{iuiTabStripMidnightStyle}from"../themes/midnight/integralui.tabstrip.midnight.js";import{iuiTabStripOfficeStyle}from"../themes/office/integralui.tabstrip.office.js";class IntegralUITabStrip extends IntegralUIBase{_ini(){super._ini();this._cDtaService=new IntegralUIDataService();this._anTmr=null;this._cAnm=IntegralUIAnimationType.Fade;this._cAnmSpeed=IntegralUISpeedMode.Normal;this._cTbs=[];this._cDtaTabs=[];this._nmTbs=0;this._tbLt=[];this._ctrCrs="default";this._cTbSpc=0;this._blkPs={top:"0",right:"auto",bottom:"auto",left:"0"};this._cntBlkPs={top:0,left:0};this._cntBlkSz={width:0,height:0};this._clRc={width:0,height:0};this._cTbPlc=IntegralUITabStripPlacement.Top;this._cDspMd=IntegralUITabDisplayMode.AutoSized;this._selTbLnPs={top:0,left:0};this._selTbLnSz={width:0,height:0};this._tbHRc=[];this._tbPs={top:0,left:0};this._tbSz={width:0,height:0};this._tbsPs={top:"0",right:"auto",bottom:"auto",left:"0"};this._tbsSz={width:0,height:0};this._uTmr=null;this._cCtrStyStt=iuiTabStripDefaultStyle;this._cTbStyStt=iuiTabDefaultStyle;this._cSel=null;this._cSelIdx=-1;this._seldCmp=null;this._prvCmp=null;this._rmvIdx=-1;this._cTbThStt=css``;this._gnrCsNm="iui-tabstrip";this._tbHCsNm="iui-tab-header"}connectedCallback(){}disconnectedCallback(){this._rmvAnTm()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{animation:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"fade":return IntegralUIAnimationType.Fade;case"slide":return IntegralUIAnimationType.Slide;default:return IntegralUIAnimationType.None}},toAttribute:t=>{switch(t){case IntegralUIAnimationType.Fade:return"Fade";case IntegralUIAnimationType.Slide:return"Slide";default:return"None"}}},reflect:!0},animationSpeed:{attribute:"animation-speed",converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"veryslow":return IntegralUISpeedMode.VerySlow;case"slow":return IntegralUISpeedMode.Slow;case"fast":return IntegralUISpeedMode.Fast;case"veryfast":return IntegralUISpeedMode.VeryFast;default:return IntegralUISpeedMode.Normal}},toAttribute:t=>{switch(t){case IntegralUISpeedMode.VerySlow:return"VerySlow";case IntegralUISpeedMode.Slow:return"Slow";case IntegralUISpeedMode.Fast:return"Fast";case IntegralUISpeedMode.VeryFast:return"VeryFast";default:return"Normal"}}},reflect:!0},selectedIndex:{type:Number,attribute:"selected-index"},selectedTab:{type:Object,attribute:"selected-tab"},tabs:{type:Array},tabSpacing:{type:Number,attribute:"tab-spacing",reflect:!0}}}get animation(){return this._cAnm}set animation(t){if(this._cAnm!==t){const e=this._cAnm;this._cAnm=t;this.requestUpdate("animation",e);this.updateLayout()}}get animationSpeed(){return this._cAnmSpeed}set animationSpeed(t){if(this._cAnmSpeed!==t){const e=this._cAnmSpeed;this._cAnmSpeed=t;this.requestUpdate("animationSpeed",e)}}get selectedIndex(){return this._cSelIdx}set selectedIndex(t){if(this._cSelIdx!==t){const e=this._cSelIdx;this._cSelIdx=t;this._selCmpByIndex(t);this.requestUpdate("selectedIndex",e)}}get selectedTab(){return this._cSel}set selectedTab(t){if(this._cSel!==t){const e=this._cSel;this._cSel=t;this.selectTab(t);this.requestUpdate("selectedTab",e)}}get tabSpacing(){return this._cTbSpc}set tabSpacing(t){if(this._cTbSpc!==t){const e=this._cTbSpc;this._cTbSpc=t;this.requestUpdate("tabSpacing",e)}}addTab(t){this._calEvAdd("add",t)}clearTabs(){this._cDtaService.clear();this._inkEv("clear")}insertTabAt(t,e){this._calEvAdd("at",t,e)}insertTabBefore(t,e){this._calEvAdd("ref",t,-1,e)}insertTabAfter(t,e){this._calEvAdd("ref",t,-1,e,!0)}removeTab(t){return this._calEvRmv(t)}removeTabAt(t){if(this._cTbs&&t>=0&&t<this._cTbs.length)return this._calEvRmv(this._cTbs[t]);else return!1}_calEvAdd(t,e,i,s,a){let l={cancel:!1,tab:e};this._inkEv("tabAdding",l);if(!0!==l.cancel){switch(t){case"at":this._cDtaService.insert(e,i);break;case"ref":this._cDtaService.insertByRef(e,s,a);break;default:this._cDtaService.insert(e)}this._inkEv("tabAdded",{tab:e});this._rfTPrn();if(!this._seldCmp)this._selCmpByIndex(0)}}_calEvRmv(t){let e={cancel:!1,tab:t};this._inkEv("tabRemoving",e);if(!0!==e.cancel){this._rmvIdx=this._cTbs?this._cTbs.indexOf(t):-1;this._cDtaService.removeAt(t);this._inkEv("tabRemoved",{tab:t});this._rfTPrn();return!0}return!1}_anm(){switch(this.animation){case IntegralUIAnimationType.Fade:if(this.allowAnimation)this._fdTbCnt();break;case IntegralUIAnimationType.Slide:if(this.allowAnimation&&this._prvCmp&&this._seldCmp)this._sldTbCntH();else{let t=this._clRc.width;if(this._prvCmp){this._prvCmp.updatePos({left:-t});this._prvCmp.updateOpacity(0);this._prvCmp.updateContentOverflow()}if(this._seldCmp){this._seldCmp.updatePos({left:0});this._seldCmp.updateOpacity(1);this._seldCmp.updateContentOverflow()}let e=this._gTbCIdx(this._seldCmp);this._uTbLn(e)}break;default:this._cDftFunc()}}_fdTbCnt(){let t=this;t._rmvAnTm();let e=0,i=1/t._gAnmFr();if(t._prvCmp){t._prvCmp.updateOpacity(1);t._prvCmp.updateVisibility(!1)}if(t._seldCmp){t._seldCmp.updateOpacity(0);t._seldCmp.updateVisibility(!1)}t._anTmr=setInterval(function(){if(e<1){e+=i;if(t._prvCmp)t._prvCmp.updateOpacity(1-e);if(t._seldCmp)t._seldCmp.updateOpacity(e)}else{e=1;if(t._prvCmp){t._prvCmp.updateOpacity(0);t._prvCmp.updateVisibility(!0)}if(t._seldCmp)t._seldCmp.updateOpacity(1);t._rmvAnTm()}},15)}_gAnmFr(){let t=15;switch(this.animationSpeed){case IntegralUISpeedMode.VerySlow:t=25;break;case IntegralUISpeedMode.Slow:t=20;break;case IntegralUISpeedMode.Fast:t=10;break;case IntegralUISpeedMode.VeryFast:t=5;break;default:t=15}return t}_rmvAnTm(){if(this._anTmr)clearInterval(this._anTmr)}_sldTbCntH(){let t=this;t._rmvAnTm();let e=t._clRc.width;if(e<=0){if(t._prvCmp){t._prvCmp.updatePos({left:-9999999});t._prvCmp.updateOpacity(0)}if(t._seldCmp){t._seldCmp.updatePos({left:0});t._seldCmp.updateOpacity(1)}}else{let i=0,s=t._gAnmFr(),a=e/s,l=t._gTbCIdx(t._seldCmp)<t._gTbCIdx(t._prvCmp)?"backward":"forward";if("forward"===l){if(t._prvCmp){t._prvCmp.updatePos({left:0});t._prvCmp.updateOpacity(1)}if(t._seldCmp){t._seldCmp.updatePos({left:e});t._seldCmp.updateOpacity(0)}}else{if(t._prvCmp){t._prvCmp.updatePos({left:0});t._prvCmp.updateOpacity(1)}if(t._seldCmp){t._seldCmp.updatePos({left:-e});t._seldCmp.updateOpacity(0)}}let h=t._gTbCIdx(t._prvCmp),r=t._gTbCIdx(t._seldCmp),n=t._cmnSrv.isIndexInRange(h,t._tbHRc),_=t._cmnSrv.isIndexInRange(r,t._tbHRc),c=n&&_?t._tbHRc[r].left-t._tbHRc[h].left:0,d=n&&_?t._tbHRc[r].width-t._tbHRc[h].width:0,p=c/s,o=d/s;t._anTmr=setInterval(function(){if("forward"===l)if(i>-e){i-=a;if(t._prvCmp){t._prvCmp.updatePos({left:i});t._prvCmp.updateOpacity(1-Math.abs(i/e))}if(t._seldCmp){t._seldCmp.updatePos({left:e+i});t._seldCmp.updateOpacity(1-Math.abs((e+i)/e))}t._selTbLnPs.left+=p;t._selTbLnSz.width+=o;t.update()}else{i=-e;if(t._prvCmp){t._prvCmp.updatePos({left:-e});t._prvCmp.updateOpacity(0)}if(t._seldCmp){t._seldCmp.updatePos({left:0});t._seldCmp.updateOpacity(1)}t._uTbLn(r);t.update();t._rmvAnTm()}else if(i<e){i+=a;if(t._prvCmp){t._prvCmp.updatePos({left:i});t._prvCmp.updateOpacity(1-Math.abs(i/e))}if(t._seldCmp){t._seldCmp.updatePos({left:-e+i});t._seldCmp.updateOpacity(1-Math.abs((-e+i)/e))}t._selTbLnPs.left+=p;t._selTbLnSz.width+=o;t.update()}else{i=-e;if(t._prvCmp){t._prvCmp.updatePos({left:e});t._prvCmp.updateOpacity(0)}if(t._seldCmp){t._seldCmp.updatePos({left:0});t._seldCmp.updateOpacity(1)}t._uTbLn(r);t.update();t._rmvAnTm()}},15)}}_uDt(){this._cDtaService.init([{data:this._cTbs}])}_gCmpDt(t){if(t)if(t.data)return t.data;else{let e=this._gTbDtIndex(t);return this._cTbs[e]}return null}_gTbCIdx(t){return t&&this._tbLt?this._tbLt.indexOf(t):-1}_gTbDtIndex(t){if(t){let e=this._gTbCIdx(t);return this._cmnSrv.isIndexInRange(e,this._cTbs)?e:-1}return-1}_gTbDt(t){return this._cTbs&&t>=0&&t<this._cTbs.length?this._cTbs[t]:null}_gTbIdx(t){return t&&this._cTbs?this._cTbs.indexOf(t):-1}_gTbHds(){this._tabHeaders=this.shadowRoot.querySelectorAll("li[data-header]");return this._tabHeaders}_rstLy(){if(this._uTmr)clearTimeout(this._uTmr);this._uTmr=null}async updateLayout(){this._uTLt();this.update();await this._uTbLy();await this._uTbLy();this._uSel();this.update()}_uTbLn(t){if(t>=0&&t<this._tbHRc.length){this._selTbLnPs={top:this._cntBlkPs.top-1,left:this._tbHRc[t].left};this._selTbLnSz={width:this._tbHRc[t].width,height:2}}}_uTbLy(){return new Promise(t=>{let e=this;e._clRc={width:e._eRf.clientWidth,height:e._eRf.clientHeight};e._tbsSz={width:e._clRc.width,height:e._clRc.height};let i=e._gTbHds();if(i){let t={x:0,y:0},s={width:0,height:0},a={top:0,left:0},l={width:0,height:0};e._tbSz={width:0,height:0};e._tbHRc.length=0;let h=e._cmnSrv.getBorderWidth(e._eRf),r=e._cmnSrv.getBorderWidth(e._contentElem);if(i&&i.length>0){i.forEach(function(i,a){i.style.width="auto";i.style.height="auto";s={width:i.offsetWidth,height:i.offsetHeight};let l={top:0,left:t.x,width:s.width,height:s.height};e._tbsPs={top:"0",right:"auto",bottom:"auto",left:"0"};i.style.top="0";i.style.right="auto";i.style.bottom="auto";i.style.left=t.x+"px";if(e._tbSz.height<s.height)e._tbSz.height=s.height;e._tbHRc.push(l);let h=e.tabSpacing;t.x+=s.width+h-1;t.y+=s.height+h-1});e.tabPos={top:0,left:0};e._blkPs={top:"0",right:"auto",bottom:"auto",left:"0"};e._tbsSz.height=e._tbSz.height;e._cntBlkPs={top:e._tbsSz.height-1,left:0};e._cntBlkSz={width:e._eRf.clientWidth-(h.left+h.right),height:e._eRf.clientHeight-e._tbsSz.height-(h.top+h.bottom-1)};e._cntBlkSz.width-=r.left+r.right;e._cntBlkSz.height-=r.top+r.bottom}i.forEach(function(t,i){t.style.top=e._tbPs.top+"px";a={top:0,left:e.animation===IntegralUIAnimationType.Slide?-e._clRc.width:0};l={width:e._eRf.clientWidth-(h.left+h.right),height:e._eRf.clientHeight-e._tbsSz.height-(h.top+h.bottom-1)};if(e.autoSizeValue)l.height="auto"});if(e._tbLt&&e._tbLt.length>0)e._tbLt.forEach(function(t){t.animation=e.animation;t.updateLayout(a,l,e.animation===IntegralUIAnimationType.Slide?!1:!0)});if(e._seldCmp){e._seldCmp.updatePos({left:0,top:0});e._seldCmp.updateOpacity(1);e._seldCmp.updateVisibility(!1)}let n=e._gTbCIdx(e._seldCmp);e._uTbLn(n)}t()})}_uTbHds(){let t=this,e={x:0,y:0},i={width:0,height:0};t._tbHRc.length=0;let s=t._gTbHds();if(s&&s.length>0)s.forEach(function(s,a){i={width:s.offsetWidth,height:s.offsetHeight};let l={top:0,left:e.x,width:i.width,height:i.height};s.style.top="0";s.style.right="auto";s.style.bottom="auto";s.style.left=e.x+"px";t._tbHRc.push(l);let h=t.tabSpacing;e.x+=i.width+h-1;e.y+=i.height+h-1})}_tbMuDn(t,e){if(this._enbl)this._selCmp(e)}_tbEnt(t,e){if(this._enbl&&!e.selected)e.state|=IntegralUIObjectState.Hovered}_tbLv(t,e){e.state&=~IntegralUIObjectState.Hovered}_gTbOp(t){return 1}_clrSel(t){this._tbLt.forEach(function(e,i){if(e!==t)e.selected=!1})}_selCmp(t,e){let i=this;if(t&&t!==i._seldCmp){let s=i._gTbCIdx(t),a=i._gCmpDt(t),l={cancel:!1,index:s,tab:a};i._inkEv("beforeSelect",l);if(!0!==l.cancel){i._cSelIdx=s;if(i._cTbs&&s>=0&&s<i._cTbs.length)i._cSel=i._cTbs[s];i._prvCmp=i._seldCmp;i._seldCmp=t;i._clrSel(t);t.selected=!0;i._anm();if(!e){i._inkEv("afterSelect",{index:s,tab:a});i._inkEv("selectionChanged",{index:s,tab:a})}i.update();return!0}}return!1}_selCmpByIndex(t,e){if(this._cmnSrv.isIndexInRange(t,this._tbLt))this._selCmp(this._tbLt[t],e)}selectTab(t,e){if(this._cTbs){this._cSelIdx=this._cTbs.indexOf(t);this._selCmpByIndex(this._cSelIdx,e)}}_uSel(){if(this._cSel&&this._cTbs)this._selCmpByIndex(this._fndTIdxId(this._cSel.id));else if(this._cSelIdx>=0)this._selCmpByIndex(this._cSelIdx);else this._selCmpByIndex(0)}_fndTIdxId(t){let e=this._cTbs.filter(e=>e.id===t);return e.length>0?this._cTbs.indexOf(e[0]):-1}_gCtrSty(){let t={cursor:this._ctrCrs};if(this._ctrSz.width>0)t.width=this._ctrSz.width+"px";if(this._ctrSz.height>0)t.height=this._ctrSz.height+"px";return t}_gTHCs(t,e){let i=t._gCTbSty(),s={};s[i.header.normal]=!0;if(t.state&IntegralUIObjectState.Disabled)s[i.header.disabled]=!0;else if(t.state&IntegralUIObjectState.Focused)s[i.header.focused]=!0;else if(t.state&IntegralUIObjectState.Selected){s[i.header.selected]=!0;s["iui-tab-selected-top"]=!0}else if(t.state&IntegralUIObjectState.Hovered)s[i.header.Hovered]=!0;return s}_uThSt(t){this._cThmSettings=css``;this._cTbThStt=css``;switch(t){case IntegralUITheme.Office:this._cThmSettings.cssText=this._cmnSrv.replaceAll(iuiTabStripOfficeStyle.cssText,"../icons",this._cRsPt);this._cTbThStt.cssText=this._cmnSrv.replaceAll(iuiTabOfficeStyle.cssText,"../icons",this._cRsPt);break;case IntegralUITheme.Midnight:this._cThmSettings.cssText=this._cmnSrv.replaceAll(iuiTabStripMidnightStyle.cssText,"../icons",this._cRsPt);this._cTbThStt.cssText=this._cmnSrv.replaceAll(iuiTabMidnightStyle.cssText,"../icons",this._cRsPt);break;default:this._cThmSettings.cssText="";this._cTbThStt.cssText=""}}_gTTpl(t){return html`\n            ${t.icon?html`<span class=${classMap(this._gTIco(t.icon))}></span>`:html``}\n            ${t.text?html`<span class="iui-tab-label">${t.text}</span>`:html``}\n        `}_tbTchStr(t,e){if(this._enbl)this._selCmp(e)}firstUpdated(t){this._uRf();this._rfTPrn()}refresh(){this._uSty(this.controlStyle);this._uCtrCs();this.update();this._uRf()}_rfTPrn(){let t=this;setTimeout(function(){t._contentSlotElem=t._contentElem.querySelector("slot").assignedNodes();t._uTLt();t._tbLt.map(e=>e.setParent(t));t.updateLayout()},10)}_gTIco(t){let e={};if(this._cmnSrv.isString(t)){t.split(" ").map(t=>e[t]=!0)}return e}render(){return html`\n            <style>\n				${this._cCtrStyStt}\n				${this._cTbStyStt}\n                ${this._cThmSettings}\n				${this._cTbThStt}\n				${this._cCmSty}\n            </style>\n			<div data-ctrl="tabstrip" class=${classMap(this._gCtrCs())} style=${styleMap(this._gCtrSty())}>\n				<div id="tabstrip" class="iui-tabstrip-block" style=${styleMap({top:this._blkPs.top,right:this._blkPs.right,bottom:this._blkPs.bottom,left:this._blkPs.left,width:this._tbsSz.width+"px",height:this._tbsSz.height+"px"})}>\n					<ul id="tabBlock" style=${styleMap({top:this._tbsPs.top,right:this._tbsPs.right,bottom:this._tbsPs.bottom,left:this._tbsPs.left})}>\n						${this._tbLt.map(t=>html`\n							<li data-header class=${classMap(this._gTHCs(t))} style=${styleMap({opacity:this._gTbOp(t),"z-index":t._elemOrder})} @mouseenter="${e=>this._tbEnt(e,t)}" @mouseleave="${e=>this._tbLv(e,t)}" @mousedown="${e=>this._tbMuDn(e,t)}" @touchstart="${e=>this._tbTchStr(e,t)}">\n								${this._gTTpl(t)}\n							</li>\n						`)}\n					</ul>\n					${this.animation===IntegralUIAnimationType.Slide?html`<div class="iui-tabstrip-line" style=${styleMap({top:this._selTbLnPs.top+"px",left:this._selTbLnPs.left+"px",height:this._selTbLnSz.height+"px",width:this._selTbLnSz.width+"px"})}></div>`:html``}\n				</div>\n				<div id="content" class="iui-tabstrip-content" style=${styleMap({top:this._cntBlkPs.top+"px",left:this._cntBlkPs.left+"px",width:this._cntBlkSz.width+"px",height:this._cntBlkSz.height+"px"})}>\n					<slot @slotchange="${t=>this._sltChg(t)}"></slot>\n				</div>\n			</div>\n        `}updated(t){}_uCtrStyStt(t){this._cCtrStyStt=css``;this._cCtrStyStt.cssText=this._cmnSrv.replaceAll(iuiTabStripDefaultStyle.cssText,"../icons",t);this._cTbStyStt=css``;this._cTbStyStt.cssText=this._cmnSrv.replaceAll(iuiTabDefaultStyle.cssText,"../icons",t)}_uTLt(){this._contentSlotElem=this._contentElem.querySelector("slot").assignedNodes();this._tbLt=this._contentSlotElem?this._contentSlotElem.filter(t=>"iui-tab"===t.nodeName.toLowerCase()):[];this._cTbs=this._tbLt.map(t=>t.data);this._uDt()}_sltChg(t){this._uRf();this.updateLayout()}_uRf(){this._contentElem=this.shadowRoot.querySelector("#content");this._eRf=this.shadowRoot.querySelector("div[data-ctrl=tabstrip]");this._tabBlock=this.shadowRoot.querySelector("#tabBlock")}}window.customElements.define("iui-tabstrip",IntegralUITabStrip);export default IntegralUITabStrip;