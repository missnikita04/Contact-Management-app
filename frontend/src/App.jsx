import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";

const API = "https://contact-management-app-backend-5rvl.onrender.com/api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    const res = await axios.get(API);
    setContacts(res.data);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <ContactForm refresh={loadContacts} />
      <ContactList contacts={contacts} refresh={loadContacts} />
    </div>
  );
}

export default App;
