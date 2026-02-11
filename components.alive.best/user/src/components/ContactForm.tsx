import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'US',
    phoneNumber: '',
    message: '',
    agreeToPolicy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Gradient Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '-40px',
            transform: 'translateX(-50%) rotate(30deg)',
            width: '1200px',
            aspectRatio: '1155 / 678',
            background: 'linear-gradient(135deg, #10b981 0%, #6366f1 100%)',
            opacity: 0.15,
            filter: 'blur(40px)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '42rem', width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              color: '#111827',
              marginBottom: '1rem',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            } as React.CSSProperties}
          >
            Get in touch
          </h1>
          <p
            style={{
              marginTop: '0.75rem',
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#6B7280',
              maxWidth: '30rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem 2rem',
            }}
          >
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.625rem',
                }}
              >
                First name
              </label>
              <input
                id="first-name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '0.5rem',
                  backgroundColor: '#ffffff',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  fontSize: '1rem',
                  color: '#111827',
                  border: '1px solid #E5E7EB',
                  boxSizing: 'border-box',
                  transition: 'border-color 200ms, box-shadow 200ms, outline 200ms',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  e.currentTarget.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.outline = 'none';
                }}
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.625rem',
                }}
              >
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '0.5rem',
                  backgroundColor: '#ffffff',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  fontSize: '1rem',
                  color: '#111827',
                  border: '1px solid #E5E7EB',
                  boxSizing: 'border-box',
                  transition: 'border-color 200ms, box-shadow 200ms, outline 200ms',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  e.currentTarget.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.outline = 'none';
                }}
              />
            </div>

            {/* Company */}
            <div style={{ gridColumn: 'span 2' }}>
              <label
                htmlFor="company"
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.625rem',
                }}
              >
                Organization
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '0.5rem',
                  backgroundColor: '#ffffff',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  fontSize: '1rem',
                  color: '#111827',
                  border: '1px solid #E5E7EB',
                  boxSizing: 'border-box',
                  transition: 'border-color 200ms, box-shadow 200ms, outline 200ms',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  e.currentTarget.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.outline = 'none';
                }}
              />
            </div>

            {/* Email */}
            <div style={{ gridColumn: 'span 2' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.625rem',
                }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '0.5rem',
                  backgroundColor: '#ffffff',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  fontSize: '1rem',
                  color: '#111827',
                  border: '1px solid #E5E7EB',
                  boxSizing: 'border-box',
                  transition: 'border-color 200ms, box-shadow 200ms, outline 200ms',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  e.currentTarget.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.outline = 'none';
                }}
              />
            </div>

            {/* Phone Number with Country Code */}
            <div style={{ gridColumn: 'span 2' }}>
              <label
                htmlFor="phone-number"
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.625rem',
                }}
              >
                Phone number
              </label>
              <div
                style={{
                  display: 'flex',
                  borderRadius: '0.375rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #D1D5DB',
                  transition: 'border-color 200ms',
                }}
              >
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{
                    paddingTop: '0.625rem',
                    paddingBottom: '0.625rem',
                    paddingLeft: '0.875rem',
                    paddingRight: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#4B5563',
                    border: 'none',
                    backgroundColor: 'transparent',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                >
                  <option value="US">+1</option>
                  <option value="CA">+1</option>
                  <option value="EU">+44</option>
                </select>
                <input
                  id="phone-number"
                  type="text"
                  name="phoneNumber"
                  placeholder="555-123-4567"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={{
                    flex: 1,
                    paddingTop: '0.625rem',
                    paddingRight: '0.875rem',
                    paddingBottom: '0.625rem',
                    paddingLeft: '0.5rem',
                    fontSize: '1rem',
                    color: '#111827',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div style={{ gridColumn: 'span 2' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.625rem',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '0.375rem',
                  backgroundColor: '#ffffff',
                  paddingLeft: '0.875rem',
                  paddingRight: '0.875rem',
                  paddingTop: '0.625rem',
                  paddingBottom: '0.625rem',
                  fontSize: '1rem',
                  color: '#111827',
                  border: '1px solid #D1D5DB',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  transition: 'border-color 200ms, outline 200ms',
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.outline = '2px solid transparent';
                  e.currentTarget.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#D1D5DB';
                  e.currentTarget.style.outline = 'none';
                }}
              />
            </div>

            {/* Checkbox */}
            <div style={{ gridColumn: 'span 2', display: 'flex', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '32px',
                    height: '24px',
                    backgroundColor: formData.agreeToPolicy ? '#10b981' : '#E5E7EB',
                    borderRadius: '9999px',
                    padding: '2px',
                    cursor: 'pointer',
                    transition: 'background-color 200ms ease-in-out',
                  }}
                >
                  <input
                    id="agree-to-policies"
                    type="checkbox"
                    name="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onChange={handleChange}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      appearance: 'none',
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: formData.agreeToPolicy ? '16px' : '2px',
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#ffffff',
                      borderRadius: '50%',
                      transition: 'left 200ms ease-in-out',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </div>
              </div>
              <label htmlFor="agree-to-policies" style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#4B5563', cursor: 'pointer' }}>
                By contacting us, you agree to our{' '}
                <a href="#" style={{ fontWeight: '600', color: '#10b981', textDecoration: 'none' }}>
                  terms of service
                </a>
                .
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: '2.5rem' }}>
            <button
              type="submit"
              disabled={!formData.agreeToPolicy}
              style={{
                display: 'block',
                width: '100%',
                borderRadius: '0.375rem',
                backgroundColor: formData.agreeToPolicy ? '#10b981' : '#D1D5DB',
                paddingLeft: '0.875rem',
                paddingRight: '0.875rem',
                paddingTop: '0.625rem',
                paddingBottom: '0.625rem',
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: formData.agreeToPolicy ? '#ffffff' : '#9CA3AF',
                border: 'none',
                cursor: formData.agreeToPolicy ? 'pointer' : 'not-allowed',
                transition: 'background-color 200ms, color 200ms',
                boxShadow: formData.agreeToPolicy ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
                opacity: formData.agreeToPolicy ? 1 : 0.6,
              }}
              onMouseEnter={(e) => {
                if (formData.agreeToPolicy) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#059669';
                }
              }}
              onMouseLeave={(e) => {
                if (formData.agreeToPolicy) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#10b981';
                }
              }}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
