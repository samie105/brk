import { ToastContainer } from "react-toastify";
import Footer from "../../components/dashboard/Footer";
import Nav from "../../components/dashboard/Nav";
import Sidebar from "../../components/dashboard/Sidebar";
import { UserDataProvider } from "../../contexts/userrContext";

export const metadata = {
  title: "Brokersite",
  description: "Experience new immense way of trading",
};

export default function Layout({ children }) {
  return (
    <UserDataProvider>
      <main>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          style={{
            padding: "1rem 2rem",
          }}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="fixed top-0 left-0 w-full text-white z-30 ">
          <Nav />
        </div>
        <div className="fixed bottom-0 left-0 w-full text-white z-30 ">
          <Footer />
        </div>
        <div className="content-container md:flex mt-[66px]  w-full h-auto">
          <div className="side-bar  w-[18%] hidden md:block">
            <Sidebar />
          </div>
          <div className="main-bar w-full max-h-[100vh] mb-[66px] overflow-y-scroll  ">
            {children}
          </div>
        </div>
      </main>
    </UserDataProvider>
  );
}
