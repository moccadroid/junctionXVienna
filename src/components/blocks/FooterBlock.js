import React from 'react';
import styles from './FooterBlock.module.scss';
import Container from "./Container";
import Link from "../common/Link";

export default function FooterBlock({}) {

  return (
    <div className={styles.footerBlock}>
      <Container>
        <div className={styles.links}>
          <Link href={'https://google.de'}>Privacy Policy</Link>
          <Link href={'https://google.de'}>Terms & Conditions</Link>
          <Link href={'https://google.de'}>Junction Conneted Website</Link>
        </div>

        <div className={styles.disclaimer}>
          Designed, developed, and hosted with {'<3'} by <Link href={'https://glitchcat.io'}>glitchcat.io</Link> and <Link href={'https://zwolf.io'}>zwolf.io</Link>
        </div>
      </Container>
    </div>
  )
}
