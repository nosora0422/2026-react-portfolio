import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';

import './reset.css';
import App from './App';

// Fonts
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/700.css";

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";

// Lazy-loaded routes
const Home = lazy(() => import('./Views/Home/Home'));
const About = lazy(() => import('./Views/About/About'));
const Projects = lazy(() => import('./Views/Projects/Projects'));
const Project = lazy(() => import('./Views/Project/Project'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project-details/:name" element={<Project />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);