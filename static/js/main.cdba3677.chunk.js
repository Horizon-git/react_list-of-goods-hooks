(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),r=n.n(o),c=n(6),i=n(8),a=(n(13),n(1)),l=(n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.sortAlphabet="abc",t.sortLength="length",t.sortNone=""}(s||(s={}));var j=function(){var t=Object(a.useState)(s.sortNone),e=Object(c.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(!1),l=Object(c.a)(r,2),j=l[0],d=l[1],g=function(t,e){var n=e.sortField,o=e.sortReverse,r=Object(i.a)(t);return r.sort((function(t,e){switch(n){case s.sortAlphabet:return t.localeCompare(e);case s.sortLength:return t.length-e.length;default:return 0}})),o&&r.reverse(),r}(h,{sortField:n,sortReverse:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return o(s.sortAlphabet)},className:u()("button is-info",{"is-light":n!==s.sortAlphabet}),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return o(s.sortLength)},className:u()("button is-success",{"is-light":n!==s.sortLength}),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){return d(!j)},className:u()("button is-warning",{"is-light":!0!==j}),children:"Reverse"}),(n||j)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(s.sortNone),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t})}))})]})};r.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cdba3677.chunk.js.map