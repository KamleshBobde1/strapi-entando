"use strict";(self.webpackChunkstrapi_pbcs=self.webpackChunkstrapi_pbcs||[]).push([[8056],{62177:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67154)),l=n(a(53547)),o=n(a(62982)),u=a(49549),i=a(94117),s=a(68547),d=a(97132),c=n(a(45697)),f=function(e){var t=e.tokenName,a=e.onClickDelete,n=(0,d.useIntl)().formatMessage,c=(0,s.useTracking)().trackUsage;return l.default.createElement(i.Box,(0,r.default)({paddingLeft:1},s.stopPropagation),l.default.createElement(u.IconButton,{onClick:function(){c("willDeleteToken"),a()},label:n({id:"app.component.table.delete",defaultMessage:"Delete {target}"},{target:"".concat(t)}),noBorder:!0,icon:l.default.createElement(o.default,null)}))};f.propTypes={tokenName:c.default.string.isRequired,onClickDelete:c.default.func.isRequired};var p=f;t.default=p},60014:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(53547)),l=n(a(56204)),o=a(97132),u=n(a(45697)),i=a(56156),s=a(39711),d=(0,n(a(78384)).default)(i.Link).withConfig({displayName:"UpdateButton__LinkUpdate",componentId:"sc-13tqcqf-0"})(["svg{path{fill:",";}}&:hover{svg{path{fill:",";}}}"],(function(e){return e.theme.colors.neutral500}),(function(e){return e.theme.colors.neutral800})),c=function(e){var t=e.tokenName,a=e.tokenId,n=(0,o.useIntl)().formatMessage,u=(0,s.useHistory)().location.pathname;return r.default.createElement(d,{to:"".concat(u,"/").concat(a),title:n({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:"".concat(t)})},r.default.createElement(l.default,null))};c.propTypes={tokenName:u.default.string.isRequired,tokenId:u.default.oneOfType([u.default.string,u.default.number]).isRequired};var f=c;t.default=f},63384:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67154)),l=n(a(63038)),o=n(a(53547)),u=a(33483),i=a(43546),s=a(40264),d=a(68547),c=a(97132),f=n(a(45697)),p=a(39711),m=n(a(62177)),k=n(a(60014)),g=function(e){var t=e.canDelete,a=e.canUpdate,n=e.onClickDelete,f=e.withBulkActions,g=e.rows,y=(0,c.useIntl)().formatMessage,v=(0,d.useQueryParams)(),T=(0,l.default)(v,1)[0].query.sort.split(":"),E=(0,l.default)(T,2)[1],b=(0,p.useHistory)(),h=b.push,w=b.location.pathname,C=(0,d.useTracking)().trackUsage,M=g.sort((function(e,t){var a=e.name.localeCompare(t.name);return"DESC"===E?-a:a}));return o.default.createElement(i.Tbody,null,M.map((function(e){return o.default.createElement(i.Tr,(0,r.default)({key:e.id},(0,d.onRowClick)({fn:function(){C("willEditTokenFromList"),h("".concat(w,"/").concat(e.id))},condition:a})),o.default.createElement(i.Td,null,o.default.createElement(u.Typography,{textColor:"neutral800",fontWeight:"bold"},e.name)),o.default.createElement(i.Td,{maxWidth:(0,d.pxToRem)(250)},o.default.createElement(u.Typography,{textColor:"neutral800",ellipsis:!0},e.description)),o.default.createElement(i.Td,null,o.default.createElement(u.Typography,{textColor:"neutral800"},y({id:"Settings.apiTokens.types.".concat(e.type),defaultMessage:"Type unknown"}))),o.default.createElement(i.Td,null,o.default.createElement(u.Typography,{textColor:"neutral800"},o.default.createElement(d.RelativeTime,{timestamp:new Date(e.createdAt)}))),f&&o.default.createElement(i.Td,null,o.default.createElement(s.Flex,{justifyContent:"end"},a&&o.default.createElement(k.default,{tokenName:e.name,tokenId:e.id}),t&&o.default.createElement(m.default,{tokenName:e.name,onClickDelete:function(){return n(e.id)}}))))})))};g.defaultProps={canDelete:!1,canUpdate:!1,onClickDelete:function(){},rows:[],withBulkActions:!1},g.propTypes={canDelete:f.default.bool,canUpdate:f.default.bool,onClickDelete:f.default.func,rows:f.default.array,withBulkActions:f.default.bool};var y=g;t.default=y},65954:(e,t,a)=>{var n=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(87757)),o=n(a(48926)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(53547)),i=a(97132),s=a(68547),d=a(35395),c=a(80117),f=a(64459),p=a(31512),m=n(a(89326)),k=a(23724),g=a(39711),y=n(a(80129)),v=a(53777),T=n(a(13240)),E=n(a(9070)),b=n(a(63384));function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}var w=function(){(0,s.useFocusWhenNavigate)();var e=(0,k.useQueryClient)(),t=(0,i.useIntl)().formatMessage,a=(0,s.useNotification)(),n=(0,s.useRBAC)(T.default.settings["api-tokens"]).allowedActions,r=n.canCreate,h=n.canDelete,w=n.canUpdate,C=n.canRead,M=(0,g.useHistory)().push,A=(0,s.useTracking)().trackUsage;(0,u.useEffect)((function(){M({search:y.default.stringify({sort:"name:ASC"},{encode:!1})})}),[M]);var P=(0,k.useQuery)(["api-tokens"],(0,o.default)(l.default.mark((function e(){var t,a;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A("willAccessTokenList"),e.next=3,v.axiosInstance.get("/admin/api-tokens");case 3:return t=e.sent,a=t.data.data,A("didAccessTokenList",{number:a.length}),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),{enabled:C,onError:function(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),D=P.data,I=P.status,_=P.isFetching,x=C&&("success"!==I&&"error"!==I||"success"===I&&_),O=(0,k.useMutation)(function(){var e=(0,o.default)(l.default.mark((function e(t){return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.axiosInstance.delete("/admin/api-tokens/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){var t=(0,o.default)(l.default.mark((function t(){return l.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.invalidateQueries(["api-tokens"]);case 2:A("didDeleteToken");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),onError:function(e){var t,n;null!==e&&void 0!==e&&null!==(t=e.response)&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.data?a({type:"warning",message:e.response.data.data}):a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),L=C&&D,N=C&&!D&&!r,j=C&&!D&&r;return u.default.createElement(c.Main,{"aria-busy":x},u.default.createElement(s.SettingsPageTitle,{name:"API Tokens"}),u.default.createElement(d.HeaderLayout,{title:t({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:t({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:r?u.default.createElement(p.LinkButton,{"data-testid":"create-api-token-button",startIcon:u.default.createElement(m.default,null),size:"L",onClick:function(){return A("willAddTokenFromList")},to:"/settings/api-tokens/create"},t({id:"Settings.apiTokens.create",defaultMessage:"Add Entry"})):void 0}),u.default.createElement(d.ContentLayout,null,!C&&u.default.createElement(s.NoPermissions,null),L&&u.default.createElement(s.DynamicTable,{headers:E.default,contentType:"api-tokens",rows:D,withBulkActions:h||w,isLoading:x,onConfirmDelete:function(e){return O.mutateAsync(e)}},u.default.createElement(b.default,{canDelete:h,canUpdate:w,rows:D,withBulkActions:h||w})),j&&u.default.createElement(s.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:u.default.createElement(f.Button,{variant:"secondary",startIcon:u.default.createElement(m.default,null)},t({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),N&&u.default.createElement(s.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))};t.default=w},9070:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{name:"name",key:"name",metadatas:{label:"Name",sortable:!0}},{name:"description",key:"description",metadatas:{label:"Description",sortable:!1}},{name:"type",key:"type",metadatas:{label:"Token type",sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:"Created at",sortable:!1}}];t.default=a},76796:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(53547)),l=a(68547),o=n(a(13240)),u=n(a(65954)),i=function(){return r.default.createElement(l.CheckPagePermissions,{permissions:o.default.settings["api-tokens"].main},r.default.createElement(u.default,null))};t.default=i}}]);