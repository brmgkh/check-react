import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form,Button,Navbar, Offcanvas,Nav,NavDropdown,Container} from 'react-bootstrap';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#"><h4>Espace Client</h4></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Bonnes Adresses</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="https://www.mytek.tn" target="_blank">MyTek</Nav.Link>
          <Nav.Link href="https://www.tunisianet.com.tn" target="_blank">Tunisianet</Nav.Link>
          <NavDropdown title="Autres Magasins" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="https://www.tayara.tn" target="_blank">Tayara tn</NavDropdown.Item>
            <NavDropdown.Item href="https://www.scoop.com.tn" target="_blank">scoop</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.wiki.tn" target="_blank">
              wiki
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
 
     <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address </Form.Label>
    <Form.Control id ="ch1" type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control id ="ch2" type="password" placeholder="Password" />
  </Form.Group>
</Form>
<div className="mb-2">
    <Button variant="primary" size="lg">
      Connexion
    </Button>
   </div>
   </div>
   
  );
}

export default App;
