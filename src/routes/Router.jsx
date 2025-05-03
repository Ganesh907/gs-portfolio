import { lazy } from "react";
import { MainLayout } from "../layouts/MainLayout";
const Home = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/AboutUsPage"));
const Contact = lazy(() => import("../pages/ContactUsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage"));


const AppRoutes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/login", element: <LoginPage /> },
            { path: "*", element: <NotFound /> },
        ],
    },
];

export default AppRoutes;