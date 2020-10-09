import React from 'react';

import './Layout.scss';

export default function Layout({ children }) {
  return (
    <div className="layout__wholePage">
      <p>hey, sup?</p>

      <main>{children}</main>
    </div>
  );
}
