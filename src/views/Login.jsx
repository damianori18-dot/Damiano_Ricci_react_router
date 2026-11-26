import Form from "../components/form";
export default function Login() {
    return (
        <main className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-7 col-lg-5">
                    <h1 className="mb-4">Accedi</h1>
                    <Form>
                        <div className="mb-3">
                            <label className="label-style d-block mb-2" htmlFor="login-email">Email</label>
                            <Form.Input type="email" />
                        </div>

                        <Form.Button bg="bg-s">Accedi</Form.Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}