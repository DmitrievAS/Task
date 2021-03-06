import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // await auth.signIn({email, password}, () => {
        //     navigate(from, {replace: true})
        // })
    }

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: "wrap",
            '&> :not(style)': {
                m: 1,
                width: 500,
                height: 500
            }
        }}>
            <form onSubmit={handleSubmit}>
                <Typography variant="h4" >Login</Typography>
                <p>Введите имя пользователя</p>
                <Paper>
                    <TextField
                        type="email"
                        placeholder="email"
                        name={"email"}
                        value={email}
                        onChange={handleEmailChange}

                    />
                    <br/>
                    <br/>
                    <TextField
                        type="password"
                        placeholder="password"
                        name={"password"}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <br/>
                    <br/>
                    <Button
                        type={"submit"}
                        variant="contained"
                    > Login</Button>
                </Paper>
            </form>
        </Box>
    )
};

export default Login;