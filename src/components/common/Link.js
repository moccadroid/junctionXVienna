import React from 'react';
import styles from './Link.module.scss';

export default function Link({ href, newTab, children }) {

  return (
    <a href={href} rel={"noopener noreferrer"} target={newTab ? '_blank' : '_self'}>
      {children}
    </a>
  )
}
