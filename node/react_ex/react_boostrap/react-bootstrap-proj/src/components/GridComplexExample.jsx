import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack'

function GridComplexExample() {
  return (
    //  xs, sm, md, lg, 

    <Form style={{ width: '1280px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row>

        <Col className='d-flex locationInfo'>
        <Form.Group style={{ marginRight: 10 }} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group style={{ marginRight: 10 }} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group style={{ marginRight: 10 }} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
        </Col>

      </Row>

      {/* <Row>
  <Col lg={4}>
    <Form.Group controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>
  </Col>

  <Col lg={4}>
    <Form.Group controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
  </Col>

  <Col lg={4}>
    <Form.Group controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Col>
</Row> */}

<Row>
    <Col className='d-flex locationInfo'>
      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
       <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check examples are hard" />
      </Form.Group>
       <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </Col>
</Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;