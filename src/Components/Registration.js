import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";

function Registration() {
  const [username, setUsername] = useState("");
  const [emailaddress, setEmailAddress] = useState("");
  const [passwordd, setPasswordd] = useState("");

  function clearInput() {
    setUsername("");
    setEmailAddress("");
    setPasswordd("");
  }

  async function UserPost() {
    // console.log(username, emailaddress, passwordd);
    const userDetails = {
      username: username,
      email: emailaddress,
      password: passwordd,
    };
    // userDetails.username = 'nik';
    // console.log(userDetails);
    await axios.post("http://localhost:5000/user-register", userDetails);
    // const response = await axios.post('http://localhost:5000/user-register', userDetails);
    // console.log(response);
    clearInput();
  }

  return (
    <div>
      <Container style={{ padding: "7%" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={emailaddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={passwordd}
              onChange={(e) => setPasswordd(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" onClick={UserPost}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;
