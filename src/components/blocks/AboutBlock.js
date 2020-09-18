import React from 'react';
import styles from './AboutBlock.module.scss';
import Container from "./Container";

export default function AboutBlock ({}) {

  const backgroundImage = {backgroundImage: 'url(https://picsum.photos/1200/800)' }
  return (
    <div className={styles.aboutBlock} style={backgroundImage}>
      <div className={styles.overlay} />
      <Container>
        <div className={styles.text}>
          <p>Not feeling like hacking from home?<br/>Come to our hub then!</p> 
          <p>Our partners at The Student Hotel care about each and every one of our hackers – and that starts with your safety and wellbeing.</p>
           <p>We will assure that your hacking days, are the safest and the most enjoyable as we can do! ;)</p>
        </div>
        <div className={styles.buttons}>
          <a href={'https://google.de'} className={styles.about}>About The Student Hotel</a>
        </div>
      </Container>
    </div>
  )
}
