import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Components, Home } from "./pages";
import { Layout } from "./components";
import AvatarDocs from "./documentation/Avatar";
import AlertDocs from "./documentation/Alert";
import BadgeDocs from "./documentation/Badge";
import ButtonDocs from "./documentation/Button";
import CardDocs from "./documentation/Card";
import HeadingsDocs from "./documentation/Headings";
import ImageDocs from "./documentation/Image";
import TextDocs from "./documentation/Text";
import ComponentLayout from "./documentation/ComponentLayout";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/components/all" element={<Components />} />
          <Route path="/components" element={<ComponentLayout />}>
            <Route path="/components/avatar" element={<AvatarDocs />} />
            <Route path="/components/alert" element={<AlertDocs />} />
            <Route path="/components/badge" element={<BadgeDocs />} />
            <Route path="/components/button" element={<ButtonDocs />} />
            <Route path="/components/card" element={<CardDocs />} />
            <Route path="/components/headings" element={<HeadingsDocs />} />
            <Route path="/components/image" element={<ImageDocs />} />
            <Route path="/components/text" element={<TextDocs />} />
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
