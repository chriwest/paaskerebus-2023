import React from 'react';
import Link from 'next/link';

const Mystisk: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/quiz">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/mystisk">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor
        lectus at odio bibendum, sit amet rutrum arcu auctor. Sed lacinia urna
        augue, vitae laoreet mauris maximus sit amet.
      </p>
    </div>
  );
};

export default Mystisk;
