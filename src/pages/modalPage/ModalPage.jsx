import Container from "react-bootstrap/Container";
import Title from "../../components/title/Title";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalPage = () => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true)
  }
  const hideModal = () => {
    setModal(false)
  }
  return(
    <Container>
      <Title text='Modal page'/>
      <Button onClick={showModal}>Open modal</Button>
      <Modal show={modal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>I am modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello World</Modal.Body>
      </Modal>
    </Container>
  )
}

export default ModalPage;