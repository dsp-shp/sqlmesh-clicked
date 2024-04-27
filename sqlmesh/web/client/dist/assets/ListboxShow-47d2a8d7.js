import{r as u,R as U,j as S,c as _,i as Oe}from"./index-b4cc7002.js";import{K as oe,g as C,o as f,S as ee,D as F,y as k,u as P,m as Se,F as Le,T as Ie,p as H,B as we,i as X,c as Te,b as $e,R as De,X as N,I as V,z as Ee,C as Pe,A as Ce,r as g,v as Fe,h as G,H as ke,x as Ne}from"./transition-81d2b6e1.js";import{z as je,B as Ae}from"./Input-33434eba.js";function Me({title:e,titleId:t,...r},i){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?u.createElement("title",{id:t},e):null,u.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))}const Be=u.forwardRef(Me),yt=Be;function ze({title:e,titleId:t,...r},i){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?u.createElement("title",{id:t},e):null,u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"}))}const Ue=u.forwardRef(ze),Qe=Ue;function ie(e,t){let[r,i]=u.useState(e),o=oe(e);return C(()=>i(o.current),[o,i,...t]),r}function He(e){throw new Error("Unexpected object: "+e)}var L=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(L||{});function Xe(e,t){let r=t.resolveItems();if(r.length<=0)return null;let i=t.resolveActiveIndex(),o=i??-1,a=(()=>{switch(e.focus){case 0:return r.findIndex(n=>!t.resolveDisabled(n));case 1:{let n=r.slice().reverse().findIndex((l,p,v)=>o!==-1&&v.length-p-1>=o?!1:!t.resolveDisabled(l));return n===-1?n:r.length-1-n}case 2:return r.findIndex((n,l)=>l<=o?!1:!t.resolveDisabled(n));case 3:{let n=r.slice().reverse().findIndex(l=>!t.resolveDisabled(l));return n===-1?n:r.length-1-n}case 4:return r.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:He(e)}})();return a===-1?i:a}function ae(e={},t=null,r=[]){for(let[i,o]of Object.entries(e))se(r,le(t,i),o);return r}function le(e,t){return e?e+"["+t+"]":t}function se(e,t,r){if(Array.isArray(r))for(let[i,o]of r.entries())se(e,le(t,i.toString()),o);else r instanceof Date?e.push([t,r.toISOString()]):typeof r=="boolean"?e.push([t,r?"1":"0"]):typeof r=="string"?e.push([t,r]):typeof r=="number"?e.push([t,`${r}`]):r==null?e.push([t,""]):ae(r,t,e)}function Rt(e){var t,r;let i=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(i){for(let o of i.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(r=i.requestSubmit)==null||r.call(i)}}function Ve(e,t,r){let[i,o]=u.useState(r),a=e!==void 0,n=u.useRef(a),l=u.useRef(!1),p=u.useRef(!1);return a&&!n.current&&!l.current?(l.current=!0,n.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!a&&n.current&&!p.current&&(p.current=!0,n.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[a?e:i,f(v=>(a||o(v),t==null?void 0:t(v)))]}function te(e){return[e.screenX,e.screenY]}function qe(){let e=u.useRef([-1,-1]);return{wasMoved(t){let r=te(t);return e.current[0]===r[0]&&e.current[1]===r[1]?!1:(e.current=r,!0)},update(t){e.current=te(t)}}}let re=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ne(e){var t,r;let i=(t=e.innerText)!=null?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return i;let a=!1;for(let l of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),a=!0;let n=a?(r=o.innerText)!=null?r:"":i;return re.test(n)&&(n=n.replace(re,"")),n}function Ke(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let i=r.split(" ").map(o=>{let a=document.getElementById(o);if(a){let n=a.getAttribute("aria-label");return typeof n=="string"?n.trim():ne(a).trim()}return null}).filter(Boolean);if(i.length>0)return i.join(", ")}return ne(e).trim()}function We(e){let t=u.useRef(""),r=u.useRef("");return f(()=>{let i=e.current;if(!i)return"";let o=i.innerText;if(t.current===o)return r.current;let a=Ke(i).trim().toLowerCase();return t.current=o,r.current=a,a})}var Ge=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ge||{}),Ye=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ye||{}),Je=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Je||{}),Ze=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ze||{});function W(e,t=r=>r){let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,i=ke(t(e.options.slice()),a=>a.dataRef.current.domRef.current),o=r?i.indexOf(r):null;return o===-1&&(o=null),{options:i,activeOptionIndex:o}}let _e={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:r}=e.dataRef.current,i=e.options.findIndex(o=>r(o.dataRef.current.value));return i!==-1&&(t=i),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var r;if(e.dataRef.current.disabled||e.listboxState===1)return e;let i=W(e),o=Xe(t,{resolveItems:()=>i.options,resolveActiveIndex:()=>i.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...e,...i,searchQuery:"",activeOptionIndex:o,activationTrigger:(r=t.trigger)!=null?r:1}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,i=e.searchQuery+t.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(n=>{var l;return!n.dataRef.current.disabled&&((l=n.dataRef.current.textValue)==null?void 0:l.startsWith(i))}),a=o?e.options.indexOf(o):-1;return a===-1||a===e.activeOptionIndex?{...e,searchQuery:i}:{...e,searchQuery:i,activeOptionIndex:a,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,t)=>{let r={id:t.id,dataRef:t.dataRef},i=W(e,o=>[...o,r]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(i.activeOptionIndex=i.options.indexOf(r)),{...e,...i}},6:(e,t)=>{let r=W(e,i=>{let o=i.findIndex(a=>a.id===t.id);return o!==-1&&i.splice(o,1),i});return{...e,...r,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},Y=u.createContext(null);Y.displayName="ListboxActionsContext";function j(e){let t=u.useContext(Y);if(t===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}return t}let J=u.createContext(null);J.displayName="ListboxDataContext";function A(e){let t=u.useContext(J);if(t===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,A),r}return t}function et(e,t){return P(t.type,_e,e,t)}let tt=u.Fragment;function rt(e,t){let{value:r,defaultValue:i,form:o,name:a,onChange:n,by:l=(c,d)=>c===d,disabled:p=!1,horizontal:v=!1,multiple:h=!1,...w}=e;const D=v?"horizontal":"vertical";let T=k(t),[y=h?[]:void 0,I]=Ve(r,n,i),[m,s]=u.useReducer(et,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),b=u.useRef({static:!1,hold:!1}),E=u.useRef(null),M=u.useRef(null),q=u.useRef(null),R=f(typeof l=="string"?(c,d)=>{let O=l;return(c==null?void 0:c[O])===(d==null?void 0:d[O])}:l),$=u.useCallback(c=>P(x.mode,{1:()=>y.some(d=>R(d,c)),0:()=>R(y,c)}),[y]),x=u.useMemo(()=>({...m,value:y,disabled:p,mode:h?1:0,orientation:D,compare:R,isSelected:$,optionsPropsRef:b,labelRef:E,buttonRef:M,optionsRef:q}),[y,p,h,m]);C(()=>{m.dataRef.current=x},[x]),Se([x.buttonRef,x.optionsRef],(c,d)=>{var O;s({type:1}),Le(d,Ie.Loose)||(c.preventDefault(),(O=x.buttonRef.current)==null||O.focus())},x.listboxState===0);let ue=u.useMemo(()=>({open:x.listboxState===0,disabled:p,value:y}),[x,p,y]),ce=f(c=>{let d=x.options.find(O=>O.id===c);d&&K(d.dataRef.current.value)}),de=f(()=>{if(x.activeOptionIndex!==null){let{dataRef:c,id:d}=x.options[x.activeOptionIndex];K(c.current.value),s({type:2,focus:L.Specific,id:d})}}),pe=f(()=>s({type:0})),fe=f(()=>s({type:1})),ve=f((c,d,O)=>c===L.Specific?s({type:2,focus:L.Specific,id:d,trigger:O}):s({type:2,focus:c,trigger:O})),be=f((c,d)=>(s({type:5,id:c,dataRef:d}),()=>s({type:6,id:c}))),xe=f(c=>(s({type:7,id:c}),()=>s({type:7,id:null}))),K=f(c=>P(x.mode,{0(){return I==null?void 0:I(c)},1(){let d=x.value.slice(),O=d.findIndex(z=>R(z,c));return O===-1?d.push(c):d.splice(O,1),I==null?void 0:I(d)}})),me=f(c=>s({type:3,value:c})),ge=f(()=>s({type:4})),he=u.useMemo(()=>({onChange:K,registerOption:be,registerLabel:xe,goToOption:ve,closeListbox:fe,openListbox:pe,selectActiveOption:de,selectOption:ce,search:me,clearSearch:ge}),[]),ye={ref:T},B=u.useRef(null),Re=H();return u.useEffect(()=>{B.current&&i!==void 0&&Re.addEventListener(B.current,"reset",()=>{I==null||I(i)})},[B,I]),U.createElement(Y.Provider,{value:he},U.createElement(J.Provider,{value:x},U.createElement(we,{value:P(x.listboxState,{0:X.Open,1:X.Closed})},a!=null&&y!=null&&ae({[a]:y}).map(([c,d],O)=>U.createElement(Te,{features:$e.Hidden,ref:O===0?z=>{var Z;B.current=(Z=z==null?void 0:z.closest("form"))!=null?Z:null}:void 0,...De({key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,name:c,value:d})})),N({ourProps:ye,theirProps:w,slot:ue,defaultTag:tt,name:"Listbox"}))))}let nt="button";function ot(e,t){var r;let i=V(),{id:o=`headlessui-listbox-button-${i}`,...a}=e,n=A("Listbox.Button"),l=j("Listbox.Button"),p=k(n.buttonRef,t),v=H(),h=f(m=>{switch(m.key){case g.Space:case g.Enter:case g.ArrowDown:m.preventDefault(),l.openListbox(),v.nextFrame(()=>{n.value||l.goToOption(L.First)});break;case g.ArrowUp:m.preventDefault(),l.openListbox(),v.nextFrame(()=>{n.value||l.goToOption(L.Last)});break}}),w=f(m=>{switch(m.key){case g.Space:m.preventDefault();break}}),D=f(m=>{if(Fe(m.currentTarget))return m.preventDefault();n.listboxState===0?(l.closeListbox(),v.nextFrame(()=>{var s;return(s=n.buttonRef.current)==null?void 0:s.focus({preventScroll:!0})})):(m.preventDefault(),l.openListbox())}),T=ie(()=>{if(n.labelId)return[n.labelId,o].join(" ")},[n.labelId,o]),y=u.useMemo(()=>({open:n.listboxState===0,disabled:n.disabled,value:n.value}),[n]),I={ref:p,id:o,type:Ee(e,n.buttonRef),"aria-haspopup":"listbox","aria-controls":(r=n.optionsRef.current)==null?void 0:r.id,"aria-expanded":n.listboxState===0,"aria-labelledby":T,disabled:n.disabled,onKeyDown:h,onKeyUp:w,onClick:D};return N({ourProps:I,theirProps:a,slot:y,defaultTag:nt,name:"Listbox.Button"})}let it="label";function at(e,t){let r=V(),{id:i=`headlessui-listbox-label-${r}`,...o}=e,a=A("Listbox.Label"),n=j("Listbox.Label"),l=k(a.labelRef,t);C(()=>n.registerLabel(i),[i]);let p=f(()=>{var h;return(h=a.buttonRef.current)==null?void 0:h.focus({preventScroll:!0})}),v=u.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return N({ourProps:{ref:l,id:i,onClick:p},theirProps:o,slot:v,defaultTag:it,name:"Listbox.Label"})}let lt="ul",st=ee.RenderStrategy|ee.Static;function ut(e,t){var r;let i=V(),{id:o=`headlessui-listbox-options-${i}`,...a}=e,n=A("Listbox.Options"),l=j("Listbox.Options"),p=k(n.optionsRef,t),v=H(),h=H(),w=Pe(),D=(()=>w!==null?(w&X.Open)===X.Open:n.listboxState===0)();u.useEffect(()=>{var s;let b=n.optionsRef.current;b&&n.listboxState===0&&b!==((s=Ce(b))==null?void 0:s.activeElement)&&b.focus({preventScroll:!0})},[n.listboxState,n.optionsRef]);let T=f(s=>{switch(h.dispose(),s.key){case g.Space:if(n.searchQuery!=="")return s.preventDefault(),s.stopPropagation(),l.search(s.key);case g.Enter:if(s.preventDefault(),s.stopPropagation(),n.activeOptionIndex!==null){let{dataRef:b}=n.options[n.activeOptionIndex];l.onChange(b.current.value)}n.mode===0&&(l.closeListbox(),G().nextFrame(()=>{var b;return(b=n.buttonRef.current)==null?void 0:b.focus({preventScroll:!0})}));break;case P(n.orientation,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return s.preventDefault(),s.stopPropagation(),l.goToOption(L.Next);case P(n.orientation,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return s.preventDefault(),s.stopPropagation(),l.goToOption(L.Previous);case g.Home:case g.PageUp:return s.preventDefault(),s.stopPropagation(),l.goToOption(L.First);case g.End:case g.PageDown:return s.preventDefault(),s.stopPropagation(),l.goToOption(L.Last);case g.Escape:return s.preventDefault(),s.stopPropagation(),l.closeListbox(),v.nextFrame(()=>{var b;return(b=n.buttonRef.current)==null?void 0:b.focus({preventScroll:!0})});case g.Tab:s.preventDefault(),s.stopPropagation();break;default:s.key.length===1&&(l.search(s.key),h.setTimeout(()=>l.clearSearch(),350));break}}),y=ie(()=>{var s,b,E;return(E=(s=n.labelRef.current)==null?void 0:s.id)!=null?E:(b=n.buttonRef.current)==null?void 0:b.id},[n.labelRef.current,n.buttonRef.current]),I=u.useMemo(()=>({open:n.listboxState===0}),[n]),m={"aria-activedescendant":n.activeOptionIndex===null||(r=n.options[n.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":n.mode===1?!0:void 0,"aria-labelledby":y,"aria-orientation":n.orientation,id:o,onKeyDown:T,role:"listbox",tabIndex:0,ref:p};return N({ourProps:m,theirProps:a,slot:I,defaultTag:lt,features:st,visible:D,name:"Listbox.Options"})}let ct="li";function dt(e,t){let r=V(),{id:i=`headlessui-listbox-option-${r}`,disabled:o=!1,value:a,...n}=e,l=A("Listbox.Option"),p=j("Listbox.Option"),v=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===i:!1,h=l.isSelected(a),w=u.useRef(null),D=We(w),T=oe({disabled:o,value:a,domRef:w,get textValue(){return D()}}),y=k(t,w);C(()=>{if(l.listboxState!==0||!v||l.activationTrigger===0)return;let R=G();return R.requestAnimationFrame(()=>{var $,x;(x=($=w.current)==null?void 0:$.scrollIntoView)==null||x.call($,{block:"nearest"})}),R.dispose},[w,v,l.listboxState,l.activationTrigger,l.activeOptionIndex]),C(()=>p.registerOption(i,T),[T,i]);let I=f(R=>{if(o)return R.preventDefault();p.onChange(a),l.mode===0&&(p.closeListbox(),G().nextFrame(()=>{var $;return($=l.buttonRef.current)==null?void 0:$.focus({preventScroll:!0})}))}),m=f(()=>{if(o)return p.goToOption(L.Nothing);p.goToOption(L.Specific,i)}),s=qe(),b=f(R=>s.update(R)),E=f(R=>{s.wasMoved(R)&&(o||v||p.goToOption(L.Specific,i,0))}),M=f(R=>{s.wasMoved(R)&&(o||v&&p.goToOption(L.Nothing))}),q=u.useMemo(()=>({active:v,selected:h,disabled:o}),[v,h,o]);return N({ourProps:{id:i,ref:y,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":h,disabled:void 0,onClick:I,onFocus:m,onPointerEnter:b,onMouseEnter:b,onPointerMove:E,onMouseMove:E,onPointerLeave:M,onMouseLeave:M},theirProps:n,slot:q,defaultTag:ct,name:"Listbox.Option"})}let pt=F(rt),ft=F(ot),vt=F(at),bt=F(ut),xt=F(dt),Q=Object.assign(pt,{Button:ft,Label:vt,Options:bt,Option:xt});function Ot({options:e,value:t=[]}){const[r,i]=u.useState([]);return u.useEffect(()=>{i(t)},[t]),S.jsx(Q,{value:r,onChange:o=>{var a;i(o);for(const n in e)(a=e[n])==null||a.call(e,o.includes(n))},multiple:!0,children:S.jsxs("div",{className:"relative flex",children:[S.jsxs(Q.Button,{className:"flex items-center relative w-full cursor-default bg-primary-10 text-xs rounded-full text-primary-500 py-1 px-2 text-center focus:outline-none focus-visible:border-accent-500 focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-300 cursor-pointer",children:[S.jsxs("span",{className:"flex truncate items-center",children:[S.jsx(Qe,{className:"h-3 w-3 mr-0 sm:mr-1"})," ",S.jsx("span",{className:"sr-only sm:not-sr-only",children:"Show"})]}),S.jsx(je,{className:"ml-2 h-4 w-4","aria-hidden":"true"})]}),S.jsx(Ne,{as:u.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:S.jsx(Q.Options,{className:"absolute top-8 right-0 z-50 max-h-60 min-w-16 overflow-auto rounded-md bg-theme py-2 shadow-lg ring-2 ring-primary-10 ring-opacity-5 focus:outline-none sm:text-sm",children:Object.keys(e).filter(o=>e[o]).map(o=>S.jsx(Q.Option,{className:({active:a,disabled:n})=>_("relative cursor-default select-none py-1 pl-10 pr-4",n?"opacity-50 cursor-not-allowed":"",a?"bg-primary-10 text-primary-500":"text-neutral-700 dark:text-neutral-300"),value:o,disabled:Oe(!!e[o]),children:({selected:a})=>S.jsxs(S.Fragment,{children:[S.jsx("span",{children:o}),S.jsx("span",{className:_("absolute inset-y-0 left-0 flex items-center pl-3 text-primary-500",a?"block":"hidden"),children:S.jsx(Ae,{className:"h-4 w-4","aria-hidden":"true"})})]})},o))})})]})})}export{Ot as L,Ve as T,yt as X,L as a,We as b,ae as e,Rt as p,qe as u,Xe as x};