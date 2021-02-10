(this["webpackJsonpeifert-portfolio"]=this["webpackJsonpeifert-portfolio"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(4),r=t.n(i),o=(t(10),t(2)),c={PLCC:{caption:"Series of print collateral and mobile app design for the launch of the Burlington Private Label Credit Card Program.",count:9,title:"PLCC"},Textiles:{caption:"Logo, web, mobile and textile designs for an online shop selling home products, shoes and accessories.",count:20,title:"Textiles"},Harlem:{caption:"Illustrations for a Burlington grand opening event in Harlem, New York. The creative is a representation of the vintage Harlem community and modern-day fashion styles for women.",count:6,title:"Harlem"},BabyDepot:{caption:"Logo, landing page and in-store sign package for Baby Depot \u2013 Burlington\u2019s sister company, selling the most mom-trusted brands in baby products like apparel, travel gear, feeding and more.",count:13,title:"Baby Depot"},Beauty:{caption:"In-store sign package for Burlington\u2019s Beauty Department. Creative assets include end caps, category signs and category inserts with custom illustrations.",count:12,title:"Beauty"},Animations:{caption:"A collection of animation designs for Burlington digital ads, emails and social cover art.",count:10,title:"Digital Animations",arr:[]},Holiday:{caption:"Web design, animation, illustrations, and custom typography for Burlington\u2019s \u201cThis Way to Holiday HQ\u201d Christmas campaign.",count:16,title:"Holiday"},AOE:{caption:"Logo and event banner design for AOE University\u2019s island-resort themed, 2018 Art Ed Fest \u2013 a conference for art teachers across the globe, hosted in the Dominican Republic.",count:2,title:"AOE University"},Peace:{caption:"Logo ideations, t-shirts, and web page designs for Foundation for Peace, a non- profit organization that helps restore communities and the lives of many people in Haiti, the Dominican Republic and Kenya through building relationships, offering hope and creating long- lasting change.",count:9,title:"Foundation for Peace"},Home:{caption:"In-store signage and custom line drawings for Burlington\u2019s Home Department. Creative assets include a free-standing poster and tower topper inserts.",count:9,title:"Home"},PMGSC:{caption:"Logo, event shirt and group champions banner for the 2020 Pennsylvania Men\u2019s Gymnastics State Championships, held in Upper Chichester, PA.",count:5,title:"Pennsylvania Men's Gymnastic State Championships"},WomenHeart:{caption:"Cause marketing campaign for WomenHeart to help bring awareness to heart disease, the leading cause of death in women. The creative was used as the face of the campaign and to help support Burlington\u2019s partnership with this prestigious organization. The design assets convey a powerful message to the viewers and give an in-depth look at how heart disease has impacted the lives of women all around the world.",count:7,title:"WomenHeart"}},m=function(e){for(var a=e.page,t=(e.func,e.isMobile),n=c[a].count,i=[],r=1;r<=n;r++){var o=r%2===0?t?"line-left-mobile":"line-left":t?"line-right-mobile":"line-right",m=n===r,s="Animations"===a,d="Holiday"===a&&2===r||s;console.log(r);var g=l.a.createElement("img",{alt:"",className:"profile-img ".concat(s&&r>1&&r<8?"translated":""),src:"images/profiles/".concat(a,"/").concat(a,"-").concat(r,".").concat(d?"gif":"jpg")});i.push(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"profile-img-div"},g),l.a.createElement("div",{className:m?"":o})))}return l.a.createElement("div",{className:"".concat(t?"profile-img-container-mobile":"profile-img-container-desktop")},i)},s=function(e){var a=e.page,t=e.func,n=c[a],i=n.title,r=n.caption,o=g.indexOf(a),m=g[o-1],s=g[o+1],d=g[g.length-1],y=g[0];return l.a.createElement("div",{className:"profile-container"},l.a.createElement("div",{className:"profile-info-div"},l.a.createElement("div",{className:"profile-name textCenter"},i),l.a.createElement("p",null,r),l.a.createElement("div",{className:"controls textCenter mx-auto"},l.a.createElement("span",{onClick:function(){t(void 0===m?d:m),p()},className:"control-left control cursor"},"<  PREV"),"/",l.a.createElement("span",{onClick:function(){t(void 0===s?y:s),p()},className:"control-right control cursor"},"NEXT  >"))))},d=function(e){var a=e.page,t=e.func,n=e.isMobile,i=c[a],r=i.title,o=i.caption,m=g.indexOf(a),s=g[m-1],d=g[m+1],y=g[g.length-1],E=g[0];return n?l.a.createElement("div",{className:"profile-container-mobile"},l.a.createElement("div",{className:"profile-info-div-mobile"},l.a.createElement("div",{className:"profile-name-mobile textCenter"},r),l.a.createElement("p",null,o),l.a.createElement("div",{className:"controls textCenter mx-auto"},l.a.createElement("span",{onClick:function(){t(void 0===s?y:s),p()},className:"control-left control cursor"},"<  PREV"),"/",l.a.createElement("span",{onClick:function(){t(void 0===d?E:d),p()},className:"control-right control cursor"},"NEXT  >")))):l.a.createElement("div",{className:"profile-container-mobile"},l.a.createElement("div",{className:"profile-info-div-mobile"},l.a.createElement("div",{className:"profile-name-mobile"},r),l.a.createElement("p",null,o),l.a.createElement("div",{className:"controls textCenter mx-auto"},l.a.createElement("span",{onClick:function(){t(void 0===s?y:s),p()},className:"control-left control cursor"},"<  PREV"),"/",l.a.createElement("span",{onClick:function(){t(void 0===d?E:d),p()},className:"control-right control cursor"},"NEXT  >"))))},g=["PLCC","Textiles","Harlem","BabyDepot","Beauty","Animations","Holiday","AOE","Peace","Home","PMGSC","WomenHeart"],y=function(e){var a=document.getElementsByClassName("container"),t=document.getElementsByClassName("desktop");a.length&&t.length&&(t[0].style.display="block",t[0].style.position="relative",t[0].style.top="auto",t[0].style.height="auto",a[0].style.height="3700px"),e&&p()},p=function(){setTimeout((function(){window.scrollTo({behavior:"smooth",top:230})}),300)},E=function(e){var a=document.getElementsByClassName("container"),t=document.getElementsByClassName("desktop");y(),"about"===e?a[0].style.height="1700px":"contact"===e?a[0].style.height="1000px":"home"!==e&&(t[0].style.display="block",t[0].style.position="sticky",t[0].style.top="-200px",t[0].style.height="0px")},h=function(e){e.page;var a=e.func;return l.a.createElement("div",{className:"header"},l.a.createElement("img",{onClick:function(){a("home"),y()},className:"logo",src:"images/main/desktop/EifertDesign-Logo",alt:"logo"}),l.a.createElement("div",{id:"navList"},l.a.createElement("span",{className:"cursor",onClick:function(){a("home"),y(!0)}},"WORK"),l.a.createElement("span",{className:"cursor",onClick:function(){return a("contact")}},"CONTACT"),l.a.createElement("span",{className:"cursor",onClick:function(){return a("about")}},"ABOUT")))},u=function(e){var a=e.page,t=e.func,i=Object(n.useState)(!1),r=Object(o.a)(i,2),c=r[0],m=r[1];return Object(n.useEffect)((function(){m(!1)}),[a]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"dFlex justifyContentCenter alignItemsCenter"},l.a.createElement("img",{onClick:function(){return t("home")},id:"logo-mobile",className:"mobileLogo",src:"images/main/mobile/mobileLogo.png",alt:"logo"}),l.a.createElement("img",{onClick:function(){return m(!c)},className:"burgerMenu",src:"images/main/mobile/burgerMenu.png",alt:"menu"})),l.a.createElement("div",{className:"mobileNavOuter ".concat(c?"navMenuExpanded":"navMenu")},l.a.createElement("ul",{className:c?"navMenuDisplayed":"navMenuHidden"},l.a.createElement("li",{onClick:function(){return t("home")},className:"mobileNavItem rockwell ".concat("home"!==a&&"fontWeightLighter")},"Work"),l.a.createElement("li",{onClick:function(){return t("contact")},className:"mobileNavItem rockwell ".concat("contact"!==a&&"fontWeightLighter")},"Contact"),l.a.createElement("li",{onClick:function(){return t("about")},className:"mobileNavItem rockwell ".concat("about"!==a&&"fontWeightLighter")},"About"))),l.a.createElement("div",null))},x=(t(11),t(1)),f=function(e){var a=e.func;return l.a.createElement("svg",{height:"100%",width:"960px"},l.a.createElement("defs",null,l.a.createElement("pattern",{id:"imgA",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageA",href:"images/main/desktop/PLCC.png",x:"-20",y:"-60"})),l.a.createElement("pattern",{id:"imgAA",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageAA",href:"images/overlays/desktopOverlays/PLCC-overlay.png",x:"-155",y:"-160"}):l.a.createElement("image",{id:"imageAA",href:"images/overlays/desktopOverlays/PLCC-overlay.png",x:"-185",y:"-190"})),l.a.createElement("pattern",{id:"imgB",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageB",href:"images/main/desktop/Textiles.png",x:"-30",y:"-90"})),l.a.createElement("pattern",{id:"imgBB",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageBB",href:"images/overlays/desktopOverlays/Textiles-overlay.png",x:"4",y:"-80"}):l.a.createElement("image",{id:"imageBB",href:"images/overlays/desktopOverlays/Textiles-overlay.png",x:"-15",y:"-110"})),l.a.createElement("pattern",{id:"imgC",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageC",href:"images/main/desktop/Harlem.png",x:"-200",y:"0"})),l.a.createElement("pattern",{id:"imgCC",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageCC",href:"images/overlays/desktopOverlays/Harlem-overlay.png",x:"-130",y:"-31"}):l.a.createElement("image",{id:"imageCC",href:"images/overlays/desktopOverlays/Harlem-overlay.png",x:"-160",y:"-70"})),l.a.createElement("pattern",{id:"imgD",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageD",href:"images/main/desktop/BabyDepot.png",x:"0",y:"20"})),l.a.createElement("pattern",{id:"imgDD",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageDD",href:"images/overlays/desktopOverlays/BabyDepot-overlay.png",x:"-15",y:"-50"}):l.a.createElement("image",{id:"imageDD",href:"images/overlays/desktopOverlays/BabyDepot-overlay.png",x:"-35",y:"-50"})),l.a.createElement("pattern",{id:"imgE",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageE",href:"images/main/desktop/Beauty.png",x:"0",y:"0"})),l.a.createElement("pattern",{id:"imgEE",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageEE",href:"images/overlays/desktopOverlays/Treats-overlay.png",x:"-90",y:"-80"}):l.a.createElement("image",{id:"imageEE",href:"images/overlays/desktopOverlays/Treats-overlay.png",x:"-120",y:"-110"})),l.a.createElement("pattern",{id:"imgF",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageF",href:"images/main/desktop/Animations.gif",x:"0",y:"0"})),l.a.createElement("pattern",{id:"imgFF",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageFF",href:"images/overlays/desktopOverlays/Animations-overlay.png",x:"0",y:"-10"}):l.a.createElement("image",{id:"imageFF",href:"images/overlays/desktopOverlays/Animations-overlay.png",x:"-15",y:"-30"})),l.a.createElement("pattern",{id:"imgG",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageG",href:"images/main/desktop/Holiday.png",x:"5",y:"0"})),l.a.createElement("pattern",{id:"imgGG",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageGG",href:"images/overlays/desktopOverlays/Holiday-overlay.png",x:"-90",y:"-100"}):l.a.createElement("image",{id:"imageGG",href:"images/overlays/desktopOverlays/Holiday-overlay.png",x:"-115",y:"-120"})),l.a.createElement("pattern",{id:"imgH",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageH",href:"images/main/desktop/AOE.png",x:"10",y:"-10"})),l.a.createElement("pattern",{id:"imgHH",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageHH",href:"images/overlays/desktopOverlays/AOE-overlay.png",x:"0",y:"-100"}):l.a.createElement("image",{id:"imageHH",href:"images/overlays/desktopOverlays/AOE-overlay.png",x:"-32",y:"-124"})),l.a.createElement("pattern",{id:"imgI",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageI",href:"images/main/desktop/Peace.jpg",x:"-5",y:"-10"})),l.a.createElement("pattern",{id:"imgII",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageII",href:"images/overlays/desktopOverlays/Peace-overlay.png",x:"-80",y:"-85"}):l.a.createElement("image",{id:"imageII",href:"images/overlays/desktopOverlays/Peace-overlay.png",x:"-120",y:"-105"})),l.a.createElement("pattern",{id:"imgJ",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageJ",href:"images/main/desktop/Home.png",x:"0",y:"0"})),l.a.createElement("pattern",{id:"imgJJ",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageJJ",href:"images/overlays/desktopOverlays/Home-overlay.png",x:"0",y:"-60"}):l.a.createElement("image",{id:"imageJJ",href:"images/overlays/desktopOverlays/Home-overlay.png",x:"-30",y:"-90"})),l.a.createElement("pattern",{id:"imgK",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageK",href:"images/main/desktop/PMGSC.png",x:"-30",y:"0"})),l.a.createElement("pattern",{id:"imgKK",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageKK",href:"images/overlays/desktopOverlays/PMGSC-overlay.png",x:"-80",y:"-175"}):l.a.createElement("image",{id:"imageKK",href:"images/overlays/desktopOverlays/PMGSC-overlay.png",x:"-110",y:"-195"})),l.a.createElement("pattern",{id:"imgL",width:"100%",height:"100%"},l.a.createElement("image",{id:"imageL",href:"images/main/desktop/WomenHeart.png",x:"-100",y:"0"})),l.a.createElement("pattern",{id:"imgLL",width:"100%",height:"100%"},x.isSafari?l.a.createElement("image",{id:"imageLL",href:"images/overlays/desktopOverlays/WomenHeart-overlay.png",x:"-20",y:"-10"}):l.a.createElement("image",{id:"imageLL",href:"images/overlays/desktopOverlays/WomenHeart-overlay.png",x:"-85",y:"-20"}))),l.a.createElement("line",{id:"ln0-0",x1:"-3",y1:"0",x2:"307",y2:"0"}),l.a.createElement("line",{id:"ln0-1",x1:"305",y1:"-2",x2:"400",y2:"353"}),l.a.createElement("line",{id:"ln0-2",x1:"-3",y1:"351",x2:"403",y2:"351"}),l.a.createElement("line",{id:"ln0-3",x1:"-1",y1:"-2",x2:"-1",y2:"353"}),l.a.createElement("polygon",{id:"polyA",points:"15,15 295,15 380,335 15,335"}),l.a.createElement("polygon",{onClick:function(){p(),a("PLCC")},id:"polyAA",points:"15,15 295,15 380,335 15,335"}),l.a.createElement("line",{id:"ln1-0",x1:"322",y1:"0",x2:"960",y2:"0"}),l.a.createElement("line",{id:"ln1-1",x1:"957",y1:"0",x2:"957",y2:"500"}),l.a.createElement("line",{id:"ln1-2",x1:"459",y1:"500",x2:"960",y2:"500"}),l.a.createElement("line",{id:"ln1-3",x1:"324",y1:"-3",x2:"462",y2:"500"}),l.a.createElement("polygon",{id:"polyB",points:"345,15 941,15 941,483 475,483"}),l.a.createElement("polygon",{onClick:function(){p(),a("Textiles")},id:"polyBB",points:"345,15 941,15 941,483 475,483"}),l.a.createElement("line",{id:"ln2-0",x1:"-3",y1:"390",x2:"414",y2:"390"}),l.a.createElement("line",{id:"ln2-1",x1:"445",y1:"521",x2:"410",y2:"389"}),l.a.createElement("line",{id:"ln2-2",x1:"445",y1:"520",x2:"343",y2:"1017"}),l.a.createElement("line",{id:"ln2-3",x1:"-3",y1:"1015",x2:"345",y2:"1015"}),l.a.createElement("line",{id:"ln2-4",x1:"-1",y1:"387",x2:"-1",y2:"1018"}),l.a.createElement("polygon",{id:"polyC",points:"15,405 400,405 430,520 330,1000 15,1000"}),l.a.createElement("polygon",{onClick:function(){p(),a("Harlem")},id:"polyCC",points:"15,405 400,405 430,520 330,1000 15,1000"}),l.a.createElement("line",{id:"ln3-0",x1:"460",y1:"536",x2:"960",y2:"536"}),l.a.createElement("line",{id:"ln3-1",x1:"957",y1:"536",x2:"957",y2:"1145"}),l.a.createElement("line",{id:"ln3-2",x1:"336",y1:"1145",x2:"960",y2:"1145"}),l.a.createElement("line",{id:"ln3-3",x1:"463",y1:"534",x2:"337",y2:"1149"}),l.a.createElement("polygon",{id:"polyD",points:"475,553 941,553 941,1128 358,1128"}),l.a.createElement("polygon",{onClick:function(){p(),a("BabyDepot")},id:"polyDD",points:"475,553 941,553 941,1128 358,1128"}),l.a.createElement("line",{id:"ln4-0",x1:"-3",y1:"1058",x2:"338",y2:"1058"}),l.a.createElement("line",{id:"ln4-1",x1:"308",y1:"1187",x2:"337",y2:"1054"}),l.a.createElement("line",{id:"ln4-2",x1:"306",y1:"1185",x2:"530",y2:"1185"}),l.a.createElement("line",{id:"ln4-3",x1:"416",y1:"1552",x2:"529",y2:"1181"}),l.a.createElement("line",{id:"ln4-4",x1:"-4",y1:"1550",x2:"418",y2:"1550"}),l.a.createElement("line",{id:"ln4-5",x1:"-1",y1:"1054",x2:"-1",y2:"1550"}),l.a.createElement("polygon",{id:"polyE",points:"15,1075 315,1075 288,1199 506,1199 405,1535 15,1535"}),l.a.createElement("polygon",{onClick:function(){p(),a("Beauty")},id:"polyEE",points:"15,1075 315,1075 288,1199 506,1199 405,1535 15,1535"}),l.a.createElement("line",{id:"ln5-0",x1:"546",y1:"1185",x2:"960",y2:"1185"}),l.a.createElement("line",{id:"ln5-1",x1:"957",y1:"1183",x2:"957",y2:"1850"}),l.a.createElement("line",{id:"ln5-2",x1:"510",y1:"1851",x2:"960",y2:"1850"}),l.a.createElement("line",{id:"ln5-3",x1:"512",y1:"1854",x2:"434",y2:"1553"}),l.a.createElement("line",{id:"ln5-4",x1:"434",y1:"1555",x2:"547",y2:"1182"}),l.a.createElement("polygon",{id:"polyF",points:"558,1200 941,1200 941,1834 522,1834 450,1553"}),l.a.createElement("polygon",{onClick:function(){p(),a("Animations")},id:"polyFF",points:"558,1200 941,1200 941,1834 522,1834 450,1553"}),l.a.createElement("line",{id:"ln6-0",x1:"-4",y1:"1590",x2:"428",y2:"1590"}),l.a.createElement("line",{id:"ln6-1",x1:"544",y1:"2066",x2:"425",y2:"1588"}),l.a.createElement("line",{id:"ln6-2",x1:"-4",y1:"2062",x2:"545",y2:"2062"}),l.a.createElement("line",{id:"ln6-3",x1:"-1",y1:"1590",x2:"-1",y2:"2060"}),l.a.createElement("polygon",{id:"polyG",points:"15,1607 413,1607 522,2045 15,2045"}),l.a.createElement("polygon",{onClick:function(){p(),a("Holiday")},id:"polyGG",points:"15,1607 413,1607 522,2045 15,2045"}),l.a.createElement("line",{id:"ln7-0",x1:"519",y1:"1894",x2:"960",y2:"1894"}),l.a.createElement("line",{id:"ln7-1",x1:"957",y1:"1894",x2:"957",y2:"2403"}),l.a.createElement("line",{id:"ln7-2",x1:"504",y1:"2403",x2:"960",y2:"2403"}),l.a.createElement("line",{id:"ln7-3",x1:"506",y1:"2406",x2:"569",y2:"2084"}),l.a.createElement("line",{id:"ln7-4",x1:"520",y1:"1890",x2:"569",y2:"2086"}),l.a.createElement("polygon",{id:"polyH",points:"543,1910 941,1910 941,2388 526,2388 585,2086"}),l.a.createElement("polygon",{onClick:function(){p(),a("AOE")},id:"polyHH",points:"543,1910 941,1910 941,2388 526,2388 585,2086"}),l.a.createElement("line",{id:"ln8-0",x1:"-3",y1:"2104",x2:"547",y2:"2104"}),l.a.createElement("line",{id:"ln8-1",x1:"547",y1:"2101",x2:"446",y2:"2623"}),l.a.createElement("line",{id:"ln8-2",x1:"-1",y1:"2620",x2:"448",y2:"2620"}),l.a.createElement("line",{id:"ln8-3",x1:"-1",y1:"2100",x2:"-1",y2:"2623"}),l.a.createElement("polygon",{id:"polyI",points:"15,2121 527,2121 433,2604 15,2604"}),l.a.createElement("polygon",{onClick:function(){p(),a("Peace")},id:"polyII",points:"15,2121 527,2121 433,2604 15,2604"}),l.a.createElement("line",{id:"ln9-0",x1:"498",y1:"2443",x2:"960",y2:"2443"}),l.a.createElement("line",{id:"ln9-1",x1:"957",y1:"2443",x2:"957",y2:"3001"}),l.a.createElement("line",{id:"ln9-2",x1:"540",y1:"3000",x2:"960",y2:"3000"}),l.a.createElement("line",{id:"ln9-3",x1:"462",y1:"2638",x2:"541",y2:"3003"}),l.a.createElement("line",{id:"ln9-4",x1:"500",y1:"2440",x2:"462",y2:"2638"}),l.a.createElement("polygon",{id:"polyJ",points:"513,2459 941,2459 941,2985 550,2985, 478,2640"}),l.a.createElement("polygon",{onClick:function(){p(),a("Home")},id:"polyJJ",points:"513,2459 941,2459 941,2986 550,2986, 478,2640"}),l.a.createElement("line",{id:"ln10-0",x1:"-4",y1:"2660",x2:"451",y2:"2660"}),l.a.createElement("line",{id:"ln10-1",x1:"449",y1:"2658",x2:"524",y2:"3004"}),l.a.createElement("line",{id:"ln10-2",x1:"-1",y1:"3000",x2:"525",y2:"3000"}),l.a.createElement("line",{id:"ln10-3",x1:"-1",y1:"2658",x2:"-1",y2:"3003"}),l.a.createElement("polygon",{id:"polyK",points:"15,2677 438,2677 504,2985 15,2985"}),l.a.createElement("polygon",{onClick:function(){p(),a("PMGSC")},id:"polyKK",points:"15,2677 438,2677 504,2986 15,2986"}),l.a.createElement("line",{id:"ln11-0",x1:"-2",y1:"3040",x2:"963",y2:"3040"}),l.a.createElement("line",{id:"ln11-1",x1:"960",y1:"3038",x2:"960",y2:"3403"}),l.a.createElement("line",{id:"ln11-2",x1:"-2",y1:"3400",x2:"960",y2:"3400"}),l.a.createElement("line",{id:"ln11-3",x1:"-1",y1:"3037",x2:"-1",y2:"3403"}),l.a.createElement("polygon",{id:"polyL",points:"15,3056 942,3056 942,3381 15,3381"}),l.a.createElement("polygon",{onClick:function(){p(),a("WomenHeart")},id:"polyLL",points:"15,3056 942,3056 942,3381 15,3381"}),l.a.createElement("line",{id:"ln-0",x1:"-45",y1:"370",x2:"426",y2:"370"}),l.a.createElement("line",{id:"ln-1",x1:"446",y1:"518",x2:"995",y2:"518"}),l.a.createElement("line",{id:"ln-2",x1:"-45",y1:"1037",x2:"362",y2:"1037"}),l.a.createElement("line",{id:"ln-3",x1:"315",y1:"1165",x2:"995",y2:"1165"}),l.a.createElement("line",{id:"ln-4",x1:"-45",y1:"1570",x2:"440",y2:"1570"}),l.a.createElement("line",{id:"ln-5",x1:"497",y1:"1872",x2:"995",y2:"1872"}),l.a.createElement("line",{id:"ln-6",x1:"-45",y1:"2083",x2:"570",y2:"2083"}),l.a.createElement("line",{id:"ln-7",x1:"484",y1:"2423",x2:"995",y2:"2423"}),l.a.createElement("line",{id:"ln-8",x1:"-45",y1:"2640",x2:"465",y2:"2640"}),l.a.createElement("line",{id:"ln-9",x1:"-45",y1:"3020",x2:"995",y2:"3020"}),l.a.createElement("line",{id:"wln-0",className:"whiteline",x1:"-45",y1:"-5",x2:"960",y2:"-5"}),l.a.createElement("line",{id:"wln-1",className:"whiteline",x1:"317",y1:"-6",x2:"400",y2:"300"}),l.a.createElement("line",{id:"wln-2",className:"whiteline",x1:"-5",y1:"356",x2:"405",y2:"357"}),l.a.createElement("line",{id:"wln-3",className:"whiteline",x1:"310",y1:"-6",x2:"406",y2:"353"}),l.a.createElement("line",{id:"wln-4",className:"whiteline",x1:"455",y1:"506",x2:"960",y2:"506"}),l.a.createElement("line",{id:"wln-5",className:"whiteline",x1:"460",y1:"513",x2:"420",y2:"386"}),l.a.createElement("line",{id:"wln-6",className:"whiteline",x1:"449",y1:"514",x2:"414",y2:"383"}),l.a.createElement("line",{id:"wln-7",className:"whiteline",x1:"-9",y1:"384",x2:"420",y2:"384"}),l.a.createElement("line",{id:"wln-8",className:"whiteline",x1:"-9",y1:"1053",x2:"342",y2:"1053"}),l.a.createElement("line",{id:"wln-9",className:"whiteline",x1:"320",y1:"1151",x2:"960",y2:"1151"}),l.a.createElement("line",{id:"wln-10",className:"whiteline",x1:"314",y1:"1179",x2:"960",y2:"1180"}),l.a.createElement("line",{id:"wln-11",className:"whiteline",x1:"303",y1:"1187",x2:"328",y2:"1065"}),l.a.createElement("line",{id:"wln-12",className:"whiteline",x1:"515",y1:"1888",x2:"960",y2:"1888"}),l.a.createElement("line",{id:"wln-13",className:"whiteline",x1:"506",y1:"1857",x2:"960",y2:"1858"}),l.a.createElement("line",{id:"wln-14",className:"whiteline",x1:"-4",y1:"2068",x2:"547",y2:"2068"}),l.a.createElement("line",{id:"wln-15",className:"whiteline",x1:"-6",y1:"2098",x2:"550",y2:"2099"}),l.a.createElement("line",{id:"wln-16",className:"whiteline",x1:"500",y1:"2408",x2:"960",y2:"2408"}),l.a.createElement("line",{id:"wln-17",className:"whiteline",x1:"-6",y1:"3006",x2:"960",y2:"3006"}),l.a.createElement("line",{id:"wln-18",className:"whiteline",x1:"490",y1:"2437",x2:"960",y2:"2436"}),l.a.createElement("line",{id:"wln-19",className:"whiteline",x1:"-6",y1:"2626",x2:"450",y2:"2626"}),l.a.createElement("line",{id:"wln-20",className:"whiteline",x1:"-9",y1:"1020",x2:"347",y2:"1020"}))},v=function(e){for(var a=e.func,t=Object(n.useState)(""),i=Object(o.a)(t,2),r=i[0],c=i[1],m=Object(n.useState)("fade-in"),s=Object(o.a)(m,2),d=s[0],y=s[1],p=Object(n.useState)("null"),E=Object(o.a)(p,2),h=E[0],u=E[1],x=Object(n.useState)(-1),f=Object(o.a)(x,2),v=f[0],w=f[1],b=[],k=function(e){var t=g[e],n=e===g.length-1?null:e%2===0?l.a.createElement("div",{className:"line-left-mobile"}):l.a.createElement("div",{className:"line-right-mobile"});b.push(l.a.createElement("div",{key:t},l.a.createElement("div",{className:"mobile-img-div"},l.a.createElement("div",{className:"overlay-div ".concat(e===v&&d),style:{transitionDuration:"".concat(1e3,"ms")},onClick:function(){!function(e){if(e===v)a(r),window.scrollTo(0,0);else{var t=setTimeout((function(){u(null)}),1e3);clearTimeout(h),y("fade-out"),u(t),w(e)}}(e)}},l.a.createElement("img",{"data-page":t,className:"mobile-overlay",src:"images/overlays/mobileOverlays/".concat(g[e],".png"),onClick:function(e){return c(e.target.dataset.page)}})),l.a.createElement("img",{className:"mobile-img",src:"WomenHeart"===t?"images/main/mobile/WomenHeart.png":"Animations"===t?"images/main/desktop/Animations.gif":"Peace"===t?"images/main/mobile/Peace.png":"images/main/desktop/".concat(t,".png")})),n))},C=0;C<g.length;C++)k(C);return b},w=function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"profilePicDiv"},l.a.createElement("img",{className:"profileImg",src:"images/about/profileImg.jpg",alt:"profile"}),l.a.createElement("div",{className:"article"},l.a.createElement("div",{className:"article-inner"},l.a.createElement("h2",null,"Hi, I'm Eddie."),l.a.createElement("p",{className:"clearfix"},l.a.createElement("span",{className:"lead"},"I"),"'m a design professional who's well-versed ",l.a.createElement("br",null)," in everything from print to digital to ",l.a.createElement("br",null)," branding to integrated campaigns \u2013 even ",l.a.createElement("br",null)," illustration. I've been privileged to work across a wide range of industries, including printing, ",l.a.createElement("br",null)," sports marketing, fashion, retail and many more. ",l.a.createElement("br",null)," My design aesthetic? Clean. Tasteful. Powerful. ",l.a.createElement("br",null),"In my work, I strive for creative that engages and ",l.a.createElement("br",null)," connects with your target demographic. Creative ",l.a.createElement("br",null)," that generates clicks, builds awareness, drives ",l.a.createElement("br",null)," revenue. Oh, and I make sure it's on brand...and ",l.a.createElement("br",null)," on budget. Every time. My passion for art and ",l.a.createElement("br",null)," design is endless. I can sincerely say that I pour ",l.a.createElement("br",null),"my heart and soul into every project, making ",l.a.createElement("br",null)," sure that my work meets \u2013 and exceeds \u2013 ",l.a.createElement("br",null)," expectations. For me, collaboration is key. I ",l.a.createElement("br",null)," believe that the best ideas come from working in ",l.a.createElement("br",null)," tandem. Whether you're a neighborhood startup ",l.a.createElement("br",null)," or a Fortune 500 company, I look forward to ",l.a.createElement("br",null)," seeing what we can create together.")))))},b=function(e){return e.isMobile?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row bgGrey"},l.a.createElement("div",{class:"col-12 text-center py-3"},l.a.createElement("div",{class:"contact-inner"},l.a.createElement("div",{class:"intro"},l.a.createElement("h2",{className:"rockwell fontSize-5"},"Let's Connect!"),l.a.createElement("p",null,"I hand craft clean, logical, and innovative designs for both print & digital platforms. I specialize in branding, illustration, and strong, highly successful marketing campaigns. From concept to execution, I am collaborative in my approach.")),l.a.createElement("div",{class:"protocol clearfix dFlex dFlexColumn"},l.a.createElement("div",{class:"steps step-00"},l.a.createElement("div",{class:"num"},l.a.createElement("p",null,"1")),l.a.createElement("h2",null,"Get a Quote"),l.a.createElement("p",null,"Call or email me today ",l.a.createElement("span",{class:"txt-br"},"to get an estimate on your "),"next design project.")),l.a.createElement("div",{class:"steps step-01"},l.a.createElement("div",{class:"num"},l.a.createElement("p",null,"2")),l.a.createElement("h2",null,"Design Execution"),l.a.createElement("p",null,"I will use my skills and ",l.a.createElement("span",{class:"txt-br"},"experience to turn your "),"vision into a reality.")),l.a.createElement("div",{class:"steps step-02"},l.a.createElement("div",{class:"num"},l.a.createElement("p",null,"3")),l.a.createElement("h2",null,"File Delivery"),l.a.createElement("p",null,"Once given approval, I will ",l.a.createElement("span",{class:"txt-br"},"package and prep all final "),"files to send to you."))),l.a.createElement("h3",null,"Like my work? ",l.a.createElement("br",null),"Send me a message and let's get started!"),l.a.createElement("a",{href:"mailto:e.eifert@hotmail.com",class:"cta"}," eifertdesign@gmail.com"),l.a.createElement("h3",{className:"mt-50"},"Check out my other website featuring my collection of wedding invitation packages at ",l.a.createElement("a",{className:"wbe",href:"http://wbeinvitations.com"},l.a.createElement("h2",null,l.a.createElement("em",null,"wbeinvitations.com"))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"footer"},l.a.createElement("nav",null,l.a.createElement("a",{href:"https://www.linkedin.com/",target:"_blank"},l.a.createElement("img",{src:"images/contact/icon-linkedin.png"})),l.a.createElement("a",{href:"http://www.facebook.com/",target:"_blank"},l.a.createElement("img",{src:"images/contact/icon-facebook.png"})),l.a.createElement("a",{href:"https://www.instagram.com",target:"_blank"},l.a.createElement("img",{src:"images/contact/icon-instagram.png"}))),l.a.createElement("small",null,"Copyright \xa9 ".concat((new Date).getFullYear(),", All rights reserved."))))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row bgGrey"},l.a.createElement("div",{class:"col-12 text-center py-3"},l.a.createElement("div",{class:"contact-inner"},l.a.createElement("div",{class:"intro"},l.a.createElement("h2",{className:"rockwell"},"Let's Connect!"),l.a.createElement("p",null,"I hand craft clean, logical, and innovative designs for both print & digital platforms. ",l.a.createElement("span",{class:"br-txt"},"I specialize in branding, illustration, and strong, highly successful marketing campaigns.")," From concept to execution, I am collaborative in my approach.")),l.a.createElement("div",{class:"protocol clearfix"},l.a.createElement("div",{class:"steps step-00"},l.a.createElement("div",{class:"num"},l.a.createElement("p",null,"1")),l.a.createElement("h2",null,"Get a Quote"),l.a.createElement("p",null,"Call or email me today ",l.a.createElement("span",{class:"txt-br"},"to get an estimate on your "),"next design project.")),l.a.createElement("div",{class:"steps step-01"},l.a.createElement("div",{class:"num"},l.a.createElement("p",null,"2")),l.a.createElement("h2",null,"Design Execution"),l.a.createElement("p",null,"I will use my skills and ",l.a.createElement("span",{class:"txt-br"},"experience to turn your "),"vision into a reality.")),l.a.createElement("div",{class:"steps step-02"},l.a.createElement("div",{class:"num"},l.a.createElement("p",null,"3")),l.a.createElement("h2",null,"File Delivery"),l.a.createElement("p",null,"Once given approval, I will ",l.a.createElement("span",{class:"txt-br"},"package and prep all final "),"files to send to you."))),l.a.createElement("h3",null,"Like my work? Send me a message and let's get started!"),l.a.createElement("a",{href:"mailto:e.eifert@hotmail.com",class:"cta"}," eifertdesign@gmail.com"),l.a.createElement("h3",{className:"mt-50"},"Check out my other website featuring my collection of wedding invitation packages at ",l.a.createElement("a",{className:"wbe",href:"http://wbeinvitations.com"},l.a.createElement("h2",null,l.a.createElement("em",null,"wbeinvitations.com"))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"footer"},l.a.createElement("nav",null,l.a.createElement("a",{href:"https://www.linkedin.com/",target:"_blank"},l.a.createElement("img",{src:"images/contact/icon-linkedin.png"})),l.a.createElement("a",{href:"http://www.facebook.com/",target:"_blank"},l.a.createElement("img",{src:"images/contact/icon-facebook.png"})),l.a.createElement("a",{href:"https://www.instagram.com",target:"_blank"},l.a.createElement("img",{src:"images/contact/icon-instagram.png"}))),l.a.createElement("small",null,"Copyright \xa9 ".concat((new Date).getFullYear(),", All rights reserved.")))))};var k=function(){var e=Object(n.useState)("home"),a=Object(o.a)(e,2),t=a[0],i=a[1],r="contact"===t,c="about"===t,g=!("home"===t)&&!r&&!c;return Object(n.useEffect)((function(){!g&&window.scrollTo(0,0);var e=E(t);"home"!==t?window.addEventListener("scroll",e):window.removeEventListener("scroll",e);var a=document.getElementsByClassName("container"),n=document.getElementsByClassName("profile-img-container-desktop")[0];setTimeout((function(){a[0].style.height=n&&"".concat(n.offsetHeight,"px"),a[0].style.height=c&&"800px"}),500)})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"desktop"},l.a.createElement(h,{page:t,func:i}),"home"===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{page:t,func:i})),g&&l.a.createElement(s,{page:t,func:i}),r&&l.a.createElement(b,null),c&&l.a.createElement(w,null)),l.a.createElement("div",{className:"mobile textCenter"},l.a.createElement(u,{page:t,func:i}),"home"===t&&l.a.createElement(v,{func:i}),g&&l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{page:t,func:i}),l.a.createElement(m,{page:t,func:i,isMobile:!0})),r&&l.a.createElement(b,{isMobile:!0}),c&&l.a.createElement(w,{isMobile:!0})),g&&l.a.createElement(m,{page:t,func:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.4c9a2c0c.chunk.js.map