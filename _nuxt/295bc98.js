(window.webpackJsonp=window.webpackJsonp||[]).push([[35,4,15],{274:function(t,o,e){var content=e(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("8f8f6a34",content,!0,{sourceMap:!1})},276:function(t,o,e){"use strict";e.r(o);var n={props:["accordionData"]},r=(e(277),e(2)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"row py-2"},[e("div",{staticClass:"accordion",attrs:{id:"accordionDiscourd"}},[e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:t.accordionData.id}},[e("button",{staticClass:"accordion-button",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":t.accordionData.target,"aria-expanded":"true","aria-controls":t.accordionData.collapse}},[t._v("\n            "+t._s(t.accordionData.title)+"\n          ")])]),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:t.accordionData.collapse,"aria-labelledby":"headingOne","data-bs-parent":"#accordionDiscourd"}},[e("div",{ref:"accordionbody",staticClass:"accordion-body"},t._l(t.accordionData.items,(function(o,i){return e("div",{key:i,staticClass:"d-flex justify-content-between"},[o.hasStartIcon?e("i",{staticClass:"fa fa-file-o fa-2x py-2",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),o.to?e("nuxt-link",{staticClass:"text-dark",attrs:{to:o.to}},[e("span",{class:{"text-danger":o.description}},[t._v(t._s(o.title))]),t._v(" "),e("br"),t._v(" "),e("p",[t._v(t._s(o.description))])]):e("div",{staticClass:"descr-accordion"},[e("span",{class:{"text-danger":o.description}},[t._v(t._s(o.title))]),t._v(" "),e("br"),t._v(" "),e("p",[t._v(t._s(o.description))])]),t._v(" "),o.hasEndIcon?e("i",{staticClass:"fa fa-commenting fa-2x text-danger",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),o.component?e(o.component,{tag:"component",staticClass:"my-3",attrs:{title:"Voir le loi organique n°12.34"}}):t._e()],1)})),0)])])])])])}),[],!1,null,"79476b0e",null);o.default=component.exports},277:function(t,o,e){"use strict";e(274)},278:function(t,o,e){var n=e(9)(!1);n.push([t.i,"span.text-danger[data-v-79476b0e]{font-size:12px}.accordion-body[data-v-79476b0e]{padding:0 10px!important}",""]),t.exports=n},291:function(t,o,e){var content=e(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("d46b7686",content,!0,{sourceMap:!1})},308:function(t,o,e){t.exports=e.p+"img/file_download_pdf_icon_153420.2d9961f.svg"},309:function(t,o,e){"use strict";e(291)},310:function(t,o,e){var n=e(9)(!1);n.push([t.i,".btn[data-v-58da80e4]{width:100%;border-radius:10px!important;background-color:#b53032}",""]),t.exports=n},315:function(t,o,e){"use strict";e.r(o);var n={props:["title"]},r=(e(309),e(2)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("button",{staticClass:"btn btn-danger btn-sm btn-block"},[t._v("\n  "+t._s(t.title)+"\n  "),n("img",{staticClass:"img-fluid my-2",attrs:{src:e(308),alt:""}})])}),[],!1,null,"58da80e4",null);o.default=component.exports},435:function(t,o,e){"use strict";e.r(o);var n=e(276),r=e(315),c={components:{Accordion:n.default,BtnDownload:r.default},data:function(){return{accordionData:{title:"Commissions d’enquête",items:[{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat ullam est animi, facilis tenetur temporibus omnis labore illo error.",hasStartIcon:!1,hasEndIcon:!1},{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat ullam est animi, facilis tenetur temporibus omnis labore illo error.",hasStartIcon:!1,hasEndIcon:!1},{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat ullam est animi, facilis tenetur temporibus omnis labore illo error.",hasStartIcon:!1,hasEndIcon:!1},{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat ullam est animi, facilis tenetur temporibus omnis labore illo error.",hasStartIcon:!1,hasEndIcon:!1},{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat ullam est animi, facilis tenetur temporibus omnis labore illo error.",hasStartIcon:!1,hasEndIcon:!1},{description:"",hasStartIcon:!1,hasEndIcon:!1,component:r.default}]}}}},l=e(2),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("Accordion",{attrs:{accordionData:t.accordionData}})}),[],!1,null,null,null);o.default=component.exports}}]);