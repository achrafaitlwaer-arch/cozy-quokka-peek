import React from 'react';

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-screen">
    <h1 className="text-2xl font-bold">{title}</h1>
  </div>
);

export default Placeholder;
