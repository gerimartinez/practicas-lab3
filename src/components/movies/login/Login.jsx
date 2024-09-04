import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

const Login = () => {

    const [userName, setUsername] = useState('');

    const handleChangeUserName = (event) => {
        const value = event.target.value;
        if (value.includes("o") || value.includes("O")) {
          window.alert("Por favor, ¡Nombres de usuario sin la letra o!");
        } else {
          setUsername(value);
        }
    };
    
    const handleRegister = () => {
        if (userName === "" || userName.includes("o") || userName.includes("O")) {
          window.alert("Usuario inválido para registrarse");
        } else {
          window.alert("¡Usuario registrado correctamente!");
        }
    };

    return (
        <Card style={{ width: '120rem', display: 'flex', justifyContent: 'center' }}>
            <Form style={{ display: 'flex', flexDirection: 'column'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ margin: 5 }}>Nombre de usuario:</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Ingrese su nombre de usuario"
                        value={userName}
                        onChange={handleChangeUserName}
                        style={{ margin: 5 }}
                    />
                </Form.Group>
                <Button onClick={handleRegister}>Registrarse</Button>
                <p>{userName}</p>
            </Form>
        </Card>
    )
}

export default Login