import React, { useState } from 'react';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Wiadomość została wysłana pomyślnie!');
        setFormData({
          name: '',
          email: '',
          message: '',
          consent: false
        });
      } else {
        alert('Wystąpił błąd podczas wysyłania wiadomości.');
      }
    } catch (error) {
      alert('Wystąpił błąd podczas wysyłania wiadomości.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Skontaktuj się z nami</h2>
        <div className="contact-info">
          <p><strong>Telefon:</strong> +48 518 144 882</p>
          <p><strong>Email:</strong> bezpiecznydach@gmail.com</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Twoje imię" 
              required 
            />
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Twój email" 
              required 
            />
          </div>
          
          <div className="form-group">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Wiadomość" 
              required
            ></textarea>
          </div>
          
          <div className="form-group consent-group">
            <input 
              type="checkbox" 
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              required 
            />
            <label htmlFor="consent">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w postaci imienia, nazwiska, 
              adresu e-mail i nr tel. (jeżeli został podany), podanych w powyższym formularzu, 
              zgodnie z przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 
              z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem 
              danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia 
              dyrektywy 95/46/WE. Żądanie usunięcia danych proszę kierować na adres bezpiecznydach@gmail.com
            </label>
          </div>
          
          <button type="submit">Wyślij wiadomość</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;