interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamMembersProps {
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    name: 'Victoria Bennett',
    role: 'Founder & CEO',
    image:
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234B5563"%3E%3Ccircle cx="12" cy="8" r="4"/%3E%3Cpath d="M12 14c-6 0-8 3-8 3v5h16v-5s-2-3-8-3z"/%3E%3C/svg%3E',
  },
  {
    name: 'Alexander Brooks',
    role: 'Chief Technology Officer',
    image:
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234B5563"%3E%3Ccircle cx="12" cy="8" r="4"/%3E%3Cpath d="M12 14c-6 0-8 3-8 3v5h16v-5s-2-3-8-3z"/%3E%3C/svg%3E',
  },
  {
    name: 'Grace Thompson',
    role: 'Head of Strategy',
    image:
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234B5563"%3E%3Ccircle cx="12" cy="8" r="4"/%3E%3Cpath d="M12 14c-6 0-8 3-8 3v5h16v-5s-2-3-8-3z"/%3E%3C/svg%3E',
  },
  {
    name: 'Oliver Kane',
    role: 'Lead Architect',
    image:
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234B5563"%3E%3Ccircle cx="12" cy="8" r="4"/%3E%3Cpath d="M12 14c-6 0-8 3-8 3v5h16v-5s-2-3-8-3z"/%3E%3C/svg%3E',
  },
  {
    name: 'Isabella Morgan',
    role: 'Creative Director',
    image:
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234B5563"%3E%3Ccircle cx="12" cy="8" r="4"/%3E%3Cpath d="M12 14c-6 0-8 3-8 3v5h16v-5s-2-3-8-3z"/%3E%3C/svg%3E',
  },
  {
    name: 'Lucas Hartford',
    role: 'Chief Operations Officer',
    image:
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234B5563"%3E%3Ccircle cx="12" cy="8" r="4"/%3E%3Cpath d="M12 14c-6 0-8 3-8 3v5h16v-5s-2-3-8-3z"/%3E%3C/svg%3E',
  },
];

export const TeamMembers = ({ members = defaultMembers }: TeamMembersProps) => {
  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '8rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'grid',
          maxWidth: '80rem',
          gap: '5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {/* Header Section */}
        <div style={{ maxWidth: '42rem' }}>
          <h2
            style={{
              fontSize: '1.875rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              color: '#111827',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
            }}
          >
            Our exceptional team
          </h2>
          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '1.125rem',
              lineHeight: '1.75',
              color: '#4B5563',
            }}
          >
            Talented professionals united by innovation and excellence. Our team brings together diverse expertise to create transformative solutions for every challenge.
          </p>
        </div>

        {/* Team Members Grid */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: '2rem 2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gridColumn: 'span 2',
          }}
        >
          {members.map((member) => (
            <li key={member.name}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    outline: '1px solid rgba(0, 0, 0, 0.05)',
                    outlineOffset: '-4px',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.75',
                      fontWeight: '600',
                      letterSpacing: '0em',
                      color: '#111827',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      fontWeight: '600',
                      color: '#4F46E5',
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
