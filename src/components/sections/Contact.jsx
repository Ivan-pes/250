import { useState } from 'react';

import './Contact.css';
import Field from '@/components/ui/Field.jsx';
import Reveal from '@/components/ui/Reveal.jsx';
import Section from '@/components/ui/Section.jsx';
import SectionHead from '@/components/ui/SectionHead.jsx';
import { brand, contact } from '@/data/content.js';
import { submitLead } from '@/lib/submitLead.js';

const EMPTY = Object.fromEntries(contact.fields.map((field) => [field.name, '']));
const telHref = `tel:${brand.phone.replace(/[^\d+]/g, '')}`;

/** Форма брони: три обязательных поля, остальное — по желанию. */
export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const found = {};
    contact.fields.forEach((field) => {
      if (field.required && !values[field.name].trim()) found[field.name] = 'Заполните поле';
    });

    setErrors(found);

    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`field-${firstError}`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      await submitLead(values);
      setStatus('done');
    } catch {
      setStatus('idle');
      setErrors({ form: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' });
    }
  };

  return (
    <Section id="contact" tinted className="contact">
      <SectionHead title={contact.title} lead={contact.lead} />

      <div className="contact__inner">
        <Reveal className="contact__form-wrap">
          {status === 'done' ? (
            <div className="contact__done" role="status">
              <h3 className="display">{contact.success.title}</h3>
              <p>{contact.success.text}</p>
              <a className="link" href={`mailto:${brand.email}`}>{brand.email}</a>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {contact.fields.map((field) => (
                <Field
                  key={field.name}
                  {...field}
                  value={values[field.name]}
                  error={errors[field.name]}
                  onChange={handleChange}
                />
              ))}

              {errors.form && <p className="contact__error" role="alert">{errors.form}</p>}

              <button
                className="btn btn--primary contact__submit"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? contact.sending : contact.submit}
              </button>

              <p className="contact__hint">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore.
              </p>
            </form>
          )}
        </Reveal>

        <Reveal as="aside" className="contact__aside" delay={120}>
          <dl className="contact__details">
            <div>
              <dt>Instagram</dt>
              <dd>
                <a className="link" href={brand.instagramUrl} target="_blank" rel="noreferrer noopener">
                  {brand.instagram}
                </a>
              </dd>
            </div>
            <div>
              <dt>Почта</dt>
              <dd><a className="link" href={`mailto:${brand.email}`}>{brand.email}</a></dd>
            </div>
            <div>
              <dt>Телефон</dt>
              <dd><a className="link" href={telHref}>{brand.phone}</a></dd>
            </div>
          </dl>

          <p className="contact__hours">{brand.hours}</p>
        </Reveal>
      </div>
    </Section>
  );
}
