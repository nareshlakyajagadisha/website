"use strict";(self.webpackChunknareshlakyajagadisha_github_io=self.webpackChunknareshlakyajagadisha_github_io||[]).push([[169],{8032:function(e,t,a){a.d(t,{G:function(){return M},L:function(){return f},M:function(){return N},P:function(){return x},_:function(){return i},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=i(e,g);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=i(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,y);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(v,s({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],x=function(e){let{fallback:t}=e,a=i(e,E);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],O=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:l().object.isRequired,alt:L},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],z=["style","className"],T=new Set;let I,P;const A=function(e){let{as:t="div",image:n,style:l,backgroundColor:c,className:d,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=i(e,j);const{width:y,height:v,layout:b}=n,w=u(y,v,b),{style:E,className:x}=w,N=i(w,z),k=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const O=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((()=>{I||(I=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(C);if(P&&T.has(C))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;k.current&&(k.current.innerHTML=a(s({isLoading:!0,isLoaded:T.has(C),image:n},h)),T.has(C)||(t=requestAnimationFrame((()=>{k.current&&(r=i(k.current,C,T,l,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{T.has(C)&&P&&(k.current.innerHTML=P(s({isLoading:T.has(C),isLoaded:T.has(C),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},N,{style:s({},E,l,{backgroundColor:c}),className:x+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(A,e):null}));M.propTypes=S,M.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=i(t,_);return l&&console.warn(l),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const q=R((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=s({objectFit:y,objectPosition:v,backgroundColor:h},p);const{width:w,height:E,layout:L,images:S,placeholder:j,backgroundColor:z}=o,T=u(w,E,L),{style:I,className:P}=T,A=i(T,C),M={fallback:void 0,sources:[]};return S.fallback&&(M.fallback=s({},S.fallback,{srcSet:S.fallback.srcSet?O(S.fallback.srcSet):void 0})),S.sources&&(M.sources=S.sources.map((e=>s({},e,{srcSet:O(e.srcSet)})))),r.createElement(t,s({},A,{style:s({},I,l,{backgroundColor:h}),className:P+(a?" "+a:"")}),r.createElement(f,{layout:L,width:w,height:E},r.createElement(x,s({},m(j,!1,L,w,E,z,y,v))),r.createElement(N,s({"data-gatsby-image-ssr":"",className:g},b,d("eager"===c,!1,M,c,p)))))})),U=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),D={src:l().string.isRequired,alt:L,width:U,height:U,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=D;const F=R(M);F.displayName="StaticImage",F.propTypes=D},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const l=e[n];t&&/[a-zA-Z]/.test(l)&&l.toUpperCase()===l?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(l)&&l.toLowerCase()===l?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=l.toLowerCase()===l&&l.toUpperCase()!==l,r=a,a=l.toUpperCase()===l&&l.toLowerCase()!==l)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},5655:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n="Heading-module--heading--41ea7";var l=e=>{switch(e.size){case 1:default:return r.createElement("h1",{className:e.className+" "+n},e.children);case 2:return r.createElement("h2",{className:e.className+" "+n},e.children);case 3:return r.createElement("h3",{className:e.className+" "+n},e.children);case 4:return r.createElement("h4",{className:e.className+" "+n},e.children);case 5:return r.createElement("h5",{className:e.className+" "+n},e.children);case 6:return r.createElement("h6",{className:e.className+" "+n},e.children)}}},6645:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(7294),n=a(1883),l="LeftMenu-module--link--70e48";var s=()=>r.createElement("section",{className:"w-100"},r.createElement("ul",{className:"nav justify-content-center d-flex align-items-stretch flex-lg-column align-items-lg-center w-100"},r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link fw-semibold "+l,to:"/"},"Home")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link fw-semibold "+l,to:"/blog"},"Blog")),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{className:"nav-link fw-semibold "+l,to:"/about"},"About")))),i=a(5697),o=a.n(i),c=["color","size","title"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=(0,r.forwardRef)((function(e,t){var a=e.color,n=e.size,l=e.title,s=d(e,c);return r.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:a},s),l?r.createElement("title",null,l):null,r.createElement("path",{d:"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}))}));m.propTypes={color:o().string,size:o().oneOfType([o().string,o().number]),title:o().string},m.defaultProps={color:"currentColor",size:"1em",title:null};var g=m,p=["color","size","title"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var y=(0,r.forwardRef)((function(e,t){var a=e.color,n=e.size,l=e.title,s=h(e,p);return r.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:a},s),l?r.createElement("title",null,l):null,r.createElement("path",{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}))}));y.propTypes={color:o().string,size:o().oneOfType([o().string,o().number]),title:o().string},y.defaultProps={color:"currentColor",size:"1em",title:null};var v=y;var b=()=>{const{0:e,1:t}=(0,r.useState)(!1),a=r.createElement("div",null,r.createElement("button",{type:"button",className:"d-flex RightMenu-module--themeToggleButton--369ae",onClick:()=>{document.body.classList.toggle("dark"),localStorage.setItem("prefersDarkMode",!e),t(!e)}},e?r.createElement(g,null):r.createElement(v,null)));return r.createElement("section",{className:"w-100 d-flex justify-content-center"},a)};var w=e=>r.createElement("div",{className:"d-flex flex-column align-items-stretch Layout-module--layout--74109"},r.createElement("div",{className:"d-flex flex-column flex-lg-row flex-grow-1 align-items-stretch w-100"},r.createElement("div",{className:"d-lg-flex align-items-stretch flex-lg-grow-1 mx-0 col-12 col-md-12 col-lg-3 p-2 p-lg-5"},r.createElement(s,null)),r.createElement("div",{className:"d-lg-flex align-items-stretch flex-grow-1 flex-md-grow-1 flex-lg-grow-1 mx-0 col-12 col-md-12 col-lg-6 p-2 p-lg-5"},e.children),r.createElement("div",{className:"d-lg-flex align-items-stretch flex-lg-grow-1 mx-0 col-12 col-md-12 col-lg-3 p-2 p-lg-5"},r.createElement(b,null))),r.createElement("section",{className:"mx-0"},r.createElement("footer",{className:"col-12 col-sm-12 text-center p-3 border-top"},r.createElement("p",null,r.createElement("small",null,"© Copyright 2022 Naresh Lakya Jagadisha")))))},5023:function(e,t,a){a.d(t,{p:function(){return r}});var r="shared-module--link--327ef"}}]);
//# sourceMappingURL=be8711c8072c47a71aca4ad174a368737533cadc-4e6dc50226a2d82fdc39.js.map