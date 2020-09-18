import React from 'react';
import styles from './PartnerBlock.module.scss';
import Container from "./Container";

export default function({ partners = [] }) {

  return (
    <div className={styles.partnerBlock}>
      <Container>
        <div className={styles.title}>Partners</div>
        <div className={styles.partners}>
          {partners.map((partner, i) => {
            return (
              <div className={styles.partner} key={'partner_' + i}>
                <img src={partner.img} alt={partner.alt} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  )
};
