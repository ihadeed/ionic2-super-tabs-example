(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"XRr/":function(t,e,i){"use strict";i.r(e),i.d(e,"super_tab",(function(){return o})),i.d(e,"super_tabs",(function(){return a})),i.d(e,"super_tabs_container",(function(){return h}));var n=i("d4fp"),s=i("+B3N");const o=class{constructor(t){Object(n.h)(this,t)}async getRootScrollableEl(){if(this.el.scrollHeight>this.el.clientHeight)return this.el;const t=this.el.querySelector("ion-content");return t?t.getScrollElement():null}render(){return Object(n.g)("slot",null)}get el(){return Object(n.f)(this)}static get style(){return":host{height:100%;position:relative;display:block;overflow:hidden;z-index:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;width:var(--super-tab-width,100vw);-webkit-transform:translateZ(0);transform:translateZ(0)}ion-nav{height:100%;max-height:100%}ion-nav,ion-nav>.ion-page{position:absolute}"}},a=class{constructor(t){Object(n.h)(this,t),this.activeTabIndex=0,this._config=s.a,this.tabChange=Object(n.d)(this,"tabChange",7)}async setConfig(t){this.debug("setConfig called with: ",t),this._config=Object.assign({},s.a,t),this.container&&(this.container.config=this._config),this.toolbar&&(this.toolbar.config=this._config)}async selectTab(t,e=!0){this.debug("selectTab called with :",t,e),this.container&&await this.container.moveContainerByIndex(t,e),this.toolbar&&await this.toolbar.setActiveTab(t)}async onConfigChange(t){await this.setConfig(t)}onWindowResize(){this.debug("onWindowResize called"),this.toolbar.setSelectedTab(this.activeTabIndex),this.container.reindexTabs()}componentDidLoad(){this.debug("Component did load fired"),this.el.shadowRoot.addEventListener("slotchange",this.onSlotchange.bind(this))}async componentWillLoad(){this.config&&await this.setConfig(this.config),this.debug("componentWillLoad fired"),this.indexChildren(),this.selectTab(this.activeTabIndex),this.el.addEventListener("selectedTabIndexChange",this.onContainerSelectedTabChange.bind(this)),this.el.addEventListener("activeTabIndexChange",this.onContainerActiveTabChange.bind(this)),this.el.addEventListener("buttonClick",this.onToolbarButtonClick.bind(this))}async onContainerSelectedTabChange(t){this.toolbar&&await this.toolbar.setSelectedTab(t.detail)}onContainerActiveTabChange(t){this.debug("onContainerActiveTabChange called with: ",t);const e=t.detail;this.tabChange.emit({changed:e!==this.activeTabIndex,index:e}),this.activeTabIndex=e,this.toolbar&&this.toolbar.setActiveTab(e)}onToolbarButtonClick(t){this.debug("onToolbarButtonClick called with: ",t);const{index:e}=t.detail;this.container&&this.container.setActiveTabIndex(e),this.tabChange.emit({changed:e!==this.activeTabIndex,index:e}),this.activeTabIndex=e}indexChildren(){this.debug("indexChildren called");const t=this.el.querySelector("super-tabs-container"),e=this.el.querySelector("super-tabs-toolbar");t&&this.container!==t&&(this.container=t,t.config=this._config),e&&this.toolbar!==e&&(this.toolbar=e,e.config=this._config)}async onSlotchange(){this.debug("onSlotChange fired"),this.indexChildren(),this.selectTab(this.activeTabIndex)}debug(...t){Object(s.e)(this._config,"tabs",t)}render(){return[Object(n.g)("slot",{name:"top"}),Object(n.g)("slot",null),Object(n.g)("slot",{name:"bottom"})]}get el(){return Object(n.f)(this)}static get watchers(){return{config:["onConfigChange"]}}static get style(){return":host{-webkit-box-sizing:content-box;box-sizing:content-box;height:100%;max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;z-index:1;position:relative;contain:layout size style}"}},h=class{constructor(t){Object(n.h)(this,t),this.swipeEnabled=!0,this.autoScrollTop=!1,this.tabs=[],this._activeTabIndex=0,this.leftThreshold=0,this.rightThreshold=0,this.scrollWidth=0,this.clientWidth=0,this.activeTabIndexChange=Object(n.d)(this,"activeTabIndexChange",7),this.selectedTabIndexChange=Object(n.d)(this,"selectedTabIndexChange",7),this.queue=Object(n.e)(this,"queue")}componentDidLoad(){this.debug("componentDidLoad"),this.slot=this.el.shadowRoot.querySelector("slot"),this.slot.addEventListener("slotchange",this.onSlotChange.bind(this))}async onSlotChange(){const t=Array.from(this.el.querySelectorAll("super-tab"));await Promise.all(t.map(t=>t.componentOnReady())),this.tabs=t,this.debug("onSlotChange fired","total tabs:",this.tabs.length)}componentWillUpdate(){this.debug("componentDidUpdate fired"),this.indexTabs()}async reindexTabs(){this.indexTabs()}moveContainerByIndex(t,e){this.debug("moveContainerByIndex called with:",t,e);const i=this.indexToPosition(t);return this.moveContainer(i,e)}moveContainer(t,e){return Object(s.h)(this.el,t,0,e?this.config.transitionDuration:0,this.queue),Promise.resolve()}async setActiveTabIndex(t){if(this._activeTabIndex===t){if(!this.autoScrollTop)return;await this.scrollToTop()}this.moveContainerByIndex(t,!0),this.updateActiveTabIndex(t,!1)}async scrollToTop(){const t=this.tabs[this._activeTabIndex];this.queue.read(()=>{t.getRootScrollableEl().then(t=>{t&&Object(s.h)(t,0,0,this.config.transitionDuration,this.queue)})})}updateActiveTabIndex(t,e=!0){this._activeTabIndex=t,e&&this.activeTabIndexChange.emit(this._activeTabIndex)}updateSelectedTabIndex(t){t!==this._selectedTabIndex&&(this._selectedTabIndex=t,this.selectedTabIndexChange.emit(this._selectedTabIndex))}async onTouchStart(t){if(!this.swipeEnabled)return;let e=t.target;if(e)do{if("function"==typeof e.getAttribute&&e.getAttribute("avoid-super-tabs"))return void(this.shouldCapture=!1);e=e.parentElement}while(e);const i=Object(s.g)(t);i.x<this.leftThreshold||i.x>this.clientWidth-this.rightThreshold?this.shouldCapture=!1:(this.initialCoords=i,this.config.shortSwipeDuration>0&&(this.initialTimestamp=Object(s.c)()),this.lastPosX=i.x)}async onTouchMove(t){this.swipeEnabled&&this.queue.read(()=>{const e=Object(s.g)(t);if(!this.isDragging){if("boolean"!=typeof this.shouldCapture&&(this.shouldCapture=Object(s.d)(e,this.initialCoords,this.config)),!0!==this.shouldCapture)return;this.isDragging=!0}this.config.allowElementScroll||(t.stopPropagation(),t.preventDefault());const i=this.lastPosX-e.x;if(0===i)return;const n=Object(s.f)(this.el),o=Object(s.b)(this.el,i);o!==n&&(this.updateSelectedTabIndex(this.positionToIndex(o)),this.lastPosX=e.x,this.moveContainer(o,!1))})}async onTouchEnd(t){if(!this.swipeEnabled)return;const e=Object(s.g)(t);if(!0===this.shouldCapture){const t=Object(s.c)()-this.initialTimestamp,i=this.config.shortSwipeDuration>0&&t<=this.config.shortSwipeDuration,n=e.x-this.initialCoords.x;this.queue.read(()=>{let t=this.calcSelectedTab();const e=Math.round(t);i&&e===this._activeTabIndex&&(t+=n>0?-1:1),t=this.normalizeSelectedTab(t),this.updateActiveTabIndex(t),this.moveContainer(this.indexToPosition(t),!0)})}this.isDragging=!1,this.shouldCapture=void 0}indexTabs(){this.scrollWidth=this.el.scrollWidth,this.clientWidth=this.el.clientWidth,this.debug("indexTab called","scrollWidth:",this.scrollWidth,"clientWidth:",this.clientWidth),0!==this.scrollWidth&&0!==this.clientWidth?("both"!==this.config.sideMenu&&"left"!==this.config.sideMenu||(this.leftThreshold=this.config.sideMenuThreshold),"both"!==this.config.sideMenu&&"right"!==this.config.sideMenu||(this.rightThreshold=this.config.sideMenuThreshold),this.moveContainerByIndex(this._activeTabIndex,!1)):requestAnimationFrame(()=>{this.indexTabs()})}calcSelectedTab(){const t=Math.max(0,Math.min(this.scrollWidth-this.clientWidth,Object(s.f)(this.el)));return this.positionToIndex(t)}positionToIndex(t){return t/this.clientWidth}indexToPosition(t){return t*this.clientWidth}normalizeSelectedTab(t){const e=this.clientWidth;return Math.max(0,Math.min(this.scrollWidth-e,e*Math.round(t)))/e}debug(...t){Object(s.e)(this.config,"container",t)}render(){return this.debug("Rendering"),Object(n.g)("slot",null)}get el(){return Object(n.f)(this)}static get style(){return":host{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;min-width:100%;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;height:100%;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-ms-touch-action:pan-y;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:scroll-position}"}}}}]);