/*! For license information please see stories-header-stories.64109096.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkepitome=self.webpackChunkepitome||[]).push([[829],{"./src/stories/header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Header:()=>Header,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Header",component:__webpack_require__("./src/components/header/header.tsx").Z};var Header={args:{}};Header.parameters={...Header.parameters,docs:{...Header.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Header.parameters?.docs?.source}}};const __namedExportsOrder=["Header"]},"./src/components/header/header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Header});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),modules=__webpack_require__("./node_modules/react-scroll/modules/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),header_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/header/header.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(header_module.Z,options);const header_header_module=header_module.Z&&header_module.Z.locals?header_module.Z.locals:void 0;var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),__jsx=react.createElement;function Header(){var _useState=(0,react.useState)(!1),clicked=_useState[0],setClicked=_useState[1],handleClick=function handleClick(){setClicked(!clicked)};return __jsx("header",{className:header_header_module.header},__jsx("nav",{className:clicked?header_header_module.isClicked:""},__jsx("ul",null,__jsx("li",null,__jsx(modules.rU,{activeClass:"active",className:header_header_module.link,to:"intro",spy:!0,smooth:!0,duration:800,onClick:handleClick},"Intro")),__jsx("li",null,__jsx(modules.rU,{activeClass:"active",className:header_header_module.link,to:"about",spy:!0,smooth:!0,duration:800,onClick:handleClick},"About")),__jsx("li",null,__jsx(modules.rU,{activeClass:"active",className:header_header_module.link,to:"philosophy",spy:!0,smooth:!0,duration:800,onClick:handleClick},"Philosophy")),__jsx("li",null,__jsx(modules.rU,{activeClass:"active",className:header_header_module.link,to:"works",spy:!0,smooth:!0,duration:800,onClick:handleClick},"Works")),__jsx("li",null,__jsx(modules.rU,{activeClass:"active",className:header_header_module.link,to:"contact",spy:!0,smooth:!0,duration:800,onClick:handleClick},"Say Hello")))),__jsx("button",{className:classnames_default()(header_header_module.headerMenuToggle,clicked?header_header_module.isClicked:""),onClick:handleClick,"aria-label":"Toggle Menu"},__jsx("span",null,"Menu")))}Header.displayName="Header"},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/components/header/header.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.header_header__w2BOs{margin-block-start:2rem;min-height:none;background-color:#050505;position:sticky;top:0;text-align:center;padding-block:1.8rem;z-index:100}.header_header__w2BOs ul,.header_header__w2BOs li{list-style:none}.header_header__w2BOs ul{display:flex;justify-content:center;gap:4rem}.header_header__w2BOs a{color:rgba(255,255,255,.5);line-height:42px;text-decoration:none;font-family:Roboto,sans-serif;font-size:1.3rem;text-transform:uppercase;letter-spacing:.3rem}.header_header__w2BOs a:hover,.header_header__w2BOs a:focus,.header_header__w2BOs a:active{color:#fff}.header_header__w2BOs a:hover{cursor:pointer}.header_headerMenuToggle__mpB3g{display:none;height:42px;width:42px;line-height:42px;font-family:Lora,serif;font-size:1.4rem;text-transform:uppercase;letter-spacing:.2rem;color:rgba(255,255,255,.5);transition:all .3s;position:absolute;inset-inline-end:32px;top:18px;background-color:inherit;border:none;padding:0;margin:0}.header_headerMenuToggle__mpB3g:hover,.header_headerMenuToggle__mpB3g:focus{color:#fff;background-color:inherit}.header_headerMenuToggle__mpB3g span{display:block;width:24px;height:2px;margin-top:-1px;background-color:#fff;transition:all .5s;font:0/0 a;text-shadow:none;color:rgba(0,0,0,0);position:absolute;top:50%;inset-inline-start:9px;inset-inline-end:auto;bottom:auto}.header_headerMenuToggle__mpB3g span::before,.header_headerMenuToggle__mpB3g span::after{content:"";width:100%;height:100%;background-color:inherit;position:absolute;inset-inline-start:0;transition:all .5s}.header_headerMenuToggle__mpB3g span::before{top:-9px}.header_headerMenuToggle__mpB3g span::after{bottom:-9px}.header_headerMenuToggle__mpB3g.header_isClicked__OKKMj span{background-color:rgba(255,255,255,0);transition:all .1s}.header_headerMenuToggle__mpB3g.header_isClicked__OKKMj span::before,.header_headerMenuToggle__mpB3g.header_isClicked__OKKMj span::after{background-color:#fff}.header_headerMenuToggle__mpB3g.header_isClicked__OKKMj span::before{top:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.header_headerMenuToggle__mpB3g.header_isClicked__OKKMj span::after{bottom:0;-webkit-transform:rotate(225deg);transform:rotate(225deg)}@media screen and (max-width: 800px){.header_header__w2BOs a{font-size:1.2rem}}@media screen and (max-width: 800px){.header_header__w2BOs{margin-block-start:0;padding-block:0;min-height:78px}.header_header__w2BOs nav{max-height:0;overflow:hidden;transition:max-height 700ms ease}.header_header__w2BOs nav.header_isClicked__OKKMj{max-height:1000px}.header_header__w2BOs nav ul{margin:120px 44px 64px;display:block;text-align:start;border-top:1px solid rgba(255,255,255,.05)}.header_header__w2BOs nav li{display:block;border-bottom:1px solid rgba(255,255,255,.05)}.header_header__w2BOs a{display:block;padding:18px 0;line-height:20px}.header_headerMenuToggle__mpB3g{display:block}}',"",{version:3,sources:["webpack://./src/components/header/header.module.scss","webpack://./src/styles/_colors.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss"],names:[],mappings:"AAIA,sBACE,uBAAA,CACA,eAAA,CACA,wBCJY,CDKZ,eAAA,CACA,KAAA,CACA,iBAAA,CACA,oBAAA,CACA,WAAA,CAEA,kDAEE,eAAA,CAGF,yBACE,YAAA,CACA,sBAAA,CACA,QAAA,CAGF,wBACE,0BCzBa,CD0Bb,gBAAA,CACA,oBAAA,CACA,6BEjBU,CFkBV,gBAAA,CACA,wBAAA,CACA,oBAAA,CAEA,2FAGE,UCrCQ,CDwCV,8BACE,cAAA,CAKN,gCACE,YAAA,CACA,WAAA,CACA,UAAA,CACA,gBAAA,CACA,sBEtCU,CFuCV,gBAAA,CACA,wBAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,iBAAA,CACA,qBAAA,CACA,QAAA,CACA,wBAAA,CACA,WAAA,CACA,SAAA,CACA,QAAA,CAEA,4EAEE,UAAA,CACA,wBAAA,CAGF,qCACE,aAAA,CACA,UAAA,CACA,UAAA,CACA,eAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,gBAAA,CACA,mBAAA,CACA,iBAAA,CACA,OAAA,CACA,sBAAA,CACA,qBAAA,CACA,WAAA,CAEA,yFAEE,UAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CACA,iBAAA,CACA,oBAAA,CACA,kBAAA,CAGF,6CACE,QAAA,CAGF,4CACE,WAAA,CAKF,6DACE,oCAAA,CACA,kBAAA,CAEA,yIAEE,qBAAA,CAGF,qEACE,KAAA,CACA,gCAAA,CACA,wBAAA,CAGF,oEACE,QAAA,CACA,gCAAA,CACA,wBAAA,CG3HN,qCHmIE,wBACE,gBAAA,CAAA,CGpIJ,qCH0IA,sBACE,oBAAA,CACA,eAAA,CACA,eAAA,CAEA,0BACE,YAAA,CACA,eAAA,CACA,gCAAA,CAEA,kDACE,iBAAA,CAGF,6BACE,sBAAA,CACA,aAAA,CACA,gBAAA,CACA,0CAAA,CAGF,6BACE,aAAA,CACA,6CAAA,CAIJ,wBACE,aAAA,CACA,cAAA,CACA,gBAAA,CAIJ,gCACE,aAAA,CAAA",sourcesContent:['@use "../../styles/colors" as *;\n@use "../../styles/mixins" as mixins;\n@use "../../styles/variables" as *;\n\n.header {\n  margin-block-start: 2rem;\n  min-height: none;\n  background-color: $color-gray2;\n  position: sticky;\n  top: 0;\n  text-align: center;\n  padding-block: 1.8rem;\n  z-index: 100;\n\n  ul,\n  li {\n    list-style: none;\n  }\n\n  ul {\n    display: flex;\n    justify-content: center;\n    gap: 4rem;\n  }\n\n  a {\n    color: $color-white-50;\n    line-height: calc(78px - (18px * 2));\n    text-decoration: none;\n    font-family: $font-roboto;\n    font-size: 1.3rem;\n    text-transform: uppercase;\n    letter-spacing: 0.3rem;\n\n    &:hover,\n    &:focus,\n    &:active {\n      color: $color-white;\n    }\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n}\n\n.headerMenuToggle {\n  display: none;\n  height: 42px;\n  width: 42px;\n  line-height: 42px;\n  font-family: $font-lora;\n  font-size: 1.4rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.3s;\n  position: absolute;\n  inset-inline-end: 32px;\n  top: 18px;\n  background-color: inherit;\n  border: none;\n  padding: 0;\n  margin: 0;\n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    background-color: inherit;\n  }\n\n  span {\n    display: block;\n    width: 24px;\n    height: 2px;\n    margin-top: -1px;\n    background-color: #ffffff;\n    transition: all 0.5s;\n    font: 0/0 a;\n    text-shadow: none;\n    color: transparent;\n    position: absolute;\n    top: 50%;\n    inset-inline-start: 9px;\n    inset-inline-end: auto;\n    bottom: auto;\n\n    &::before,\n    &::after {\n      content: "";\n      width: 100%;\n      height: 100%;\n      background-color: inherit;\n      position: absolute;\n      inset-inline-start: 0;\n      transition: all 0.5s;\n    }\n\n    &::before {\n      top: -9px;\n    }\n\n    &::after {\n      bottom: -9px;\n    }\n  }\n\n  &.isClicked {\n    span {\n      background-color: rgba(255, 255, 255, 0);\n      transition: all 0.1s;\n\n      &::before,\n      &::after {\n        background-color: white;\n      }\n\n      &::before {\n        top: 0;\n        -webkit-transform: rotate(135deg);\n        transform: rotate(135deg);\n      }\n\n      &::after {\n        bottom: 0;\n        -webkit-transform: rotate(225deg);\n        transform: rotate(225deg);\n      }\n    }\n  }\n}\n\n@include mixins.breakpoint-down($breakpoint-800) {\n  .header {\n    a {\n      font-size: 1.2rem;\n    }\n  }\n}\n\n@include mixins.breakpoint-down($breakpoint-800) {\n  .header {\n    margin-block-start: 0;\n    padding-block: 0;\n    min-height: 78px;\n\n    nav {\n      max-height: 0;\n      overflow: hidden;\n      transition: max-height 700ms ease;\n\n      &.isClicked {\n        max-height: 1000px;\n      }\n\n      ul {\n        margin: 120px 44px 64px;\n        display: block;\n        text-align: start;\n        border-top: 1px solid rgba(255, 255, 255, 0.05);\n      }\n\n      li {\n        display: block;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n      }\n    }\n\n    a {\n      display: block;\n      padding: 18px 0;\n      line-height: 20px;\n    }\n  }\n\n  .headerMenuToggle {\n    display: block;\n  }\n}\n',"$color-white: #ffffff;\n$color-white-50: rgba(255, 255, 255, 0.5);\n$color-black: #000000;\n$color-gray2: #050505;\n\n$color-secondary-pink: #cf1767;\n","$breakpoint-350: 350px;\n$breakpoint-400: 400px;\n$breakpoint-600: 600px;\n$breakpoint-700: 700px;\n$breakpoint-800: 800px;\n$breakpoint-900: 900px;\n$breakpoint-1000: 1000px;\n$breakpoint-1024: 1024px;\n$breakpoint-1200: 1200px;\n$breakpoint-1300: 1300px;\n$breakpoint-1400: 1400px;\n\n$font-roboto: Roboto, sans-serif;\n$font-lora: Lora, serif;\n$font-frank-ruhl-libre: Frank Ruhl Libre, serif;\n",'@use "./variables" as *;\n\n@mixin breakpoint-down($breakpoint) {\n  @media screen and (max-width: $breakpoint) {\n    @content;\n  }\n}\n\n@mixin row {\n  width: 89%;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n\n  .row {\n    width: auto;\n    max-width: none;\n    margin-inline-start: -20px;\n    margin-inline-end: -20px;\n  }\n\n  @include breakpoint-down($breakpoint-1200) {\n    .row {\n      margin-inline-start: -16px;\n      margin-inline-end: -16px;\n    }\n  }\n\n  @include breakpoint-down($breakpoint-600) {\n    width: auto;\n    padding-inline-start: 25px;\n    padding-inline-end: 25px;\n\n    .row {\n      margin-inline-start: -10px;\n      margin-inline-end: -10px;\n      padding-inline-start: 0;\n      padding-inline-end: 0;\n    }\n  }\n\n  @include breakpoint-down($breakpoint-400) {\n    .row {\n      margin-inline-start: 0;\n      margin-inline-end: 0;\n    }\n  }\n}\n\n@mixin column {\n  -webkit-flex: 1 1 0%;\n  -ms-flex: 1 1 0%;\n  flex: 1 1 0%;\n  padding: 0 20px;\n\n  @include breakpoint-down($breakpoint-1200) {\n    padding: 0 16px;\n  }\n\n  @include breakpoint-down($breakpoint-600) {\n    padding: 0 10px;\n  }\n\n  @include breakpoint-down($breakpoint-400) {\n    -webkit-flex: 0 0 100%;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    width: 100%;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    padding: 0;\n  }\n}\n\n@mixin medium-full {\n  @include breakpoint-down($breakpoint-1200) {\n    -webkit-flex: 0 0 100%;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n@mixin large-5 {\n  -webkit-flex: 0 0 41.66667%;\n  -ms-flex: 0 0 41.66667%;\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%;\n}\n\n@mixin large-half {\n  -webkit-flex: 0 0 50%;\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n@mixin large-7 {\n  -webkit-flex: 0 0 58.33333%;\n  -ms-flex: 0 0 58.33333%;\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%;\n}\n\n@mixin large-9 {\n  -webkit-flex: 0 0 75%;\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n@mixin large-full {\n  -webkit-flex: 0 0 100%;\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n@mixin tab-full {\n  @include breakpoint-down($breakpoint-800) {\n    -webkit-flex: 0 0 100%;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n@mixin mob-full {\n  @include breakpoint-down($breakpoint-600) {\n    -webkit-flex: 0 0 100%;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n@mixin block-large-1-3 {\n  > div {\n    -webkit-flex: 0 0 33.33333%;\n    -ms-flex: 0 0 33.33333%;\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n}\n\n@mixin block-medium-1-2 {\n  @include breakpoint-down($breakpoint-1200) {\n    > div {\n      -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n      flex: 0 0 50%;\n      max-width: 50%;\n    }\n  }\n}\n\n@mixin block-tab-full {\n  @include breakpoint-down($breakpoint-800) {\n    > div {\n      -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n      flex: 0 0 100%;\n      max-width: 100%;\n    }\n  }\n}\n\n@mixin heading-block {\n  position: relative;\n\n  @include breakpoint-down($breakpoint-1024) {\n    max-width: 800px;\n  }\n\n  @include breakpoint-down($breakpoint-800) {\n    max-width: 600px;\n  }\n}\n\n@mixin heading-block-center {\n  max-width: 940px;\n  text-align: center;\n}\n\n// Colors\n\n@mixin color-white {\n  color: #ffffff;\n}\n\n// Typography\n\n@mixin section-heading {\n  font-family: $font-roboto;\n  font-weight: 700;\n  font-size: 1.7rem;\n  line-height: 1.176;\n  text-transform: uppercase;\n  letter-spacing: 0.5rem;\n  margin-top: 0;\n  padding-top: 3.2rem;\n  margin-bottom: 8rem;\n  position: relative;\n\n  &::before {\n    content: "";\n    display: block;\n    width: 150px;\n    height: 2px;\n    background-color: #cf1767;\n    position: absolute;\n    top: 0;\n    inset-inline-start: 0;\n  }\n}\n\n@mixin section-heading-center-bottom {\n  text-align: center;\n  padding-top: 0;\n  padding-bottom: 3.2rem;\n\n  &::before {\n    margin-inline-start: -75px;\n    top: auto;\n    bottom: 0;\n    inset-inline-start: 50%;\n  }\n}\n\n@mixin section-desc {\n  font-family: $font-frank-ruhl-libre;\n  font-size: 5.4rem;\n  font-weight: 400;\n  line-height: 1.259;\n  letter-spacing: -0.05rem;\n  color: #000000;\n\n  @include breakpoint-down($breakpoint-1024) {\n    font-size: 4.8rem;\n  }\n\n  @include breakpoint-down($breakpoint-600) {\n    font-size: 4rem;\n  }\n\n  @include breakpoint-down($breakpoint-400) {\n    font-size: 3.4rem;\n  }\n}\n\n@mixin item-title {\n  font-family: $font-frank-ruhl-libre;\n  font-size: 3.6rem;\n  font-weight: 500;\n  line-height: 1.222;\n  margin-top: 0;\n  color: #000000;\n\n  @include breakpoint-down($breakpoint-1200) {\n    font-size: 3rem;\n  }\n\n  @include breakpoint-down($breakpoint-400) {\n    font-size: 2.8rem;\n  }\n}\n\n@mixin lead-paragraph {\n  font-family: $font-lora;\n  font-weight: 300;\n  font-size: 2.4rem;\n  line-height: 1.833;\n  margin-bottom: 3.6rem;\n  color: #000000;\n}\n\n// Buttons\n\n@mixin button {\n  margin-bottom: 1.6rem;\n  display: inline-block;\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-size: 1.4rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5rem;\n  height: 6rem;\n  line-height: 5.6rem;\n  padding: 0 3.2rem;\n  margin-block-start: 0;\n  margin-inline-end: 0.4rem;\n  margin-block-end: 1.6rem;\n  margin-inline-start: 0;\n  color: #000000;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #d3d3d3;\n  border: 0.2rem solid #d3d3d3;\n\n  &:hover,\n  &:focus {\n    background-color: #c3c3c3;\n    border-color: #c3c3c3;\n    color: #000000;\n    outline: 0;\n  }\n}\n\n@mixin btn-primary {\n  background: #000000;\n  border-color: #000000;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    background: #cf1767;\n    border-color: #cf1767;\n  }\n}\n\n@mixin btn-stroke {\n  background: transparent !important;\n  border: 0.2rem solid #000000;\n  color: #000000;\n\n  &:hover,\n  &:focus {\n    background: #000000 !important;\n    border: 0.2rem solid #000000;\n    color: #ffffff;\n  }\n}\n\n// Helpers\n\n@mixin full-width {\n  width: 100%;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={header:"header_header__w2BOs",headerMenuToggle:"header_headerMenuToggle__mpB3g",isClicked:"header_isClicked__OKKMj"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);