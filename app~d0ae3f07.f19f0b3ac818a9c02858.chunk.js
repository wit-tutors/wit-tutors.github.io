(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,n){n("GAND"),n("GmYv"),e.exports=n("b9nV")},Chpq:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var r=function(t,n,r,o){return new(r||(r=e))(function(e,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(a,c)}u((o=o.apply(t,n||[])).next())})},o=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},i=(function(){}(),function(){function e(e,t){this.http=e,this.chapters=[],this.url="",this.url=t}return e.prototype.fetch=function(e){return r(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this.http.fetch("https://"+e+"/index.json")];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}})})},e.prototype.fetchLab=function(){return r(this,void 0,void 0,function(){var e,t=this;return o(this,function(n){switch(n.label){case 0:return[4,this.fetch(this.url)];case 1:return e=n.sent(),this.properties=e,e.chapters.forEach(function(e){t.chapters.push(e)}),[2]}})})},e}())}).call(this,n("25Wt"))},VC3u:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("fkzy"),o=function(){return function(e,t){this.lo=e,this.courseUrl=t,this.lo.img=e.img,Object(r.a)(this.lo,t),this.units=e.los.filter(function(e){return"unit"==e.type}),this.panelVideos=e.los.filter(function(e){return"panelvideo"==e.type}),this.panelTalks=e.los.filter(function(e){return"paneltalk"==e.type}),this.standardLos=e.los.filter(function(e){return"unit"!==e.type&&"panelvideo"!==e.type&&"paneltalk"!==e.type})}}()},app:function(e,t,n){"use strict";n.r(t),n.d(t,"App",function(){return c});var r=n("aurelia-framework"),o=(n("70NS"),n("gfce")),i=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.courseRepo=e,this.title="Oileain"}return e.prototype.configureRouter=function(e,t){e.title="Tutors",e.map([{route:["course/*courseurl"],moduleId:"./components/course-view",title:"Module"},{route:["topic/*topicurl"],moduleId:"./components/topic-view",name:"topic",title:"Topic"},{route:"lab/*laburl/:step?",moduleId:"./components/lab-view",name:"lab",title:"Lab"},{route:"talks/*courseurl",moduleId:"./components/wall",name:"talk",title:"All Talks in Module"},{route:"labs/*courseurl",moduleId:"./components/wall",name:"lab",title:"All Labs in Module"},{route:"videos/*courseurl",moduleId:"./components/wall",name:"video",title:"All Videos in Module"},{route:"archives/*courseurl",moduleId:"./components/wall",name:"archive",title:"All Archives in Module"},{route:"githubs/*courseurl",moduleId:"./components/wall",name:"github",title:"All Repos in Module"}])},e=i([Object(r.c)(o.a),a("design:paramtypes",[o.a])],e)}()},"app.html":function(e,t){e.exports="<template>\n  <router-view></router-view>\n</template>\n\n\n"},b9jk:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return c});var r=n("VC3u"),o=function(t,n,r,o){return new(r||(r=e))(function(e,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(a,c)}u((o=o.apply(t,n||[])).next())})},i=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function a(e,t){var n=[];return e.forEach(function(e){e.type===t&&n.push(e),"unit"==e.type&&(n=n.concat(a(e.los,t)))}),n}var c=function(){function e(e,t){this.http=e,this.topicIndex=new Map,this.topicLos=[],this.walls=[],this.url=t}return e.prototype.fetch=function(e){return o(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return[4,this.http.fetch("https://"+e+"/index.json")];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}})})},e.prototype.fetchCourse=function(){return o(this,void 0,void 0,function(){var e,t,n,o,a,c;return i(this,function(i){switch(i.label){case 0:return[4,this.fetch(this.url)];case 1:for(e=i.sent(),this.lo=e,this.url=this.url,t=0,n=this.lo.topics;t<n.length;t++)o=n[t],a=this.url+"/"+o.folder,c=new r.a(o,a),this.topicIndex.set(c.lo.folder,c),this.topicLos.push(c.lo);return this.walls.push(this.allLos("talk")),this.walls.push(this.allLos("lab")),this.walls.push(this.allLos("video")),this.walls.push(this.allLos("github")),this.walls.push(this.allLos("archive")),[2]}})})},e.prototype.allLos=function(e){for(var t=[],n=0,r=this.lo.topics;n<r.length;n++){var o=r[n];t=t.concat(a(o.los,e))}return t},e}()}).call(this,n("25Wt"))},"components/course-view":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"CourseView",function(){return l});var r=n("aurelia-framework"),o=n("gfce"),i=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(t,n,r,o){return new(r||(r=e))(function(e,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(a,c)}u((o=o.apply(t,n||[])).next())})},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},l=function(){function e(e){this.courseRepo=e}return e.prototype.activate=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return t=this,[4,this.courseRepo.fetchCourse(e.courseurl)];case 1:return t.course=n.sent(),[2]}})})},e=i([Object(r.c)(o.a),a("design:paramtypes",[o.a])],e)}()}.call(this,n("25Wt"))},"components/course-view.html":function(e,t,n){e.exports='<template>\n  <require from="../resources/elements/header"></require>\n  <require from="../resources/elements/standard"></require>\n  <require from="../resources/elements/toc.html"></require>\n\n  <toc></toc>\n  <header title.one-way="course.lo.title"></header>\n  <standard los.one-way="course.topicLos"></standard>\n</template>\n'},"components/lab-view":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"LabView",function(){return f});var r=n("aurelia-framework"),o=n("gfce"),i=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(t,n,r,o){return new(r||(r=e))(function(e,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(a,c)}u((o=o.apply(t,n||[])).next())})},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},l=n("33yf"),s=n("1M3H")().use(n("t5Lw"),{});var f=function(){function e(e){this.courseRepo=e,this.content="",this.url="",this.navbarHtml=""}return e.prototype.refreshav=function(){var e=this;this.navbarHtml="",this.lab.chapters.forEach(function(t){var n=t==e.currentChapter?"class= uk-active":"";e.navbarHtml=e.navbarHtml.concat("<li "+n+'> <a href="#lab/'+e.url+"/"+t.shortTitle+'"> '+t.shortTitle+" </a> </li>")})},e.prototype.activate=function(e){return c(this,void 0,void 0,function(){var t,n,r,o;return u(this,function(i){switch(i.label){case 0:return t=e.laburl.substr(e.laburl.lastIndexOf("/")+1),null,t.startsWith("book")?(this.url=e.laburl,n=this,[4,this.courseRepo.fetchLab(this.url)]):[3,2];case 1:return n.lab=i.sent(),this.currentChapter=this.lab.chapters[0],[3,4];case 2:return this.url=l.dirname(e.laburl),r=this,[4,this.courseRepo.fetchLab(this.url)];case 3:r.lab=i.sent(),this.currentChapter=this.lab.chapters.find(function(e){return e.shortTitle==t}),i.label=4;case 4:return a=this.currentChapter.contentMd,c="img\\/",u="https://"+this.url+"/img/",o=a.replace(new RegExp(c,"g"),u),this.refreshav(),this.content=s.render(o),[2]}var a,c,u})})},e.prototype.attached=function(){},e=i([Object(r.c)(o.a),a("design:paramtypes",[o.a])],e)}()}.call(this,n("25Wt"))},"components/lab-view.html":function(e,t){e.exports='<template>\n  <style>\n    body {\n      font-family: "Open Sans", "Helvetica", "Helvetica Neue",  "Arial", sans-serif;\n      font-size:90%;\n      color: black;\n    }\n\n    p {\n      margin: 0.5em;\n    }\n\n    pre code {\n      font-family: "Monaco";\n      font-size: 100%;\n    }\n\n    img {\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n      margin:10px;\n    }\n\n    h1, h2, h3 {\n      border-bottom:thin solid black;\n      margin-bottom: 0.5em;\n      margin-top: 1em;\n    }\n\n    h1 {\n      font-style:italic;\n      font-size:130%;\n    }\n\n    h2 {\n      font-size:110%;\n    }\n\n    h3 {\n      font-size:100%;\n    }\n\n  </style>\n\n  <div uk-sticky>\n    <nav class="uk-navbar">\n      <div class="uk-navbar-left">\n      </div>\n      <div class="uk-navbar-right">\n        <ul class="uk-subnav uk-background-secondary uk-subnav-pill" innerhtml="${navbarHtml}">\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <div class="uk-container uk-container-expand">\n    <div innerhtml="${content}"></div>\n  </div>\n</template>\n'},"components/topic-view":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"TopicView",function(){return l});var r=n("aurelia-framework"),o=n("gfce"),i=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(t,n,r,o){return new(r||(r=e))(function(e,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(a,c)}u((o=o.apply(t,n||[])).next())})},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},l=function(){function e(e){this.courseRepo=e}return e.prototype.activate=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return t=this,[4,this.courseRepo.fetchTopic(e.topicurl)];case 1:return t.topic=n.sent(),[2]}})})},e=i([Object(r.c)(o.a),a("design:paramtypes",[o.a])],e)}()}.call(this,n("25Wt"))},"components/topic-view.html":function(e,t,n){e.exports='<template>\n  <require from="../resources/elements/header"></require>\n  <require from="../resources/elements/card"></require>\n  <require from="../resources/elements/standard"></require>\n  <require from="../resources/elements/units"></require>\n  <require from="../resources/elements/panel-videos"></require>\n\n  <header title.one-way="topic.lo.title"></header>\n\n  <div class="uk-container uk-padding-small">\n    <panel-videos videos.one-way="topic.panelVideos"></panel-videos>\n    <units units.one-way="topic.units"></units>\n    <standard los.one-way="topic.standardLos"></standard>\n  </div>\n</template>\n'},"components/wall":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Wall",function(){return l});var r=n("gfce"),o=n("aurelia-framework"),i=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(t,n,r,o){return new(r||(r=e))(function(e,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(a,c)}u((o=o.apply(t,n||[])).next())})},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},l=function(){function e(e){this.courseRepo=e,this.title=""}return e.prototype.activate=function(e,t){return c(this,void 0,void 0,function(){var n;return u(this,function(r){switch(r.label){case 0:return n=this,[4,this.courseRepo.fetchWall(e.courseurl,t.name)];case 1:return n.los=r.sent(),this.title=t.title,[2]}})})},e.prototype.determineActivationStrategy=function(){return"invoke-lifecycle"},e=i([Object(o.c)(r.a),a("design:paramtypes",[r.a])],e)}()}.call(this,n("25Wt"))},"components/wall.html":function(e,t,n){e.exports='<template>\n  <require from="../resources/elements/header"></require>\n  <require from="../resources/elements/standard"></require>\n\n  <header title.one-way="title"></header>\n  <standard los.one-way="los"></standard>\n</template>\n'},fkzy:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});function r(e,t){e.img="https://"+t+"/"+e.img,"http"!=e.link.substr(0,4)&&(e.link="https://"+t+"/"+e.link);for(var n=0,r=e.los;n<r.length;n++){var o=r[n];o.img="https://"+t+"/"+o.folder+"/"+o.img,"http"!=o.link.substr(0,4)&&(o.link="https://"+t+"/"+o.folder+"/"+o.link);for(var i=0,a=o.los;i<a.length;i++){var c=a[i];c.img="https://"+t+"/"+o.folder+"/"+c.folder+"/"+c.img,"http"!=c.link.substr(0,4)&&(c.link="https://"+t+"/"+o.folder+"/"+c.folder+"/"+c.link)}}}}).call(this,n("25Wt"))},gfce:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return p});var r=n("qQke"),o=n("aurelia-framework"),i=n("b9jk"),a=n("33yf"),c=n("Chpq"),u=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(t,n,r,o){return new(r||(r=e))(function(e,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(a,c)}u((o=o.apply(t,n||[])).next())})},f=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},p=function(){function e(e){this.http=e,this.courseUrl="",this.topicUrl=""}return e.prototype.getCourse=function(e){return s(this,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return this.course&&this.course.url===e?[3,2]:(this.courseUrl=e,this.course=new i.a(this.http,e),[4,this.course.fetchCourse()]);case 1:t.sent(),t.label=2;case 2:return[2]}})})},e.prototype.fetchCourse=function(e){return s(this,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return[4,this.getCourse(e)];case 1:return t.sent(),[2,this.course]}})})},e.prototype.fetchTopic=function(e){return s(this,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return[4,this.getCourse(a.dirname(e))];case 1:return t.sent(),this.topicUrl=e,[2,this.course.topicIndex.get(a.basename(e))]}})})},e.prototype.fetchLab=function(e){return s(this,void 0,void 0,function(){var t;return f(this,function(n){switch(n.label){case 0:return[4,(t=new c.a(this.http,e)).fetchLab()];case 1:return n.sent(),[2,t]}})})},e.prototype.fetchWall=function(e,t){return s(this,void 0,void 0,function(){return f(this,function(n){switch(n.label){case 0:return[4,this.getCourse(e)];case 1:return n.sent(),[2,this.course.allLos(t)]}})})},e.prototype.fetchCourseProperties=function(e){return s(this,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return[4,this.getCourse(e)];case 1:return t.sent(),[2,this.course.lo.properties]}})})},e=u([Object(o.c)(r.a),l("design:paramtypes",[r.a])],e)}()}).call(this,n("25Wt"))},main:function(e,t,n){"use strict";var r={debug:!1,testing:!1},o=(n("70NS"),n("25Wt"));function i(e){e.use.standardConfiguration().feature("resources/index"),r.debug&&e.use.developmentLogging(),r.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot("app")})}n.d(t,"configure",function(){return i}),o.config({warnings:{wForgottenReturn:!1}})},"resources/elements/card":function(e,t,n){"use strict";n.r(t),n.d(t,"Card",function(){return u});var r=n("aurelia-framework"),o=n("gfce"),i=n("33yf"),a=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e){this.courseRepo=e}return e.prototype.attached=function(){var e=i.dirname(this.lo.link).replace(/(^\w+:|^)\/\//,"");switch(this.lo.type){case"topic":this.link="/#/topic/"+e;break;case"lab":this.link="/#/lab/"+e;break;default:this.link=this.lo.link}},a([r.b,c("design:type",Object)],e.prototype,"lo",void 0),e=a([Object(r.c)(o.a),c("design:paramtypes",[o.a])],e)}()},"resources/elements/card.html":function(e,t){e.exports='<template>\n  <div class="uk-card uk-card-default uk-card-small uk-text-center uk-text-baseline uk-animation-fade">\n    <a href="${link}">\n      <div class="uk-card-header">\n        <h3> ${lo.title}</h3>\n      </div>\n      <div class="uk-card-body">\n        <img src="${lo.img}">\n      </div>\n    </a>\n    <div class="uk-card-footer">\n      <div innerhtml="${lo.objectives}"></div>\n    </div>\n  </div>\n</template>\n'},"resources/elements/header":function(e,t,n){"use strict";n.r(t);var r=n("aurelia-framework"),o=n("gfce"),i={course:"fas fa-book",topic:"fas fa-sitemap",talk:"fas fa-object-group",reference:"fas fa-object-group",lab:"fas fa-flask",archive:"fas fa-file-archive",panelvideo:"fab fa-youtube",video:"fab fa-youtube",adobeconnect:"far fa-address-card",slack:"fab fa-slack",moodle:"fas fa-graduation-cap",github:"fab fa-github",youtube:"fab fa-youtube-square",moduleHome:"fas fa-home",programHome:"fas fa-th",toc:"fas fa-bars",film:"fas fa-film",web:"fas fa-bookmark",unit:"fas fa-bookmark"},a={course:"#009688",topic:"#009688",talk:"#009688",reference:"#009688",lab:"#00BCD4",archive:"#453F78",panelvideo:"#F44336",video:"#F44336",adobeconnect:"grey",slack:"#573852",moodle:"#f87f2a",github:"black",youtube:"red",moduleHome:"",programHome:"",toc:"",film:"red",web:""};n.d(t,"Header",function(){return l});var c=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e){this.courseRepo=e,this.moduleProperties={},this.companions=[],this.walls=[],this.moduleProperties=this.courseRepo.course.lo.properties,this.course=this.courseRepo.course,this.homeicon="fas fa-home fa-3x",this.homelink="#/course/"+this.courseRepo.courseUrl,this.hometooltip="To the top level Topics for this Module",this.createCompanionBar(),this.createWallBar()}return e.prototype.createCompanionBar=function(){this.moduleProperties.adobeconnect&&this.companions.push(this.createCompanionLink("adobeconnect")),this.moduleProperties.moodle&&this.companions.push(this.createCompanionLink("moodle")),this.moduleProperties.slack&&this.companions.push(this.createCompanionLink("slack")),this.moduleProperties.youtube&&this.companions.push(this.createCompanionLink("youtube"))},e.prototype.createCompanionLink=function(e){return{link:this.moduleProperties[e],icon:i[e],colour:a[e]}},e.prototype.createWallBar=function(){this.course.walls[0].length>0&&this.walls.push(this.createWallLink("talk")),this.course.walls[1].length>0&&this.walls.push(this.createWallLink("lab")),this.course.walls[2].length>0&&this.walls.push(this.createWallLink("video")),this.course.walls[3].length>0&&this.walls.push(this.createWallLink("github")),this.course.walls[4].length>0&&this.walls.push(this.createWallLink("archive"))},e.prototype.createWallLink=function(e){return{link:"#/"+e+"s/"+this.courseRepo.courseUrl,icon:i[e],colour:a[e]}},c([r.b,u("design:type",String)],e.prototype,"title",void 0),e=c([Object(r.c)(o.a),u("design:paramtypes",[o.a])],e)}()},"resources/elements/header.html":function(e,t,n){e.exports='<template>\n  <require from="./home.html"></require>\n  <require from="./icon-nav-bar"></require>\n\n  <div class="uk-flex uk-flex-center uk-flex-middle uk-text-center uk-padding-small" uk-grid>\n\n    <div class="uk-padding">\n      <a href="#offcanvas-usage" uk-toggle title="Table of Contents" pos="bottom" uk-tooltip>\n        <i class="fas fa-bars fa-3x"> </i>\n      </a>\n    </div>\n\n    <div class="uk-width-1-2@m  uk-card uk-card-default uk-padding-small">\n      <div uk-grid>\n        <div class="uk-width-1-5@m">\n          <i class="${moduleProperties.faPanelicon} fa-4x" style="color:${moduleProperties.faColour}"></i>\n        </div>\n        <div class="uk-width-expand@m uk-text-left">\n          <h2> ${title} </h2>\n          <div class="uk-text-muted uk-text-small">\n            ${moduleProperties.credits}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="uk-padding">\n      <a href="${homelink}"> <i class="${homeicon} fa-4x"> </i></a>\n    </div>\n\n    <icon-nav-bar nav.one-way="companions"></icon-nav-bar>\n    <icon-nav-bar nav.one-way="walls"></icon-nav-bar>\n\n  </div>\n</template>\n'},"resources/elements/home.html":function(e,t){e.exports='<template bindable="icon,link,tip">\n  <a href="${link}" uk-tooltip="title:${tip}; pos:bottom">  <i class="${icon}"> </i></a>\n</template>\n'},"resources/elements/icon-nav-bar":function(e,t,n){"use strict";n.r(t),n.d(t,"IconNavBar",function(){return a});var r=n("aurelia-framework"),o=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return o([r.b,i("design:type",Array)],e.prototype,"nav",void 0),e}()},"resources/elements/icon-nav-bar.html":function(e,t){e.exports='<template>\n  <div class="uk-card uk-card-default uk-padding-small">\n    <ul class="uk-iconnav">\n      <div repeat.for="icon of nav">\n        <li>\n          <a href="${icon.link}"> <i class="${icon.icon} fa-2x" style="color:${icon.colour}"></i></a>\n        </li>\n      </div>\n    </ul>\n  </div>\n</template>\n'},"resources/elements/panel-videos":function(e,t,n){"use strict";n.r(t),n.d(t,"PanelVideos",function(){return a});var r=n("aurelia-framework"),o=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return o([r.b,i("design:type",Array)],e.prototype,"videos",void 0),e}()},"resources/elements/panel-videos.html":function(e,t,n){e.exports='<template>\n  <require from="./card"></require>\n\n  <div repeat.for="video of videos">\n    <div class="uk-card uk-card-default uk-box-shadow-xlarge">\n      <div class="uk-card-header">\n        <h5 class="uk-card-title"> ${video.title} </h5>\n      </div>\n      <div class="uk-card-media-top">\n        <iframe width="1280" height="720" src="https://www.youtube.com/embed/${video.videoid}"\n                allow="autoplay; encrypted-media" allowfullscreen uk-responsive></iframe>\n      </div>\n    </div>\n    <br>\n  </div>\n</template>\n'},"resources/elements/standard":function(e,t,n){"use strict";n.r(t),n.d(t,"Standard",function(){return a});var r=n("aurelia-framework"),o=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return o([r.b,i("design:type",Array)],e.prototype,"los",void 0),e}()},"resources/elements/standard.html":function(e,t,n){e.exports='<template>\n  <require from="./card"></require>\n\n  <div class="uk-container uk-padding-small">\n    <div class="uk-child-width-1-4@s uk-flex uk-flex-center" uk-grid uk-height-match="target: .uk-card">\n      <div repeat.for="lo of los">\n        <div class="uk-card uk-card-default uk-card-small uk-text-center uk-text-baseline uk-animation-fade">\n          <card lo.one-way="lo"></card>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n'},"resources/elements/toc.html":function(e,t){e.exports='<template>\n  <div class="uk-offcanvas-content">\n    <div id="offcanvas-usage" uk-offcanvas>\n      <div class="uk-offcanvas-bar">\n        <button class="uk-offcanvas-close" type="button" uk-close></button>\n        {% for topic in lo.los %}\n        {% if (not topic.properties.disable) %}\n        <ul class="uk-nav">\n          <li class="uk-parent">\n            <a class="item" href="{{ lo.properties.courseurl }}/{{ topic.folder }}/{{ topic.link }}">\n              {{ icon(topic.lotype) }}{{ topic.title }}\n            </a>\n            <ul class="uk-nav-sub">\n              {% for resource in topic.los %}\n              {% if (not resource.properties.disable) %}\n              <li>\n                {% if resource.lotype == \'panelvideo\' %}\n                <a class="item"\n                   href="http://www.youtube.com/watch?v={{ resource.videoid }}">{{ icon(\'panelvideo\') }}{{ resource.title }}</a>\n                {% else %}\n                {% if resource.lotype == \'web\' %}\n                <a class="item"\n                   href="{{ resource.link }}">{{ icon(resource.lotype) }}{{ resource.title }}\n                </a>\n                {% else %}\n                {% if resource.lotype == \'unit\' %}\n                <div class="item"> {{ icon("unit") }} {{ resource.title }}</div>\n                <ul class="uk-nav-sub">\n                  {% for lo in resource.los %}\n                  <div>\n                    <a class="item"\n                       href="{{ lo.properties.courseurl }}/{{ topic.folder }}/{{ lo.parent.folder }}/{{ lo.folder }}/{{ lo.link }}">{{ icon(lo.lotype) }}{{ lo.title }}\n                      {% if resource.lotype == \'talk\' and resource.videoid != \'none\' %}\n                      {{ icon("film") }}\n                      {% endif %}\n                    </a>\n                  </div>\n                  {% endfor %}\n                </ul>\n                {% else %}\n                <a class="item"\n                   href="{{ lo.properties.courseurl }}/{{ topic.folder }}/{{ resource.folder }}/{{ resource.link }}">{{ icon(resource.lotype) }}{{ resource.title }}\n                  {% if resource.lotype == \'talk\' and resource.videoid != \'none\' %}\n                  {{ icon("film") }}\n                  {% endif %}\n                </a>\n                {% endif %}\n                {% endif %}\n                {% endif %}\n              </li>\n              {% endif %}\n              {% endfor %}\n            </ul>\n          </li>\n        </ul>\n        {% endif %}\n        {% endfor %}\n      </div>\n    </div>\n  </div>\n</template>\n'},"resources/elements/unit":function(e,t,n){"use strict";n.r(t),n.d(t,"Unit",function(){return a});var r=n("aurelia-framework"),o=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e.prototype.attached=function(){this.panelVideos=this.unit.los.filter(function(e){return"panelvideo"==e.type}),this.standardLos=this.unit.los.filter(function(e){return"panelvideo"!=e.type})},o([r.b,i("design:type",Object)],e.prototype,"unit",void 0),e}()},"resources/elements/unit.html":function(e,t,n){e.exports='<template>\n  <require from="./card"></require>\n  <require from="./panel-videos"></require>\n\n  <div class="uk-card uk-card-body uk-background-default">\n    <h3 class="uk-card-title"> ${unit.title} </h3>\n    <hr>\n    <panel-videos videos.one-way="panelVideos"></panel-videos>\n    <br>\n    <div class="uk-child-width-1-4@s uk-flex uk-flex-center" uk-grid uk-height-match="target: > div > .uk-card">\n      <div repeat.for="lo of standardLos">\n        <div>\n          <card lo.one-way="lo"></card>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</template>\n'},"resources/elements/units":function(e,t,n){"use strict";n.r(t),n.d(t,"Units",function(){return a});var r=n("aurelia-framework"),o=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return o([r.b,i("design:type",Array)],e.prototype,"units",void 0),e}()},"resources/elements/units.html":function(e,t,n){e.exports='<template>\n  <require from="./unit"></require>\n\n  <div repeat.for="unit of units">\n    <unit unit.one-way="unit"></unit>\n    <hr class="uk-divider-icon">\n  </div>\n</template>\n'},"resources/index":function(e,t,n){"use strict";function r(e){}n.r(t),n.d(t,"configure",function(){return r})}},[[0,1,4,8,16,7,9,20,2,10,5,17,19,12,6,13,11,3,15,14,18]]]);
//# sourceMappingURL=app~d0ae3f07.f19f0b3ac818a9c02858.bundle.map