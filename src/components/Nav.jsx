import React from 'react';
import Mobile from '../components/Navbar/Mobile.jsx';
import Large from '../components/Navbar/Large.jsx';

export default function Nav() {
  return (
    <div>
      <div className="block lg:hidden">
        <Mobile />
      </div>
      <div className="hidden lg:block">
        <Large />
      </div>
    </div>
  );
}
