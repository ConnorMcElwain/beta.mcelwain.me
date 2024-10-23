import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("contact-form");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
        <input id="email" type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
        <textarea id="message" name="message" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button type="submit" disabled={state.submitting} className="mt-2 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
