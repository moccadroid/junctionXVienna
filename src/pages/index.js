import React from 'react';
import Head from "next/head";
import HeroBlock from "../components/blocks/HeroBlock";
import CallToActionBlock from "../components/blocks/CallToActionBlock";
import TextBlock from "../components/blocks/TextBlock";
import AboutBlock from "../components/blocks/AboutBlock";
import PartnerBlock from "../components/blocks/PartnerBlock";
import FooterBlock from "../components/blocks/FooterBlock";

export default function Home() {
  return (
    <>
      <Head>
        <title>JunctionX Vienna 2020</title>
      </Head>
      <HeroBlock />
      <CallToActionBlock />
      <TextBlock color={'blue'}>
        Junction is a global tech community, organizing hackathons and tech events around the year and around the world - both offline and online.
        <br/><br/>
        <b>Free</b> of charge for all accepted participants.
      </TextBlock>
      <AboutBlock />
      <PartnerBlock partners={[{ img: 'https://picsum.photos/300/200', alt: 'an image'}, { img: 'https://picsum.photos/300/200', alt: 'an image'}]} />
      <FooterBlock />
    </>
  )
}
