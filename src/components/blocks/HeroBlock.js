import React from 'react';
import styles from './HeroBlock.module.scss';

export default function HeroBlock({}) {

  return (
    <div className={styles.heroBlock}>
      <img src={'/img/Hero.jpg'} alt={'Hero Image'} />
      <h1>NIKA's Full screen Hero banner</h1>
      <div className={styles.apply}>
        <a href={'https://app.hackjunction.com/events/junction-2020-connected'}>Apply now</a>
      </div>
    </div>
  )
}
