import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const Menu = () => {
  return(
    <Container>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/modal'>Modal</Link></li>
        <li><Link to='/color'>Color</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/about'>About</Link></li>
        </ul>
    </Container>
  )
}

export default Menu;