import Header from '../../components/header/header';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function Login() {

  const [code, setCode] = useState("");

  function validateCode(code) {
    if (code === "12345"){
      alert("success")
    }else{
      alert("Wrong Code")
    }
  }


  return (
    <div>
      <Header
        version={"1.0.0"}
      />
      <div style={{textAlign:"center"}}>
        <InputGroup size="lg" style={{marginTop:"25%", width:"50%", marginLeft:"25%"}}>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            value={code}
            onChange={e => setCode(e.target.value)}
            type={"password"}
            placeholder={"Insert Code"}
          />
        </InputGroup>
        <Button style={{marginTop: "5%"}} 
          disabled={code === "" ? true: false}
          onClick={() => validateCode(code)}>Submit</Button>
      </div>
    </div>
  );
}

export default Login;
