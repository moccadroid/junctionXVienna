import React from 'react';
import styles from './CallToActionBlock.module.scss';
import Container from "./Container";
import Link from "../common/Link";

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
          <Link newTab href={'https://app.hackjunction.com/events/junction-2020-connected'}><div className={styles.apply}>Apply here</div></Link>
          <Link newTab href={'https://connected.hackjunction.com/challenges'}><div className={styles.tracks}>The Tracks</div></Link>
          <Link newTab href={'mailto:victor.tibo@hackjunction.com'}><div className={styles.volunteer}>Volunteer</div></Link>
        </div>
      </Container>
    </div>
  )
}
