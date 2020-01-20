import React, { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className={"container"}>




      <div className={"header"}>
        <img id="logo" src="EifertDesign-Logo"></img>
        <div id="navList">
          <a href="#"><span>WORK</span></a>
          <a href="#"><span>CONTACT</span></a>
          <a href="#"><span>ABOUT</span></a>
        </div>
      </div>
      <svg height={"auto"} width={"960px"}>

        {/*Image Defs*/}
        <defs>
          <pattern id={"imgA"} width={"100%"} height={"100%"}>
            <image id={"imageA"} href={"PLCC.png"} x="-20" y="-60" />
          </pattern>
          <pattern id={"imgAA"} width={"100%"} height={"100%"}>
            <image id={"imageAA"} href={"PLCC-overlay.png"} x="-135" y="-100" />
          </pattern>
          <pattern id={"imgB"} width={"100%"} height={"100%"}>
            <image id={"imageB"} href="Textiles.png" x="-30" y="-90" />
          </pattern>
          <pattern id={"imgBB"} width={"100%"} height={"100%"}>
            <image id={"imageBB"} href={"Textiles-overlay.png"} x="-20" y="-120" />
          </pattern>
          <pattern id={"imgC"} width={"100%"} height={"100%"}>
            <image id={"imageC"} href="Harlem.png" x="-200" y="0" />
          </pattern>
          <pattern id={"imgCC"} width={"100%"} height={"100%"}>
            <image id={"imageCC"} href={"Harlem-overlay.png"} x="0" y="-120" />
          </pattern>
          <pattern id={"imgD"} width={"100%"} height={"100%"}>
            <image id={"imageD"} href="BabyDepot.png" x="0" y="20" />
          </pattern>
          <pattern id={"imgDD"} width={"100%"} height={"100%"}>
            <image id={"imageDD"} href={"BabyDepot-overlay.png"} x="0" y="0" />
          </pattern>
          <pattern id={"imgE"} width={"100%"} height={"100%"}>
            <image id={"imageE"} href="Treats.png" x="-15" y="0" />
          </pattern>
          <pattern id={"imgEE"} width={"100%"} height={"100%"}>
            <image id={"imageEE"} href={"Treats-overlay.png"} x="-30" y="-120" />
          </pattern>
          <pattern id={"imgF"} width={"100%"} height={"100%"}>
            <image id={"imageF"} href="Animation.gif" x="10" y="0" />
          </pattern>
          <pattern id={"imgFF"} width={"100%"} height={"100%"}>
            <image id={"imageFF"} href={"Animations-overlay.png"} x="0" y="-120" />
          </pattern>
          <pattern id={"imgG"} width={"100%"} height={"100%"}>
            <image id={"imageG"} href="Holiday.png" x="5" y="0" />
          </pattern>
          <pattern id={"imgGG"} width={"100%"} height={"100%"}>
            <image id={"imageGG"} href={"Holiday-overlay.png"} x="0" y="-120" />
          </pattern>
          <pattern id={"imgH"} width={"100%"} height={"100%"}>
            <image id={"imageH"} href="AOE.png" x="-35" y="-10" />
          </pattern>
          <pattern id={"imgHH"} width={"100%"} height={"100%"}>
            <image id={"imageHH"} href={"AOE-overlay.png"} x="0" y="-120" />
          </pattern>
          <pattern id={"imgI"} width={"100%"} height={"100%"}>
            <image id={"imageI"} href="Beauty.png" x="0" y="0" />
          </pattern>
          <pattern id={"imgII"} width={"100%"} height={"100%"}>
            <image id={"imageII"} href={"Beauty-overlay.png"} x="0" y="-120" />
          </pattern>
          <pattern id={"imgJ"} width={"100%"} height={"100%"}>
            <image id={"imageJ"} href="Home.png" x="0" y="0" />
          </pattern>
          <pattern id={"imgJJ"} width={"100%"} height={"100%"}>
            <image id={"imageJJ"} href={"Home-overlay.png"} x="0" y="-120" />
          </pattern>
          <pattern id={"imgK"} width={"100%"} height={"100%"}>
            <image id={"imageK"} href="PMGSC.png" x="11" y="0" />
          </pattern>
          <pattern id={"imgKK"} width={"100%"} height={"100%"}>
            <image id={"imageKK"} href={"PMGSC-overlay.png"} x="0" y="-120" />
          </pattern>
          <pattern id={"imgL"} width={"100%"} height={"100%"}>
            <image id={"imageL"} href="WomenHeart.png" x="-100" y="5" />
          </pattern>
          <pattern id={"imgLL"} width={"100%"} height={"100%"}>
            <image id={"imageLL"} href={"WomenHeart-overlay.png"} x="0" y="-120" />
          </pattern>
        </defs>

        {/*PLCC*/}
        <line id="ln0-0" x1={"-3"} y1={"0"} x2={"307"} y2={"0"} />
        <line id="ln0-1" x1={"305"} y1={"-2"} x2={"401"} y2={"353"} />
        <line id="ln0-2" x1={"-3"} y1={"351"} x2={"403"} y2={"351"} />
        <line id="ln0-3" x1={"-1"} y1={"-2"} x2={"-1"} y2={"353"} />
        <polygon
          id={"polyA"}
          points={"15,15 295,15 380,335 15,335"}
        ></polygon>
        <polygon
          id={"polyAA"}
          points={"15,15 295,15 380,335 15,335"}
        ></polygon>

        {/*Textiles*/}
        <line id="ln1-0" x1={"322"} y1={"0"} x2={"960"} y2={"0"} />
        <line id="ln1-1" x1={"957"} y1={"0"} x2={"957"} y2={"500"} />
        <line id="ln1-2" x1={"460"} y1={"499"} x2={"960"} y2={"500"} />
        <line id="ln1-3" x1={"324"} y1={"-2"} x2={"462"} y2={"500"} />
        <polygon
          id={"polyB"}
          points={"345,15 941,15 941,483 475,483"}
        ></polygon>
        <polygon
          id={"polyBB"}
          points={"345,15 941,15 941,483 475,483"}
        ></polygon>

        {/*Harlem*/}
        <line id="ln2-0" x1="-3" y1="390" x2="412" y2="390"></line>
        <line id="ln2-1" x1="445" y1="520" x2="410" y2="389"></line>
        <line id="ln2-2" x1="445" y1="520" x2="343" y2="1017"></line>
        <line id="ln2-3" x1="-3" y1="1014" x2="343" y2="1014"></line>
        <line id="ln2-4" x1="-1" y1="388" x2="-1" y2="1016"></line>
        <polygon
          id={"polyC"}
          points={"15,405 400,405 430,520 330,1000 15,1000"}
        ></polygon>
        <polygon
          id={"polyCC"}
          points={"15,405 400,405 430,520 330,1000 15,1000"}
        ></polygon>

        {/*Baby Depot*/}
        <line id="ln3-0" x1="460" y1="536" x2="960" y2="536"></line>
        <line id="ln3-1" x1="957" y1="536" x2="957" y2="1125"></line>
        <line id="ln3-2" x1="342" y1="1125" x2="960" y2="1125"></line>
        <line id="ln3-3" x1="462" y1="534" x2="344" y2="1125"></line>
        <polygon
          id={"polyD"}
          points={"477,553 941,553 941,1106 365,1106"}
        ></polygon>
        <polygon
          id={"polyDD"}
          points={"477,553 941,553 941,1106 365,1106"}
        ></polygon>

        {/*Treats*/}
        <line id="ln4-0" x1="-3" y1="1058" x2="337" y2="1058"></line>
        <line id="ln4-1" x1="312" y1="1167" x2="336" y2="1055"></line>
        <line id="ln4-2" x1="312" y1="1165" x2="563" y2="1165"></line>
        <line id="ln4-3" x1="438" y1="1550" x2="563" y2="1163"></line>
        <line id="ln4-4" x1="-4" y1="1550" x2="440" y2="1550"></line>
        <line id="ln4-5" x1="-1" y1="1056" x2="-1" y2="1550"></line>
        <polygon
          id={"polyE"}
          points={"15,1075 315,1075 292,1184 540,1181 425,1532 15,1532"}
        ></polygon>
        <polygon
          id={"polyEE"}
          points={"15,1075 315,1075 292,1184 540,1181 425,1532 15,1532"}
        ></polygon>

        {/*Animations*/}
        <line id="ln5-0" x1="581" y1="1165" x2="960" y2="1165"></line>
        <line id="ln5-1" x1="957" y1="1165" x2="957" y2="1850"></line>
        <line id="ln5-2" x1="558" y1="1851" x2="960" y2="1850"></line>
        <line id="ln5-3" x1="559" y1="1853" x2="458" y2="1550"></line>
        <line id="ln5-4" x1="458" y1="1554" x2="583" y2="1163"></line>
        <polygon
          id={"polyF"}
          points={"595,1180 941,1180 941,1834 570,1834 475,1552"}
        ></polygon>
        <polygon
          id={"polyFF"}
          points={"595,1180 941,1180 941,1834 570,1834 475,1552"}
        ></polygon>

        {/*Holiday*/}
        <line id="ln6-0" x1="-4" y1="1590" x2="453" y2="1590"></line>
        <line id="ln6-1" x1="604" y1="2065" x2="450" y2="1588"></line>
        <line id="ln6-2" x1="-4" y1="2062" x2="602" y2="2062"></line>
        <line id="ln6-3" x1="-1" y1="1590" x2="-1" y2="2060"></line>
        <polygon
          id={"polyG"}
          points={"15,1607 439,1607 580,2045 15,2045"}
        ></polygon>
        <polygon
          id={"polyGG"}
          points={"15,1607 439,1607 580,2045 15,2045"}
        ></polygon>

        {/*AOE*/}
        <line id="ln7-0" x1="572" y1="1894" x2="960" y2="1894"></line>
        <line id="ln7-1" x1="957" y1="1894" x2="957" y2="2403"></line>
        <line id="ln7-2" x1="571" y1="2403" x2="960" y2="2403"></line>
        <line id="ln7-3" x1="573" y1="2404" x2="635" y2="2088"></line>
        <line id="ln7-4" x1="572" y1="1892" x2="635" y2="2089"></line>
        <polygon
          id={"polyH"}
          points={"595,1910 941,1910 941,2386 593,2386 650,2088"}
        ></polygon>
        <polygon
          id={"polyHH"}
          points={"595,1910 941,1910 941,2386 593,2386 650,2088"}
        ></polygon>

        {/*Beauty*/}
        <line id="ln8-0" x1="-2" y1="2104" x2="611" y2="2104"></line>
        <line id="ln8-1" x1="609" y1="2102" x2="510" y2="2620"></line>
        <line id="ln8-2" x1="-1" y1="2620" x2="513" y2="2620"></line>
        <line id="ln8-3" x1="-1" y1="2102" x2="-1" y2="2622"></line>
        <polygon
          id={"polyI"}
          points={"15,2121 587,2121 496,2604 15,2604"}
        ></polygon>
        <polygon
          id={"polyII"}
          points={"15,2121 587,2121 496,2604 15,2604"}
        ></polygon>

        {/*Home*/}
        <line id="ln9-0" x1="563" y1="2443" x2="960" y2="2443"></line>
        <line id="ln9-1" x1="957" y1="2443" x2="957" y2="3033"></line>
        <line id="ln9-2" x1="580" y1="3033" x2="960" y2="3033"></line>
        <line id="ln9-3" x1="529" y1="2640" x2="581" y2="3036"></line>
        <line id="ln9-4" x1="565" y1="2443" x2="528" y2="2645"></line>
        <polygon
          id={"polyJ"}
          points={"579,2459 941,2459 941,3016 595,3016, 546,2640"}
        ></polygon>
        <polygon
          id={"polyJJ"}
          points={"579,2459 941,2459 941,3016 595,3016, 546,2640"}
        ></polygon>

        {/*PMGSC*/}
        <line id="ln10-0" x1="-2" y1="2660" x2="513" y2="2660"></line>
        <line id="ln10-1" x1="513" y1="2658" x2="561" y2="3036"></line>
        <line id="ln10-2" x1="-1" y1="3033" x2="560" y2="3033"></line>
        <line id="ln10-3" x1="-1" y1="2658" x2="-1" y2="3036"></line>
        <polygon
          id={"polyK"}
          points={"15,2677 498,2677 542,3016 15,3016"}
        ></polygon>
        <polygon
          id={"polyKK"}
          points={"15,2677 498,2677 542,3016 15,3016"}
        ></polygon>

        {/*WomenHeart*/}
        <line id="ln11-0" x1="-2" y1="3074" x2="960" y2="3074"></line>
        <line id="ln11-1" x1="960" y1="3071" x2="960" y2="3436"></line>
        <line id="ln11-2" x1="-2" y1="3433" x2="960" y2="3433"></line>
        <line id="ln11-3" x1="-1" y1="3071" x2="-1" y2="3436"></line>
        <polygon
          id={"polyL"}
          points={"15,3086 942,3086 942,3419 15,3419"}
        ></polygon>
        <polygon
          id={"polyLL"}
          points={"15,3091 942,3091 942,3417 15,3417"}
        ></polygon>

        {/*Lines*/}
        <line id="ln-0" x1="-45" y1="370" x2="426" y2="370"></line>
        <line id="ln-1" x1="446" y1="518" x2="995" y2="518"></line>
        <line id="ln-2" x1="-45" y1="1037" x2="363" y2="1037"></line>
        <line id="ln-3" x1="315" y1="1145" x2="995" y2="1145"></line>
        <line id="ln-4" x1="-45" y1="1570" x2="466" y2="1570"></line>
        <line id="ln-5" x1="542" y1="1872" x2="995" y2="1872"></line>
        <line id="ln-6" x1="-45" y1="2083" x2="632" y2="2083"></line>
        <line id="ln-7" x1="550" y1="2423" x2="995" y2="2423"></line>
        <line id="ln-8" x1="-45" y1="2640" x2="528" y2="2640"></line>
        <line id="ln-9" x1="-45" y1="3053" x2="995" y2="3053"></line>

      </svg>
    </div>
  );
}

export default App;
