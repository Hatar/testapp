(window.webpackJsonp=window.webpackJsonp||[]).push([[57,4,13,17],{277:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("2ec8f05a",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";n.r(e);var o={},r=(n(281),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"btn btn-block btn-outline-danger my-3",attrs:{type:"submit"}})}),[],!1,null,"f5f0f35e",null);e.default=component.exports},279:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("81479628",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n.r(e);var o={props:["accordionData"]},r=(n(283),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row py-2"},[n("div",{staticClass:"accordion",attrs:{id:"accordionDiscourd"}},[n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:t.accordionData.id}},[n("button",{staticClass:"accordion-button",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":t.accordionData.target,"aria-expanded":"true","aria-controls":t.accordionData.collapse}},[t._v("\n            "+t._s(t.accordionData.title)+"\n          ")])]),t._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:t.accordionData.collapse,"aria-labelledby":"headingOne","data-bs-parent":"#accordionDiscourd"}},[n("div",{ref:"accordionbody",staticClass:"accordion-body"},t._l(t.accordionData.items,(function(e,i){return n("div",{key:i,staticClass:"d-flex justify-content-between py-2"},[e.hasStartIcon?n("i",{staticClass:"fa fa-file-o fa-2x py-2",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),e.to?n("nuxt-link",{staticClass:"text-dark",attrs:{to:e.to}},[n("span",{class:{"text-danger":e.description}},[t._v(t._s(e.title))]),t._v(" "),n("br"),t._v(" "),n("p",[t._v(t._s(e.description))])]):n("div",{staticClass:"descr-accordion mx-3"},[n("span",{class:{"text-danger":e.description}},[t._v(t._s(e.title))]),t._v(" "),n("br"),t._v(" "),n("p",[t._v(t._s(e.description))])]),t._v(" "),e.hasEndIcon?n("i",{staticClass:"fa fa-commenting fa-2x text-danger",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),e.component?n(e.component,{tag:"component",staticClass:"my-3",attrs:{title:"Voir le loi organique n°12.34"}}):t._e()],1)})),0)])])])])])}),[],!1,null,"63852a40",null);e.default=component.exports},281:function(t,e,n){"use strict";n(277)},282:function(t,e,n){var o=n(9)(!1);o.push([t.i,".btn[data-v-f5f0f35e]{width:100%;border-radius:10px;color:#b53032;border:1px solid #b53032}",""]),t.exports=o},283:function(t,e,n){"use strict";n(279)},284:function(t,e,n){var o=n(9)(!1);o.push([t.i,"span.text-danger[data-v-63852a40]{font-size:12px}.accordion-body[data-v-63852a40]{padding:0 10px!important}",""]),t.exports=o},288:function(t,e,n){"use strict";n.r(e);var o={props:["valueInput"]},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("textarea",{staticClass:"form-control",domProps:{value:t.valueInput},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,"f4c24258",null);e.default=component.exports},377:function(t,e,n){var content=n(433);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7b62a737",content,!0,{sourceMap:!1})},432:function(t,e,n){"use strict";n(377)},433:function(t,e,n){var o=n(9)(!1);o.push([t.i,".scrollBarAccordion[data-v-5e25ac81]{height:calc(150px - 2em);overflow:auto}.txt[data-v-5e25ac81]{text-align:right}.btntel[data-v-5e25ac81]{width:550px;margin:0 auto;vertical-align:middle}.btnenv[data-v-5e25ac81]{width:150px;float:right}",""]),t.exports=o},493:function(t,e,n){"use strict";n.r(e);var o=n(280),r=n(288),c=n(278),l={components:{Accordion:o.default,BaseTextarea:r.default,BtnSubmit:c.default},data:function(){return{accordionData:{title:"Programme d’Approvisionnement Groupé en Eau potable des populations Rurales",items:[{title:"Programme d’électrification rurale global",description:"",hasStartIcon:!1,hasEndIcon:!1},{title:"Programme National des Routes Rurales (PNRR II) dans le désenclavement du monde rural et montagneux au Maroc»",description:"",hasStartIcon:!1,hasEndIcon:!1},{title:"Enseignement Préscolaire",description:"",hasStartIcon:!1,hasEndIcon:!1}]}}}},d=(n(432),n(2)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Accordion",{attrs:{accordionData:t.accordionData}}),t._v(" "),n("div",{staticClass:"row py-5"},[n("div",{staticClass:"row py-3"},[n("span",{staticClass:"txt"},[t._v("02/08/2016")]),t._v(" "),n("hr"),t._v(" "),n("strong",[t._v("Rapport :")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("Rapport du Groupe de travail thématique chargé de préparer un rapport sur le Programme d’Approvisionnement Groupé en Eau potable des populations Rurales (PAGER)– (en arabe)")]),t._v(" "),n("div",{staticClass:"btntel"},[n("btn-submit",{attrs:{value:"Télécharger"}})],1)]),t._v(" "),n("div",{staticClass:"row-center py-3"},[n("BaseTextarea",{attrs:{placeholder:"Texte . . ."}}),t._v(" "),n("btn-submit",{staticClass:"btnenv"})],1)])],1)}),[],!1,null,"5e25ac81",null);e.default=component.exports;installComponents(component,{Accordion:n(280).default,BtnSubmit:n(278).default,BaseTextarea:n(288).default})}}]);