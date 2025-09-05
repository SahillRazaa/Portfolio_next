'use client';

import React, { useState, useCallback } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';
import { ShowToast } from '@/utils/ShowToast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const formatEmailMessage = useCallback(({ name, email, message }: { name: string; email: string; message: string }) => {
    return `
      <div style="font-family: Arial, sans-serif; color: #1e293b;">
        <h2>New Contact Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
      </div>
    `;
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = form;
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedName.length < 2) {
      return ShowToast({ type: 'error', title: 'Invalid Name', message: 'Please enter a valid name.' });
    }
    if (!emailRegex.test(trimmedEmail)) {
      return ShowToast({ type: 'error', title: 'Invalid Email', message: 'Please enter a valid email address.' });
    }
    if (trimmedMessage.length < 10) {
      return ShowToast({ type: 'error', title: 'Message Too Short', message: 'Please write a more detailed message.' });
    }

    const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API;
    if (!BREVO_API_KEY) {
      return ShowToast({ type: 'error', title: 'Missing Config', message: 'Email service is not configured correctly.' });
    }

    setLoading(true);

    try {
      const emailData = {
        sender: { name: 'Portfolio Bot', email: 'connectwithsahil007@gmail.com' },
        to: [{ name: 'Sahil Raza Ansari', email: 'connectwithsahil007@gmail.com' }],
        subject: `New Message from ${trimmedName}`,
        htmlContent: formatEmailMessage({ name: trimmedName, email: trimmedEmail, message: trimmedMessage }),
      };

      await axios.post('https://api.brevo.com/v3/smtp/email', emailData, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
      });

      ShowToast({
        type: 'success',
        title: 'Message Sent!',
        message: "Thanks for reaching out. I'll get back to you shortly.",
      });
      setForm({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error sending message:', error);
      ShowToast({
        type: 'error',
        title: 'Send Failed',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  }, [form, formatEmailMessage]);

  return (
    <section id="contact" className="px-4 sm:px-8 mx-20 md:px-10 py-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
        Contact Me
      </h2>
      <div className="bg-white rounded-3xl p-6 sm:p-12 mx-auto shadow-lg relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="absolute top-[-20px] right-[-20px] bg-blue-600/10 p-4 rounded-full">
          <Send className="w-10 h-10 text-blue-600" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
          <div className="relative w-full">
            <input
              type="text"
              required
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full py-4 px-4 border border-gray-300 rounded-xl text-base focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
            />
          </div>
          <div className="relative w-full">
            <input
              type="email"
              required
              placeholder="your@email.com"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full py-4 px-4 border border-gray-300 rounded-xl text-base focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
            />
          </div>
          <div className="relative w-full">
            <textarea
              required
              placeholder="Your message..."
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full py-4 px-4 border border-gray-300 rounded-xl text-base resize-y min-h-[150px] focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-4 px-8 text-base border-none rounded-full cursor-pointer flex items-center gap-2 transition-colors duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Sending...' : <>Send Message <Send size={18} /></>}
          </button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-500">
          Or reach out directly at{' '}
          <a href="mailto:connectwithsahil007@gmail.com" className="text-blue-600 font-medium no-underline hover:underline">
            connectwithsahil007@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;