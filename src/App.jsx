import {createHashRouter, RouterProvider} from "react-router-dom";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RootPage from './RootPage';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import AudioList from './AudioList';
import Upload from './Upload';
import EditProfile from './EditProfile';

const router = createHashRouter([
  {
    path: "/",
    element: <RootPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <AudioList />
      },
      {
        path: "upload",
        element: <Upload />
      },
      {
          path: "edit-profile",
          element: <EditProfile />
      }
    ],
  }
]);

export default function App(props) {
  return (
    <div className="wrapper">
    {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/dashboard" element={<><Sidebar /><Dashboard /></>} />
          <Route path="/upload" element={<><Sidebar /><Upload /></>} />
          <Route path="/edit-profile" element={<><Sidebar /><EditProfile /></>} />
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </div>
  );
}