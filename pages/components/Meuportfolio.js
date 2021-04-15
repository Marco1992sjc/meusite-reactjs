
import Card from 'react-bootstrap/Card'




function Meuportfolio(){
  return(




<>


<Card className="card" style={{ width: '20rem' }} bg="light">
<a href="./reactnews.png" >
  <Card.Img variant="top" src="./reactnews.png" alt="buscador de notícias de Marco Aurelio" /> </a>
  <Card.Body>
    
    <Card.Title><h1>React News</h1></Card.Title>
    <Card.Text>
      Buscador de notícias desenvolvido em Nextjs+Semantic ui
    </Card.Text>

  </Card.Body>
</Card>



<Card className="card2" style={{ width: '20rem' }} bg="light">

  <Card.Body>
  <iframe width="270" height="270" src="https://www.youtube.com/embed/wtlzPD5VS0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Card.Title><h1>YoutubeMusic Desktop</h1></Card.Title>
    <Card.Text>
      <a href="https://drive.google.com/file/d/1Wjcpi547JG6zU_LO-tq41VooDGsI_PeS/view?usp=sharing"><u>(Download)</u></a> Player do youtube music desenvolvido no framework electronjs para desktop, aplicativo bem símples que ao tempo irei atualizando conforme aprendo no framework
      (inlusive se tornou meu player padrão rs, devido a google não disponibilizar aplicativo para windows)
    </Card.Text>

  </Card.Body>
</Card>



</>

  )
}


export default Meuportfolio;