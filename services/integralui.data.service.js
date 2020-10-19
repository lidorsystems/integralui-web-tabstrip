/*
  filename: integralui.data.service.js
  version : 20.2.0
  Copyright © 2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web Lite" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web Lite License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/lite/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
class IntegralUIDataService{constructor(){this.data=[]}init(t){this.data.length=0;for(let e=0;e<t.length;e++){let i={data:t[e].data,fields:this.getDataFields(t[e].fields),key:t[e].key};this.data.push(i)}}clear(t,e){this.getList(t,e).length=0}insertAt(t,e,i,s){this.insert(t,e,i,null,!1,s)}insert(t,e,i,s,n,l){if(t){let n=this.getData(l);if(n){let a=n.fields;if(i)t[a.pid]=i[a.id];let r=this.getList(i,l);if(r){if(e<0||null===e||void 0===e)r.push(t);else{e=Math.max(Math.min(e,r.length),0);if(!s&&e<r.length)s=r[e];r.splice(e,0,t)}if(!t[a.id])t[a.id]=this.getUniqueId()}}}}insertByRef(t,e,i,s){if(t&&e){let n=this.getParent(e,s),l=this.getList(n,s).indexOf(e);if(i)l+=1;this.insert(t,l,n,e,i,s);return l}}removeAt(t,e,i,s){let n,l=null,a=this.getData(s);if(a){if(t){i=this.getParent(t,s);e=(n=this.getList(i,s)).indexOf(t)}if(null===e||void 0===e)return{obj:l,result:!1};n=this.getList(i,s);if(e>=0&&e<n.length){(l=n[e])[a.fields.pid]="";n.splice(e,1);return{obj:l,result:!0}}}return{obj:l,result:!1}}getDataFields(t){if(t)return{content:t.content?t.content:"content",icon:t.icon?t.icon:"icon",id:t.id?t.id:"id",pid:t.pid?t.pid:"pid",objects:t.objects?t.objects:"items",statusIcon:t.statusIcon?t.statusIcon:"statusIcon",subobjects:t.subobjects?t.subobjects:"subitems",text:t.text?t.text:"text"};else return{content:"content",icon:"icon",id:"id",pid:"pid",objects:"items",statusIcon:"statusIcon",subobjects:"subitems",text:"text"}}updateDataFields(t,e){let i=this.getData(e);if(i)i.fields=this.getDataFields(t)}update(t){this.init(t)}clone(t,e){let i=this.getData(e);if(i){let e=JSON.parse(JSON.stringify(t));this.createCloneIds(e,null,i.fields);return e}return{}}createCloneIds(t,e,i){t[i.id]=this.getUniqueId();t[i.pid]=e;let s=t[i.objects];if(s)for(let e=0;e<s.length;e++)this.createCloneIds(s[e],t[i.id],i)}findObjectById(t,e){let i=this.getData(e);if(i){let e=i.fields,s=i.data;return t?this.searchObj(t,s,e):null}return null}findObjectByText(t,e){let i=this.getData(e);if(i){let e=i.fields,s=i.data;return void 0!==t?this.searchObj(t,s,e,"text"):null}return null}findParent(t,e,i){let s=null;if(t&&e){let n=0;for(;!s&&n<e.length;){if(e[n][i.id]&&t[i.pid]&&e[n][i.id].toString()===t[i.pid].toString())s=e[n];else s=this.findParent(t,e[n][i.objects],i);n++}}return s}getData(t){let e=null;if(!this.getKey(t)&&this.data.length>0)e=this.data[0];else for(let i=0;i<this.data.length;i++)if(this.data[i].key===t){e=this.data[i];break}return e}getKey(t){return t?t:null}getList(t,e){let i=this.getData(e);if(i){let e=i.fields;if(t){if(!t[e.objects])t[e.objects]=[];return t[e.objects]}return i.data}return[]}getParent(t,e){if(t){let i=this.getData(e);if(i)return this.findParent(t,i.data,i.fields)}return null}getUniqueId(t){let e=t||"-";function i(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return i()+i()+e+i()+e+i()+e+i()+e+i()+i()+i()}searchObj(t,e,i,s){let n=null;if(t&&e){let l=0,a=!1;for(;!n&&l<e.length;){switch(s){case"text":if(e[l][i.text])a=e[l][i.text].toString()===t.toString();break;default:if(e[l][i.id])a=e[l][i.id].toString()===t.toString()}n=a?e[l]:this.searchObj(t,e[l][i.objects],i,s);l++}}return n}}export default IntegralUIDataService;