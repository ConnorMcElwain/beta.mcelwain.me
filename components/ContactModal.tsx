import { useState } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ field1: "", field2: "", field3: "" });
  const apiKey = "NOTHINGFORNOW"; // Replace with your actual FormBee API key

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.formbee.dev/formbee/${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setIsOpen(false); // Close the modal after submission
        setFormData({ field1: "", field2: "", field3: "" }); // Reset form fields
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Form submission failed.");
    }
  };

  return (
    <>
      {/* Contact Me Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="block w-full rounded-lg border border-blue-500 bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700 sm:w-auto"
      >
        Contact Me
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ✕
            </button>

            {/* Form */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="field1"
                placeholder="Your Name"
                value={formData.field1}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="field2"
                placeholder="Your Email"
                value={formData.field2}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                name="field3"
                placeholder="Your Message"
                value={formData.field3}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
