(this["webpackJsonpgoit-react-33-hw-02-phonebook"]=this["webpackJsonpgoit-react-33-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=(n(14),n(9)),s=n(2),u=n(3),l=n(5),d=n(4),b=n(18),h=n(8),j=n(0),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{onChange:this.handleChange,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{onChange:this.handleChange,value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),f=function(e){var t=e.contacts,n=e.onDelete;return Object(j.jsx)("ul",{children:t.length?t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(j.jsxs)("li",{children:[a,": ",r,Object(j.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"delete"})]},t)})):null})},p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){var n=t.currentTarget.value;e.setState({value:n}),e.props.onGetValue(n)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.value;return Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{onChange:this.handleChange,value:e,type:"text"})]})}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(t){var n=t.name,a=t.number;e.onCheckUniqueName(n)?alert("".concat(n," is alredy in contacts.")):e.setState((function(e){var t=e.contacts;return{contacts:[{id:Object(b.a)(),name:n,number:a}].concat(Object(o.a)(t))}}))},e.filterUpdateHandler=function(t){e.setState({filter:t})},e.onCheckUniqueName=function(t){return e.state.contacts.find((function(e){return e.name===t}))},e.filteredContactsHandler=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLocaleLowerCase().includes(a.toLocaleLowerCase())}))},e.onDeleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{onSubmit:this.formSubmitHandler}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(p,{onGetValue:this.filterUpdateHandler}),n?Object(j.jsx)(f,{contacts:this.filteredContactsHandler(),onDelete:this.onDeleteContact}):Object(j.jsx)(f,{contacts:t,onDelete:this.onDeleteContact})]})}}]),n}(a.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.34e3b1dd.chunk.js.map