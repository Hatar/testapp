(window.webpackJsonp=window.webpackJsonp||[]).push([[52,4],{274:function(t,e,n){var content=n(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("8f8f6a34",content,!0,{sourceMap:!1})},276:function(t,e,n){"use strict";n.r(e);var o={props:["accordionData"]},c=(n(277),n(2)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row py-2"},[n("div",{staticClass:"accordion",attrs:{id:"accordionDiscourd"}},[n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:t.accordionData.id}},[n("button",{staticClass:"accordion-button",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":t.accordionData.target,"aria-expanded":"true","aria-controls":t.accordionData.collapse}},[t._v("\n            "+t._s(t.accordionData.title)+"\n          ")])]),t._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:t.accordionData.collapse,"aria-labelledby":"headingOne","data-bs-parent":"#accordionDiscourd"}},[n("div",{ref:"accordionbody",staticClass:"accordion-body"},t._l(t.accordionData.items,(function(e,i){return n("div",{key:i,staticClass:"d-flex justify-content-between"},[e.hasStartIcon?n("i",{staticClass:"fa fa-file-o fa-2x py-2",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),e.to?n("nuxt-link",{staticClass:"text-dark",attrs:{to:e.to}},[n("span",{class:{"text-danger":e.description}},[t._v(t._s(e.title))]),t._v(" "),n("br"),t._v(" "),n("p",[t._v(t._s(e.description))])]):n("div",{staticClass:"descr-accordion"},[n("span",{class:{"text-danger":e.description}},[t._v(t._s(e.title))]),t._v(" "),n("br"),t._v(" "),n("p",[t._v(t._s(e.description))])]),t._v(" "),e.hasEndIcon?n("i",{staticClass:"fa fa-commenting fa-2x text-danger",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),e.component?n(e.component,{tag:"component",staticClass:"my-3",attrs:{title:"Voir le loi organique n°12.34"}}):t._e()],1)})),0)])])])])])}),[],!1,null,"79476b0e",null);e.default=component.exports},277:function(t,e,n){"use strict";n(274)},278:function(t,e,n){var o=n(9)(!1);o.push([t.i,"span.text-danger[data-v-79476b0e]{font-size:12px}.accordion-body[data-v-79476b0e]{padding:0 10px!important}",""]),t.exports=o},451:function(t,e,n){"use strict";n.r(e);var o={components:{Accordion:n(276).default},data:function(){return{accordionData:{title:"Groupe de travail thématique chargé de la cause nationale",items:[{description:"Groupe de travail thématique sur l’égalité et la parité",hasStartIcon:!1,hasEndIcon:!1},{description:"Groupe de travail thématique chargé de la cause palestinienne",hasStartIcon:!1,hasEndIcon:!1},{description:"Groupe de travail thématique chargé des affaires africaines",hasStartIcon:!1,hasEndIcon:!1},{description:"Groupe de travail thématique sur l’enseignement préscolaire",hasStartIcon:!1,hasEndIcon:!1},{description:"Groupe de travail thématique chargé du système de la santé",hasStartIcon:!1,hasEndIcon:!1}]}}}},c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Accordion",{attrs:{accordionData:t.accordionData}})}),[],!1,null,null,null);e.default=component.exports}}]);