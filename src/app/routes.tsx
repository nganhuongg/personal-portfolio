import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Achievements } from "./pages/Achievements";
import { Skills } from "./pages/Skills";
import { Resume } from "./pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "experience", Component: Experience },
      { path: "achievements", Component: Achievements },
      { path: "skills", Component: Skills },
      { path: "resume", Component: Resume },
    ],
  },
]);
