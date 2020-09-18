import React from 'react';
import styles from './TextBlock.module.scss';
import Container from "./Container";
import classnames from 'classnames';

export default function TextBlock({ children, color }) {


  const textBlockClasses = classnames(styles.textBlock, {
    [styles.blue]: color === 'blue',
    [styles.red]: color === 'red',
  })
  return (
    <div className={textBlockClasses}>
      <Container>
        { children }
      </Container>
    </div>
  )
}
