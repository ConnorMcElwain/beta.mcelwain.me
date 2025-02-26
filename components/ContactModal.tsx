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
        className="block w-full rounded border border-blue-600 bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
        Contact Me
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 relative text-white">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
            >
              ✕
            </button>

            {/* Form */}
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="field1"
                placeholder="Your Name"
                value={formData.field1}
                onChange={handleChange}
                className="border border-gray-600 bg-gray-800 p-2 rounded-md focus:ring focus:ring-blue-400 text-white"
                required
              />
              <input
                type="email"
                name="field2"
                placeholder="Your Email"
                value={formData.field2}
                onChange={handleChange}
                className="border border-gray-600 bg-gray-800 p-2 rounded-md focus:ring focus:ring-blue-400 text-white"
                required
              />
              <textarea
                name="field3"
                placeholder="Your Message"
                value={formData.field3}
                onChange={handleChange}
                className="border border-gray-600 bg-gray-800 p-2 rounded-md focus:ring focus:ring-blue-400 text-white"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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