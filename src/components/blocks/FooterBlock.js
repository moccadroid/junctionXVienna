import React from 'react';
import styles from './FooterBlock.module.scss';
import Container from "./Container";

export default function FooterBlock({}) {

  return (
    <div className={styles.footerBlock}>
      <Container>
        <div className={styles.links}>
          <a href={'https://google.de'}>Privacy Policy</a>
          <a href={'https://google.de'}>Terms & Conditions</a>
          <a href={'https://google.de'}>Junction Conneted Website</a>
        </div>

        <div className={styles.disclaimer}>
          Designed, developed, and hosted with {'<3'} by <a href={'https://glitchcat.io'}>glitchcat.io</a> and <a href={'https://zwolf.io'}>zwolf.io</a>
        </div>
      </Container>
    </div>
  )
}
