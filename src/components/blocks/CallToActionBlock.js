import React from 'react';
import styles from './CallToActionBlock.module.scss';
import Container from "./Container";
import Link from "../common/Link";

export default function CallToActionBlock({}) {

  return (
    <div className={styles.callToAction}>
      <Container>
        <div className={styles.title}>
          This is the Vienna Hub for Junction 2020 Connected
        </div>
        <div className={styles.description}>
          <p>Experience a hackathon like no other, gathering people all over the world to simultaneously hack in both physical locations and online.</p>
          <p>On November 6th to 8th, Junction 2020 Connected gathers thousands of hackers and tech enthusiasts from all around the world to hack to... uhm, all around the world.</p>
          <p>Hack from home or come to our hub! Are you ready?</p>
        </div>
        <div className={styles.buttons}>
          <Link newTab href={'https://app.hackjunction.com/events/junction-2020-connected'}><div className={styles.apply}>Apply here</div></Link>
          <Link newTab href={'https://connected.hackjunction.com/challenges'}><div className={styles.tracks}>The Tracks</div></Link>
          <Link newTab href={'https://connected.hackjunction.com'}><div className={styles.tracks}>Junction Connected</div></Link>
          <Link newTab href={'mailto:victor.tibo@hackjunction.com'}><div className={styles.volunteer}>Volunteer</div></Link>
        </div>
      </Container>
    </div>
  )
}
