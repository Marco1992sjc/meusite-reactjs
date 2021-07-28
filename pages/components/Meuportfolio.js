
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import { Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'





function Meuportfolio(){
  return(




<>




<CardDeck className="carddeck" >
  <Card>
  <a href="/reactnews.png" target="_blank"><Card.Img variant="top" src="/reactnews.png" height="220"  alt="buscador de notícias de Marco Aurelio"/></a>
    <Card.Body>
      
      <Card.Title><h1>React News</h1></Card.Title>
      <Card.Text>
      Buscador de notícias utilizando o Google News API desenvolvido em NextJS estilizado com Semantic UI
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>

  <iframe  height="220" src="https://www.youtube.com/embed/wtlzPD5VS0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    <Card.Body>
    
      <Card.Title><h1>YoutubeMusic Desktop</h1></Card.Title>
      <Card.Text>
      <a href="https://drive.google.com/file/d/1R7ksiLRXDmfeS4jZCFLyrVYSgMxSJvx8/view?usp=sharing" target="_blank"><u>(Download)</u></a> Player do youtube music desenvolvido no framework electronjs para desktop.

<a href="https://github.com/Marco1992sjc/youtubemusic-app" target="_blank"><u>Link do GitHub</u></a>
      </Card.Text>
    </Card.Body>
    
  </Card>

  <Card>
  
  <Carousel>
  <Carousel.Item>
  <a href="/economize.jpg" target="_blank"><img
      className="d-block w-100"
      src="/economize.jpg"
      alt="First slide"
      height="220"
      
    /></a>
    
  </Carousel.Item>
  <Carousel.Item>
  <a href="/economizeadmin1.jpg" target="_blank"> <img
      className="d-block w-100"
      src="economizeadmin1.jpg"
      alt="Second slide"
      height="220"
    /></a>

  </Carousel.Item>
  <Carousel.Item>
  <a href="/economizeadmin2.jpg" target="_blank"><img
      className="d-block w-100"
      src="economizeadmin2.jpg"
      alt="Third slide"
      height="220"
    /></a>

  </Carousel.Item>
</Carousel>


  
    
    
    <Card.Body>
      
      <Card.Title><h1>Economize Site de Cupons</h1></Card.Title>
      <Card.Text>
      economize.sjc.br Site de cupons de desconto e ofertas de afiliados. Possui Dashboard Admin, banco de dados,etc...
      </Card.Text>
      <Button className="button001" variant="primary" href="https://economize.sjc.br" target="_blank">Economize</Button>
    </Card.Body>
  
  </Card>
 


</CardDeck>




</>

  )
}




export default Meuportfolio;
