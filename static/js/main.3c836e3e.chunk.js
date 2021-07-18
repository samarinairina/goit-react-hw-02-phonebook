(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={text:"App_text__3HYcB"}},14:function(t,e,n){t.exports={contacrList:"ContactList_contacrList__1kygA"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=n(15),i=n(2),l=n(3),u=n(5),b=n(4),m=n(12),j=n.n(m),d=n(13),f=n(6),h=n.n(f),p=n(0),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.form,children:[Object(p.jsxs)("label",{className:h.a.label,children:[Object(p.jsxs)("span",{className:h.a.text,children:["Name"," "]}),Object(p.jsx)("input",{className:h.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:h.a.label,children:[Object(p.jsxs)("span",{className:h.a.text,children:["Number"," "]}),Object(p.jsx)("input",{className:h.a.input,type:"tel",placeholder:"999-99-99",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{type:"submit",className:h.a.button,children:"add contact"})]})})}}]),n}(a.Component),O=n(8),_=n.n(O),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilter;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("form",{className:_.a.form,children:Object(p.jsxs)("label",{children:[Object(p.jsx)("h3",{className:_.a.text,children:"Find contacts by name:"}),Object(p.jsx)("input",{type:"text",value:e,onChange:n,className:_.a.input})]})})})}}]),n}(a.Component),v=n(7),y=n.n(v),g=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:t.props.id},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.id,a=e.name,c=e.number,r=e.onDeleteContact;return Object(p.jsxs)("li",{id:n,className:y.a.contact,children:[Object(p.jsx)("p",{className:y.a.text,children:a}),Object(p.jsx)("p",{className:y.a.text,children:c}),Object(p.jsx)("button",{className:y.a.button,onClick:function(){return r(t.state.id)},children:"delete"})]})}}]),n}(a.Component),N=n(14),F=n.n(N),k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.contacts,e=this.props.onDelete;return Object(p.jsx)("ul",{className:F.a.contacrList,children:t.map((function(t){return Object(p.jsx)(g,{id:t.id,name:t.name,number:t.number,onDeleteContact:e},t.id)}))})}}]),n}(a.Component),w=n(10),S=n.n(w),A=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"c7a273d-8bfr-66gr-wef2-4f4d57ea2d0",name:"Rosie Simpson",number:"459-12-56"},{id:"anctrjd-8bfr-66gr-wef2-4f4d57ea2d0",name:"Hermione Kline",number:"443-89-12"},{id:"dkt846a-8bfr-66gr-wef2-4f4d57ea2d0",name:"Eden Clements",number:"645-17-79"},{id:"hr7y3td-8bfr-66gr-wef2-4f4d57ea2d0",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.isContactExist(n)){var c=j()();t.setState((function(t){var e=t.contacts;return{contacts:[{id:c,name:n,number:a}].concat(Object(s.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.isContactExist=function(e){var n=t.state.contacts,a=!0;return n.forEach((function(t){t.name.toLowerCase()===e.toLowerCase()&&(alert("".concat(e," is already in contacts")),a=!1)})),a},t.filterHandler=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return""!==a?n.filter((function(t){return t.name.includes(a)})):n},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.filterContacts(),e=this.state.filter;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:S.a.text,children:"Phonebook"}),Object(p.jsx)(x,{onSubmit:this.addContact}),Object(p.jsx)("h2",{className:S.a.text,children:"Contacts"}),Object(p.jsx)(C,{filter:e,onFilter:this.filterHandler}),Object(p.jsx)(k,{contacts:t,onDelete:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__30YFx",label:"ContactForm_label__2nekG",input:"ContactForm_input__21qlE",button:"ContactForm_button__3tVJA",text:"ContactForm_text__3SMi6"}},7:function(t,e,n){t.exports={contact:"Contact_contact__2AoT2",button:"Contact_button__1zHZY",text:"Contact_text__B1Zyv"}},8:function(t,e,n){t.exports={form:"Filter_form__1lBi_",input:"Filter_input__7ix-J",text:"Filter_text__303pt"}}},[[21,1,2]]]);
//# sourceMappingURL=main.3c836e3e.chunk.js.map