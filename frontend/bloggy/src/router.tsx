import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Ton layout avec la Navbar et l'Outlet
        children: [
            {
                // path: '/' ou index: true permet d'afficher Home par défaut
                index: true, 
                element: <Home />
            },
            {
                // Route pour les articles
                path: 'Articles', // Pas besoin de mettre le "/" au début dans les enfants
                element: <Articles />
            },
            {
                // Optionnel : redirection ou page Contact si tu l'as créée
                path: 'contact',
                element: <div className="p-20 text-center text-3xl font-bold">Page Contact en construction</div>
            }
        ]
    }
]);

export default router;
