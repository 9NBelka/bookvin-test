import { FaArrowTrendUp } from 'react-icons/fa6';
import styles from './MobileAppAutoMechanics.module.scss';
import clsx from 'clsx';
import { LuBox, LuCamera, LuClipboardList, LuFactory, LuWrench } from 'react-icons/lu';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function MobileAppAutoMechanics({ scrollToSection }) {
  const aboutUsText = [
    {
      icon: <LuCamera className={styles.cardIcon} />,
      title: '📸 Vehicle Photo Documentation',
      description: 'Quick capture of condition and damages directly from the mobile mechanic.',
      list: [
        'before / after repair photos',
        'linked to the request and client',
        'fewer disputes with customers',
      ],
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <LuWrench className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: '🧪 Mobile Diagnostics',
      description: 'Performing diagnostics and recording results directly in the box/garage.',
      list: ['results immediately in the system', 'vehicle history is preserved', 'no data loss'],
      classForHover: 'classForHoverPurple',
    },
    {
      icon: <HiOutlineCheckCircle className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: '🔧 Work Management',
      description: 'Full control over the progress of work on each vehicle.',
      list: [
        'task status updates',
        'clear view of what’s in progress and what’s pending',
        'fewer calls and clarifications',
      ],
      classForHover: 'classForHoverGreen',
    },
    {
      icon: <LuBox className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: '🔩 Parts Availability & Status',
      description:
        'Parts are ordered for a specific vehicle, and their status is always up-to-date.',
      list: [
        'visibility of what’s ordered and what’s in stock',
        'fewer idle times waiting for parts',
        'order instead of chaos',
      ],
      classForHover: 'classForHoverOrange',
    },
  ];

  const images = [
    'images/mech-orbit-screen-vin-app-phone.jpg',
    'images/mech-orbit-screen-vin-app-phone2.jpg',
    'images/mech-orbit-screen-vin-app-phone3.jpg',
    'images/mech-orbit-screen-vin-app-phone4.jpg',
    'images/mech-orbit-screen-vin-app-phone5.jpg',
    'images/mech-orbit-screen-vin-app-phone6.jpg',
    'images/mech-orbit-screen-vin-app-phone7.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.aboutUs} id='product'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>MechOrbit Ecosystem</p>
          </div>
          <h3 className={styles.titleScreen}>
            <span>Mobile App for Auto Mechanics</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>All data from the app instantly syncs to CRMmech</p>
          <div className={styles.imageAndIconBlocks}>
            <div className={styles.iconsBlocks}>
              {aboutUsText.map((text, index) => (
                <div key={index} className={styles.card}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerLightBlue,
                      index === 2 && styles.iconContainerGreen,
                      index === 3 && styles.iconContainerPurple,
                    )}>
                    {text.icon}
                  </div>
                  <div className={styles.cardTitleAndDescription}>
                    <h4 className={styles.cardTitle}>{text.title}</h4>
                    <p className={styles.cardDescription}>{text.description}</p>
                    {text.list.map((point, index) => (
                      <ul key={index} className={styles.cardList}>
                        <li>{point}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
              <div className={styles.buttons}>
                <button className={styles.button} onClick={() => scrollToSection('tryToStart')}>
                  Request a Demo
                </button>

                <Link
                  to='https://mechorbit.com/ua'
                  target='_blank'
                  className={clsx(styles.button, styles.buttonTwo)}>
                  More about MechOrbit <BsArrowRightShort className={styles.buttonIconTwo} />
                </Link>
                {/* <a href='https://crmmech.com/' target='_blank'>
              <button className={clsx(styles.button, styles.buttonTwo)}>
                Узнать больше
                <BsArrowRightShort className={styles.buttonIconTwo} />
              </button>
            </a> */}
              </div>
            </div>
            <div className={styles.sliderMain}>
              <button className={styles.sliderButton} onClick={prevSlide}>
                <MdKeyboardArrowLeft className={styles.iconArrow} />
              </button>
              <div className={styles.blockImageDashboard}>
                <img src={images[currentIndex]} alt='dashboard' />
              </div>
              <button className={styles.sliderButton} onClick={nextSlide}>
                <MdKeyboardArrowRight className={styles.iconArrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
    </section>
  );
}
