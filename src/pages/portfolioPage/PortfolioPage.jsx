import Container from "react-bootstrap/Container";
import Title from "../../components/title/Title";
import Accordion from "react-bootstrap/Accordion";

const PortfolioPage = () => {
  return(
    <Container>
      <Title text='Portfolio page'/>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Portfolio #1</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, repellat.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Portfolio #2</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut autem blanditiis distinctio hic nam, placeat quibusdam reiciendis. Animi doloribus ex fugit iste itaque laboriosam modi porro quasi repellat tempora.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default PortfolioPage;