var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/HVE":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return p})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return l}));var i,r=n("8Y7J"),s=n("SVse");try{i="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(d){i=!1}var o,u=function(){var t=function(t){this._platformId=t,this.isBrowser=this._platformId?Object(s.z)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!i)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT};return t.ngInjectableDef=Object(r.gc)({factory:function(){return new t(Object(r.hc)(r.M,8))},token:t,providedIn:"root"}),t}(),a=function(){};function c(t){return function(){if(null==o&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return o=!0}}))}finally{o=o||!1}return o}()?t:!!t.capture}var h,l=function(){var t={NORMAL:0,NEGATED:1,INVERTED:2};return t[t.NORMAL]="NORMAL",t[t.NEGATED]="NEGATED",t[t.INVERTED]="INVERTED",t}();function p(){return!!("object"==typeof document&&"scrollBehavior"in document.documentElement.style)}function f(){if("object"!=typeof document||!document)return l.NORMAL;if(!h){var t=document.createElement("div"),e=t.style;t.dir="rtl",e.height="1px",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";var n=document.createElement("div"),i=n.style;i.width="2px",i.height="1px",t.appendChild(n),document.body.appendChild(t),h=l.NORMAL,0===t.scrollLeft&&(t.scrollLeft=1,h=0===t.scrollLeft?l.NEGATED:l.INVERTED),t.parentNode.removeChild(t)}return h}},"1G5W":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("l7GE"),r=n("ZUHj");function s(t){return function(e){return e.lift(new o(t))}}var o=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){var n=new u(t),i=Object(r.a)(n,this.notifier);return i&&!n.seenValue?(n.add(i),e.subscribe(n)):n},t}(),u=function(t){function e(e){var n=this;return(n=t.call(this,e)||this).seenValue=!1,n}return __extends(e,t),e.prototype.notifyNext=function(t,e,n,i,r){this.seenValue=!0,this.complete()},e.prototype.notifyComplete=function(){},e}(i.a)},KCVW:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return a}));var i=n("8Y7J");function r(t){return null!=t&&"false"!=""+t}function s(t,e){return void 0===e&&(e=0),function(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}(t)?Number(t):e}function o(t){return Array.isArray(t)?t:[t]}function u(t){return null==t?"":"string"==typeof t?t:t+"px"}function a(t){return t instanceof i.q?t.nativeElement:t}},Kj3r:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("7o/Q"),r=n("D0XW");function s(t,e){return void 0===e&&(e=r.a),function(n){return n.lift(new o(t,e))}}var o=function(){function t(t,e){this.dueTime=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.dueTime,this.scheduler))},t}(),u=function(t){function e(e,n,i){var r=this;return(r=t.call(this,e)||this).dueTime=n,r.scheduler=i,r.debouncedSubscription=null,r.lastValue=null,r.hasValue=!1,r}return __extends(e,t),e.prototype._next=function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(a,this.dueTime,this))},e.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},e.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var t=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}},e.prototype.clearDebounce=function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)},e}(i.a);function a(t){t.debouncedNext()}},yLV6:function(t,e,n){var i;!function(r,s,o,u){"use strict";var a,c=["","webkit","Moz","MS","ms","o"],h=s.createElement("div"),l="function",p=Math.round,f=Math.abs,d=Date.now;function v(t,e,n){return setTimeout(I(t,n),e)}function m(t,e,n){return!!Array.isArray(t)&&(g(t,n[e],n),!0)}function g(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==u)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function y(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=r.console&&(r.console.warn||r.console.log);return s&&s.call(r.console,i,n),t.apply(this,arguments)}}a="function"!=typeof Object.assign?function(t){if(t===u||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==u&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var T=y((function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===u)&&(t[i[r]]=e[i[r]]),r++;return t}),"extend","Use `assign`."),E=y((function(t,e){return T(t,e,!0)}),"merge","Use `assign`.");function b(t,e,n){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,n&&a(i,n)}function I(t,e){return function(){return t.apply(e,arguments)}}function A(t,e){return typeof t==l?t.apply(e&&e[0]||u,e):t}function w(t,e){return t===u?e:t}function _(t,e,n){g(S(e),(function(e){t.addEventListener(e,n,!1)}))}function D(t,e,n){g(S(e),(function(e){t.removeEventListener(e,n,!1)}))}function N(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function x(t,e){return t.indexOf(e)>-1}function S(t){return t.trim().split(/\s+/g)}function O(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function C(t){return Array.prototype.slice.call(t,0)}function R(t,e,n){for(var i=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];O(r,o)<0&&i.push(t[s]),r[s]=o,s++}return n&&(i=e?i.sort((function(t,n){return t[e]>n[e]})):i.sort()),i}function P(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),s=0;s<c.length;){if((i=(n=c[s])?n+r:e)in t)return i;s++}return u}var M=1;function V(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}var z="ontouchstart"in r,X=P(r,"PointerEvent")!==u,Y=z&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),L=25,F=1,W=2,j=4,k=8,q=1,B=2,H=4,G=8,U=16,K=B|H,J=G|U,Z=K|J,Q=["x","y"],$=["clientX","clientY"];function tt(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){A(t.options.enable,[t])&&n.handler(e)},this.init()}function et(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,s=e&F&&i-r==0,o=e&(j|k)&&i-r==0;n.isFirst=!!s,n.isFinal=!!o,s&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=nt(e)),r>1&&!n.firstMultiple?n.firstMultiple=nt(e):1===r&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,a=o?o.center:s.center,c=e.center=it(i);e.timeStamp=d(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=ut(a,c),e.distance=ot(a,c),function(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==F&&s.eventType!==j||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}(n,e),e.offsetDirection=st(e.deltaX,e.deltaY);var h,l,p=rt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=p.x,e.overallVelocityY=p.y,e.overallVelocity=f(p.x)>f(p.y)?p.x:p.y,e.scale=o?(h=o.pointers,ot((l=i)[0],l[1],$)/ot(h[0],h[1],$)):1,e.rotation=o?function(t,e){return ut(e[1],e[0],$)+ut(t[1],t[0],$)}(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,r,s,o=t.lastInterval||e,a=e.timeStamp-o.timeStamp;if(e.eventType!=k&&(a>L||o.velocity===u)){var c=e.deltaX-o.deltaX,h=e.deltaY-o.deltaY,l=rt(a,c,h);i=l.x,r=l.y,n=f(l.x)>f(l.y)?l.x:l.y,s=st(c,h),t.lastInterval=e}else n=o.velocity,i=o.velocityX,r=o.velocityY,s=o.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=s}(n,e);var v=t.element;N(e.srcEvent.target,v)&&(v=e.srcEvent.target),e.target=v}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function nt(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:p(t.pointers[n].clientX),clientY:p(t.pointers[n].clientY)},n++;return{timeStamp:d(),pointers:e,center:it(e),deltaX:t.deltaX,deltaY:t.deltaY}}function it(t){var e=t.length;if(1===e)return{x:p(t[0].clientX),y:p(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:p(n/e),y:p(i/e)}}function rt(t,e,n){return{x:e/t||0,y:n/t||0}}function st(t,e){return t===e?q:f(t)>=f(e)?t<0?B:H:e<0?G:U}function ot(t,e,n){n||(n=Q);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function ut(t,e,n){return n||(n=Q),180*Math.atan2(e[n[1]]-t[n[1]],e[n[0]]-t[n[0]])/Math.PI}tt.prototype={handler:function(){},init:function(){this.evEl&&_(this.element,this.evEl,this.domHandler),this.evTarget&&_(this.target,this.evTarget,this.domHandler),this.evWin&&_(V(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&D(this.element,this.evEl,this.domHandler),this.evTarget&&D(this.target,this.evTarget,this.domHandler),this.evWin&&D(V(this.element),this.evWin,this.domHandler)}};var at={mousedown:F,mousemove:W,mouseup:j},ct="mousedown",ht="mousemove mouseup";function lt(){this.evEl=ct,this.evWin=ht,this.pressed=!1,tt.apply(this,arguments)}b(lt,tt,{handler:function(t){var e=at[t.type];e&F&&0===t.button&&(this.pressed=!0),e&W&&1!==t.which&&(e=j),this.pressed&&(e&j&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var pt={pointerdown:F,pointermove:W,pointerup:j,pointercancel:k,pointerout:k},ft={2:"touch",3:"pen",4:"mouse",5:"kinect"},dt="pointerdown",vt="pointermove pointerup pointercancel";function mt(){this.evEl=dt,this.evWin=vt,tt.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(dt="MSPointerDown",vt="MSPointerMove MSPointerUp MSPointerCancel"),b(mt,tt,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=pt[i],s=ft[t.pointerType]||t.pointerType,o="touch"==s,u=O(e,t.pointerId,"pointerId");r&F&&(0===t.button||o)?u<0&&(e.push(t),u=e.length-1):r&(j|k)&&(n=!0),u<0||(e[u]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),n&&e.splice(u,1))}});var gt={touchstart:F,touchmove:W,touchend:j,touchcancel:k},yt="touchstart",Tt="touchstart touchmove touchend touchcancel";function Et(){this.evTarget=yt,this.evWin=Tt,this.started=!1,tt.apply(this,arguments)}function bt(t,e){var n=C(t.touches),i=C(t.changedTouches);return e&(j|k)&&(n=R(n.concat(i),"identifier",!0)),[n,i]}b(Et,tt,{handler:function(t){var e=gt[t.type];if(e===F&&(this.started=!0),this.started){var n=bt.call(this,t,e);e&(j|k)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var It={touchstart:F,touchmove:W,touchend:j,touchcancel:k},At="touchstart touchmove touchend touchcancel";function wt(){this.evTarget=At,this.targetIds={},tt.apply(this,arguments)}function _t(t,e){var n=C(t.touches),i=this.targetIds;if(e&(F|W)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,s,o=C(t.changedTouches),u=[],a=this.target;if(s=n.filter((function(t){return N(t.target,a)})),e===F)for(r=0;r<s.length;)i[s[r].identifier]=!0,r++;for(r=0;r<o.length;)i[o[r].identifier]&&u.push(o[r]),e&(j|k)&&delete i[o[r].identifier],r++;return u.length?[R(s.concat(u),"identifier",!0),u]:void 0}b(wt,tt,{handler:function(t){var e=It[t.type],n=_t.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var Dt=2500,Nt=25;function xt(){tt.apply(this,arguments);var t=I(this.handler,this);this.touch=new wt(this.manager,t),this.mouse=new lt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function St(t,e){t&F?(this.primaryTouch=e.changedPointers[0].identifier,Ot.call(this,e)):t&(j|k)&&Ot.call(this,e)}function Ot(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout((function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)}),Dt)}}function Ct(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],s=Math.abs(e-r.x),o=Math.abs(n-r.y);if(s<=Nt&&o<=Nt)return!0}return!1}b(xt,tt,{handler:function(t,e,n){var i="mouse"==n.pointerType;if(!(i&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if("touch"==n.pointerType)St.call(this,e,n);else if(i&&Ct.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Rt=P(h.style,"touchAction"),Pt=Rt!==u,Mt=function(){if(!Pt)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=!e||r.CSS.supports("touch-action",n)})),t}();function Vt(t,e){this.manager=t,this.set(e)}Vt.prototype={set:function(t){"compute"==t&&(t=this.compute()),Pt&&this.manager.element.style&&Mt[t]&&(this.manager.element.style[Rt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return g(this.manager.recognizers,(function(e){A(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(x(t,"none"))return"none";var e=x(t,"pan-x"),n=x(t,"pan-y");return e&&n?"none":e||n?e?"pan-x":"pan-y":x(t,"manipulation")?"manipulation":"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,r=x(i,"none")&&!Mt.none,s=x(i,"pan-y")&&!Mt["pan-y"],o=x(i,"pan-x")&&!Mt["pan-x"];if(r&&1===t.pointers.length&&t.distance<2&&t.deltaTime<250)return;if(!o||!s)return r||s&&n&K||o&&n&J?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var zt=1,Xt=2,Yt=4,Lt=8,Ft=Lt,Wt=16;function jt(t){this.options=a({},this.defaults,t||{}),this.id=M++,this.manager=null,this.options.enable=w(this.options.enable,!0),this.state=zt,this.simultaneous={},this.requireFail=[]}function kt(t){return t&Wt?"cancel":t&Lt?"end":t&Yt?"move":t&Xt?"start":""}function qt(t){return t==U?"down":t==G?"up":t==B?"left":t==H?"right":""}function Bt(t,e){var n=e.manager;return n?n.get(t):t}function Ht(){jt.apply(this,arguments)}function Gt(){Ht.apply(this,arguments),this.pX=null,this.pY=null}function Ut(){Ht.apply(this,arguments)}function Kt(){jt.apply(this,arguments),this._timer=null,this._input=null}function Jt(){Ht.apply(this,arguments)}function Zt(){Ht.apply(this,arguments)}function Qt(){jt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function $t(t,e){return(e=e||{}).recognizers=w(e.recognizers,$t.defaults.preset),new te(t,e)}function te(t,e){var n;this.options=a({},$t.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(X?mt:Y?wt:z?xt:lt))(n,et),this.touchAction=new Vt(this,this.options.touchAction),ee(this,!0),g(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function ee(t,e){var n,i=t.element;i.style&&(g(t.options.cssProps,(function(r,s){n=P(i.style,s),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""})),e||(t.oldCssProps={}))}jt.prototype={defaults:{},set:function(t){return a(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(m(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Bt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return m(t,"dropRecognizeWith",this)?this:(t=Bt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(m(t,"requireFailure",this))return this;var e=this.requireFail;return-1===O(e,t=Bt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(m(t,"dropRequireFailure",this))return this;t=Bt(t,this);var e=O(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<Lt&&i(e.options.event+kt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=Lt&&i(e.options.event+kt(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|zt)))return!1;t++}return!0},recognize:function(t){var e=a({},t);if(!A(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Ft|Wt|32)&&(this.state=zt),this.state=this.process(e),this.state&(Xt|Yt|Lt|Wt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},b(Ht,jt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(Xt|Yt),r=this.attrTest(t);return i&&(n&k||!r)?e|Wt:i||r?n&j?e|Lt:e&Xt?e|Yt:Xt:32}}),b(Gt,Ht,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var t=this.options.direction,e=[];return t&K&&e.push("pan-y"),t&J&&e.push("pan-x"),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&K?(r=0===s?q:s<0?B:H,n=s!=this.pX,i=Math.abs(t.deltaX)):(r=0===o?q:o<0?G:U,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return Ht.prototype.attrTest.call(this,t)&&(this.state&Xt||!(this.state&Xt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=qt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),b(Ut,Ht,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Xt)},emit:function(t){1!==t.scale&&(t.additionalEvent=this.options.event+(t.scale<1?"in":"out")),this._super.emit.call(this,t)}}),b(Kt,jt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(j|k)&&!r)this.reset();else if(t.eventType&F)this.reset(),this._timer=v((function(){this.state=Ft,this.tryEmit()}),e.time,this);else if(t.eventType&j)return Ft;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Ft&&(t&&t.eventType&j?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=d(),this.manager.emit(this.options.event,this._input)))}}),b(Jt,Ht,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Xt)}}),b(Zt,Ht,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:K|J,pointers:1},getTouchAction:function(){return Gt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(K|J)?e=t.overallVelocity:n&K?e=t.overallVelocityX:n&J&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&f(e)>this.options.velocity&&t.eventType&j},emit:function(t){var e=qt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),b(Qt,jt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&F&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=j)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||ot(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=v((function(){this.state=Ft,this.tryEmit()}),e.interval,this),Xt):Ft}return 32},failTimeout:function(){return this._timer=v((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ft&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),$t.VERSION="2.0.7",$t.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Jt,{enable:!1}],[Ut,{enable:!1},["rotate"]],[Zt,{direction:K}],[Gt,{direction:K},["swipe"]],[Qt],[Qt,{event:"doubletap",taps:2},["tap"]],[Kt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},te.prototype={set:function(t){return a(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Ft)&&(r=e.curRecognizer=null);for(var s=0;s<i.length;)n=i[s],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(Xt|Yt|Lt)&&(r=e.curRecognizer=n),s++}},get:function(t){if(t instanceof jt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(m(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(m(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=O(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==u&&e!==u){var n=this.handlers;return g(S(t),(function(t){n[t]=n[t]||[],n[t].push(e)})),this}},off:function(t,e){if(t!==u){var n=this.handlers;return g(S(t),(function(t){e?n[t]&&n[t].splice(O(n[t],e),1):delete n[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=s.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ee(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},a($t,{INPUT_START:F,INPUT_MOVE:W,INPUT_END:j,INPUT_CANCEL:k,STATE_POSSIBLE:zt,STATE_BEGAN:Xt,STATE_CHANGED:Yt,STATE_ENDED:Lt,STATE_RECOGNIZED:Ft,STATE_CANCELLED:Wt,STATE_FAILED:32,DIRECTION_NONE:q,DIRECTION_LEFT:B,DIRECTION_RIGHT:H,DIRECTION_UP:G,DIRECTION_DOWN:U,DIRECTION_HORIZONTAL:K,DIRECTION_VERTICAL:J,DIRECTION_ALL:Z,Manager:te,Input:tt,TouchAction:Vt,TouchInput:wt,MouseInput:lt,PointerEventInput:mt,TouchMouseInput:xt,SingleTouchInput:Et,Recognizer:jt,AttrRecognizer:Ht,Tap:Qt,Pan:Gt,Swipe:Zt,Pinch:Ut,Rotate:Jt,Press:Kt,on:_,off:D,each:g,merge:E,extend:T,assign:a,inherit:b,bindFn:I,prefixed:P}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=$t,(i=(function(){return $t}).call(e,n,e,t))===u||(t.exports=i)}(window,document)}}]);