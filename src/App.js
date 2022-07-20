import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceProviderServices from "./pages/ServiceProviderServices";
import CustomerDashboardPage from "./pages/CustomerDashboard";
import LoginPage from "./pages/Login";
import ServiceDetail from "./pages/ServiceDetail";
import CustomerServicePost from "./pages/CustomerServicePost";
import HireService from "./pages/HireService";
import ServicePostDetail from "./pages/ServicePostDetail";
import MyServiceRequest from "./pages/MyServiceRequest";
import SpDashboard from "./pages/SpDashboard";
import MyServices from "./pages/MyServices";
import Signup from "./pages/Signup";
import SpCustomerServicePost from "./pages/SpCustomerServicePost";

function App() {
  return (
       <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/customer-dashboard" element={<CustomerDashboardPage />} />
                <Route path="/service-detail/:id" element={<ServiceDetail />} />
                <Route path="/customer-services/:id" element={<ServiceDetail />} />
                <Route path="/service-provider-services" element={<ServiceProviderServices />} />
                <Route path="/customer-services-post" element={<CustomerServicePost />} />
                <Route path="/sp-customer-services-post" element={<SpCustomerServicePost />} />
                <Route path="/hire-service/:id" element={<HireService />} />
                <Route path="/service-post-detail/:id" element={<ServicePostDetail />} />
                <Route path="/my-service-request" element={<MyServiceRequest />} />
                <Route path="/sp-dashboard" element={<SpDashboard />} />
                <Route path="/my-services" element={<MyServices />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="*"
                    element={
                        <div className="container mt-5">
                            <h1 className="text-center">404 Page Not Found</h1>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
