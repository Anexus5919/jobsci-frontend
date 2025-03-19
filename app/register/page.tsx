"use client";

import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    qualification: "",
    experience: "",
    resume: null as File | null,
  });

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-teal-200 dark:from-gray-900 dark:to-gray-800">
      <div className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg border border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Internship Registration
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
          </div>

          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />

          <div className="flex gap-4">
            <select name="country" value={formData.country} onChange={handleChange} required className="form-select w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>

            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
          </div>

          <input type="text" name="qualification" placeholder="Last Qualification" value={formData.qualification} onChange={handleChange} required className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />

          <input type="text" name="experience" placeholder="Relevant Experience (Optional)" value={formData.experience} onChange={handleChange} className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />

          <input type="file" name="resume" onChange={handleFileChange} className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />

          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition-all">
            Submit Application 🚀
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;