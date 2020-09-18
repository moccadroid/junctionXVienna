import React from 'react';
import styles from './CallToActionBlock.module.scss';
import Container from "./Container";

export default function CallToActionBlock({}) {

  return (
    <div className={styles.callToAction}>
      <Container>
        <div className={styles.title}>
          Junction X Vienna 2020, connects you to hackers all over the world.<br/>
          Hack from home or come to our hub! Are you ready?
        </div>
        <div className={styles.description}>
          Junction is usually held Espoo, Finland, to where participants have travelled from all around the world.
          This year, we have turned the tables, by bringing the event chez you.
          Junction has gathered amazing organizers and spaces for all accepted applicants to join, from Cambridge to New Delhi.
          If you'd like to join the community by organizing a Hub yourself, shoot us a message at hello(at)hackjunction.com!
        </div>
        <div className={styles.buttons}>
          <a className={styles.apply} href={'https://app.hackjunction.com/events/junction-2020-connected'}>Apply here</a>
          <a className={styles.tracks} href={'https://connected.hackjunction.com/challenges'}>The Tracks</a>
          <a className={styles.volunteer} href={'mailto:victor.tibo@hackjunction.com'}>Volunteer</a>
        </div>
      </Container>
    </div>
  )
}
