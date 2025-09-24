// src/components/Contact.tsx
import React, { useState } from 'react';

export const Contact: React.FC = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
message: '',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
alert('Mensagem enviada!');
};

return (
<div className="contact p-4 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Contato</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <label htmlFor="name" className="text-sm text-[var(--muted)]">Nome</label>
    <input
        type="text"
        id="name"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        className="p-3 border border-slate-200 rounded-md"
    />

    <label htmlFor="email" className="text-sm text-[var(--muted)]">E-mail</label>
    <input
        type="email"
        id="email"
        name="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={handleChange}
        className="p-3 border border-slate-200 rounded-md"
    />

    <label htmlFor="message" className="text-sm text-[var(--muted)]">Mensagem</label>
    <textarea
        id="message"
        name="message"
        placeholder="Sua mensagem"
        value={formData.message}
        onChange={handleChange}
        className="p-3 border border-slate-200 rounded-md min-h-[120px]"
    />

    <button type="submit" className="self-start px-4 py-2 bg-[--brand] text-white rounded-md hover:bg-[--brand-dark]">Enviar</button>
    </form>
</div>
);
};
