import React from 'react';
import styles from './FooterBlock.module.scss';
import Container from "./Container";
import Link from "../common/Link";

export default function FooterBlock({}) {

  return (
    <div className={styles.footerBlock}>
      <Container>
        <div className={styles.links}>
          <Link newTab href={'https://www.hackjunction.com/policy'}>Privacy Policy</Link>
          <Link newTab href={'https://www.hackjunction.com/terms'}>Terms & Conditions</Link>
          <Link newTab href={'https://www.hackjunction.com/codeofconduct'}>Code of Conduct</Link>
          <Link newTab href={'https://connected.hackjunction.com'}>Junction Conneted Website</Link>
        </div>

        <div className={styles.disclaimer}>
          Designed, developed, and hosted with {'<3'} by <Link href={'https://glitchcat.io'}>glitchcat.io</Link> and <Link href={'https://zwolf.io'}>zwolf.io</Link>
        </div>
      </Container>
    </div>
  )
}
