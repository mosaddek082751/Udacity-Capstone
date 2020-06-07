(this["webpackJsonptypescript-app"]=this["webpackJsonptypescript-app"]||[]).push([[0],{195:function(e,t,n){e.exports=n(357)},200:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(42),o=n.n(a);n(200);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(201);var r=n(0),s=n.n(r),i=n(162);const c="https://".concat("a9cw7u6s7d",".execute-api.us-east-1.amazonaws.com/dev"),l="dev-mosaddek2751.auth0.com",u="TNYv0sZenu1RewSvH3LUFO4MYR81CfC0",d="http://capstone-serverless-mosaddek082751.s3-website-us-east-1.amazonaws.com/callback";var h=n(38),p=n(371),m=n(366);var g,f=function(){return s.a.createElement(p.a,{active:!0},s.a.createElement(m.a,{content:"Loading"}))},k=n(183),E=n.n(k),w=n(112),v=n(375),T=n(374),b=n(372),C=n(16),y=n.n(C),x=n(22),I=n(370),S=n(358),U=n(45),A=n.n(U);function L(e){return O.apply(this,arguments)}function O(){return(O=Object(x.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching todos"),e.next=3,A.a.get("".concat(c,"/todos"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,console.log("Todos:",n.data),e.abrupt("return",n.data.items);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return j.apply(this,arguments)}function j(){return(j=Object(x.a)(y.a.mark((function e(t,n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(c,"/todos"),JSON.stringify(n),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.data.item);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t,n){return N.apply(this,arguments)}function N(){return(N=Object(x.a)(y.a.mark((function e(t,n,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.patch("".concat(c,"/todos/").concat(n),JSON.stringify(a),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t){return P.apply(this,arguments)}function P(){return(P=Object(x.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.delete("".concat(c,"/todos/").concat(n),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(y.a.mark((function e(t,n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(c,"/todos/").concat(n,"/attachment"),"",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.data.uploadUrl);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return _.apply(this,arguments)}function _(){return(_=Object(x.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.put(t,n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){e[e.NoUpload=0]="NoUpload",e[e.FetchingPresignedUrl=1]="FetchingPresignedUrl",e[e.UploadingFile=2]="UploadingFile"}(g||(g={}));class J extends r.PureComponent{constructor(...e){var t;super(...e),t=this,this.state={file:void 0,uploadState:g.NoUpload},this.handleFileChange=e=>{const t=e.target.files;t&&this.setState({file:t[0]})},this.handleSubmit=function(){var e=Object(x.a)(y.a.mark((function e(n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,t.state.file){e.next=5;break}return alert("File should be selected"),e.abrupt("return");case 5:return t.setUploadState(g.FetchingPresignedUrl),e.next=8,z(t.props.auth.getIdToken(),t.props.match.params.todoId);case 8:return a=e.sent,t.setUploadState(g.UploadingFile),e.next=12,M(a,t.state.file);case 12:alert("File was uploaded!"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),alert("Could not upload a file: "+e.t0.message);case 18:return e.prev=18,t.setUploadState(g.NoUpload),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})));return function(t){return e.apply(this,arguments)}}()}setUploadState(e){this.setState({uploadState:e})}render(){return r.createElement("div",null,r.createElement("h1",null,"Upload new image"),r.createElement(I.a,{onSubmit:this.handleSubmit},r.createElement(I.a.Field,null,r.createElement("label",null,"File"),r.createElement("input",{type:"file",accept:"image/*",placeholder:"Image to upload",onChange:this.handleFileChange})),this.renderButton()))}renderButton(){return r.createElement("div",null,this.state.uploadState===g.FetchingPresignedUrl&&r.createElement("p",null,"Uploading image metadata"),this.state.uploadState===g.UploadingFile&&r.createElement("p",null,"Uploading file"),r.createElement(S.a,{loading:this.state.uploadState!==g.NoUpload,type:"submit"},"Upload"))}}class H extends r.PureComponent{constructor(...e){super(...e),this.onLogin=()=>{this.props.auth.login()}}render(){return r.createElement("div",null,r.createElement("h1",null,"Please log in"),r.createElement(S.a,{onClick:this.onLogin,size:"huge",color:"olive"},"Log in"))}}class W extends r.PureComponent{render(){return r.createElement("h1",null,"Not Found")}}var Y=n(178),$=n.n(Y),Z=n(179),q=n.n(Z),G=n(373),K=n(368),Q=n(369),V=n(367),X=n(44),ee=n(184);class te extends r.PureComponent{constructor(...e){var t;super(...e),t=this,this.state={todos:[],newTodoName:"",loadingTodos:!0},this.handleNameChange=e=>{this.setState({newTodoName:e.target.value})},this.onEditButtonClick=e=>{this.props.history.push("/todos/".concat(e,"/edit"))},this.onTodoCreate=function(){var e=Object(x.a)(y.a.mark((function e(n){var a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.calculateDueDate(),e.next=4,D(t.props.auth.getIdToken(),{name:t.state.newTodoName,dueDate:a});case 4:o=e.sent,t.setState({todos:[...t.state.todos,o],newTodoName:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Todo creation failed");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.onTodoDelete=function(){var e=Object(x.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(t.props.auth.getIdToken(),n);case 3:t.setState({todos:t.state.todos.filter(e=>e.todoId!=n)}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Todo deletion failed");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),this.onTodoCheck=function(){var e=Object(x.a)(y.a.mark((function e(n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.state.todos[n],e.next=4,F(t.props.auth.getIdToken(),a.todoId,{name:a.name,dueDate:a.dueDate,done:!a.done});case 4:t.setState({todos:q()(t.state.todos,{[n]:{done:{$set:!a.done}}})}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Todo deletion failed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}componentDidMount(){var e=this;return Object(x.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L(e.props.auth.getIdToken());case 3:n=t.sent,e.setState({todos:n,loadingTodos:!1}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("Failed to fetch todos: ".concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}render(){return r.createElement("div",null,r.createElement(G.a,{as:"h1"},"TODOs"),this.renderCreateTodoInput(),this.renderTodos())}renderCreateTodoInput(){return r.createElement(T.a.Row,null,r.createElement(T.a.Column,{width:16},r.createElement(K.a,{action:{color:"teal",labelPosition:"left",icon:"add",content:"New task",onClick:this.onTodoCreate},fluid:!0,actionPosition:"left",placeholder:"To change the world...",onChange:this.handleNameChange})),r.createElement(T.a.Column,{width:16},r.createElement(Q.a,null)))}renderTodos(){return this.state.loadingTodos?this.renderLoading():this.renderTodosList()}renderLoading(){return r.createElement(T.a.Row,null,r.createElement(m.a,{indeterminate:!0,active:!0,inline:"centered"},"Loading TODOs"))}renderTodosList(){return r.createElement(T.a,{padded:!0},this.state.todos.map((e,t)=>r.createElement(T.a.Row,{key:e.todoId},r.createElement(T.a.Column,{width:1,verticalAlign:"middle"},r.createElement(V.a,{onChange:()=>this.onTodoCheck(t),checked:e.done})),r.createElement(T.a.Column,{width:10,verticalAlign:"middle"},e.name),r.createElement(T.a.Column,{width:3,floated:"right"},e.dueDate),r.createElement(T.a.Column,{width:1,floated:"right"},r.createElement(S.a,{icon:!0,color:"blue",onClick:()=>this.onEditButtonClick(e.todoId)},r.createElement(X.a,{name:"pencil"}))),r.createElement(T.a.Column,{width:1,floated:"right"},r.createElement(S.a,{icon:!0,color:"red",onClick:()=>this.onTodoDelete(e.todoId)},r.createElement(X.a,{name:"delete"}))),e.attachmentUrl&&r.createElement(ee.a,{src:e.attachmentUrl,size:"small",wrapped:!0}),r.createElement(T.a.Column,{width:16},r.createElement(Q.a,null)))))}calculateDueDate(){const e=new Date;return e.setDate(e.getDate()+7),$()(e,"yyyy-mm-dd")}}class ne extends r.Component{constructor(e){super(e),this.handleLogin=this.handleLogin.bind(this),this.handleLogout=this.handleLogout.bind(this)}handleLogin(){this.props.auth.login()}handleLogout(){this.props.auth.logout()}render(){return s.a.createElement("div",null,s.a.createElement(v.a,{style:{padding:"8em 0em"},vertical:!0},s.a.createElement(T.a,{container:!0,stackable:!0,verticalAlign:"middle"},s.a.createElement(T.a.Row,null,s.a.createElement(T.a.Column,{width:16},s.a.createElement(h.b,{history:this.props.history},this.generateMenu(),this.generateCurrentPage()))))))}generateMenu(){return s.a.createElement(b.a,null,s.a.createElement(b.a.Item,{name:"home"},s.a.createElement(w.a,{to:"/"},"Home")),s.a.createElement(b.a.Menu,{position:"right"},this.logInLogOutButton()))}logInLogOutButton(){return this.props.auth.isAuthenticated()?s.a.createElement(b.a.Item,{name:"logout",onClick:this.handleLogout},"Log Out"):s.a.createElement(b.a.Item,{name:"login",onClick:this.handleLogin},"Log In")}generateCurrentPage(){return this.props.auth.isAuthenticated()?s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/",exact:!0,render:e=>s.a.createElement(te,Object.assign({},e,{auth:this.props.auth}))}),s.a.createElement(h.a,{path:"/todos/:todoId/edit",exact:!0,render:e=>s.a.createElement(J,Object.assign({},e,{auth:this.props.auth}))}),s.a.createElement(h.a,{component:W})):s.a.createElement(H,{auth:this.props.auth})}}const ae=E()(),oe=new class{constructor(e){this.auth0=new i.a.WebAuth({domain:l,clientID:u,redirectUri:d,responseType:"token id_token",scope:"openid"}),this.history=e,this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this)}login(){this.auth0.authorize()}handleAuthentication(){this.auth0.parseHash((e,t)=>{t&&t.accessToken&&t.idToken?(console.log("Access token: ",t.accessToken),console.log("id token: ",t.idToken),this.setSession(t)):e&&(this.history.replace("/"),console.log(e),alert("Error: ".concat(e.error,". Check the console for further details.")))})}getAccessToken(){return this.accessToken}getIdToken(){return this.idToken}setSession(e){localStorage.setItem("isLoggedIn","true");let t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,this.history.replace("/")}renewSession(){this.auth0.checkSession({},(e,t)=>{t&&t.accessToken&&t.idToken?this.setSession(t):e&&(this.logout(),console.log(e),alert("Could not get a new token (".concat(e.error,": ").concat(e.error_description,").")))})}logout(){this.accessToken=null,this.idToken=null,this.expiresAt=0,localStorage.removeItem("isLoggedIn"),this.auth0.logout({return_to:window.location.origin}),this.history.replace("/")}isAuthenticated(){let e=this.expiresAt;return(new Date).getTime()<e}}(ae);o.a.render(s.a.createElement(h.b,{history:ae},s.a.createElement("div",null,s.a.createElement(h.a,{path:"/callback",render:e=>((e=>{const t=e.location;/access_token|id_token|error/.test(t.hash)&&oe.handleAuthentication()})(e),s.a.createElement(f,null))}),s.a.createElement(h.a,{render:e=>s.a.createElement(ne,Object.assign({auth:oe},e))}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[195,1,2]]]);
//# sourceMappingURL=main.ff587db2.chunk.js.map