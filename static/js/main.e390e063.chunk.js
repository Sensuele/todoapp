(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(1),n=o.n(c),s=o(7),i=o.n(s),l=(o(13),o(3)),a=(o(14),o(8)),d=o(0),r=function(t){var e=t.setInputText,o=t.todos,c=t.setTodos,n=t.inputText,s=t.setStatus;return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:n,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),""!==(null===n||void 0===n?void 0:n.trim())&&(c([].concat(Object(a.a)(o),[{text:n,completed:!1,id:Math.random()}])),e(""))},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{children:"+"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(t){s(t.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})})},u=o(6),j=function(t){var e=t.text,o=t.todos,c=t.setTodos,n=t.todo;return Object(d.jsxs)("li",{className:"todo",children:[Object(d.jsx)("div",{className:"todo-item ".concat(n.completed?"completed":""),children:e}),Object(d.jsx)("button",{onClick:function(){c(o.map((function(t){return t.id===n.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:"done"}),Object(d.jsx)("button",{onClick:function(){c(o.filter((function(t){return t.id!==n.id})))},className:"trash-btn",children:"X"})]})},b=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:null!==c?c.map((function(t){return Object(d.jsx)(j,{setTodos:o,todos:e,text:t.text,todo:t},t.id)})):""})})};var p=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),o=e[0],n=e[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),a=i[0],u=i[1],j=Object(c.useState)("all"),p=Object(l.a)(j,2),O=p[0],f=p[1],m=Object(c.useState)([]),x=Object(l.a)(m,2),h=x[0],v=x[1];Object(c.useEffect)((function(){g()}),[]),Object(c.useEffect)((function(){!function(){switch(O){case"completed":v(a.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(a.filter((function(t){return!1===t.completed})));break;default:v(a)}}(),localStorage.setItem("todos",JSON.stringify(a))}),[a,O]);var g=function(){null===localStorage.getItem("todos")&&localStorage.setItem("todos",JSON.stringify([]));var t=JSON.parse(localStorage.getItem("todos"));u(t)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Todo List"})}),Object(d.jsx)(r,{inputText:o,todos:a,setTodos:u,setInputText:n,setStatus:f}),Object(d.jsx)(b,{setTodos:u,todos:a,filteredTodos:h})]})},O=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;o(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.e390e063.chunk.js.map