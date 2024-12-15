import { useState } from 'react';

export default function PostForm({ initialData = { title: '', body: '' }, onSubmit }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-cyan-800/90 m-auto my-10 max-w-lg rounded-2xl shadow-lg text-lg ring-4 ring-cyan-300/60 transition-all duration-300 hover:ring-cyan-400"
    >
      {/* Title Input */}
      <label className="flex flex-col mb-6">
        <span className="text-cyan-100 font-semibold mb-2">Title:</span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-3 rounded-md border border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-300 text-gray-800 transition-all"
          placeholder="Enter the post title"
        />
      </label>

      {/* Body Textarea */}
      <label className="flex flex-col mb-6">
        <span className="text-cyan-100 font-semibold mb-2">Body:</span>
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 rounded-md border border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-300 text-gray-800 resize-none transition-all"
          placeholder="Enter the post body"
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-cyan-400 font-bold py-3 px-6 rounded-xl text-black hover:bg-cyan-300 hover:scale-105 transition-transform duration-300 block w-full text-center"
      >
        Submit
      </button>
    </form>
  );
}
