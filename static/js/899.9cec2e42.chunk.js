(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[899],{899:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});n(43);var r=n(475),s=n(551),i=n(446),a=n.n(i),o=n(579);const u=e=>{let{data:t}=e;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:t.link,children:t.title})}),(0,o.jsx)("time",{className:"published",children:a()(t.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:t.link,className:"image",children:(0,o.jsx)("img",{src:`${t.image}`,alt:t.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:t.desc})})]})})},c=[{title:"Retrieval-Augmented Generation: Python Documentation",subtitle:"RAG-PythonDocs",link:"https://github.com/mitchellhoesing/RAG-PythonDocs",image:"/images/projects/stockAIImage.jpg",date:"2024-11",desc:"RAG-PythonDocs is a Retrieval-Augmented Generation (RAG) application designed to assist junior developers in querying and understanding Python documentation in context. By leveraging state-of-the-art language models and embeddings, the tool provides clear and accurate answers to Python-related questions."},{title:"Sources and Methods: A Longitudinal Examination of CHI Papers' Data Sources and Study Methodologies",subtitle:"Master's Thesis",link:"https://drive.google.com/file/d/1yf1rPf0HFnDo2iyrLtXV-kJ9CfBXmnjw/view?usp=sharing",image:"/images/projects/stockAIImage.jpg",date:"2024-07",desc:"Sources and methods, my master's thesis, works toward enlightening readers about data source and methodology trends at the CHI research conference. To achieve this enlightenment, we leveraged GPT-3.5 to analyze research papers and assign as many labels in our data gathering methodology taxonomy as deemed appropriate. During the course of this project it evolved into an amalgamation of the longitudinal analysis of the CHI research conference with a study of large-language model multi-instance multi-label classification capabilities and exploring a framework for addressing these types of problems using large-language models."},{title:"Underwater Object Sonar Classification",subtitle:"IST597 Project",link:"https://drive.google.com/file/d/1N2U1Vn-bmUBWIkQB9IspYxFjcLpH9smR/view?usp=sharing",image:"/images/projects/pretrained-planeCropped.jpg",date:"2023-04",desc:"Underwater sonar classification investigates two methods for underwater sonar image object classification: context clustering and DeTr, a detection transformer. We classified images of the Underwater Acoustic Target Detection (UATD) dataset which consists of 9200 annotated sonar images. This data was released by Peng Cheng Laboratory in 2022. This project enlightened me to compute constraints when training neural networks with image data, what can alleviate these constraints, and various image data preprocessing techniques. "},{title:"Virtual Reality For Visualization And Training For Cross Laminated Timber Structures",subtitle:"Capstone Project",link:"https://drive.google.com/file/d/1GcxDeYnrLuOd_VZ_90uKzRGP63xOuEDQ/view?usp=sharing",image:"/images/projects/peavyhall.jpg",date:"2018-06",desc:"This project implements a virtual reality construction training environment for cross laminated timber structures (CLT). These structures are predominantly developed and built in Oregon. The reason for this is that Oregon has rich timber resources and an active industry. The purpose of this project is to educate architects about the design of CLTs by allowing them to explore the composition of the structure with various tools and functionalities."}],d=()=>(0,o.jsx)(s.A,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(r.N_,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),c.map((e=>(0,o.jsx)(u,{data:e},e.title)))]})})},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",o="day",u="week",c="month",d="quarter",h="year",l="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},$=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:$,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+$(r,2,"0")+":"+$(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(r,c),i=n-s<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:h,w:u,d:o,D:l,h:a,m:i,s:s,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=p;var D="$isDayjsObject",M=function(e){return e instanceof x||!(!e||!e[D])},j=function e(t,n,r){var s;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(s=i),n&&(w[i]=n,s=i);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;w[o]=t,s=o}return!r&&s&&(v=s),s||!r&&v},b=function(e,t){if(M(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},S=y;S.l=j,S.i=M,S.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function p(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var $=p.prototype;return $.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},$.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},$.$utils=function(){return S},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},$.isAfter=function(e,t){return b(e)<this.startOf(t)},$.isBefore=function(e,t){return this.endOf(t)<b(e)},$.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(e,t){var n=this,r=!!S.u(t)||t,d=S.p(e),f=function(e,t){var s=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?s:s.endOf(o)},g=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,p=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case h:return r?f(1,0):f(31,11);case c:return r?f(1,p):f(0,p+1);case u:var v=this.$locale().weekStart||0,w=(m<v?m+7:m)-v;return f(r?$-w:$+(6-w),p);case o:case l:return g(y+"Hours",0);case a:return g(y+"Minutes",1);case i:return g(y+"Seconds",2);case s:return g(y+"Milliseconds",3);default:return this.clone()}},$.endOf=function(e){return this.startOf(e,!1)},$.$set=function(e,t){var n,u=S.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[o]=d+"Date",n[l]=d+"Date",n[c]=d+"Month",n[h]=d+"FullYear",n[a]=d+"Hours",n[i]=d+"Minutes",n[s]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],g=u===o?this.$D+(t-this.$W):t;if(u===c||u===h){var m=this.clone().set(l,1);m.$d[f](g),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},$.set=function(e,t){return this.clone().$set(e,t)},$.get=function(e){return this[S.p(e)]()},$.add=function(r,d){var l,f=this;r=Number(r);var g=S.p(d),m=function(e){var t=b(f);return S.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===h)return this.set(h,this.$y+r);if(g===o)return m(1);if(g===u)return m(7);var p=(l={},l[i]=t,l[a]=n,l[s]=e,l)[g]||1,$=this.$d.getTime()+r*p;return S.w($,this)},$.subtract=function(e,t){return this.add(-1*e,t)},$.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),i=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,d=n.meridiem,h=function(e,n,s,i){return e&&(e[n]||e(t,r))||s[n].slice(0,i)},l=function(e){return S.s(i%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,c,3);case"MMMM":return h(c,o);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,u,2);case"ddd":return h(n.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return g(i,a,!0);case"A":return g(i,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,l,f){var g,m=this,p=S.p(l),$=b(r),y=($.utcOffset()-this.utcOffset())*t,v=this-$,w=function(){return S.m(m,$)};switch(p){case h:g=w()/12;break;case c:g=w();break;case d:g=w()/3;break;case u:g=(v-y)/6048e5;break;case o:g=(v-y)/864e5;break;case a:g=v/n;break;case i:g=v/t;break;case s:g=v/e;break;default:g=v}return f?g:S.a(g)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return w[this.$L]},$.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=j(e,t,!0);return r&&(n.$L=r),n},$.clone=function(){return S.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),k=x.prototype;return b.prototype=k,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",o],["$M",c],["$y",h],["$D",l]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,x,b),e.$i=!0),b},b.locale=j,b.isDayjs=M,b.unix=function(e){return b(1e3*e)},b.en=w[v],b.Ls=w,b.p={},b}()}}]);
//# sourceMappingURL=899.9cec2e42.chunk.js.map