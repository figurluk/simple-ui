/*!
 * ui-simple v0.0.3
 * (c) Lukas Figura <figurluk@gmail.com>
 * Released under the ISC License.
 */
function t(t){return function(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var e={components:["SuiAvatar","SuiBadge","SuiButton","SuiCard","SuiLoader","SuiModal","SuiNotification","SuiTextarea","SuiTooltip"],SuiAvatar:{style:{default:"bg-green-400 text-white"}},SuiBadge:{style:{default:"w-6 h-6 bg-gray-200 rounded-full text-xs font-medium text-gray-900",primary:"w-6 h-6 bg-green-400 text-white rounded-full text-xs font-medium",secondary:"w-6 h-6 bg-indigo-400 text-white rounded-full text-xs font-medium"}},SuiButton:{style:{lg:"px-6 py-4 text-lg tracking-wide",md:"px-4 py-3 tracking-wide",sm:"px-3 py-2 text-sm tracking-wide",disabled:"opacity-50 cursor-not-allowed",default:"bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400 active:shadow-inner",primary:"bg-green-400 text-white hover:bg-green-500 active:bg-green-600 active:shadow-inner",secondary:"bg-indigo-400 text-white hover:bg-indigo-500 active:bg-indigo-600 active:shadow-inner"}},SuiCard:{style:{default:{header:"border-b-2 border-gray-200",body:"text-gray-900",footer:"text-sm bg-gray-100"},primary:{header:"border-b-2 border-green-200",body:"text-gray-900",footer:"text-sm bg-gray-100"},secondary:{header:"border-b-2 border-indigo-200",body:"text-gray-900",footer:"text-sm bg-gray-100"}}},SuiLoader:{style:{fullscreen:"fixed inset-0 bg-sui-loader text-gray-900",element:"absolute w-full h-full bg-sui-loader text-gray-900"}},SuiModal:{style:{fullscreen:"min-w-screen min-h-screen",large:"max-w-2xl items-center",default:"max-w-lg items-center",small:"max-w-sm items-center",header:"text-lg border border-gray-200",footer:"bg-gray-100 text-sm"}},SuiNotification:{style:{default:"p-4 border-l-4 border-gray-200 shadow-lg text-gray-900 hover:shadow-xl",primary:"p-4 border-l-4 border-green-200 shadow-lg text-gray-900 hover:shadow-xl",secondary:"p-4 border-l-4 border-indigo-200 shadow-lg text-gray-900 hover:shadow-xl",success:"p-4 border-l-4 border-green-500 shadow-lg text-gray-900 hover:shadow-xl",warning:"p-4 border-l-4 border-orange-500 shadow-lg text-gray-900 hover:shadow-xl",error:"p-4 border-l-4 border-red-600 shadow-lg text-gray-900 hover:shadow-xl",closer:"absolute right-3 top-3 w-4 h-4 text-gray-900"}},SuiTextarea:{style:{}},SuiTooltip:{style:{default:{content:"py-2 px-3 border-l-4 border-gray-200 shadow-lg",activator:"text-gray-900"},primary:{content:"py-2 px-3 border-l-4 border-green-200 shadow-lg",activator:"text-gray-900"},secondary:{content:"py-2 px-3 border-l-4 border-indigo-200 shadow-lg",activator:"text-gray-900"}}}};var a,i=function(t,e,a,i,o,s,n,r,l,d){"boolean"!=typeof n&&(l=r,r=n,n=!1);var u,c="function"==typeof a?a.options:a;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),i&&(c._scopeId=i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):e&&(u=n?function(){e.call(this,d(this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),u)if(c.functional){var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,u):[u]}return a},o=i({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center justify-center overflow-hidden",class:t.avatarClasses},[t.avatarUrl?a("span",{staticClass:"leading-none select-none",class:"text-"+t.avatarTextSize},[t._t("default",[t._v("?")])],2):a("img",{class:t.avatarClasses,attrs:{src:t.avatarUrl,alt:t.avatarAlt}})])},staticRenderFns:[]},void 0,{name:"SuiAvatar",props:{avatarUrl:{type:String,default:""},avatarAlt:{type:String,default:"Avatar"},avatarStyle:{type:String,default:"default"},avatarTextSize:{type:String,default:"lg"},avatarSize:{type:String,default:"16"}},computed:{avatarClasses:function(){return this.$suiComponents.SuiAvatar.style[this.avatarStyle]+" w-"+this.avatarSize+" h-"+this.avatarSize}}},void 0,!1,void 0,void 0,void 0),s={name:"SuiBadge",props:{kind:{type:String,default:"default"},max:{type:Number,default:9},value:{type:Number,required:!0},changeAnimation:{type:Boolean,default:!0}},data:function(){return{valueChanged:!1}},watch:{value:function(t,e){var a=this,i=e>this.max,o=t>this.max;!this.changeAnimation||i&&o||(this.valueChanged=!0,setTimeout(function(){a.valueChanged=!1},1e3))}},computed:{badgeClass:function(){return this.$suiComponents.SuiBadge.style[this.kind]},viewedValue:function(){return this.value>this.max?this.max+"+":String(this.value)}}},n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var r={};var l=function(t){return function(t,e){return function(t,e){var i=n?e.media||"default":t,o=r[i]||(r[i]={ids:new Set,styles:[]});if(!o.ids.has(t)){o.ids.add(t);var s=e.source;if(e.map&&(s+="\n/*# sourceURL="+e.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),void 0===a&&(a=document.head||document.getElementsByTagName("head")[0]),a.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(s),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var l=o.ids.size-1,d=document.createTextNode(s),u=o.element.childNodes;u[l]&&o.element.removeChild(u[l]),u.length?o.element.insertBefore(d,u[l]):o.element.appendChild(d)}}}(t,e)}},d={SuiAvatar:o,SuiBadge:i({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sui-badge",class:[this.badgeClass,{"sui-badge--change-value-animation":this.valueChanged}]},[e("div",{staticClass:"sui-badge__content"},[this._t("default",[this._v(this._s(this.viewedValue))],{value:this.viewedValue})],2)])},staticRenderFns:[]},function(t){t&&t("data-v-049aadb0_0",{source:".sui-badge[data-v-049aadb0]{display:-webkit-box;display:-ms-flexbox;display:flex}.sui-badge__content[data-v-049aadb0]{margin:auto}@-webkit-keyframes sui-badge-bounce-data-v-049aadb0{0%{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0)}10%{-webkit-transform:scale(1.15,.85) translateZ(0);transform:scale(1.15,.85) translateZ(0)}30%{-webkit-transform:scale(.9,1.1) translate3d(0,-40%,0);transform:scale(.9,1.1) translate3d(0,-40%,0)}50%{-webkit-transform:scale(1.05,.95) translateZ(0);transform:scale(1.05,.95) translateZ(0)}60%{-webkit-transform:scale(.95,1.05) translate3d(0,-15%,0);transform:scale(.95,1.05) translate3d(0,-15%,0)}70%{-webkit-transform:scale(1.02,.98) translateZ(0);transform:scale(1.02,.98) translateZ(0)}75%{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0)}to{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0)}}@keyframes sui-badge-bounce-data-v-049aadb0{0%{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0)}10%{-webkit-transform:scale(1.15,.85) translateZ(0);transform:scale(1.15,.85) translateZ(0)}30%{-webkit-transform:scale(.9,1.1) translate3d(0,-40%,0);transform:scale(.9,1.1) translate3d(0,-40%,0)}50%{-webkit-transform:scale(1.05,.95) translateZ(0);transform:scale(1.05,.95) translateZ(0)}60%{-webkit-transform:scale(.95,1.05) translate3d(0,-15%,0);transform:scale(.95,1.05) translate3d(0,-15%,0)}70%{-webkit-transform:scale(1.02,.98) translateZ(0);transform:scale(1.02,.98) translateZ(0)}75%{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0)}to{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0)}}.sui-badge--change-value-animation[data-v-049aadb0]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-name:sui-badge-bounce-data-v-049aadb0;animation-name:sui-badge-bounce-data-v-049aadb0;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-transform-origin:bottom;transform-origin:bottom}",map:void 0,media:void 0})},s,"data-v-049aadb0",!1,void 0,l,void 0),SuiButton:i({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"sui-button",class:t.btnClass,on:{click:t.onClick,dblclick:t.onDoubleClick}},[t._t("default",[t._v("\n    Default\n  ")]),t._v(" "),t._t("loading",[a("transition",{attrs:{name:"slide-fade"}},[t.loading?a("span",{staticClass:"fas fa-spinner fa-spin ml-2"}):t._e()])])],2)},staticRenderFns:[]},function(t){t&&t("data-v-5723903e_0",{source:".sui-button[data-v-5723903e]{outline:0;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;will-change:background-color}",map:void 0,media:void 0})},{name:"SuiButton",props:{kind:{type:String,default:"default"},size:{type:String,default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{btnClass:function(){return[this.$suiComponents.SuiButton.style[this.kind],this.$suiComponents.SuiButton.style[this.size],this.disabled?this.$suiComponents.SuiButton.style.disabled:""].join(" ")}},methods:{onClick:function(t){this.$emit("click",t)},onDoubleClick:function(t){this.$emit("dblclick",t)}}},"data-v-5723903e",!1,void 0,l,void 0),SuiCard:i({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sui-card"},[a("div",{staticClass:"sui-card__header",class:t.headerClass},[t._t("header",[t._v("Header")],{kind:t.kind})],2),t._v(" "),a("div",{staticClass:"sui-card__body",class:t.bodyClass},[t._t("body",[t._v("Body")],{kind:t.kind})],2),t._v(" "),a("div",{staticClass:"sui-card__footer",class:t.footerClass},[t._t("footer",[t._v("Footer")],{kind:t.kind})],2)])},staticRenderFns:[]},function(t){t&&t("data-v-3706c3a0_0",{source:".sui-card[data-v-3706c3a0]{background-color:#fff;-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);max-width:28rem}.sui-card__header[data-v-3706c3a0]{padding:1.5rem 1.5rem .5rem}.sui-card__body[data-v-3706c3a0]{padding:1rem 1.5rem}.sui-card__footer[data-v-3706c3a0]{padding:.5rem 1.5rem .75rem}",map:void 0,media:void 0})},{name:"SuiCard",props:{kind:{type:String,default:"default"}},computed:{headerClass:function(){return this.$suiComponents.SuiCard.style[this.kind].header},bodyClass:function(){return this.$suiComponents.SuiCard.style[this.kind].body},footerClass:function(){return this.$suiComponents.SuiCard.style[this.kind].footer}}},"data-v-3706c3a0",!1,void 0,l,void 0),SuiLoader:i({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sui-loader",class:this.loaderClass},[this._t("default",[e("span",{staticClass:"sui-loader__loader fas fa-spin fa-spinner"})])],2)},staticRenderFns:[]},function(t){t&&t("data-v-7331260c_0",{source:".sui-loader[data-v-7331260c]{display:-webkit-box;display:-ms-flexbox;display:flex}.sui-loader__loader[data-v-7331260c]{margin:auto;font-size:1.5rem}",map:void 0,media:void 0})},{name:"SuiLoader",props:{kind:{type:String,default:"fullscreen"}},computed:{loaderClass:function(){return[this.$suiComponents.SuiLoader.style[this.kind]].join(" ")}}},"data-v-7331260c",!1,void 0,l,void 0),SuiModal:i({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.animation}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"sui-modal__backdrop",class:{"sm:items-center":"fullscreen"!==t.kind},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.close()}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"sui-modal",class:t.modalClasses,attrs:{role:"dialog","aria-labelledby":"modal-title-"+t._uid,"aria-describedby":"modal-description-"+t._uid},on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"w-full flex-grow"},[t.header?a("header",{staticClass:"sui-modal__header",class:t.headerClasses,attrs:{id:"modal-title-"+t._uid}},[t._t("header",[t._v("\n            Default title\n            "),a("button",{staticClass:"sui-modal__btn-close",attrs:{type:"button"}},[a("span",{staticClass:"fas fa-times"})])])],2):t._e(),t._v(" "),a("section",{staticClass:"sui-modal__body text-h7 sm:text-menu",attrs:{id:"modal-description-"+t._uid}},[t._t("body",[t._v("\n            Default body\n          ")])],2)]),t._v(" "),t.footer?a("footer",{staticClass:"sui-modal__footer",class:t.footerClasses},[t._t("footer",[t._v("\n          Default footer\n        ")])],2):t._e()])])])},staticRenderFns:[]},function(t){t&&t("data-v-026832ec_0",{source:".sui-modal__backdrop[data-v-026832ec]{width:100vw;height:100vh;position:fixed;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;top:0;left:0;overflow-y:auto;background-color:rgba(0,0,0,.6);z-index:99999;-webkit-transition:all .3s ease-in;transition:all .3s ease-in}.sui-modal[data-v-026832ec],.sui-modal__backdrop[data-v-026832ec]{display:-webkit-box;display:-ms-flexbox;display:flex}.sui-modal[data-v-026832ec]{background-color:#fff;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.sui-modal__header[data-v-026832ec]{padding:1.5rem 2rem;position:relative}.sui-modal__btn-close[data-v-026832ec]{position:absolute;right:.75rem;top:.75rem;outline:0}.sui-modal__body[data-v-026832ec],.sui-modal__footer[data-v-026832ec]{padding:1.5rem 2rem;width:100%}",map:void 0,media:void 0})},{name:"SuiModal",props:{kind:{type:String,default:"default"},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},animation:{type:String,default:"fade-fast"}},data:function(){return{visible:!1}},computed:{modalClasses:function(){return this.$suiComponents.SuiModal.style[this.kind]},footerClasses:function(){return this.$suiComponents.SuiModal.style.footer},headerClasses:function(){return this.$suiComponents.SuiModal.style.header}},methods:{open:function(){this.visible=!0,document.querySelector("body").classList.add("sui-modal-opened"),this.$emit("opened")},close:function(){this.visible=!1,document.querySelector("body").classList.remove("sui-modal-opened"),this.$emit("closed")}},mounted:function(){this.$el.querySelector(".sui-modal__btn-close").addEventListener("click",this.close)},destroyed:function(){this.$el.querySelector(".sui-modal__btn-close").removeEventListener("click",this.close)}},"data-v-026832ec",!1,void 0,l,void 0),SuiNotification:i({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.animation}},[t.hidden?t._e():a("div",{staticClass:"sui-notification",class:t.notificationClass},[t._t("default",[t._v("Default")]),t._v(" "),t.closeable?t._t("closer",[a("div",{staticClass:"sui-notification__closer",class:t.closerClass})],{closerClass:t.closerClass}):t._e(),t._v(" "),t.initSound?a("audio",{ref:"audioEle"},[null!=t.soundSources.mp3?a("source",{attrs:{src:t.soundSources.mp3,type:"audio/mpeg"}}):t._e(),t._v(" "),null!=t.soundSources.ogg?a("source",{attrs:{src:t.soundSources.ogg,type:"audio/ogg"}}):t._e()]):t._e()],2)])},staticRenderFns:[]},function(t){t&&t("data-v-175d4da4_0",{source:".sui-notification[data-v-175d4da4]{position:relative;max-width:24rem;background-color:#fff;-webkit-transition:all .2s ease;transition:all .2s ease;will-change:box-shadow}.sui-notification__closer[data-v-175d4da4]{cursor:pointer;background-size:cover;background-repeat:no-repeat;background-position:50%;background-image:url(../assets/images/x.svg)}",map:void 0,media:void 0})},{name:"SuiNotification",props:{kind:{type:String,default:"default"},closeable:{type:Boolean,default:!1},autoclose:{type:[Number,null],default:null},animation:{type:String,default:"fade"},initSound:{type:Boolean,default:!0},soundSources:{type:Object,default:function(){return{mp3:require("./assets/sounds/beyond-doubt.mp3"),off:require("./assets/sounds/beyond-doubt.ogg")}}}},computed:{notificationClass:function(){return this.$suiComponents.SuiNotification.style[this.kind]},closerClass:function(){return this.$suiComponents.SuiNotification.style.closer}},data:function(){return{hidden:!0}},mounted:function(){var t=this;this.hidden=!1,this.$nextTick(function(){if(t.initSound)try{t.$refs.audioEle.play().catch(function(t){console.error(t)})}catch(t){console.warn("Your browser does not support Audio API",t)}t.closeable&&t.$el.querySelector(".sui-notification__closer").addEventListener("click",t.closeNotification),null!==t.autoclose&&setTimeout(t.closeNotification,t.autoclose)})},destroyed:function(){this.closeable&&this.$el.querySelector(".sui-notification__closer").removeEventListener("click",this.closeNotification)},methods:{closeNotification:function(){this.hidden=!0}}},"data-v-175d4da4",!1,void 0,l,void 0),SuiTextarea:i({render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative"},[e("textarea",{staticClass:"sui-textarea",attrs:{name:"",cols:"30",rows:"10"}})])}]},void 0,{name:"SuiTextarea"},"data-v-d46b7b0e",!1,void 0,void 0,void 0),SuiTooltip:i({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sui-tooltip"},[a("transition",{attrs:{name:t.animation}},[t.hidden?t._e():a("div",{staticClass:"sui-tooltip__content",class:t.tooltipContentClasses},[t._t("default",[t._v("\n        Default top\n      ")])],2)]),t._v(" "),a("div",{staticClass:"sui-tooltip__activator",class:t.tooltipActivatorClass},[t._t("activator",[a("span",{staticClass:"w-4 h-4 fas fa-question-circle"})])],2)],1)},staticRenderFns:[]},function(t){t&&t("data-v-5070ff65_0",{source:'.sui-tooltip[data-v-5070ff65]{position:relative;display:inline-block}.sui-tooltip__content[data-v-5070ff65]{position:absolute;z-index:10;background-color:#fff}.sui-tooltip__content[data-v-5070ff65]:before{background-color:#fff;position:absolute;content:" ";width:.625rem;height:.625rem;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sui-tooltip__activator[data-v-5070ff65]{display:inline-block}.sui-tooltip--top[data-v-5070ff65]{left:0;bottom:2rem}.sui-tooltip--top[data-v-5070ff65]:before{left:.1rem;bottom:-.3rem}.sui-tooltip--left[data-v-5070ff65]{top:0;right:2rem;min-width:7rem}.sui-tooltip--left[data-v-5070ff65]:before{right:-.3rem;top:.1rem}.sui-tooltip--right[data-v-5070ff65]{top:0;left:2rem;max-width:8rem}.sui-tooltip--right[data-v-5070ff65]:before{height:0;width:0;content:""}.sui-tooltip--bottom[data-v-5070ff65]{left:0;top:2rem}.sui-tooltip--bottom[data-v-5070ff65]:before{left:.2rem;top:-.325rem}',map:void 0,media:void 0})},{name:"SuiTooltip",props:{kind:{type:String,default:"default"},position:{type:String,default:"top",validator:function(t){return-1!==["top","right","bottom","left"].indexOf(t)}},animation:{type:String,default:"fade"},thresholdOffset:{type:Number,default:200}},data:function(){return{hidden:!0,usedPosition:"top"}},computed:{tooltipContentClasses:function(){return[this.$suiComponents.SuiTooltip.style[this.kind].content,"sui-tooltip--"+this.usedPosition].join(" ")},tooltipActivatorClass:function(){return this.$suiComponents.SuiTooltip.style[this.kind].activator}},mounted:function(){this.usedPosition=this.position,this.controlTooltipPosition(),this.$el.querySelector(".sui-tooltip__activator").addEventListener("mouseenter",this.toggleTooltip),this.$el.querySelector(".sui-tooltip__activator").addEventListener("mouseleave",this.toggleTooltip)},destroyed:function(){this.$el.querySelector(".sui-tooltip__activator").removeEventListener("mouseenter",this.toggleTooltip),this.$el.querySelector(".sui-tooltip__activator").removeEventListener("mouseleave",this.toggleTooltip)},methods:{controlTooltipPosition:function(){var t=this.$el.getBoundingClientRect();"top"===this.position&&(t.top<this.thresholdOffset?this.usedPosition="bottom":this.usedPosition="top"),"bottom"===this.position&&(window.innerHeight-t.bottom<this.thresholdOffset?this.usedPosition="top":this.usedPosition="bottom"),"left"===this.position&&(t.left<this.thresholdOffset?this.usedPosition="right":this.usedPosition="left"),"right"===this.position&&(window.innerWidth-t.right<this.thresholdOffset?this.usedPosition="left":this.usedPosition="right")},toggleTooltip:function(){this.controlTooltipPosition(),this.hidden=!this.hidden}}},"data-v-5070ff65",!1,void 0,l,void 0)};var u,c,f,m=function e(a,i){for(var o=0,s=Object.keys(i);o<s.length;o++){var n=s[o];i[n]instanceof Array?a[n]=t(i[n]):i[n]instanceof Object&&Object.assign(i[n],e(a[n],i[n]))}return Object.assign(a||{},i),a},p=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)};f=function(t,a){t.prototype.$suiComponents={};var i=e;null!=a&&Object.prototype.hasOwnProperty.call(a,"config")&&(i=m(e,a.config)),i.components.forEach(function(e){!function(e,a){t.prototype.$suiComponents[e]=a[e],t.component(e,d[e])}(e,i)})},(c="install")in(u=p)?Object.defineProperty(u,c,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[c]=f;var h=p.install;p.install=function(t,e){h.call(p,t,e)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(p);export default p;
//# sourceMappingURL=index.esm.js.map