import { TiHtml5} from 'react-icons/ti';
import {SiCss3} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import { ProgressBar } from 'react-bootstrap';


const now = 80;
const now2= 60;
const now3= 40;

export default function Cardskills(){
    return(

<div className="containercard">
  <div className="card1">
    <div className="face face1">
      <div className="content">
        <i className="html5"><TiHtml5  style={{ color: 'orange' }}/></i>           
        <h3>HTML 5</h3>
      </div>
    </div>
    <div className="face face2">
      <div className="content">
          
      <ProgressBar now={80} label={`${now}%`} max={100} />
        <p>  atualizando atualizando atualizando atualizando atualizando atualizando atualizando atualizando</p>
        
      </div>
    </div>
  </div>
  <div className="card1">
    <div className="face face1">
      <div className="content">
        <i className="css3"><SiCss3 style={{ color: 'teal' }}/></i>              <h3>CSS 3</h3>
      </div>
    </div>
    <div className="face face2">
      <div className="content">
      <ProgressBar now={60} label={`${now2}%`} max={100} />
        <p> atualizando atualizando atualizando atualizando atualizando atualizando atualizando atualizando atualizando atualizando </p>
        
      </div>
    </div>
  </div>
  <div className="card1">
    <div className="face face1">
      <div className="content">
        <i className="react"><FaReact style={{ color: 'teal' }}/></i>
        <h3>ReactJS/React Native</h3>
      </div>
    </div>
    <div className="face face2">
      <div className="content">
      <ProgressBar now={40} label={`${now3}%`} max={100} />
        <p>  atualizando atualizando atualizando atualizando atualizando atualizando atualizando atualizando</p>
        
      </div>
    </div>
  </div>
</div>





    )
}