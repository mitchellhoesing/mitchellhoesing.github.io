(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[952],{952:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});n(43);var s=n(475),r=n(551),i=n(579);const a=e=>{let{data:t}=e;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((e=>(0,i.jsx)(a,{data:e},e.school)))]})};o.defaultProps={data:[]};const u=o;var c=n(446),l=n.n(c),d=n(574);const h=e=>{let{data:{name:t,position:n,url:s,startDate:r,endDate:a,summary:o,highlights:u}}=e;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:s,children:t})," - ",n]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",l()(r).format("MMMM YYYY")," - ",a?l()(a).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,i.jsx)(d.Ay,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,u?(0,i.jsx)("ul",{className:"points",children:u.map((e=>(0,i.jsx)("li",{children:e},e)))}):null]})},f=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,i.jsx)(h,{data:e},`${e.name}-${e.position}`)))]})};f.defaultProps={data:[]};const m=f,p=e=>{let{data:t,last:n}=e;return(0,i.jsxs)("li",{className:"course-container",children:[(0,i.jsxs)("a",{href:t.link,children:[(0,i.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,i.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,i.jsx)("div",{className:"course-dot",children:(0,i.jsx)("p",{className:"course-name",children:" \u2022"})})]})};p.defaultProps={last:!1};const g=p,v=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,i.jsx)(g,{data:t,last:n===e.length-1},t.title))),y=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"courses",children:[(0,i.jsx)("div",{className:"link-to",id:"courses"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Selected Courses"})}),(0,i.jsx)("ul",{className:"course-list",children:v(t)})]})};y.defaultProps={data:[]};const $=y,S=()=>(0,i.jsxs)("div",{className:"references",children:[(0,i.jsx)("div",{className:"link-to",id:"references"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)(s.N_,{to:"/contact",children:(0,i.jsx)("h3",{children:"References are available upon request"})})})]}),x=[{title:"Machine Learning and Artificial Intelligence",number:"CMPSC 448",link:"https://www.cse.psu.edu/~mzm616/courses/cmpsc448/index.html",university:"Pennsylvania State University"},{title:"Foundations of Deep Learning",number:"IST 597",link:"https://clgiles.ist.psu.edu/IST597/index.html",university:"Pennsylvania State University"},{title:"Foundations of Theories and Methods of Information Sciences and Technology Research",number:"IST 504",link:"https://bulletins.psu.edu/university-course-descriptions/graduate/ist/",university:"Pennsylvania State University"},{title:"Foundations of Theories and Methods of Information Sciences and Technology Research",number:"IST 505",link:"https://bulletins.psu.edu/university-course-descriptions/graduate/ist/",university:"Pennsylvania State University"},{title:"Data Mining: Techniques and Applications",number:"IST 557",link:"https://sites.psu.edu/lulin/ist557-fall20223/",university:"Pennsylvania State University"},{title:"Data Mining II",number:"IST 558",link:"https://bulletins.psu.edu/university-course-descriptions/graduate/ist/",university:"Pennsylvania State University"},{title:"Applied Statistics",number:"STAT 500",link:"https://online.stat.psu.edu/stat500/",university:"Pennsylvania State University"},{title:"Matrix & Power Series Methods",number:"MTH 306",link:"https://catalog.oregonstate.edu/courses/mth/",university:"Oregon State University"},{title:"Software Engineering I",number:"CS 344",link:"https://catalog.oregonstate.edu/search/?P=CS%20344",university:"Oregon State University"},{title:"Software Engineering II",number:"CS 362",link:"https://catalog.oregonstate.edu/search/?P=CS%20362",university:"Oregon State University"},{title:"Analysis of Algorithms",number:"CS 325",link:"https://catalog.oregonstate.edu/search/?P=CS%20325",university:"Oregon State University"}],M=[{school:"Pennsylvania State University",degree:"M.S. Informatics",link:"https://www.psu.edu/",year:2024},{school:"Oregon State University",degree:"B.S. Computer Science",link:"https://oregonstate.edu/",year:2019}],j=[{name:"Pennsylvania State University",position:"Research Assistant",url:"https://plaintext.psu.edu/",startDate:"2022-12",endDate:"2024-07",highlights:["Progressed research in longitudinal quantitative analyses using large-language models.","Support the PLAINTEXT Lab with software development, statistical work and writing, and research paper writing.","Present research papers to the PLAINTEXT Lab on interesting and related work to our own."]},{name:"Intel",position:"Automation Quality Analyst",url:"https://www.intel.com/content/www/us/en/homepage.html",startDate:"2021-7",endDate:"2022-11",highlights:["Analyzed and/or patched automation test failures.","Detail bugs and assign Jira tickets to appropriate team and domain owner.","Provide support to adjacent teams in the form of software development to meet nearing deadlines."]},{name:"School of Civil and Construction Engineering at Oregon State University",position:"Industry Liaison Assistant",url:"https://engineering.oregonstate.edu/CCE",startDate:"2018-8",endDate:"2019-8",highlights:["Compile, calculate, and visualize school graduation and employment statistics.","Maintain a directory of industry contacts in Salesforce.","Support the organization and execution of events with industry partners.","Automate frequent tasks with Python scripts."]},{name:"Top Deck Hobbies",position:"Store Manager",startDate:"2014-5",endDate:"2016-5",highlights:["Cultivated an efficient shipping team through leadership and coworking.","Ship an average of 600 online orders of trading-card game cards daily.","Maintain relationships with and place orders to product distributors.","Cultivated an efficient shipping team through leadership and coworking.","Operate in-store weekly and regional trading-card game tournaments.","Travel the West Coast of the United States to represent the company at Magic: the Gathering tournaments by hosting a booth to buy and sell trading cards."]}],w={Education:()=>(0,i.jsx)(u,{data:M}),Experience:()=>(0,i.jsx)(m,{data:j}),References:()=>(0,i.jsx)(S,{}),Courses:()=>(0,i.jsx)($,{data:x})},b=()=>(0,i.jsx)(r.A,{title:"Resume",description:"Mitchell Hoesing's Resume.",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{children:(0,i.jsx)(s.N_,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:Object.keys(w).map((e=>(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:`#${e.toLowerCase()}`,children:e})},e)))})]})}),Object.entries(w).map((e=>{let[t,n]=e;return(0,i.jsx)(n,{},t)}))]})})},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,s="millisecond",r="second",i="minute",a="hour",o="day",u="week",c="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+v(s,2,"0")+":"+v(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(s,c),i=n-r<0,a=t.clone().add(s+(i?-1:1),c);return+(-(s+(n-r)/(i?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:u,d:o,D:h,h:a,m:i,s:r,ms:s,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",S={};S[$]=g;var x="$isDayjsObject",M=function(e){return e instanceof D||!(!e||!e[x])},j=function e(t,n,s){var r;if(!t)return $;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(r=i),n&&(S[i]=n,r=i);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var o=t.name;S[o]=t,r=o}return!s&&r&&($=r),r||!s&&$},w=function(e,t){if(M(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},b=y;b.l=j,b.i=M,b.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(m);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return b},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return w(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<w(e)},v.$g=function(e,t,n){return b.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,s=!!b.u(t)||t,l=b.p(e),f=function(e,t){var r=b.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return s?r:r.endOf(o)},m=function(e,t){return b.w(n.toDate()[e].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case d:return s?f(1,0):f(31,11);case c:return s?f(1,g):f(0,g+1);case u:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return f(s?v-S:v+(6-S),g);case o:case h:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,u=b.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[i]=l+"Minutes",n[r]=l+"Seconds",n[s]=l+"Milliseconds",n)[u],m=u===o?this.$D+(t-this.$W):t;if(u===c||u===d){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[b.p(e)]()},v.add=function(s,l){var h,f=this;s=Number(s);var m=b.p(l),p=function(e){var t=w(f);return b.w(t.date(t.date()+Math.round(e*s)),f)};if(m===c)return this.set(c,this.$M+s);if(m===d)return this.set(d,this.$y+s);if(m===o)return p(1);if(m===u)return p(7);var g=(h={},h[i]=t,h[a]=n,h[r]=e,h)[m]||1,v=this.$d.getTime()+s*g;return b.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=e||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),i=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=n.meridiem,d=function(e,n,r,i){return e&&(e[n]||e(t,s))||r[n].slice(0,i)},h=function(e){return b.s(i%12||12,e,"0")},m=l||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(p,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return o+1;case"MM":return b.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,u,2);case"ddd":return d(n.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(s,h,f){var m,p=this,g=b.p(h),v=w(s),y=(v.utcOffset()-this.utcOffset())*t,$=this-v,S=function(){return b.m(p,v)};switch(g){case d:m=S()/12;break;case c:m=S();break;case l:m=S()/3;break;case u:m=($-y)/6048e5;break;case o:m=($-y)/864e5;break;case a:m=$/n;break;case i:m=$/t;break;case r:m=$/e;break;default:m=$}return f?m:b.a(m)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return S[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=j(e,t,!0);return s&&(n.$L=s),n},v.clone=function(){return b.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),k=D.prototype;return w.prototype=k,[["$ms",s],["$s",r],["$m",i],["$H",a],["$W",o],["$M",c],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,D,w),e.$i=!0),w},w.locale=j,w.isDayjs=M,w.unix=function(e){return w(1e3*e)},w.en=S[$],w.Ls=S,w.p={},w}()}}]);
//# sourceMappingURL=952.b9474d46.chunk.js.map