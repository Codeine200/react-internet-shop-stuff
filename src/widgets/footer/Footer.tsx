import type { JSX } from 'react';
import styles from './Footer.module.css';
import logo from '@/app/assets/images/footer_logo.png';
import youtube from '@/app/assets/images/youtube.svg';
import github from '@/app/assets/images/github.svg';
import linkedin from '@/app/assets/images/linkedin.svg';
import {memo} from "react";

const FooterComponent = (): JSX.Element => {
  return (
      <section className={styles.footer}>
          <div className={`container block`}>
              <div className={styles.wrapper}>
                  <div><img src={logo} alt="Stuff logo" width="61" height="25" /></div>
                  <div className={styles.copyright}>
                      Developed by <a className={styles.link} href="https://www.linkedin.com/in/codeine/" target="_blank" rel="noopener noreferrer">Vasiliy Holovko</a></div>
                  <div className={styles.social}>
                      <div><a href="https://www.youtube.com/@SeniorTomato2025" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube"/></a></div>
                      <div><a href="https://github.com/Codeine200" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a></div>
                      <div><a href="hhttps://www.linkedin.com/in/codeine/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a></div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export const Footer = memo(FooterComponent);
