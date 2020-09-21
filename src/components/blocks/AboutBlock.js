import React from 'react';
import styles from './AboutBlock.module.scss';
import Container from "./Container";
import Link from "../common/Link";

export default function AboutBlock ({}) {

  const backgroundImage = {backgroundImage: 'url(/img/Lobby_Entrance.jpg)' }
  return (
    <div className={styles.aboutBlock} style={backgroundImage}>
      <div className={styles.overlay} />
      <Container>
        <div className={styles.text}>
          <p>The Student Hotel (TSH) not only welcomes students, but guests and visitors from all walks of life with an open mind, love of learning and curious nature; with what we call a ’student spirit.</p>
          <p>The student spirit can be seen everywhere from our bold design and impactful initiatives to our ever-inspiring students, guests and co-workers.</p>
          <p>At TSH you reach your full potential whilst connecting with like-minded from all walks of life.</p>
          <p>In case you need a cozy and safe place to stay: book your room at TSH and enjoy an all-round experience with the JUNCTIONx Community in Vienna.</p>
        </div>
        <div className={styles.buttons}>
          <Link newTab href={'https://www.thestudenthotel.com/vienna/stay/hotel-stay/'}>Book your room</Link>
        </div>
      </Container>
    </div>
  )
}
