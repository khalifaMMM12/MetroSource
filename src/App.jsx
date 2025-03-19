import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/MetroGlobal/Loader";

// Lazy-loaded components
const HeroSection = lazy(() => import("./Routes/HeroSection"));
const AboutUs = lazy(() => import("./Routes/AboutUs"));
const Projects = lazy(() => import("./Routes/Projects"));
const Services = lazy(() => import("./Routes/services"));

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroSection />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
