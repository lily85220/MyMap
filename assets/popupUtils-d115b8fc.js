import{v as I,mx as x,my as T,r as f}from"./index-607cb647.js";async function b(e,p=e.popupTemplate){var l,o;if(I(p))return[];const n=await p.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:c}=p,{objectIdField:t,typeIdField:i,globalIdField:a,relationships:u}=e;if(n.includes("*"))return["*"];const m=c?await x(e):[],s=T(e.fieldsIndex,[...n,...m]);return i&&s.push(i),s&&t&&((l=e.fieldsIndex)!=null&&l.has(t))&&!s.includes(t)&&s.push(t),s&&a&&((o=e.fieldsIndex)!=null&&o.has(a))&&!s.includes(a)&&s.push(a),u&&u.forEach(h=>{var r;const{keyField:d}=h;s&&d&&((r=e.fieldsIndex)!=null&&r.has(d))&&!s.includes(d)&&s.push(d)}),s}function y(e,p){return e.popupTemplate?e.popupTemplate:f(p)&&p.defaultPopupTemplateEnabled&&f(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}export{b as d,y as s};
