import{v as m,cj as s,r}from"./index-607cb647.js";function u(e,t=s(e)){return t.mode!=="on-the-ground"&&!(m(e.geometry)||!e.geometry.hasZ)}function c(e,t){let n=null;const a=e.events.on("grab-changed",o=>{r(n)&&(n.remove(),n=null),o.action==="start"&&(n=e.disableDisplay()),t&&t(o)});return{remove(){r(n)&&n.remove(),a.remove()}}}export{c as n,u as t};
