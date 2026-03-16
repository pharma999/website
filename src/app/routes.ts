import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Careers } from "./pages/Careers";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "careers", Component: Careers },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);