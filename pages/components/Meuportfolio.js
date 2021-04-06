import Card from 'react-bootstrap/Card'




function Meuportfolio(){
  return(

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



  )
}


export default Meuportfolio;