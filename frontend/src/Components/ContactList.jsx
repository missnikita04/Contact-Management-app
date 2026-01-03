import axios from "axios";

const API =
  "https://contact-management-app-backend-5rvl.onrender.com/api/contacts";

function ContactList({ contacts, refresh }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    try {
      await axios.delete(`${API}/${id}`);
      refresh();
    } catch (err) {
      alert("Failed to delete contact");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-indigo-600">
        <h2 className="text-white text-lg font-semibold">
          Contact List
        </h2>
        <p className="text-blue-100 text-sm">
          Manage all saved contacts
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-100 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 font-semibold text-slate-700">
                Name
              </th>
              <th className="px-6 py-3 font-semibold text-slate-700">
                Phone
              </th>
              <th className="px-6 py-3 font-semibold text-slate-700">
                Message
              </th>
              <th className="px-6 py-3 text-center font-semibold text-slate-700">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-8 text-slate-400"
                >
                  No contacts found
                </td>
              </tr>
            )}

            {contacts.map((c) => (
              <tr
                key={c._id}
                className="border-t hover:bg-slate-50 transition"
              >
                {/* Name */}
                <td className="px-6 py-4 font-medium text-slate-800">
                  {c.name}
                </td>

                {/* Phone */}
                <td className="px-6 py-4 text-slate-600">
                  {c.phone}
                </td>

                {/* Message */}
                <td className="px-6 py-4 text-slate-600 max-w-sm">
                  {c.message ? (
                    <details className="group">
                      <summary className="cursor-pointer text-xs font-medium text-blue-600 hover:underline">
                        View message
                      </summary>
                      <p className="mt-2 text-sm text-slate-700 bg-slate-100 p-3 rounded-lg">
                        {c.message}
                      </p>
                    </details>
                  ) : (
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-slate-200 text-slate-500">
                      No message
                    </span>
                  )}
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    onClick={() => handleDelete(c._id)}
                    className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white rounded-full
                               bg-gradient-to-r from-red-500 to-pink-500
                               hover:from-red-600 hover:to-pink-600
                               active:scale-95 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactList;
