import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Nome obrigatrio';
    if (!form.email.trim()) e.email = 'E-mail obrigatrio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail invlido';
    if (!form.message.trim()) e.message = 'Mensagem obrigatria';
    return e;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="section bg-white">
      <div className="max-w-xl mx-auto px-4 w-full">
        <div className="section-header">
          <h2 className="section-title">Fale Conosco</h2>
          <p className="section-subtitle">
            Tem um projeto em mente? Envie sua mensagem e retornamos em breve.
          </p>
        </div>

        {sent && (
          <div className="flex items-center gap-3 mb-6 p-4 bg-[var(--primary-50)] border border-[var(--primary-100)] text-[var(--primary-dark)] rounded-xl font-medium">
            <CheckCircle2 size={22} />
            Mensagem enviada com sucesso!
          </div>
        )}

        <form onSubmit={onSubmit} className="flex flex-col gap-5 bg-[var(--bg)] rounded-2xl p-6 md:p-10 shadow-sm border border-[var(--border)]" noValidate>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Nome
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              value={form.name}
              onChange={onChange}
              className={`input ${errors.name ? '!border-red-400 !ring-red-400/30' : ''}`}
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            E-mail
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={onChange}
              className={`input ${errors.email ? '!border-red-400 !ring-red-400/30' : ''}`}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Mensagem
            <textarea
              name="message"
              placeholder="Descreva seu projeto ou dvida..."
              value={form.message}
              onChange={onChange}
              rows={4}
              className={`input resize-none ${errors.message ? '!border-red-400 !ring-red-400/30' : ''}`}
            />
            {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
          </label>

          <button type="submit" className="btn-primary w-full gap-2">
            <Send size={18} />
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};
