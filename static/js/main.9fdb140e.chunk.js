(this["webpackJsonpkarabiner-complex-rules-generator"]=this["webpackJsonpkarabiner-complex-rules-generator"]||[]).push([[0],{74:function(e,a,t){e.exports=t(87)},79:function(e,a,t){},80:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(12),r=t.n(o),i=(t(79),t(80),t(81),t(139)),c=t(137),u=t(140),d=t(138),s=t(92),m=t(14),f=t(7),v=t(142),b=t(149),p=t(91),E=t(130),_=t(131),y=t(143),h=t(148),g=t(146),k=t(129),O=t(135),j=function(e){var a=(0|e)%100;return a>3&&a<21?"th":["th","st","nd","rd"][a%10]||"th"},C=function(e){for(var a=e.toLowerCase().split("_"),t=0;t<a.length;t++)a[t]=a[t][0].toUpperCase()+a[t].slice(1);return a.join(" ")},x=t(17),w=t.n(x),I=["frontmost_application_if","frontmost_application_unless"],S=function(e){var a=e.condition,t=e.index,o=Object(n.useState)(a),r=Object(m.a)(o,2),i=(r[0],r[1]),c=Object(n.useState)({description:!1}),u=Object(m.a)(c,2),d=u[0],s=u[1];return Object(n.useEffect)((function(){i(a)}),[a]),l.a.createElement(g.a,{defaultExpanded:0===t},l.a.createElement(k.a,{expandIcon:l.a.createElement(w.a,null)},"Condition ",t+1),l.a.createElement(v.a,{p:1},l.a.createElement(E.a,{fullWidth:!0,variant:"filled"},l.a.createElement(_.a,{id:"condition_type"},"Condition Type"),l.a.createElement(y.a,{labelId:"condition_type",value:I[0]},I.map((function(e){return l.a.createElement(h.a,{value:e,key:e},C(e))})))),!!a.bundle_identifiers.length&&l.a.createElement(g.a,{defaultExpanded:!0},l.a.createElement(k.a,{expandIcon:l.a.createElement(w.a,null)},"Bundle Identifiers"),l.a.createElement(v.a,{p:1},a.bundle_identifiers.map((function(e,t){return l.a.createElement(b.a,{value:e,fullWidth:!0,variant:"filled",label:"Regex Bundle Identifier ".concat(t+1),onChange:function(e){!function(e,t){var n=Object(f.a)({},a);n.bundle_identifiers[e]=t,i(n)}(t,e.target.value)}})})))),!!a.file_paths.length&&l.a.createElement(g.a,{defaultExpanded:!0},l.a.createElement(k.a,{expandIcon:l.a.createElement(w.a,null)},"File Paths"),l.a.createElement(v.a,{p:1},a.file_paths.map((function(e,t){return l.a.createElement(b.a,{value:e,fullWidth:!0,variant:"filled",label:"Regex File Path ".concat(t+1),onChange:function(e){!function(e,t){var n=Object(f.a)({},a);n.file_paths[e]=t,i(n)}(t,e.target.value)}})})))),d.description&&l.a.createElement(b.a,{fullWidth:!0,variant:"filled",label:"Condition Description (optional)",value:a.description,onChange:function(e){i(Object(f.a)({},a,{description:e.target.value}))}}),l.a.createElement(p.a,{onClick:function(){var e=Object(f.a)({},a);e.bundle_identifiers.push(""),i(e)}},"Add Bundle Identifier"),l.a.createElement(p.a,{onClick:function(){var e=Object(f.a)({},a);e.file_paths.push(""),i(e)}},"Add File Path"),l.a.createElement(p.a,{onClick:function(){return s(Object(f.a)({},d,{description:!d.description}))}},d.description?"Remove":"Add"," Description")))},F=t(9),K=t(136),B=t(145),R=t(13),W=t(144),A=[{label:"Function key",value:"fn"},{label:"Left Command",value:"left_gui"},{label:"Right Command",value:"right_gui"},{label:"Left Control",value:"left_control"},{label:"Right Control",value:"right_control"},{label:"Left Alt / Option",value:"left_alt"},{label:"Right Alt / Option",value:"right_alt"},{label:"Left Shift",value:"left_shift"},{label:"Right Shift",value:"right_shift"}],M=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"},{label:"8",value:"8"},{label:"9",value:"9"},{label:"0",value:"0"},{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"},{label:"D",value:"d"},{label:"E",value:"e"},{label:"F",value:"f"},{label:"G",value:"g"},{label:"H",value:"h"},{label:"I",value:"i"},{label:"J",value:"j"},{label:"K",value:"k"},{label:"L",value:"l"},{label:"M",value:"m"},{label:"N",value:"n"},{label:"O",value:"o"},{label:"P",value:"p"},{label:"Q",value:"q"},{label:"R",value:"r"},{label:"S",value:"s"},{label:"T",value:"t"},{label:"U",value:"u"},{label:"V",value:"v"},{label:"W",value:"w"},{label:"X",value:"x"},{label:"Y",value:"y"},{label:"Z",value:"z"},{label:"F1",value:"f1"},{label:"F2",value:"f2"},{label:"F3",value:"f3"},{label:"F4",value:"f4"},{label:"F5",value:"f5"},{label:"F6",value:"f6"},{label:"F7",value:"f7"},{label:"F8",value:"f8"},{label:"F9",value:"f9"},{label:"F10",value:"f10"},{label:"F11",value:"f11"},{label:"F12",value:"f12"},{label:"Escape",value:"escape"},{label:"` Grave Accent, Tilde",value:"grave_accent_and_tilde"},{label:"Tab key",value:"tab"},{label:"Caps Lock",value:"caps_lock"},{label:"Spacebar",value:"spacebar"},{label:"Up Arrow",value:"up_arrow"},{label:"Left Arrow",value:"left_arrow"},{label:"Down Arrow",value:"down_arrow"},{label:"Right Arrow",value:"right_arrow"},{label:"Enter",value:"return_or_enter"},{label:" (Backslash)",value:"backslash"},{label:"[ (Open Bracket)",value:"open_bracket"},{label:"] (Close Bracket)",value:"close_bracket"},{label:"; (Semicolon)",value:"semicolon"},{label:"' (Quote)",value:"quote"},{label:", (Comma)",value:"comma"},{label:". (Period)",value:"period"},{label:"/ (Slash)",value:"slash"},{label:"- (Dash or Hyphen)",value:"hyphen"},{label:"= (Equal)",value:"equal_sign"},{label:"Delete or Backspace",value:"delete_or_backspace"},{label:"Decrease Screen Brightness",value:"display_brightness_decrement"},{label:"Increase Screen Brightness",value:"display_brightness_increment"},{label:"Mission Control",value:"mission_control"},{label:"Launchpad",value:"launchpad"},{label:"Keyboard Brightness Decrease",value:"illumination_decrement"},{label:"Keyboard Brightness Increase",value:"illumination_increment"},{label:"Rewind / Previous",value:"rewind"},{label:"Play or Pause",value:"play_or_pause"},{label:"Fastfoward / Next",value:"fastforwad"},{label:"Mute",value:"mute"},{label:"Volume Down",value:"volume_decrement"},{label:"Volume Up",value:"volume_increment"}],D=function(e){var a=e.value,t=void 0===a?[]:a,n=e.onChange,o=void 0===n?function(e){}:n,r=e.modifiers,i=void 0!==r&&r,c=e.keyCodes,u=void 0!==c&&c,d=e.multiple,s=void 0===d||d,m=e.autoHighlight,f=void 0!==m&&m,v=e.freeSolo,p=void 0===v||v,E=e.label,_=void 0===E?"keys":E,y=[],h=[];return u&&(y=[].concat(Object(R.a)(y),Object(R.a)(M)),h.push("Key Codes")),i&&(y=[].concat(Object(R.a)(y),Object(R.a)(A)),h.push("Modifiers")),l.a.createElement(W.a,{multiple:s,freeSolo:p,options:y,getOptionLabel:function(e){return("object"===typeof e?e.label:e)||""},value:t,onChange:o,autoHighlight:f,renderInput:function(e){return l.a.createElement(b.a,Object.assign({},e,{variant:"filled",label:_,placeholder:h.join(", "),fullWidth:!0}))}})},T=[{label:"None",value:""},{label:"Left Click",value:"button1"},{label:"Right Click",value:"button2"},{label:"Middle Click",value:"button3"},{label:"Mouse 4",value:"button4"},{label:"Mouse 5",value:"button5"}],N=function(e){var a=e.eventObject,t=void 0===a?{}:a,o=e.setEventObject,r=void 0===o?function(e){}:o,i=Object(n.useState)({keyCode:!1,consumerKeyCode:!1}),c=Object(m.a)(i,2),u=c[0],d=c[1];return Object(n.useEffect)((function(){var e=Object(f.a)({},t);u.keyCode&&delete e.consumer_key_code,u.consumerKeyCode&&delete e.key_code,u.keyCode||u.consumerKeyCode||(delete e.key_code,delete e.consumer_key_code)}),[u]),Object(n.useEffect)((function(){var e={keyCode:!!t.key_code,consumerKeyCode:!!t.consumer_key_code};d(e)}),[t]),l.a.createElement(v.a,{marginBottom:2},l.a.createElement(O.a,null,l.a.createElement(p.a,{disabled:u.keyCode,variant:"contained",onClick:function(){d(Object(f.a)({},u,{keyCode:!0,consumerKeyCode:!1}))}},"Key Code"),l.a.createElement(p.a,{disabled:u.consumerKeyCode,variant:"contained",onClick:function(){d(Object(f.a)({},u,{keyCode:!1,consumerKeyCode:!0}))}},"Consumer Key Code"),l.a.createElement(p.a,{variant:"contained",onClick:function(){d(Object(f.a)({},u,{keyCode:!1,consumerKeyCode:!1}))},disabled:!(u.keyCode||u.consumerKeyCode),color:"secondary"},"Disable")),l.a.createElement(v.a,{marginBottom:1},u.keyCode&&l.a.createElement(D,{keyCodes:!0,modifiers:!0,multiple:!1,value:t.key_code,autoHighlight:!1,label:"Key Code (optional)",onChange:function(e,a){console.log(" w"),r(Object(f.a)({},t,{key_code:"string"===typeof a?{label:a,value:a}:a}))}}),u.consumerKeyCode&&l.a.createElement(b.a,{placeholder:"",margin:"normal",variant:"filled",label:"Consumer Key Code (optional)",fullWidth:!0,value:t.consumer_key_code||"",onChange:function(e){r(Object(f.a)({},t,{consumer_key_code:e.currentTarget.value}))}})),l.a.createElement(v.a,null,l.a.createElement(E.a,{variant:"filled",fullWidth:!0},l.a.createElement(_.a,{id:"type"},"Pointing Button (optional)"),l.a.createElement(y.a,{labelId:"type",value:t.pointing_button||"",onChange:function(e){r(Object(f.a)({},t,{pointing_button:e.target.value||""}))}},T.map((function(e){var a=e.label,t=e.value;return l.a.createElement(h.a,{value:t,key:t},a)}))))))},L=t(15),P=t.n(L),z=["none","insensitive","strict","strict_inverse"],H=["none","any","all"],q=function(e){var a,t,n,o,r=e.fromObject,i=e.setFromObject,c=function(e,a,t){i(Object(f.a)({},r,{modifiers:Object(f.a)({},r.modifiers,Object(F.a)({},t,a.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))))}))};return l.a.createElement(v.a,{className:"form-container",p:1},l.a.createElement(N,{setEventObject:i,eventObject:r}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(D,{modifiers:!0,value:(null===(a=r.modifiers)||void 0===a?void 0:a.mandatory)||[],label:"Mandatory Modifiers (optional)",onChange:function(e,a){return c(0,a,"mandatory")}})),l.a.createElement("div",null,l.a.createElement(D,{modifiers:!0,value:(null===(t=r.modifiers)||void 0===t?void 0:t.optional)||[],label:"Optional Modifiers (optional)",onChange:function(e,a){return c(0,a,"optional")}}))),l.a.createElement(v.a,null,null===(n=r.simultaneous)||void 0===n?void 0:n.map((function(e,a){return l.a.createElement(g.a,{key:a,defaultExpanded:0===a},l.a.createElement(k.a,{expandIcon:l.a.createElement(w.a,null)},a+1,j(a+1)," Simultaneous Event"),l.a.createElement(v.a,{p:1},l.a.createElement(N,{eventObject:e,setEventObject:function(e){var a=Object(f.a)({},r),t=P.a.findIndex(r.simultaneous,{_id:e._id});a.simultaneous=a.simultaneous||[],a.simultaneous[t]=e,i(a)}})))})),l.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){return function(){var e=Object(f.a)({},r);e.simultaneous=e.simultaneous||[],e.simultaneous.push({_id:P.a.uniqueId("simultaneous_")}),i(e)}()}},"Add Simultaneous Event")),l.a.createElement(v.a,null,l.a.createElement(g.a,null,l.a.createElement(k.a,null,"Simultaneous Options"),l.a.createElement(v.a,{p:1},l.a.createElement(K.a,{control:l.a.createElement(B.a,{checked:!!(null===r||void 0===r?void 0:null===(o=r.simultaneous_options)||void 0===o?void 0:o.detect_key_down_uninterruptedly),onChange:function(){}}),label:"Detect Key Down Uninterruptedly"}),l.a.createElement(E.a,{fullWidth:!0,variant:"filled"},l.a.createElement(_.a,{id:"key_down_order"},"Key Down Order"),l.a.createElement(y.a,{labelId:"key_down_order",value:z[0]},z.map((function(e){return l.a.createElement(h.a,{value:e,key:e},C(e))})))),l.a.createElement(E.a,{fullWidth:!0,variant:"filled"},l.a.createElement(_.a,{id:"key_up_order"},"Key Up Order"),l.a.createElement(y.a,{labelId:"key_up_order",value:z[0]},z.map((function(e){return l.a.createElement(h.a,{value:e,key:e},C(e))})))),l.a.createElement(E.a,{fullWidth:!0,variant:"filled"},l.a.createElement(_.a,{id:"key_up_when"},"Key Up When"),l.a.createElement(y.a,{labelId:"key_up_when",value:H[0]},H.map((function(e){return l.a.createElement(h.a,{value:e,key:e},C(e))})))),l.a.createElement(p.a,{color:"primary",variant:"contained"},"Add to_after_key_up event")))))},U=t(90),J=t(64),G=t.n(J),V=function(e){var a=e.toObject,t=e.setToObject,o=e.removeToObject,r=Object(n.useState)({keyCode:!1,consumerKeyCode:!1,pointingButton:!1,simultaneous:!1,simultaneousOptions:!1}),i=Object(m.a)(r,2),c=i[0];i[1];return Object(n.useEffect)((function(){var e,t,n=Object(f.a)({},a);("disabled"===n.pointing_button&&delete n.pointing_button,!c.keyCode&&n.key_code)?delete n.key_code:n.key_code=null===(t=n.key_code)||void 0===t?void 0:t.value;!c.consumerKeyCode&&n.consumer_key_code&&delete n.consumer_key_code,(null===(e=n.modifiers)||void 0===e?void 0:e.length)?n.modifiers=n.modifiers.map((function(e){return e.value})):delete n.modifiers,!1===n.lazy&&delete n.lazy,!0===n.repeat&&delete n.repeat,!1===n.halt&&delete n.halt}),[a,c]),l.a.createElement(v.a,{className:"form-container"},l.a.createElement(N,{setEventObject:t,eventObject:a}),l.a.createElement(D,{freeSolo:!1,modifiers:!0,value:a.modifiers,label:"Modifiers",onChange:function(e,n){console.log({value:n}),t(Object(f.a)({},a,{modifiers:n.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))}))}}),l.a.createElement(E.a,{fullWidth:!0},l.a.createElement(U.a,null,"Additional Options"),l.a.createElement(K.a,{label:"Lazy",control:l.a.createElement(B.a,{checked:!!a.lazy,onChange:function(e){t(Object(f.a)({},a,{lazy:e.target.checked}))}})}),l.a.createElement(K.a,{label:"Repeat",control:l.a.createElement(B.a,{checked:!!a.repeat,onChange:function(e){t(Object(f.a)({},a,{repeat:e.target.checked}))}})}),l.a.createElement(K.a,{label:"Halt",control:l.a.createElement(B.a,{checked:!!a.halt,onChange:function(e){t(Object(f.a)({},a,{halt:e.target.checked}))}})})),l.a.createElement(p.a,{color:"secondary",variant:"contained",onClick:function(){return o()},startIcon:l.a.createElement(G.a,null)},"Remove"))},Q=["to","to_if_alone","to_if_held_down","to_after_key_up"],X=function(e){var a=e.manipulator,t=e.setManipulator;return l.a.createElement(v.a,null,Q.map((function(e,n){return a[e]&&l.a.createElement(g.a,{key:n,defaultExpanded:!0},l.a.createElement(k.a,{expandIcon:l.a.createElement(w.a,null)},'"',C(e),'" Events'),l.a.createElement(v.a,{p:2},a[e].map((function(n,o){var r={toObject:Object(f.a)({},n),setToObject:function(n){var l=Object(f.a)({},a);l[e][o]=n,t(l)},removeToObject:function(){var n=Object(f.a)({},a);n[e].splice(o,1),t(n)}};return l.a.createElement(g.a,{key:o,defaultExpanded:0===o},l.a.createElement(k.a,{expandIcon:l.a.createElement(w.a,null)},o+1,j(o+1),' "',C(e),'" Event'),l.a.createElement(v.a,{p:1},l.a.createElement(V,r)))}))))})))},Y=["to","to_if_alone","to_if_held_down","to_after_key_up"],Z=["basic","frontmost_application_if","frontmost_application_unless","device_if","device_unless","keyboard_type_if","keyboard_type_unless","input_source_if","input_source_unless","variable_if","variable_unless","event_changed_if","event_changed_unless"],$=function(e){var a=e.manipulator,t=e.setManipulator;return l.a.createElement("div",null,l.a.createElement(E.a,{variant:"filled",fullWidth:!0},l.a.createElement(_.a,{id:"type"},"Type*"),l.a.createElement(y.a,{labelId:"type",value:a.type,onChange:function(e){t(Object(f.a)({},a,{type:e.target.value}))}},Z.map((function(e){return l.a.createElement(h.a,{value:e,key:e},C(e))})))),l.a.createElement(g.a,{defaultExpanded:!0},l.a.createElement(k.a,{expandIcon:l.a.createElement(w.a,null)},'"From" Event*'),l.a.createElement(q,{fromObject:a.from,setFromObject:function(e){var n=Object(f.a)({},a,{from:e});t(n)}})),l.a.createElement(X,{manipulator:a,setManipulator:t}),a.conditions&&l.a.createElement(g.a,{defaultExpanded:!0},l.a.createElement(k.a,{expandIcon:l.a.createElement(w.a,null)},"Rule Conditions"),l.a.createElement(v.a,{p:1},a.conditions.map((function(e,a){return l.a.createElement(S,{key:a,index:a,condition:e})})))),l.a.createElement(v.a,null,l.a.createElement(s.a,null,'Add "To" Events'),l.a.createElement(O.a,null,Y.map((function(e){return l.a.createElement(p.a,{key:e,variant:"contained",color:"primary",onClick:function(){!function(e){var n=Object(f.a)({},a);n[e]=n[e]||[],n[e].push({repeat:!0,_id:P.a.uniqueId(e+"_")}),t(n)}(e)},size:"small"},e)})))),l.a.createElement(v.a,{marginTop:1},l.a.createElement(p.a,{color:"primary",variant:"contained",onClick:function(){!function(){var e=Object(f.a)({},a);e.conditions=e.conditions||[],e.conditions.push({type:"frontmost_application_if"}),t(e)}()}},"Add Conditions")))},ee=function(e){var a=e.rule,t=e.setRule,n=function(e){var n=P.a.findIndex(a.manipulators,{_id:e._id}),l=Object(f.a)({},a);l.manipulators[n]=Object(f.a)({},e),t(l)};return l.a.createElement(v.a,null,l.a.createElement(b.a,{label:"Description (optional)",variant:"filled",value:a.description,onChange:function(e){return t(Object(f.a)({},a,{description:e.target.value}))},multiline:!0,fullWidth:!0}),a.manipulators.map((function(e,a){return l.a.createElement($,{manipulator:e,key:a,setManipulator:n})})),l.a.createElement(p.a,null,"Add Manipulator"))},ae=Object(n.createContext)({setFormState:function(){},setRuleState:function(){},getRuleByIndex:function(){},formState:{}}),te=t(65),ne=t.n(te),le={simultaneous:[],modifiers:{optional:[],mandatory:[]}},oe={type:"basic",from:{modifiers:{mandatory:[],optional:[]},simultaneous:[]}},re=function(){return Object(f.a)({},ie({description:""},"rule"),{manipulators:[ie(oe,"manipulator")]})},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a.length&&(a+="_"),Object(f.a)({},e,{_id:P.a.uniqueId(a)})},ce=["to","to_if_alone","to_if_held_down","to_after_key_up"],ue=function(e){return"string"===typeof e?e:e.value},de=function(e){return e.map(ue)},se=function(e){var a=P.a.cloneDeep(e);return a.rules.forEach((function(e,a){var t;(null===e||void 0===e?void 0:null===(t=e.description)||void 0===t?void 0:t.length)||delete e.description,e.manipulators.forEach((function(e){var a,t;e.from=function(e){var a=Object.assign({},le,e);return"object"===typeof a.key_code&&(a.key_code=ue(a.key_code)),a.modifiers&&(a.modifiers.mandatory&&(0===a.modifiers.mandatory.length?delete a.modifiers.mandatory:a.modifiers.mandatory=de(a.modifiers.mandatory)),a.modifiers.optional&&(0===a.modifiers.optional.length?delete a.modifiers.optional:a.modifiers.optional=de(a.modifiers.optional))),a.pointing_button&&"disabled"!==a.pointing_button||delete a.pointing_button,P.a.isEmpty(a.modifiers)&&delete a.modifiers,a}(e.from);var n=[];null===e||void 0===e||null===(a=e.from)||void 0===a||null===(t=a.simultaneous)||void 0===t||t.forEach((function(e){var a;delete e._id,(null===e||void 0===e?void 0:null===(a=e.key_code)||void 0===a?void 0:a.value)&&(e.key_code=e.key_code.value),P.a.isEmpty(e)||n.push(e)})),ce.forEach((function(a){console.log(a,e[a]),e[a]&&(e[a]=e[a].map((function(e){return delete e._id,e.key_code&&(e.key_code=ue(e.key_code)),e.modifiers&&(e.modifiers=de(e.modifiers)),e})))})),e.from.simultaneous=n,P.a.isEmpty(e.from.simultaneous)&&delete e.from.simultaneous,delete e._id})),delete e._id})),a},me=function(){var e=Object(n.useState)({title:"",rules:[re()]}),a=Object(m.a)(e,2),t=a[0],o=a[1],r=se(t),i=function(e){var a=P.a.findIndex(t.rules,{_id:e._id}),n=P.a.cloneDeep(t);n.rules[a]=Object(f.a)({},n.rules[a],{},e),o(Object(f.a)({},n))};return l.a.createElement(ae.Provider,{value:{formState:t,setFormState:o,getRuleByIndex:function(e){return t.rules[e]}}},l.a.createElement(c.a,null,l.a.createElement(d.a,{container:!0,direction:"row",justify:"space-between"},l.a.createElement(d.a,{item:!0,xs:!0},l.a.createElement(v.a,{p:1},l.a.createElement(b.a,{fullWidth:!0,onChange:function(e){return o(Object(f.a)({},t,{title:e.currentTarget.value}))},value:t.title,variant:"filled",label:"Title"}),t.rules.map((function(e,a){return l.a.createElement(g.a,{defaultExpanded:0===a,key:a},l.a.createElement(k.a,{expandIcon:l.a.createElement(w.a,null)},a+1+j(a+1)+" Rule"+(e.description?": "+e.description:"")),l.a.createElement(v.a,{p:1},l.a.createElement(ee,{key:a,rule:e,setRule:i})))})),l.a.createElement(p.a,{onClick:function(){var e=Object(f.a)({},t);e.rules=e.rules||[],e.rules.push(re()),o(Object(f.a)({},e))},color:"primary",variant:"contained",startIcon:l.a.createElement(ne.a,null)},"Rule"))),l.a.createElement(d.a,{container:!0,xs:!0,item:!0,direction:"column"},l.a.createElement(d.a,{item:!0,xs:!0},l.a.createElement("textarea",{className:"generated-code",readOnly:!0,value:JSON.stringify(r,null,2)}),l.a.createElement(p.a,{onClick:function(){var e=window.btoa(JSON.stringify(r)),a="karabiner://karabiner/assets/complex_modifications/import?url=data:application/json;charset=utf-8;base64,".concat(e);window.location.href=a},fullWidth:!0,color:"primary",variant:"contained"},"Install!")),l.a.createElement(d.a,{container:!0,item:!0,xs:!0},l.a.createElement("textarea",{placeholder:"Try pasting existing complex modifications here. The simpler the better, everything is still experimental.",className:"generated-code",onBlur:function(e){try{e.target.value&&o(function(e){var a=JSON.parse(e);return a.rules=a.rules.map((function(e){var a=ie(e,"rule");return a.manipulators=a.manipulators.map((function(e){var a=ie(e,"manipulator");return ce.forEach((function(e){a[e]&&(a[e]=a[e].map((function(a){return ie(a,e)})))})),a})),a})),a}(e.target.value))}catch(e){console.log({e:e})}}}))))))},fe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{position:"static"},l.a.createElement(c.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{xs:!0,item:!0},l.a.createElement(s.a,null,"Karabiner Complex Modification | Still a work in progress")),l.a.createElement(d.a,{xs:3,item:!0,container:!0,justify:"space-evenly"},l.a.createElement("a",{className:"github-button",href:"https://github.com/genesy/karabiner-complex-rules-generator","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star genesy/karabiner-complex-rules-generator on GitHub"},"Star"),l.a.createElement("a",{className:"github-button",href:"https://github.com/genesy","data-size":"large","data-show-count":"true","aria-label":"Follow @genesy on GitHub"},"Follow @genesy"))))),l.a.createElement(me,null))};var ve=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.9fdb140e.chunk.js.map