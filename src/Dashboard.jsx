import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Sidebar from "./Sidebar";
import Footer from './Footer';
import storage from './storage';

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <main className="content">
          <Provider store = {storage}>
            <Outlet />
          </Provider>
        </main>
        <Footer />
      </div>
    </>
  );
}
