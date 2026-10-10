import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './Components/Navigation/Navbar';
import Error404 from './Components/Error/Error404';
import Footer from './Components/Footer/Footer';
import AmbientBackground from './Components/UI/AmbientBackground';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <Outlet />
          <Footer />
        </>
      ),
      errorElement: (
        <>
          <NavBar />
          <Error404 />
          <Footer />
        </>
      ),
      children: [
        {
          path: '/',
          element: <Homepage />,
        },
        { path: '/about', element: <Navigate to="/#about" replace /> },
        { path: '/projects', element: <Navigate to="/#projects" replace /> },
        { path: '/contact', element: <Navigate to="/#contact" replace /> },
        { path: '/resume', element: <Navigate to="/#about" replace /> },
      ],
    },
  ]);

  return (
    <div className="main">
      <AmbientBackground />
      <div className="app-content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
