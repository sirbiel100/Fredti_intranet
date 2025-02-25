import { Button, Alert } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { VerticalForm, FormInput } from 'components';
import AccountLayout2 from './AccountLayout2';
import { useLogin } from './hooks';

type UserData = {
    username: string;
    password: string;
};

const BottomLink = () => {

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                Não tem uma conta?{' '}
                <Link to={'/intranet/account/register2'} className="text-muted ms-1">
                    <b>Criar Conta</b>
                </Link>
            </p>
        </footer>
    );
};

const Login2 = () => {
    const { loading, userLoggedIn, user, error, schemaResolver, onSubmit, redirectUrl } = useLogin();

    return (
        <>
            {(userLoggedIn || user) && <Navigate to={"/intranet/home"} replace />}

            <AccountLayout2 bottomLinks={<BottomLink />}>
                <h4 className="mt-0">Entrar</h4>
                <p className="text-muted mb-4">Coloque seu email e senha para acessar sua conta.</p>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ username: 'test', password: 'test' }}
                >
                    <FormInput
                        label={"Usuário"}
                        type="text"
                        name="username"
                        placeholder={"Coloque seu nome do usuário"}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={"Senha"}
                        type="password"
                        name="password"
                        placeholder={"Coloque sua senha"}
                        containerClass={'mb-3'}
                    >
                        <Link to="/intranet/account/forget-password2" className="text-muted float-end">
                            <small>Esqueceu sua senha?</small>
                        </Link>
                    </FormInput>

                    <div className="d-grid mb-0 text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            <i className="mdi mdi-login"></i> Entrar
                        </Button>
                    </div>

                    {/* social links */}
                    <div className="text-center mt-4">
                        <p className="text-muted font-16">Entrar com</p>
                        <ul className="social-list list-inline mt-3">
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-primary text-primary">
                                    <i className="mdi mdi-facebook"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-danger text-danger">
                                    <i className="mdi mdi-google"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-info text-info">
                                    <i className="mdi mdi-twitter"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-secondary text-secondary">
                                    <i className="mdi mdi-github"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </VerticalForm>
            </AccountLayout2>
        </>
    );
};

export default Login2;
