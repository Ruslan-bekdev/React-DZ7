import Container from "react-bootstrap/Container";
import Title from "../../components/title/Title";
import {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const ColorPage = () => {
  const [color,setColor] = useState('light');
  const selectColor = (e) => {
    setColor(e.target.innerText);
  }
  return(
    <Container>
      <Title text='Color page'/>
      <Dropdown>
        <Dropdown.Toggle variant={color} id="dropdown-basic">
          Select color for me
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={selectColor}>primary</Dropdown.Item>
          <Dropdown.Item onClick={selectColor}>secondary</Dropdown.Item>
          <Dropdown.Item onClick={selectColor}>success</Dropdown.Item>
          <Dropdown.Item onClick={selectColor}>warning</Dropdown.Item>
          <Dropdown.Item onClick={selectColor}>danger</Dropdown.Item>
          <Dropdown.Item onClick={selectColor}>info</Dropdown.Item>
          <Dropdown.Item onClick={selectColor}>light</Dropdown.Item>
          <Dropdown.Item onClick={selectColor}>dark</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  )
}

export default ColorPage;