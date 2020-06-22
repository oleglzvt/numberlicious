(this["webpackJsonpoleg-lozovatyi-project-five"]=this["webpackJsonpoleg-lozovatyi-project-five"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),c=n.n(l),o=(n(22),n(2)),u=n(3),i=n(5),s=n(4),m=(n(23),n(6)),h=n.n(m),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleInput=function(t){e.setState({year:t.target.value})},e.handleClick=function(t){t.preventDefault(),h()({url:"http://proxy.hackeryou.com",dataType:"json",method:"GET",params:{reqUrl:"http://numbersapi.com/".concat(e.state.year,"/year?json"),xmlToJSON:!1}}).then((function(t){console.log(t),e.setState({yearFact:t.data})})).catch((function(){alert("Invalid format, please enter numbers only")}))},e.state={year:"",yearFact:""},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"yearInput",className:"sr-only"},"Year input"),r.a.createElement("input",{className:"userInput",type:"text",name:"yearInput",id:"yearInput",placeholder:"Enter a year (YYYY)",onChange:this.handleInput}),r.a.createElement("button",{type:"submit",onClick:this.handleClick},"Submit")),r.a.createElement("p",null,this.state.yearFact))}}]),n}(a.Component),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleInput=function(t){e.setState({number:t.target.value})},e.handleClick=function(t){t.preventDefault(),h()({url:"http://numbersapi.com/".concat(e.state.number,"/math?json"),method:"GET",dataType:"json"}).then((function(t){console.log(t.data),e.setState({numberFact:t.data.text})})).catch((function(){alert("Invalid format, please enter numbers only")}))},e.state={number:"",numberFact:""},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"numberInput",className:"sr-only"},"Number input"),r.a.createElement("input",{className:"userInput",type:"text",name:"numberInput",id:"numberInput",placeholder:"Enter a number",onChange:this.handleInput}),r.a.createElement("button",{type:"submit",onClick:this.handleClick},"Submit")),r.a.createElement("p",null,this.state.numberFact))}}]),n}(a.Component),y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleInput=function(t){e.setState({dayMonth:t.target.value})},e.handleClick=function(t){t.preventDefault(),h()({url:"http://numbersapi.com/".concat(e.state.dayMonth,"/date?json"),method:"GET",dataType:"json"}).then((function(t){e.setState({dayMonthFact:t.data.text})})).catch((function(){alert("Invalid format, please enter numbers only")}))},e.state={dayMonth:"",dayMonthFact:""},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"dayMonthInput",className:"sr-only"},"Day and month input"),r.a.createElement("input",{className:"userInput",type:"text",name:"dayMonthInput",id:"dayMonthInput",placeholder:"Enter date (MM/DD)",onChange:this.handleInput}),r.a.createElement("button",{type:"submit",onClick:this.handleClick},"Submit")),r.a.createElement("p",null,this.state.dayMonthFact))}}]),n}(a.Component),b=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleYearCheck=function(){e.setState({yearIsChecked:!0,dayMonthIsChecked:!1,numberIsChecked:!1})},e.handleDayMonthCheck=function(){e.setState({yearIsChecked:!1,dayMonthIsChecked:!0,numberIsChecked:!1})},e.handleNumberCheck=function(){e.setState({yearIsChecked:!1,dayMonthIsChecked:!1,numberIsChecked:!0})},e.state={yearIsChecked:!1,dayMonthIsChecked:!1,numberIsChecked:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("fieldset",{className:"optionsMenu"},r.a.createElement("label",{htmlFor:"year"},"Year"),r.a.createElement("input",{type:"radio",name:"inputOption",id:"year",onChange:this.handleYearCheck}),r.a.createElement("label",{htmlFor:"monthDay"},"Month/Day"),r.a.createElement("input",{type:"radio",name:"inputOption",id:"monthDay",onChange:this.handleDayMonthCheck}),r.a.createElement("label",{htmlFor:"number"},"Number"),r.a.createElement("input",{type:"radio",name:"inputOption",id:"number",onChange:this.handleNumberCheck})),this.state.yearIsChecked?r.a.createElement(d,null):null,this.state.dayMonthIsChecked?r.a.createElement(y,null):null,this.state.numberIsChecked?r.a.createElement(p,null):null)}}]),n}(a.Component),f=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Numberlicious"),r.a.createElement("ul",{className:"description"},r.a.createElement("li",null,r.a.createElement("span",null,"Step 1:")," Choose the category"),r.a.createElement("li",null,r.a.createElement("span",null,"Step 2:"),' Enter a number and click "Submit"'),r.a.createElement("li",null,r.a.createElement("span",null,"Step 3:")," Discover an interesting fact about your number")),r.a.createElement(b,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.98a4961d.chunk.js.map