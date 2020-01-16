import React, { useState } from 'react';
import './App.css';


function App() {
  const [color0, setColor0] = useState("url(#img0)");
  const [color1, setColor1] = useState("url(#img1)");


  return (
    <div className={"container"}>
      <img id="logo" src="EifertDesign-Logo"></img>
      <div id="navList">
        <a href="#"><span>WORK</span></a>
        <a href="#"><span>CONTACT</span></a>
        <a href="#"><span>ABOUT</span></a>
      </div>

      <svg height={"auto"} width={"960px"}>
        {/*Image Defs*/}
        <defs>
          <pattern id={"imgA"} width={"100%"} height={"100%"}>
            <image id={"imageA"} href={"PLCC.png"} x="-20" y="-60" />
          </pattern>
          <pattern id={"imgAA"} width={"100%"} height={"100%"}>
            <image id={"imageAA"} href={"PLCC-temp6.png"} x="-35" y="-60" />
          </pattern>
          <pattern id={"imgB"} width={"100%"} height={"100%"}>
            <image id={"imageB"} href="Textiles.png" x="-30" y="-90" />
          </pattern>
          <pattern id={"imgBB"} width={"100%"} height={"100%"}>
            <image id={"imageBB"} href={"Textiles-temp2.png"} x="-60" y="-120" />
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
        <line id="ln2-4" x1="-1" y1="387" x2="-1" y2="1016"></line>

        {/*Baby Depot*/}
        <line id="ln3-0" x1="460" y1="536" x2="960" y2="536"></line>
        <line id="ln3-1" x1="957" y1="536" x2="957" y2="1125"></line>
        <line id="ln3-2" x1="342" y1="1125" x2="960" y2="1125"></line>
        <line id="ln3-3" x1="462" y1="534" x2="344" y2="1125"></line>

        {/*Treats*/}
        <line id="ln4-0" x1="-3" y1="1058" x2="337" y2="1058"></line>
        <line id="ln4-1" x1="312" y1="1168" x2="336" y2="1055"></line>
        <line id="ln4-2" x1="312" y1="1165" x2="563" y2="1165"></line>
        <line id="ln4-3" x1="438" y1="1550" x2="561" y2="1163"></line>
        <line id="ln4-4" x1="-3" y1="1550" x2="440" y2="1550"></line>
        <line id="ln4-5" x1="-1" y1="1057" x2="-1" y2="1550"></line>

        {/*Animations*/}
        <line id="ln5-0" x1="605" y1="1165" x2="960" y2="1165"></line>


        {/*Lines*/}
        <line id="ln-0" x1="-45" y1="370" x2="426" y2="370"></line>
        <line id="ln-1" x1="446" y1="518" x2="995" y2="518"></line>
        <line id="ln-2" x1="-45" y1="1037" x2="363" y2="1037"></line>
        <line id="ln-3" x1="315" y1="1145" x2="995" y2="1145"></line>
      </svg>
    </div>
  );
}

export default App;
