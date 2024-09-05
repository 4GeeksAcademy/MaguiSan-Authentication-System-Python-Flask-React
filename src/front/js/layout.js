import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";

import injectContext from "./store/appContext";
import { App } from "./pages/App.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { PrivateUser } from "./pages/PrivateUser.jsx";
import { Footer } from "./component/Footer.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;
    return (
        <div>
            <BrowserRouter basename={basename}>
                    <Routes>
                        <Route element={<App />} path="/" />
                        <Route element={<SignUp />} path="/SignUp" />
                        <Route element={<PrivateUser />} path="/PrivateUser" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
