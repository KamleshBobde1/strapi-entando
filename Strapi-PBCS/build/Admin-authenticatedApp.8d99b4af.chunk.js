"use strict";(self.webpackChunkstrapi_pbcs=self.webpackChunkstrapi_pbcs||[]).push([[801],{17373:(e,t,n)=>{var r=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(59713)),i=r(n(63038)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),u=n(68547),l=n(23724),c=r(n(27361)),f=r(n(59717)),p=n(63376),d=r(n(55437)),m=r(n(56808)),b=n(39489),g=r(n(81771)),v=n(26595);function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=f.default.version,j=function(){var e=u.auth.getUserInfo(),t=(0,c.default)(e,"username")||(0,v.getFullName)(e.firstname,e.lastname),n=(0,s.useState)(t),r=(0,i.default)(n,2),a=r[0],o=r[1],f=(0,p.useConfigurations)().showReleaseNotification,h=(0,l.useQueries)([{queryKey:"app-infos",queryFn:b.fetchAppInfo},{queryKey:"strapi-release",queryFn:b.fetchStrapiLatestRelease,enabled:f,initialData:k},{queryKey:"admin-users-permission",queryFn:b.fetchCurrentUserPermissions,initialData:[]}]),y=(0,i.default)(h,3),j=y[0],E=j.data,O=j.status,P=y[1],S=P.data,_=P.isLoading,M=y[2],x=M.data,L=M.status,I=M.refetch,N=M.isFetched,C=M.isFetching,D=(0,s.useMemo)((function(){return(0,g.default)(k,S)}),[S]);return _||(C&&N||"loading"===O||"loading"===L)?s.default.createElement(u.LoadingIndicatorPage,null):"error"===O?s.default.createElement("div",null,"error..."):s.default.createElement(u.AppInfosContext.Provider,{value:w(w({},E),{},{latestStrapiReleaseTag:S,setUserDisplayName:o,shouldUpdateStrapi:D,userDisplayName:a})},s.default.createElement(m.default,{permissions:x,refetchPermissions:I},s.default.createElement(d.default,null)))};t.default=j},39489:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchStrapiLatestRelease=t.fetchCurrentUserPermissions=t.fetchAppInfo=void 0;var a=r(n(87757)),o=r(n(48926)),i=r(n(9669)),s=n(53777),u=r(n(59717)).default.version,l=function(){var e=(0,o.default)(a.default.mark((function e(){var t,n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("https://api.github.com/repos/strapi/strapi/releases/latest");case 3:return t=e.sent,n=t.data.tag_name,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();t.fetchStrapiLatestRelease=l;var c=function(){var e=(0,o.default)(a.default.mark((function e(){var t,n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.axiosInstance.get("/admin/information");case 3:if(t=e.sent,n=t.data,t.headers["content-type"].includes("application/json")){e.next=8;break}throw new Error("Not found");case 8:return e.abrupt("return",n.data);case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();t.fetchAppInfo=c;var f=function(){var e=(0,o.default)(a.default.mark((function e(){var t,n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.axiosInstance.get("/admin/users/me/permissions");case 3:if(t=e.sent,n=t.data,t.headers["content-type"].includes("application/json")){e.next=8;break}throw new Error("Not found");case 8:return e.abrupt("return",n.data);case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();t.fetchCurrentUserPermissions=f},81771:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(81249)),o=function(e,t){return!(!a.default.valid(e)||!a.default.valid(t))&&a.default.lt(e,t)};t.default=o},61297:(e,t,n)=>{var r=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(63038)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=k(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),s=r(n(78384)),u=r(n(45697)),l=n(97132),c=n(39711),f=n(97833),p=n(54035),d=n(15577),m=n(94117),b=n(33483),g=n(9524),v=r(n(14613)),h=r(n(42075)),y=n(68547),w=r(n(72448));function k(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(k=function(e){return e?n:t})(e)}var j=(0,s.default)(m.Box).withConfig({displayName:"LeftMenu__LinkUserWrapper",componentId:"sc-d3fut-0"})(["width:","rem;position:absolute;bottom:",";left:",";"],9.375,(function(e){return e.theme.spaces[9]}),(function(e){return e.theme.spaces[5]})),E=(0,s.default)(c.NavLink).withConfig({displayName:"LeftMenu__LinkUser",componentId:"sc-d3fut-1"})(["display:flex;justify-content:space-between;align-items:center;text-decoration:none;padding:",";border-radius:",";&:hover{background:",";text-decoration:none;}svg{path{fill:",";}}"],(function(e){var t=e.theme;return"".concat(t.spaces[2]," ").concat(t.spaces[4])}),(function(e){return e.theme.spaces[1]}),(function(e){var t=e.theme;return e.logout?t.colors.danger100:t.colors.primary100}),(function(e){return e.theme.colors.danger600})),O=function(e){var t=e.generalSectionLinks,n=e.pluginsSectionLinks,r=(0,i.useRef)(),a=(0,i.useState)(!1),s=(0,o.default)(a,2),u=s[0],c=s[1],m=(0,w.default)().menuLogo,k=(0,y.usePersistentState)("navbar-condensed",!1),O=(0,o.default)(k,2),P=O[0],S=O[1],_=(0,y.useAppInfos)().userDisplayName,M=(0,l.useIntl)().formatMessage,x=_.split(" ").map((function(e){return e.substring(0,1)})).join("").substring(0,2),L=function(){return c((function(e){return!e}))},I=M({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return i.default.createElement(p.MainNav,{condensed:P},i.default.createElement(p.NavBrand,{workplace:M({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:I,icon:i.default.createElement("img",{src:m,alt:I})}),i.default.createElement(f.Divider,null),i.default.createElement(p.NavSections,null,i.default.createElement(p.NavLink,{to:"/content-manager",icon:i.default.createElement(v.default,null)},M({id:"content-manager.plugin.name",defaultMessage:"Content manager"})),n.length>0?i.default.createElement(p.NavSection,{label:"Plugins"},n.map((function(e){var t=e.icon;return i.default.createElement(p.NavLink,{to:e.to,key:e.to,icon:i.default.createElement(t,null)},M(e.intlLabel))}))):null,t.length>0?i.default.createElement(p.NavSection,{label:"General"},t.map((function(e){var t=e.icon;return i.default.createElement(p.NavLink,{badgeContent:e.notificationsCount>0&&e.notificationsCount.toString()||void 0,to:e.to,key:e.to,icon:i.default.createElement(t,null)},M(e.intlLabel))}))):null),i.default.createElement(p.NavUser,{id:"main-nav-user-button",ref:r,onClick:L,initials:x},_),u&&i.default.createElement(j,{onBlur:function(e){var t,n;e.currentTarget.contains(e.relatedTarget)||"main-nav-user-button"===(null===(t=e.relatedTarget)||void 0===t||null===(n=t.parentElement)||void 0===n?void 0:n.id)||c(!1)},padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},i.default.createElement(d.FocusTrap,{onEscape:L},i.default.createElement(g.Stack,{size:0},i.default.createElement(E,{tabIndex:0,onClick:L,to:"/me"},i.default.createElement(b.Typography,null,M({id:"app.components.LeftMenu.profile",defaultMessage:"Profile"}))),i.default.createElement(E,{tabIndex:0,onClick:function(){y.auth.clearAppStorage(),L()},logout:"logout",to:"/auth/login"},i.default.createElement(b.Typography,{textColor:"danger600"},M({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),i.default.createElement(h.default,null))))),i.default.createElement(p.NavCondense,{onClick:function(){return S((function(e){return!e}))}},M(P?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"})))};O.propTypes={generalSectionLinks:u.default.array.isRequired,pluginsSectionLinks:u.default.array.isRequired};var P=O;t.default=P},55437:(e,t,n)=>{var r=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(63038)),i=p(n(53547)),s=n(68547),u=r(n(43078)),l=r(n(35344)),c=p(n(91727));function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}var d=function(){var e=(0,s.useStrapiApp)().plugins,t=(0,i.useReducer)(c.default,c.initialState,(function(){return(0,l.default)(e)})),n=(0,o.default)(t,2),r=n[0].plugins,a=n[1],f=(0,i.useRef)((function(e){a({type:"SET_PLUGIN_READY",pluginId:e})}));if(Object.keys(r).some((function(e){return!1===r[e].isReady}))){var p=Object.keys(r).reduce((function(e,t){var n=r[t].initializer;if(n){var a=r[t].pluginId;e.push(i.default.createElement(n,{key:a,setPlugin:f.current}))}return e}),[]);return i.default.createElement(i.default.Fragment,null,p,i.default.createElement(s.LoadingIndicatorPage,null))}return i.default.createElement(u.default,null)};t.default=d},35344:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(59713));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var i=function(e){return{plugins:Object.keys(e).reduce((function(t,n){return t[n]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e[n]),t}),{})}};t.default=i},91727:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.default=void 0;var a=r(n(66312)),o=r(n(36968)),i={plugins:null};t.initialState=i;var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;return(0,a.default)(e,(function(e){if("SET_PLUGIN_READY"!==t.type)return e;(0,o.default)(e,["plugins",t.pluginId,"isReady"],!0)}))};t.default=s},49497:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setPermissions=t.resetStore=void 0;var r=n(81670);t.resetStore=function(){return{type:r.RESET_STORE}};t.setPermissions=function(e){return{type:r.SET_PERMISSIONS,permissions:e}}},56808:(e,t,n)=>{var r=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),i=n(37424),s=n(68547),u=r(n(45697)),l=n(49497);function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var f=function(e){var t=e.children,n=e.permissions,r=e.refetchPermissions,a=(0,i.useSelector)((function(e){return e.rbacProvider})).allPermissions,u=(0,i.useDispatch)();return(0,o.useEffect)((function(){return u((0,l.setPermissions)(n)),function(){u((0,l.resetStore)())}}),[n,u]),a?o.default.createElement(s.RBACProviderContext.Provider,{value:{allPermissions:a,refetchPermissions:r}},t):o.default.createElement(s.LoadingIndicatorPage,null)};f.propTypes={children:u.default.element.isRequired,permissions:u.default.array.isRequired,refetchPermissions:u.default.func.isRequired};var p=f;t.default=p},2130:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53547)),o=n(94117),i=n(40264),s=n(80117),u=r(n(45697)),l=r(n(78384)),c=n(97132),f=(0,l.default)(o.Box).withConfig({displayName:"AppLayout__FlexBox",componentId:"sc-116lvdi-0"})(["flex:1;"]),p=function(e){var t=e.children,n=e.sideNav,r=(0,c.useIntl)().formatMessage;return a.default.createElement(o.Box,{background:"neutral100"},a.default.createElement(s.SkipToContent,null,r({id:"skipToContent",defaultMessage:"Skip to content"})),a.default.createElement(i.Flex,{alignItems:"flex-start"},n,a.default.createElement(f,null,t)))};p.propTypes={children:u.default.node.isRequired,sideNav:u.default.node.isRequired};var d=p;t.default=d},99320:(e,t,n)=>{var r=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(63038)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),s=r(n(78384)),u=n(97132),l=n(67814),c=n(1200),f=n(94117),p=n(33483),d=n(15577),m=n(63376);function b(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var g=(0,s.default)(f.Box).withConfig({displayName:"Onboarding__OnboardingWrapper",componentId:"sc-1rm9k8f-0"})(["position:fixed;bottom:",";right:",";"],(function(e){return e.theme.spaces[2]}),(function(e){return e.theme.spaces[2]})),v=s.default.button.withConfig({displayName:"Onboarding__Button",componentId:"sc-1rm9k8f-1"})(["width:",";height:",";background:",";box-shadow:",";border-radius:50%;svg{color:",";}"],(function(e){return e.theme.spaces[8]}),(function(e){return e.theme.spaces[8]}),(function(e){return e.theme.colors.primary600}),(function(e){return e.theme.shadows.tableShadow}),(function(e){return e.theme.colors.neutral0})),h=(0,s.default)(f.Box).withConfig({displayName:"Onboarding__LinksWrapper",componentId:"sc-1rm9k8f-2"})(["position:absolute;bottom:",";right:0;width:","rem;"],(function(e){var t=e.theme;return"".concat(t.spaces[9])}),12.5),y=s.default.a.withConfig({displayName:"Onboarding__StyledLink",componentId:"sc-1rm9k8f-3"})(["display:flex;align-items:center;text-decoration:none;padding:",";padding-left:",";svg{color:",";margin-right:",";}&:hover{background:",";color:",";svg{color:",";}","{color:",";}}","{color:",";}"],(function(e){return e.theme.spaces[2]}),(function(e){return e.theme.spaces[5]}),(function(e){return e.theme.colors.neutral600}),(function(e){return e.theme.spaces[2]}),(function(e){return e.theme.colors.neutral100}),(function(e){return e.theme.colors.neutral500}),(function(e){return e.theme.colors.neutral700}),[p.Typography],(function(e){return e.theme.colors.neutral700}),[p.Typography],(function(e){return e.theme.colors.neutral600})),w=function(){var e=(0,i.useState)(!1),t=(0,o.default)(e,2),n=t[0],r=t[1],a=(0,u.useIntl)().formatMessage;if(!(0,m.useConfigurations)().showTutorials)return null;var s=[{icon:"book",label:a({id:"app.components.LeftMenuFooter.documentation",defaultMessage:"Documentation"}),destination:"https://docs.strapi.io"},{icon:"file",label:a({id:"app.static.links.cheatsheet",defaultMessage:"CheatSheet"}),destination:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf"}],f=function(){r((function(e){return!e}))};return i.default.createElement(g,{as:"aside"},i.default.createElement(v,{id:"onboarding","aria-label":a({id:"app.components.Onboarding.help.button",defaultMessage:"Help button"}),onClick:f},!n&&i.default.createElement(l.FontAwesomeIcon,{icon:c.faQuestion}),n&&i.default.createElement(l.FontAwesomeIcon,{icon:c.faTimes})),n&&i.default.createElement(d.FocusTrap,{onEscape:f},i.default.createElement(h,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingBottom:2,paddingTop:2},s.map((function(e){return i.default.createElement(y,{key:e.label,rel:"nofollow noreferrer noopener",target:"_blank",href:e.destination},i.default.createElement(l.FontAwesomeIcon,{icon:e.icon}),i.default.createElement(p.Typography,null,e.label))})))))};t.default=w},43078:(e,t,n)=>{var r=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.useTrackUsage=t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),i=n(39711),s=n(68547),u=n(99168),l=n(61080),c=r(n(61297)),f=r(n(2130)),p=n(63376),d=r(n(99320)),m=n(26595);function b(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var g=(0,o.lazy)((function(){return Promise.all([n.e(3852),n.e(9182),n.e(7169),n.e(8302),n.e(5300),n.e(994)]).then(n.bind(n,45161))})),v=(0,o.lazy)((function(){return n.e(3981).then(n.bind(n,86094))})),h=(0,o.lazy)((function(){return n.e(3677).then(n.bind(n,3505))})),y=(0,o.lazy)((function(){return n.e(5516).then(n.bind(n,70569))})),w=(0,o.lazy)((function(){return Promise.resolve().then(n.bind(n,49134))})),k=(0,o.lazy)((function(){return n.e(5531).then(n.bind(n,45531))})),j=(0,o.lazy)((function(){return n.e(9497).then(n.bind(n,74748))})),E=(0,o.lazy)((function(){return Promise.all([n.e(3852),n.e(9182),n.e(7169),n.e(9372),n.e(5895)]).then(n.bind(n,91097))})),O=function(){var e=(0,s.useTracking)().trackUsage;(0,o.useEffect)((function(){e("didAccessAuthenticatedAdministration")}),[])};t.useTrackUsage=O;var P=function(){(0,p.useReleaseNotification)(),O();var e=(0,p.useMenu)(),t=e.isLoading,n=e.generalSectionLinks,r=e.pluginsSectionLinks,a=(0,s.useStrapiApp)().menu,b=(0,o.useMemo)((function(){return a.filter((function(e){return e.Component})).map((function(e){var t=e.to,n=e.Component,r=e.exact;return(0,m.createRoute)(n,t,r)}))}),[a]);return t?o.default.createElement(s.LoadingIndicatorPage,null):o.default.createElement(u.DndProvider,{backend:l.HTML5Backend},o.default.createElement(f.default,{sideNav:o.default.createElement(c.default,{generalSectionLinks:n,pluginsSectionLinks:r})},o.default.createElement(o.Suspense,{fallback:o.default.createElement(s.LoadingIndicatorPage,null)},o.default.createElement(i.Switch,null,o.default.createElement(i.Route,{path:"/",component:v,exact:!0}),o.default.createElement(i.Route,{path:"/me",component:j,exact:!0}),o.default.createElement(i.Route,{path:"/content-manager",component:g}),b,o.default.createElement(i.Route,{path:"/settings/:settingId",component:E}),o.default.createElement(i.Route,{path:"/settings",component:E,exact:!0}),o.default.createElement(i.Route,{path:"/marketplace"},o.default.createElement(y,null)),o.default.createElement(i.Route,{path:"/list-plugins",exact:!0},o.default.createElement(h,null)),o.default.createElement(i.Route,{path:"/404",component:w}),o.default.createElement(i.Route,{path:"/500",component:k}),o.default.createElement(i.Route,{path:"",component:w}))),o.default.createElement(d.default,null)))};t.default=P},59717:e=>{e.exports=JSON.parse('{"_args":[["@strapi/admin@4.0.7","/home/kamleshbobde/entando/strapi/FromVijay/Strapi-PBCS"]],"_from":"@strapi/admin@4.0.7","_id":"@strapi/admin@4.0.7","_inBundle":false,"_integrity":"sha512-qD6HXxziqd0bHh/io19MX6W1SuqHZMtw9PWcj4T3bysz1i8x2dvF2SfXuyVW+TDTsEjjZnBvRjHqDff+unOfRA==","_location":"/@strapi/admin","_phantomChildren":{"@babel/runtime":"7.16.7","@internationalized/number":"3.0.3","@types/eslint-scope":"3.7.3","@types/estree":"0.0.50","@types/json-schema":"7.0.9","@webassemblyjs/ast":"1.11.1","@webassemblyjs/wasm-edit":"1.11.1","@webassemblyjs/wasm-parser":"1.11.1","acorn":"8.7.0","acorn-import-assertions":"1.8.0","ajv":"6.12.6","ajv-keywords":"3.5.2","at-least-node":"1.0.0","browserslist":"4.19.1","chrome-trace-event":"1.0.3","compute-scroll-into-view":"1.0.17","enhanced-resolve":"5.9.0","es-module-lexer":"0.9.3","eslint-scope":"5.1.1","events":"3.3.0","follow-redirects":"1.14.7","glob-to-regexp":"0.4.1","graceful-fs":"4.2.9","history":"4.10.1","hoist-non-react-statics":"3.3.2","isexe":"2.0.0","json-parse-better-errors":"1.0.2","jsonfile":"6.1.0","loader-runner":"4.2.0","loose-envify":"1.4.0","mime-types":"2.1.34","mini-create-react-context":"0.4.1","neo-async":"2.6.2","nice-try":"1.0.5","object-assign":"4.1.1","p-finally":"1.0.0","prop-types":"15.8.1","pump":"3.0.0","signal-exit":"3.0.7","strip-eof":"1.0.0","tapable":"2.2.1","terser-webpack-plugin":"5.3.0","tiny-invariant":"1.2.0","tiny-warning":"1.0.3","universalify":"2.0.0","watchpack":"2.3.1","webpack-sources":"3.2.3"},"_requested":{"type":"version","registry":true,"raw":"@strapi/admin@4.0.7","name":"@strapi/admin","escapedName":"@strapi%2fadmin","scope":"@strapi","rawSpec":"4.0.7","saveSpec":null,"fetchSpec":"4.0.7"},"_requiredBy":["/@strapi/strapi"],"_resolved":"https://registry.npmjs.org/@strapi/admin/-/admin-4.0.7.tgz","_spec":"4.0.7","_where":"/home/kamleshbobde/entando/strapi/FromVijay/Strapi-PBCS","author":{"name":"Strapi Solutions SAS","email":"hi@strapi.io","url":"https://strapi.io"},"bugs":{"url":"https://github.com/strapi/strapi/issues"},"dependencies":{"@babel/core":"7.16.7","@babel/plugin-proposal-async-generator-functions":"7.16.7","@babel/plugin-proposal-class-properties":"7.16.7","@babel/plugin-syntax-dynamic-import":"7.8.3","@babel/plugin-transform-modules-commonjs":"7.16.7","@babel/plugin-transform-runtime":"7.16.7","@babel/preset-env":"7.16.7","@babel/preset-react":"7.16.7","@babel/runtime":"7.16.7","@casl/ability":"^5.4.3","@fingerprintjs/fingerprintjs":"3.1.1","@fortawesome/fontawesome-free":"^5.15.3","@fortawesome/fontawesome-svg-core":"^1.2.35","@fortawesome/free-brands-svg-icons":"^5.15.3","@fortawesome/free-solid-svg-icons":"^5.15.3","@fortawesome/react-fontawesome":"^0.1.14","@strapi/babel-plugin-switch-ee-ce":"4.0.7","@strapi/design-system":"0.0.1-alpha.74","@strapi/helper-plugin":"4.0.7","@strapi/icons":"0.0.1-alpha.74","@strapi/utils":"4.0.7","axios":"0.24.0","babel-loader":"8.2.3","babel-plugin-styled-components":"2.0.2","bcryptjs":"2.4.3","chalk":"^4.1.1","chokidar":"^3.5.1","codemirror":"^5.61.0","cross-env":"^7.0.3","css-loader":"6.5.1","date-fns":"2.22.1","dotenv":"8.5.1","execa":"^1.0.0","fast-deep-equal":"3.1.3","font-awesome":"^4.7.0","formik":"^2.2.6","fs-extra":"^9.1.0","highlight.js":"^10.4.1","history":"^4.9.0","hoist-non-react-statics":"^3.3.0","html-loader":"3.0.1","html-webpack-plugin":"5.5.0","immer":"9.0.6","invariant":"^2.2.4","is-wsl":"2.2.0","js-cookie":"2.2.1","jsonwebtoken":"8.5.1","koa-compose":"4.1.0","koa-passport":"4.1.4","koa-static":"5.0.0","lodash":"4.17.21","markdown-it":"^12.3.2","markdown-it-abbr":"^1.0.4","markdown-it-container":"^3.0.0","markdown-it-deflist":"^2.1.0","markdown-it-emoji":"^2.0.0","markdown-it-footnote":"^3.0.3","markdown-it-ins":"^3.0.1","markdown-it-mark":"^3.0.1","markdown-it-sub":"^1.0.0","markdown-it-sup":"1.0.0","match-sorter":"^4.0.2","mini-css-extract-plugin":"2.4.4","moment":"^2.29.1","node-polyfill-webpack-plugin":"1.1.4","p-map":"4.0.0","passport-local":"1.0.0","prop-types":"^15.7.2","qs":"6.10.1","react":"^17.0.2","react-copy-to-clipboard":"^5.0.3","react-dnd":"^14.0.2","react-dnd-html5-backend":"^14.0.0","react-dom":"^17.0.2","react-error-boundary":"3.1.1","react-fast-compare":"^3.2.0","react-helmet":"^6.1.0","react-intl":"5.20.2","react-query":"3.24.3","react-redux":"7.2.3","react-router":"5.2.0","react-router-dom":"5.2.0","react-select":"^4.0.2","react-virtualized":"^9.22.3","redux":"^4.0.1","redux-saga":"^0.16.0","reselect":"^4.0.0","rimraf":"3.0.2","sanitize-html":"2.4.0","semver":"7.3.5","sift":"13.5.0","style-loader":"3.3.1","styled-components":"^5.2.3","terser-webpack-plugin":"5.3.0","webpack":"5.65.0","webpack-cli":"4.9.1","webpack-dev-server":"4.7.2","webpackbar":"5.0.0-3","yup":"^0.32.9"},"description":"Strapi Admin","devDependencies":{"duplicate-dependencies-webpack-plugin":"0.2.0","webpack-bundle-analyzer":"4.4.1"},"engines":{"node":">=12.22.0 <=16.x.x","npm":">=6.0.0"},"gitHead":"af0cba8c5b2ba7b371523e8f55413ef0fce98e1e","homepage":"https://github.com/strapi/strapi#readme","license":"SEE LICENSE IN LICENSE","main":"index.js","maintainers":[{"name":"Strapi Solutions SAS","email":"hi@strapi.io","url":"https://strapi.io"}],"name":"@strapi/admin","repository":{"type":"git","url":"git://github.com/strapi/strapi.git"},"scripts":{"analyze:bundle":"ANALYZE_BUNDLE=true webpack --config webpack.config.dev.js","analyze:deps":"ANALYZE_DEPS=true webpack serve --config webpack.config.dev.js --progress profile","build":"rimraf build && node ./scripts/build.js","create:plugin-file":"node ./scripts/create-dev-plugins-file.js","develop":"yarn create:plugin-file && yarn develop:webpack","develop:webpack":"cross-env NODE_ENV=development webpack serve --config webpack.config.dev.js --progress profile","prepublishOnly":"yarn build","test":"echo \\"no tests yet\\"","test:front":"cross-env IS_EE=true jest --config ./jest.config.front.js","test:front:ce":"cross-env IS_EE=false jest --config ./jest.config.front.js","test:front:watch":"cross-env IS_EE=true jest --config ./jest.config.front.js --watchAll","test:front:watch:ce":"cross-env IS_EE=false jest --config ./jest.config.front.js --watchAll","test:unit":"jest --verbose"},"version":"4.0.7"}')}}]);