import{u as f,a as i,r,s as j,A as E,j as e,L as c,S as d,_ as l}from"./index-b4cc7002.js";import{u as p}from"./project-97eed5a7.js";import{P as b}from"./Page-0795873e.js";import"./file-de7948b6.js";import"./SplitPane-6cd2e846.js";const P=r.lazy(()=>l(()=>import("./FileExplorer-778c8c8a.js"),["assets/FileExplorer-778c8c8a.js","assets/index-b4cc7002.js","assets/index-daa9e59b.css","assets/project-97eed5a7.js","assets/file-de7948b6.js","assets/Input-33434eba.js","assets/context-85a724fa.js","assets/editor-6e8e6249.js","assets/SearchList-77abdd1b.js","assets/transition-81d2b6e1.js","assets/ChevronDownIcon-723fd6e6.js","assets/ChevronRightIcon-9f15e0fd.js"])),v=r.lazy(()=>l(()=>import("./context-85a724fa.js"),["assets/context-85a724fa.js","assets/index-b4cc7002.js","assets/index-daa9e59b.css","assets/project-97eed5a7.js","assets/file-de7948b6.js","assets/editor-6e8e6249.js"])),L=r.lazy(()=>l(()=>import("./Editor-a5c28238.js"),["assets/Editor-a5c28238.js","assets/index-b4cc7002.js","assets/index-daa9e59b.css","assets/project-97eed5a7.js","assets/file-de7948b6.js","assets/SplitPane-6cd2e846.js","assets/SplitPane-8de62f33.css","assets/editor-6e8e6249.js","assets/Input-33434eba.js","assets/ListboxShow-47d2a8d7.js","assets/transition-81d2b6e1.js","assets/Banner-28e83f44.js","assets/Tab-0f808e52.js","assets/help-58deefc8.js","assets/index-084e29c2.js","assets/context-6feb9e3e.js","assets/_commonjs-dynamic-modules-302442b1.js","assets/SourceList-991f2648.js","assets/context-595521ee.css","assets/disclosure-deab39ca.js","assets/ReportErrors-6435a3e4.js","assets/pluralize-f5f61b77.js"])),N=r.lazy(()=>l(()=>import("./context-6feb9e3e.js").then(t=>t.w),["assets/context-6feb9e3e.js","assets/index-b4cc7002.js","assets/index-daa9e59b.css","assets/_commonjs-dynamic-modules-302442b1.js","assets/Input-33434eba.js","assets/editor-6e8e6249.js","assets/file-de7948b6.js","assets/project-97eed5a7.js","assets/SourceList-991f2648.js","assets/index-084e29c2.js","assets/transition-81d2b6e1.js","assets/context-595521ee.css"]));function w(){const{addError:t}=f(),m=i(s=>s.modules),n=i(s=>s.models),u=i(s=>s.setLastSelectedModel),x=p(s=>s.files),h=r.useCallback(function(o){const a=n.get(o);j(a)||u(a)},[x,n]),_=r.useCallback(function(o){t(E.ColumnLineage,o)},[]);return e.jsx(b,{sidebar:m.hasFiles?e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsxs(c,{className:"inline-block",children:[e.jsx(d,{className:"w-3 h-3 border border-neutral-10 mr-4"}),e.jsx("h3",{className:"text-md",children:"Getting Files..."})]})}),children:e.jsx(v,{children:e.jsx(P,{})})}):void 0,content:e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsxs(c,{className:"inline-block",children:[e.jsx(d,{className:"w-3 h-3 border border-neutral-10 mr-4"}),e.jsx("h3",{className:"text-md",children:"Getting Editor Ready..."})]})}),children:e.jsx(N,{showColumns:!0,handleClickModel:h,handleError:_,children:e.jsx(L,{})})})})}export{w as default};