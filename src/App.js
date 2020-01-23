import React from 'react';
import './App.css';


function App() {
  return (
    <div className={"container"}>

      <div id="pageUp">
        <i class="far fa-arrow-alt-circle-up"></i>
      </div>

      <div className={"header"}>
        <img id="logo" src="EifertDesign-Logo" alt="logo"></img>
        <div id="navList">
          <a href="#"><span>WORK</span></a>
          <a href="#"><span>CONTACT</span></a>
          <a href="#"><span>ABOUT</span></a>
        </div>
      </div>

      {/*Image Defs*/}
      <svg height="auto" width="960px">
        <defs>
          <pattern id="imgA" width="100%" height="100%">
            <image id="imageA" href="PLCC.png" x="-20" y="-60"></image>
          </pattern>
          <pattern id="imgAA" width="100%" height="100%">
            <image id="imageAA" href="PLCC-overlay.png" x="-185" y="-190"></image>
          </pattern>
          <pattern id="imgB" width="100%" height="100%">
            <image id="imageB" href="Textiles.png" x="-30" y="-90"></image>
          </pattern>
          <pattern id="imgBB" width="100%" height="100%">
            <image id="imageBB" href="Textiles-overlay.png" x="-15" y="-110"></image>
          </pattern>
          <pattern id="imgC" width="100%" height="100%">
            <image id="imageC" href="Harlem.png" x="-200" y="0"></image>
          </pattern>
          <pattern id="imgCC" width="100%" height="100%">
            <image id="imageCC" href="Harlem-overlay.png" x="-160" y="-70"></image>
          </pattern>
          <pattern id="imgD" width="100%" height="100%">
            <image id="imageD" href="BabyDepot.png" x="0" y="20"></image>
          </pattern>
          <pattern id="imgDD" width="100%" height="100%">
            <image id="imageDD" href="BabyDepot-overlay.png" x="-35" y="-50"></image>
          </pattern>
          <pattern id="imgE" width="100%" height="100%">
            <image id="imageE" href="Beauty.png" x="0" y="0"></image>
          </pattern>
          <pattern id="imgEE" width="100%" height="100%">
            <image id="imageEE" href="Treats-overlay.png" x="-120" y="-110"></image>
          </pattern>
          <pattern id="imgF" width="100%" height="100%">
            <image id="imageF" href="Animations-overlay.gif" x="10" y="0"></image>
          </pattern>
          <pattern id="imgFF" width="100%" height="100%">
            <image id="imageFF" href="Animations-overlay.png" x="-15" y="-30"></image>
          </pattern>
          <pattern id="imgG" width="100%" height="100%">
            <image id="imageG" href="Holiday.png" x="5" y="0"></image>
          </pattern>
          <pattern id="imgGG" width="100%" height="100%">
            <image id="imageGG" href="Holiday-overlay.png" x="-115" y="-120"></image>
          </pattern>
          <pattern id="imgH" width="100%" height="100%">
            <image id="imageH" href="AOE.png" x="10" y="-10"></image>
          </pattern>
          <pattern id="imgHH" width="100%" height="100%">
            <image id="imageHH" href="AOE-overlay.png" x="-32" y="-124"></image>
          </pattern>
          <pattern id="imgI" width="100%" height="100%">
            <image id="imageI" href="Treats.png" x="-50" y="-18"></image>
          </pattern>
          <pattern id="imgII" width="100%" height="100%">
            <image id="imageII" href="Beauty-overlay.png" x="-120" y="-105"></image>
          </pattern>
          <pattern id="imgJ" width="100%" height="100%">
            <image id="imageJ" href="Home.png" x="0" y="0"></image>
          </pattern>
          <pattern id="imgJJ" width="100%" height="100%">
            <image id="imageJJ" href="Home-overlay.png" x="-30" y="-90"></image>
          </pattern>
          <pattern id="imgK" width="100%" height="100%">
            <image id="imageK" href="PMGSC.png" x="-30" y="0"></image>
          </pattern>
          <pattern id="imgKK" width="100%" height="100%">
            <image id="imageKK" href="PMGSC-overlay.png" x="-110" y="-195"></image>
          </pattern>
          <pattern id="imgL" width="100%" height="100%">
            <image id="imageL" href="WomenHeart.png" x="-100" y="0"></image>
          </pattern>
          <pattern id="imgLL" width="100%" height="100%">
            <image id="imageLL" href="WomenHeart-overlay.png" x="-30" y="-10"></image>
          </pattern>
        </defs>

        {/*PLCC*/}
        <line id="ln0-0" x1="-3" y1="0" x2="307" y2="0"></line>
        <line id="ln0-1" x1="305" y1="-2" x2="400" y2="353"></line>
        <line id="ln0-2" x1="-3" y1="351" x2="403" y2="351"></line>
        <line id="ln0-3" x1="-1" y1="-2" x2="-1" y2="353"></line>
        <polygon id="polyA" points="15,15 295,15 380,335 15,335"></polygon>
        <polygon id="polyAA" points="15,15 295,15 380,335 15,335"></polygon>

        {/*Textiles*/}
        <line id="ln1-0" x1="322" y1="0" x2="960" y2="0"></line>
        <line id="ln1-1" x1="957" y1="0" x2="957" y2="500"></line>
        <line id="ln1-2" x1="459" y1="500" x2="960" y2="500"></line>
        <line id="ln1-3" x1="324" y1="-3" x2="462" y2="500"></line>
        <polygon id="polyB" points="345,15 941,15 941,483 475,483"></polygon>
        <polygon id="polyBB" points="345,15 941,15 941,483 475,483"></polygon>

        {/*Harlem*/}
        <line id="ln2-0" x1="-3" y1="390" x2="414" y2="390"></line>
        <line id="ln2-1" x1="445" y1="521" x2="410" y2="389"></line>
        <line id="ln2-2" x1="445" y1="520" x2="343" y2="1017"></line>
        <line id="ln2-3" x1="-3" y1="1015" x2="345" y2="1015"></line>
        <line id="ln2-4" x1="-1" y1="387" x2="-1" y2="1018"></line>
        <polygon id="polyC" points="15,405 400,405 430,520 330,1000 15,1000"></polygon>
        <polygon id="polyCC" points="15,405 400,405 430,520 330,1000 15,1000"></polygon>

        {/*Baby Depot*/}
        <line id="ln3-0" x1="460" y1="536" x2="960" y2="536"></line>
        <line id="ln3-1" x1="957" y1="536" x2="957" y2="1145"></line>
        <line id="ln3-2" x1="336" y1="1145" x2="960" y2="1145"></line>
        <line id="ln3-3" x1="463" y1="534" x2="337" y2="1149"></line>
        <polygon id="polyD" points="475,553 941,553 941,1128 358,1128"></polygon>
        <polygon id="polyDD" points="475,553 941,553 941,1128 358,1128"></polygon>

        {/*Beauty*/}
        <line id="ln4-0" x1="-3" y1="1058" x2="338" y2="1058"></line>
        <line id="ln4-1" x1="308" y1="1187" x2="337" y2="1054"></line>
        <line id="ln4-2" x1="306" y1="1185" x2="530" y2="1185"></line>
        <line id="ln4-3" x1="416" y1="1552" x2="529" y2="1181"></line>
        <line id="ln4-4" x1="-4" y1="1550" x2="418" y2="1550"></line>
        <line id="ln4-5" x1="-1" y1="1054" x2="-1" y2="1550"></line>
        <polygon id="polyE" points="15,1075 315,1075 288,1199 506,1199 405,1535 15,1535"></polygon>
        <polygon id="polyEE" points="15,1075 315,1075 288,1199 506,1199 405,1535 15,1535"></polygon>

        {/*Animations*/}
        <line id="ln5-0" x1="546" y1="1185" x2="960" y2="1185"></line>
        <line id="ln5-1" x1="957" y1="1183" x2="957" y2="1850"></line>
        <line id="ln5-2" x1="510" y1="1851" x2="960" y2="1850"></line>
        <line id="ln5-3" x1="512" y1="1854" x2="434" y2="1553"></line>
        <line id="ln5-4" x1="434" y1="1555" x2="547" y2="1182"></line>
        <polygon id="polyF" points="558,1200 941,1200 941,1834 522,1834 450,1553"></polygon>
        <polygon id="polyFF" points="558,1200 941,1200 941,1834 522,1834 450,1553"></polygon>

        {/*AOE*/}
        <line id="ln6-0" x1="-4" y1="1590" x2="428" y2="1590"></line>
        <line id="ln6-1" x1="544" y1="2066" x2="425" y2="1588"></line>
        <line id="ln6-2" x1="-4" y1="2062" x2="545" y2="2062"></line>
        <line id="ln6-3" x1="-1" y1="1590" x2="-1" y2="2060"></line>
        <polygon id="polyG" points="15,1607 413,1607 522,2045 15,2045"></polygon>
        <polygon id="polyGG" points="15,1607 413,1607 522,2045 15,2045"></polygon>

        {/*Beauty*/}
        <line id="ln7-0" x1="519" y1="1894" x2="960" y2="1894"></line>
        <line id="ln7-1" x1="957" y1="1894" x2="957" y2="2403"></line>
        <line id="ln7-2" x1="504" y1="2403" x2="960" y2="2403"></line>
        <line id="ln7-3" x1="506" y1="2406" x2="569" y2="2084"></line>
        <line id="ln7-4" x1="520" y1="1890" x2="569" y2="2086"></line>
        <polygon id="polyH" points="543,1910 941,1910 941,2388 526,2388 585,2086"></polygon>
        <polygon id="polyHH" points="543,1910 941,1910 941,2388 526,2388 585,2086"></polygon>

        {/*Home*/}
        <line id="ln8-0" x1="-3" y1="2104" x2="547" y2="2104"></line>
        <line id="ln8-1" x1="547" y1="2101" x2="446" y2="2623"></line>
        <line id="ln8-2" x1="-1" y1="2620" x2="448" y2="2620"></line>
        <line id="ln8-3" x1="-1" y1="2100" x2="-1" y2="2623"></line>
        <polygon id="polyI" points="15,2121 527,2121 433,2604 15,2604"></polygon>
        <polygon id="polyII" points="15,2121 527,2121 433,2604 15,2604"></polygon>

        {/*PMGSC*/}
        <line id="ln9-0" x1="498" y1="2443" x2="960" y2="2443"></line>
        <line id="ln9-1" x1="957" y1="2443" x2="957" y2="3001"></line>
        <line id="ln9-2" x1="540" y1="3000" x2="960" y2="3000"></line>
        <line id="ln9-3" x1="462" y1="2638" x2="541" y2="3003"></line>
        <line id="ln9-4" x1="500" y1="2440" x2="462" y2="2638"></line>
        <polygon id="polyJ" points="513,2459 941,2459 941,2985 550,2985, 478,2640"></polygon>
        <polygon id="polyJJ" points="513,2459 941,2459 941,2985 550,2985, 478,2640"></polygon>

        {/*WomenHeart*/}
        <line id="ln10-0" x1="-4" y1="2660" x2="451" y2="2660"></line>
        <line id="ln10-1" x1="449" y1="2658" x2="524" y2="3004"></line>
        <line id="ln10-2" x1="-1" y1="3000" x2="525" y2="3000"></line>
        <line id="ln10-3" x1="-1" y1="2658" x2="-1" y2="3003"></line>
        <polygon id="polyK" points="15,2677 438,2677 504,2985 15,2985"></polygon>
        <polygon id="polyKK" points="15,2677 438,2677 504,2985 15,2985"></polygon>
        <line id="ln11-0" x1="-2" y1="3040" x2="963" y2="3040"></line>
        <line id="ln11-1" x1="960" y1="3038" x2="960" y2="3403"></line>
        <line id="ln11-2" x1="-2" y1="3400" x2="960" y2="3400"></line>
        <line id="ln11-3" x1="-1" y1="3037" x2="-1" y2="3403"></line>
        <polygon id="polyL" points="15,3056 942,3056 942,3381 15,3381"></polygon>
        <polygon id="polyLL" points="15,3056 942,3056 942,3381 15,3381"></polygon>

        {/*Divider Lines*/}
        <line id="ln-0" x1="-45" y1="370" x2="426" y2="370"></line>
        <line id="ln-1" x1="446" y1="518" x2="995" y2="518"></line>
        <line id="ln-2" x1="-45" y1="1037" x2="362" y2="1037"></line>
        <line id="ln-3" x1="315" y1="1165" x2="995" y2="1165"></line>
        <line id="ln-4" x1="-45" y1="1570" x2="440" y2="1570"></line>
        <line id="ln-5" x1="497" y1="1872" x2="995" y2="1872"></line>
        <line id="ln-6" x1="-45" y1="2083" x2="570" y2="2083"></line>
        <line id="ln-7" x1="484" y1="2423" x2="995" y2="2423"></line>
        <line id="ln-8" x1="-45" y1="2640" x2="465" y2="2640"></line>
        <line id="ln-9" x1="-45" y1="3020" x2="995" y2="3020"></line>

        {/*Cover Lines*/}
        <line id="wln-0" className="whiteline" x1="-45" y1="-5" x2="960" y2="-5"></line>
        <line id="wln-1" className="whiteline" x1="317" y1="-6" x2="400" y2="300"></line>
        <line id="wln-2" className="whiteline" x1="-5" y1="356" x2="405" y2="357"></line>
        <line id="wln-3" className="whiteline" x1="310" y1="-6" x2="406" y2="353"></line>
        <line id="wln-4" className="whiteline" x1="455" y1="506" x2="960" y2="506"></line>
        <line id="wln-5" className="whiteline" x1="460" y1="513" x2="420" y2="386"></line>
        <line id="wln-6" className="whiteline" x1="449" y1="514" x2="414" y2="383"></line>
        <line id="wln-7" className="whiteline" x1="-9" y1="384" x2="420" y2="384"></line>
        <line id="wln-8" className="whiteline" x1="-9" y1="1053" x2="342" y2="1053"></line>
        <line id="wln-9" className="whiteline" x1="320" y1="1151" x2="960" y2="1151"></line>
        <line id="wln-10" className="whiteline" x1="314" y1="1179" x2="960" y2="1180"></line>
        <line id="wln-11" className="whiteline" x1="303" y1="1187" x2="328" y2="1065"></line>
        <line id="wln-12" className="whiteline" x1="515" y1="1888" x2="960" y2="1888"></line>
        <line id="wln-13" className="whiteline" x1="506" y1="1857" x2="960" y2="1858"></line>
        <line id="wln-14" className="whiteline" x1="-4" y1="2068" x2="547" y2="2068"></line>
        <line id="wln-15" className="whiteline" x1="-6" y1="2098" x2="550" y2="2099"></line>
        <line id="wln-16" className="whiteline" x1="500" y1="2408" x2="960" y2="2408"></line>
        <line id="wln-17" className="whiteline" x1="-6" y1="3006" x2="960" y2="3006"></line>
        <line id="wln-18" className="whiteline" x1="490" y1="2437" x2="960" y2="2436"></line>
        <line id="wln-19" className="whiteline" x1="-6" y1="2626" x2="450" y2="2626"></line>
        <line id="wln-20" className="whiteline" x1="-9" y1="1020" x2="347" y2="1020"></line>
      </svg>
    </div>
  );
}

export default App;
