import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./Components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Contact Management App
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <ContactForm refresh={fetchContacts} />
          <ContactList contacts={contacts} />
        </div>
      </div>
    </div>
  );
}

export default App;
