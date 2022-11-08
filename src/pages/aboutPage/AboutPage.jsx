import Container from "react-bootstrap/Container";
import Title from "../../components/title/Title";
import Table from "react-bootstrap/Table";
const AboutPage = () => {
  return(
    <Container>
      <Title text='About Page'/>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ruslan</td>
          <td>16</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Alice</td>
          <td>12</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Alina</td>
          <td>9</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  )
}

export default AboutPage;