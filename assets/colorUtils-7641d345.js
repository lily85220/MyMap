function p(t){return"r"in t&&"g"in t&&"b"in t}function f(t){return"h"in t&&"s"in t&&"v"in t}function b(t){return"l"in t&&"a"in t&&"b"in t}function l(t){return"l"in t&&"c"in t&&"h"in t}function y(t){return"x"in t&&"y"in t&&"z"in t}const z=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],v=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function g(t,n){const r=[];let u,o;if(t[0].length!==n.length)throw new Error("dimensions do not match");const c=t.length,i=t[0].length;let a=0;for(u=0;u<c;u++){for(a=0,o=0;o<i;o++)a+=t[u][o]*n[o];r.push(a)}return r}function M(t){const n=[t.r/255,t.g/255,t.b/255].map(u=>u<=.04045?u/12.92:((u+.055)/1.055)**2.4),r=g(z,n);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function e(t){const n=g(v,[t.x/100,t.y/100,t.z/100]).map(r=>{const u=r<=.0031308?12.92*r:1.055*r**.4166666666666667-.055;return Math.min(1,Math.max(u,0))});return{r:Math.round(255*n[0]),g:Math.round(255*n[1]),b:Math.round(255*n[2])}}function m(t){const n=[t.x/95.047,t.y/100,t.z/108.883].map(r=>r>.008856451679035631?r**.3333333333333333:7.787037037037035*r+.13793103448275862);return{l:116*n[1]-16,a:500*(n[0]-n[1]),b:200*(n[1]-n[2])}}function d(t){const n=t.l,r=[(n+16)/116+t.a/500,(n+16)/116,(n+16)/116-t.b/200].map(u=>u>6/29?u**3:3*(6/29)**2*(u-4/29));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function w(t){const n=t.l,r=t.a,u=t.b,o=Math.sqrt(r*r+u*u);let c=Math.atan2(u,r);return c=c>0?c:c+2*Math.PI,{l:n,c:o,h:c}}function q(t){const n=t.l,r=t.c,u=t.h;return{l:n,a:r*Math.cos(u),b:r*Math.sin(u)}}function x(t){return m(M(t))}function k(t){return e(d(t))}function E(t){return w(m(M(t)))}function I(t){return e(d(q(t)))}function P(t){const n=t.r,r=t.g,u=t.b,o=Math.max(n,r,u),c=o-Math.min(n,r,u);let i=o,a=c===0?0:o===n?(r-u)/c%6:o===r?(u-n)/c+2:(n-r)/c+4,s=c===0?0:c/i;return a<0&&(a+=6),a*=60,s*=100,i*=100/255,{h:a,s,v:i}}function j(t){const n=(t.h+360)%360/60,r=t.s/100,u=t.v/100*255,o=u*r,c=o*(1-Math.abs(n%2-1));let i;switch(Math.floor(n)){case 0:i={r:o,g:c,b:0};break;case 1:i={r:c,g:o,b:0};break;case 2:i={r:0,g:o,b:c};break;case 3:i={r:0,g:c,b:o};break;case 4:i={r:c,g:0,b:o};break;case 5:case 6:i={r:o,g:0,b:c};break;default:i={r:0,g:0,b:0}}return i.r=Math.round(i.r+u-o),i.g=Math.round(i.g+u-o),i.b=Math.round(i.b+u-o),i}function h(t){return p(t)?t:l(t)?I(t):b(t)?k(t):y(t)?e(t):f(t)?j(t):t}function A(t){return f(t)?t:P(h(t))}function B(t){return b(t)?t:x(h(t))}function C(t){return l(t)?t:E(h(t))}function D(t,n){const r=x(t);return r.l*=1-n,k(r)}export{h as p,D as q,C as v,A as y,B as z};
