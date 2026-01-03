import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./pages/AddContact";
import ContactListPage from "./pages/ContactListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddContact />} />
        <Route path="/contacts" element={<ContactListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
