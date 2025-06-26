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
<div className="contact">
    <h2>Contato</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Nome</label>
    <input
        type="text"
        id="name"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
    />

    <label htmlFor="email">E-mail</label>
    <input
        type="email"
        id="email"
        name="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={handleChange}
    />

    <label htmlFor="message">Mensagem</label>
    <textarea
        id="message"
        name="message"
        placeholder="Sua mensagem"
        value={formData.message}
        onChange={handleChange}
    />

    <button type="submit">Enviar</button>
    </form>
</div>
);
};
