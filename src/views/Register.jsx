import Form from "../components/form";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Register() {
  const { register } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name, email) {
      register({ name: name, email: email });
    }
  };
  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    else if (e.target.id === "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 col-lg-5">
          <h1 className="mb-4">Crea un account</h1>
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="label-style d-block mb-2" htmlFor="name">Nome</label>
              <Form.Input type="text" id="name" value={name} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="label-style d-block mb-2" htmlFor="email">Email</label>
              <Form.Input type="email" id="email" value={email} onChange={handleChange} />
            </div>

            <Form.Button bg="bg-s">Registrati</Form.Button>
          </Form>
        </div>
      </div>
    </main>
  )
}