import Form from "../components/form";

export default function Register() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 col-lg-5">
          <h1 className="mb-4">Crea un account</h1>
          <Form>
            <div className="mb-3">
              <label className="label-style d-block mb-2" htmlFor="register-name">Nome</label>
              <Form.Input type="text" />
            </div>

            <div className="mb-3">
              <label className="label-style d-block mb-2" htmlFor="register-email">Email</label>
              <Form.Input type="email" />
            </div>

            <div className="mb-3">
              <label className="label-style d-block mb-2" htmlFor="register-password">Password</label>
              <Form.Input type="password" />
            </div>

            <div className="mb-4">
              <label className="label-style d-block mb-2" htmlFor="register-confirm-password">Conferma password</label>
              <Form.Input type="password" />
            </div>

            <Form.Button bg="bg-s">Registrati</Form.Button>
          </Form>
        </div>
      </div>
    </main>
  )
}