(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(6),i=n.n(l),s=(n(13),n(14),n(7)),c=n(1),o=n(2),u=n(4),h=n(3);function m(e){return a.a.createElement("button",{className:"cell",onClick:e.onClick},e.value)}var d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).restartButton=a.a.createRef(),r}return Object(o.a)(n,[{key:"renderCell",value:function(e){var t=this;return a.a.createElement(m,{value:this.props.cells[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"border-row"},this.renderCell(0),this.renderCell(1),this.renderCell(2)),a.a.createElement("div",{className:"border-row"},this.renderCell(3),this.renderCell(4),this.renderCell(5)),a.a.createElement("div",{className:"border-row"},this.renderCell(6),this.renderCell(7),this.renderCell(8)),a.a.createElement("div",null,a.a.createElement("button",{id:"restart",onClick:this.props.onReset}," Restart ")))}}]),n}(r.Component),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).initialState={xTurn:!0,stepNumber:0,history:[{cells:Array(9).fill(null)}]},r.state=r.initialState,r}return Object(o.a)(n,[{key:"resetBoard",value:function(){this.setState(this.initialState)}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].cells.slice();f(n)||n[e]||(n[e]=this.state.xTurn?"X":"O",this.setState({history:t.concat({cells:n}),xTurn:!this.state.xTurn,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,n=this.state.history[this.state.stepNumber],r=f(n.cells);return r&&(e=r+" Wins!"),this.state.stepNumber>=9&&(e="X-O Tie!"),a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-info"},a.a.createElement("div",null,e)),a.a.createElement("div",{className:"game-board"},a.a.createElement(d,{onClick:function(e){return t.handleClick(e)},onReset:function(){return t.resetBoard()},cells:n.cells})))}}]),n}(r.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(s.a)(t[n],3),a=r[0],l=r[1],i=r[2];if(e[a]&&e[a]===e[l]&&e[l]===e[i])return e[a]}return null}var b=function(){return a.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6bdf5ef1.chunk.js.map