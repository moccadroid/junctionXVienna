import React from 'react';
import styles from './HeroBlock.module.scss';

export default function HeroBlock({}) {

  return (
    <div className={styles.heroBlock}>
      <img src={'https://picsum.photos/1200/800'} alt={'Hero Image'} />
      <h1>NIKA's Full screen Hero banner</h1>
      <div className={styles.apply}>
        <a href={'httos://google.de'}>Apply now</a>
      </div>
    </div>
  )
}
