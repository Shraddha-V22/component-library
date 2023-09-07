import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Components, Home } from "./pages";
import { Layout } from "./components";
import Avatar from "./documentation/Avatar";
import Alert from "./documentation/Alert";
import Badge from "./documentation/Badge";
import Button from "./documentation/Button";
import Card from "./documentation/Card";
import Headings from "./documentation/Headings";
import Image from "./documentation/Image";
import Text from "./documentation/Text";
import ComponentLayout from "./documentation/ComponentLayout";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/components/all" element={<Components />} />
          <Route path="/components" element={<ComponentLayout />}>
            <Route path="/components/avatar" element={<Avatar />} />
            <Route path="/components/alert" element={<Alert />} />
            <Route path="/components/badge" element={<Badge />} />
            <Route path="/components/button" element={<Button />} />
            <Route path="/components/card" element={<Card />} />
            <Route path="/components/headings" element={<Headings />} />
            <Route path="/components/image" element={<Image />} />
            <Route path="/components/text" element={<Text />} />
          </Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

function App() {
  return <AppRouter />;
}

export default App;
