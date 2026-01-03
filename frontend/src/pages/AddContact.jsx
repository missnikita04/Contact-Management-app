import ContactForm from "./../Components/ContactForm";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <ContactForm />
        
        <button
          onClick={() => navigate("/contacts")}
          className="mt-4 w-full py-2 rounded-lg text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 transition"
        >
          View All Contacts →
        </button>
      </div>
    </div>
  );
}

export default AddContact;
