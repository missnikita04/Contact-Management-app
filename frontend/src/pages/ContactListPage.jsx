import { useEffect, useState } from "react";
import axios from "axios";
import ContactList from "../Components/ContactList";
import { useNavigate } from "react-router-dom";

const API =
  "https://contact-management-app-backend-5rvl.onrender.com/api/contacts";

function ContactListPage() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const loadContacts = async () => {
    const res = await axios.get(API);
    setContacts(res.data);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="max-w-6xl mx-auto mb-4">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-blue-600 hover:underline"
        >
          ← Add New Contact
        </button>
      </div>

      <ContactList contacts={contacts} refresh={loadContacts} />
    </div>
  );
}

export default ContactListPage;
