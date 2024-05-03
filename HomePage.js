import "./App.css";
import React from "react";
import { DetailsList } from "./Details";
import { useNavigate } from "react-router-dom";
import logo from "./logu.png";


function ToolBar(){
    const handleToolClick=(name)=>{
    document.getElementById(name).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});
    };
    return(
      <>
      <div>
        <nav className="toolbar" >
          <ul className="toolbarItems">
          <li><a style={{textDecoration:"none"}} href="#About" onClick={()=>handleToolClick("About")}>About</a></li>
          <li><a style={{textDecoration:"none"}} href="#Functions" onClick={()=>handleToolClick("Functions")}>Functions</a></li>  
          <li><a style={{textDecoration:"none"}} href="#Home" onClick={()=>handleToolClick("Home")}>Future Work</a></li>
          </ul>
        </nav>
      </div>
      </>
    );  
  }


  function Description(){
    
    const detail=DetailsList[0];
    return(
      <>
      <div className="Description" id="Home">
      <h1>{detail.name}</h1>
      <p className="Fading">{detail.description}</p>
    </div>
    </>
    );
  }

  function AboutPart(){
    const detail=DetailsList[1];
    return(
      <>
      <div className="About-Part" id="About">
      <h1>{detail.name}</h1>
      <p className="Fading">{detail.description}</p>
    </div>
    </>
    );
  }

  function FunctionalitiesPart(){
    const detail=DetailsList[2];
    return(
      <>
      <div className="Functionals" id="Functions">
      <h1>{detail.name}</h1>
      <p className="Fading">{detail.description}</p>
    </div>
    </>
    );
  }


  function FadeInOut(props){
    const[isVisible,setIsVisible]=React.useState(false);
    const domRef=React.useRef();
    React.useEffect(()=>{
      const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=> setIsVisible(entry.isIntersecting));
      }) ;
      observer.observe(domRef.current);
      
    } , []);
    return(
      <div className={`fade-in-section ${isVisible? "is-visible": "" }`} ref={domRef}>
        {props.children}
      </div>
    );
  }

  export default function HomePage(){

    const navigate=useNavigate();
    const detail=DetailsList[3];
  
    return(<>
      <div>
          <center>
          <FadeInOut>
          <section className="part1">
            <button className="SignIn"><span className="SignInText" onClick={()=>navigate('/signUp')}>SIGN UP</span></button>
              <span>
              <ToolBar />
              <img className="Logo-Part" src={logo} alt="Here lies the logo"/></span>
              <div className="CenterPart">
                <h1>{detail.name}</h1>
                <p>{detail.description}</p>
              </div>
              <button className="CenterButton"><span className="ButtonText">Get Started</span></button>
          </section>
          <section className="part2">
            <span className='info-boxes'>
              <Description />
              <AboutPart />
              <FunctionalitiesPart />
            </span>
          </section>
          </FadeInOut>
          </center>
        
      </div>
      </>
    );
  }