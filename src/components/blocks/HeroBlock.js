import React from 'react';
import styles from './HeroBlock.module.scss';
import Link from "../common/Link";

export default function HeroBlock({}) {

  return (
    <div className={styles.heroBlock}>
      <img src={'/img/Hero.jpg'} alt={'Hero Image'} />
      <h1>Junction 2020 Connected<br/>Vienna Hub</h1>
      <div className={styles.apply}>
        <Link newTab href={'https://app.hackjunction.com/events/junction-2020-connected'}>Apply now</Link>
      </div>
    </div>
  )
}
