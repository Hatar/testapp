(window.webpackJsonp=window.webpackJsonp||[]).push([[75,4],{282:function(t,e,o){var content=o(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("81479628",content,!0,{sourceMap:!1})},283:function(t,e,o){"use strict";o.r(e);var n={props:["accordionData"]},c=(o(287),o(2)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row py-2"},[o("div",{staticClass:"accordion",attrs:{id:"accordionDiscourd"}},[o("div",{staticClass:"accordion-item"},[o("h2",{staticClass:"accordion-header",attrs:{id:t.accordionData.id}},[o("button",{staticClass:"accordion-button",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":t.accordionData.target,"aria-expanded":"true","aria-controls":t.accordionData.collapse}},[t._v("\n            "+t._s(t.accordionData.title)+"\n          ")])]),t._v(" "),o("div",{staticClass:"accordion-collapse collapse",attrs:{id:t.accordionData.collapse,"aria-labelledby":"headingOne","data-bs-parent":"#accordionDiscourd"}},[o("div",{ref:"accordionbody",staticClass:"accordion-body"},t._l(t.accordionData.items,(function(e,i){return o("div",{key:i,staticClass:"d-flex justify-content-between py-2"},[e.hasStartIcon?o("i",{staticClass:"fa fa-file-o fa-2x py-2",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),e.to?o("nuxt-link",{staticClass:"text-dark",attrs:{to:e.to}},[o("span",{class:{"text-danger":e.description}},[t._v(t._s(e.title))]),t._v(" "),o("br"),t._v(" "),o("p",[t._v(t._s(e.description))])]):o("div",{staticClass:"descr-accordion mx-3"},[o("span",{class:{"text-danger":e.description}},[t._v(t._s(e.title))]),t._v(" "),o("br"),t._v(" "),o("p",[t._v(t._s(e.description))])]),t._v(" "),e.hasEndIcon?o("i",{staticClass:"fa fa-commenting fa-2x text-danger",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),e.component?o(e.component,{tag:"component",staticClass:"my-3",attrs:{title:"Voir le loi organique n°12.34"}}):t._e()],1)})),0)])])])])])}),[],!1,null,"63852a40",null);e.default=component.exports},287:function(t,e,o){"use strict";o(282)},288:function(t,e,o){var n=o(9)(!1);n.push([t.i,"span.text-danger[data-v-63852a40]{font-size:12px}.accordion-body[data-v-63852a40]{padding:0 10px!important}",""]),t.exports=n},528:function(t,e,o){"use strict";o.r(e);var n={components:{Accordion:o(283).default},data:function(){return{accordionData:{title:"Groupe de travail thématique chargé de la cause nationale",id:"One",target:"#collapseOne",collapse:"collapseOne",items:[{description:"Groupe de travail thématique sur l’égalité et la parité",hasStartIcon:!1,hasEndIcon:!1},{description:"Groupe de travail thématique chargé de la cause palestinienne",hasStartIcon:!1,hasEndIcon:!1},{description:"Groupe de travail thématique chargé des affaires africaines",hasStartIcon:!1,hasEndIcon:!1},{description:"Groupe de travail thématique sur l’enseignement préscolaire",hasStartIcon:!1,hasEndIcon:!1},{description:"Groupe de travail thématique chargé du système de la santé",hasStartIcon:!1,hasEndIcon:!1}]}}},mounted:function(){this.$store.commit("setHeader","Groupes de Travail Thématiques")}},c=o(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Accordion",{attrs:{accordionData:t.accordionData}})}),[],!1,null,"6df946fb",null);e.default=component.exports;installComponents(component,{Accordion:o(283).default})}}]);