(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"+O3j":function(e,t,r){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(o=r("5Uaf"))&&o.__esModule?o:{default:o};t.default=a,e.exports=a},"+UCP":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("zygG"),a=r("7xIC"),n=r.n(a),u=r("Xccw"),c=r("Ogf2");function i(){var e=Object(c.a)(),t=Object(u.a)("defaultCourse",null),r=Object(o.a)(t,1)[0];if(e&&e.courses.length>0){var a=!!r&&e.courses.some((function(e){return e.course.id===(null===r||void 0===r?void 0:r.id)}));return n.a.push("/course/[cid]/today","/course/".concat(a?r.id:e.courses[0].course.id,"/today")),!0}return!1}},13:function(e,t,r){r("w0yH"),e.exports=r("17vG")},"17vG":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nocourses",function(){return r("xzOm")}])},"5Uaf":function(e,t,r){"use strict";var o=r("IGGJ"),a=r("yWCo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("ERkP")),u=o(r("E+RQ")),c=o(r("7bJi")),i=function(e,t){return n.createElement(c.default,Object.assign({},e,{ref:t,icon:u.default}))};i.displayName="CloseCircleFilled";var s=n.forwardRef(i);t.default=s},C7qp:function(e,t,r){"use strict";var o=r("IGGJ"),a=r("yWCo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("ERkP")),u=o(r("PbTB")),c=o(r("7bJi")),i=function(e,t){return n.createElement(c.default,Object.assign({},e,{ref:t,icon:u.default}))};i.displayName="ExclamationCircleFilled";var s=n.forwardRef(i);t.default=s},"E+RQ":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"}},Ogf2:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r("VtSi"),a=r.n(o),n=r("QsI/"),u=r("JbCn"),c=r("zTld"),i=r("7xIC"),s=r.n(i),l=function(){var e,t=Object(i.useRouter)().pathname,r=Object(u.a)("api/v1/profile",Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.profile.index();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),o=r.data,l=r.error;if(401===(null===l||void 0===l?void 0:null===(e=l.response)||void 0===e?void 0:e.status)&&"/login"!==t)s.a.push("/login");else if(o)return o}},PbTB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"}},Psvu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"}},Xccw:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("ERkP"),a=!0;function n(e,t){var r=Object(o.useState)((function(){try{var r=a&&window.localStorage.getItem(e);return r?JSON.parse(r):t}catch(o){return console.error(o),t}})),n=r[0],u=r[1];return[n,function(t){try{var r=t instanceof Function?t(n):t;u(r),a&&window.localStorage.setItem(e,JSON.stringify(r))}catch(o){console.error(o)}},function(){try{u(null),a&&window.localStorage.removeItem(e)}catch(t){console.error(t)}}]}},"g+9h":function(e,t,r){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(o=r("C7qp"))&&o.__esModule?o:{default:o};t.default=a,e.exports=a},pKF9:function(e,t,r){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(o=r("wJyG"))&&o.__esModule?o:{default:o};t.default=a,e.exports=a},wJyG:function(e,t,r){"use strict";var o=r("IGGJ"),a=r("yWCo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("ERkP")),u=o(r("Psvu")),c=o(r("7bJi")),i=function(e,t){return n.createElement(c.default,Object.assign({},e,{ref:t,icon:u.default}))};i.displayName="CheckCircleFilled";var s=n.forwardRef(i);t.default=s},xzOm:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var o=r("ERkP"),a=r.n(o),n=r("Sqjh"),u=r("+UCP"),c=a.a.createElement;function i(){return Object(u.a)(),c(n.a,{status:"info",title:"None of your courses are using the Khoury Office Hours App.",subTitle:"Please reach out to your course coordinator or professor if you expected your course to be here."})}}},[[13,1,2,0,3,5,4,7,20]]]);
//# sourceMappingURL=nocourses.js.map