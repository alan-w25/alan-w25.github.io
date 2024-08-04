"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}


const ContactForm = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(`Changing ${name} to ${value}`);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); 
        
        const response = await fetch('/api/contact', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            }, 
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setStatus('Message sent successfully!'); 
            setFormData({
                name:'',
                email:'',
                message:''
            });

        } else {
            setStatus('Failed to send message');
        }

    }

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded-md shadow-sm bg-white">
            <div className = "mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md text-black shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <button 
                type = "submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Send Message
                </button>
                {status && <p className="mt-4 text-black">{status}</p>}
        </form>
    );
}

export default ContactForm;