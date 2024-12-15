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
    <form onSubmit={handleSubmit} className='p-10 bg-cyan-800/80 m-auto my-10 max-w-md rounded-xl text-xl ring-2 ring-blue-300'>
      <label className='flex flex-col'>
        <span className='font-bold text-cyan-100 mb-2'>Title:</span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-3 rounded-md focus:outline-none focus:ring-cyan-300 focus:ring-4 text-black mb-3"
        />
      </label>
      <br />
      <label className='flex flex-col'>
        Body:
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
          className="p-3 rounded-md focus:outline-none focus:ring-cyan-300 focus:ring-4 text-black mb-10"
        />
      </label>
      <br />
      <button type="submit" className="bg-cyan-400 font-bold m-auto block py-3 px-6 rounded-xl text-black text-xl hover:scale-105">
        Submit
      </button>
    </form>
  );
}
