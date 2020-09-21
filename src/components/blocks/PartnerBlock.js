import React from 'react';
import styles from './PartnerBlock.module.scss';
import Container from "./Container";
import Link from "../common/Link";

export default function PartnerBlock ({ partners = [] }) {

  return (
    <div className={styles.partnerBlock}>
      <Container>
        <div className={styles.title}>Partners</div>
        <div className={styles.partners}>
          {partners.map((partner, i) => {
            return (
              <Link newTab href={'/'} key={'partner_' + i}>
                <div className={styles.partner}>
                  <img src={partner.img} alt={partner.alt} />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  )
};
