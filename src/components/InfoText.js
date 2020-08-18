import React from 'react';

const InfoText = ({ text }) => (
  <p
    style={{
      width: '80%',
      textAlign: 'center',
      margin: '12px auto',
      color: '#F65940',
      fontWeight: 500,
      textDecoration: 'underline'
    }}
  >
    {text}
  </p>
);

export default InfoText;
