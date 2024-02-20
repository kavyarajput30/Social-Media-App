"use client"
import {
    Container,
    Content,
    Form,
    Button,
    Panel,
    FlexboxGrid,
  } from "rsuite";
  import { useState } from "react";
  import { useRouter } from "next/navigation";


export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const handleChange = (name, value) => {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = async () => {
      router.push("/");
    };
    return(
        <div style={{ backgroundColor:"white",width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>

        <Container style={{minWidth:"30%" }}>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Login</h3>} bordered>

                   <Form>
                  <Form.Group controlId="email-6" >
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control
                     classPrefix="form-input"
                      name="email"
                      type="email"
                      placeholder="Please enter email"
                      value={formData.email}
                      onChange={(value) => handleChange("email", value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="password-6" >
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control
                      classPrefix="form-input"
                      name="password"
                      type="password"
                      placeholder="Please enter password"
                      value={formData.password}
                      autoComplete="off"
                      onChange={(value) => handleChange("password", value)}
                    />
                    <p style={{cursor:"pointer"}} appearance="link">forget password</p>
                  </Form.Group>
                  <Form.Group>
                    <Button
                      appearance="primary"
                      onClick={handleSubmit}>
                      Login
                    </Button>
                  </Form.Group>
                </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>

          </div>
    )
}