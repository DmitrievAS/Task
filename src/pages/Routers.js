import React from 'react';
import {Link, Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {Box, Button, ListItem, ListItemButton, Paper} from "@mui/material";
import Home from "./Home";
import Login from "./Login";
import Gists from "./Gists";


const Routers = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={'container'}>
            <Box className="header">
                <Paper className='ListFolders' elevation={0} sx={{display: 'flex'}}>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton className={"mainMenuButton"} sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/gists'>Gists</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/signup'>Sign Up</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/login'>Login</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Button
                                //     onClick={() => auth.signout(() => {
                                //     navigate(from, {replace: true})
                                // })}
                            >Sign Out</Button>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/gists" element={<Gists/>}/>
                    {/*<Route path="/signup" element={<SignUp/>}/>*/}

                    {/*<Route element={<RequiredAuth/>}>*/}
                    {/*    <Route path="/chats/" exact element={<NoChats/>}/>*/}
                    {/*    <Route path="/gists" element={<Gists/>}/>*/}
                    {/*</Route>*/}
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </div>
        </div>
    )

};

export default Routers;