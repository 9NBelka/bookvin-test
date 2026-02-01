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
      title: '📸 Фотофіксація авто',
      description: 'Швидка фіксація стану та пошкоджень прямо з мобільного механіка.',
      list: [
        'фото до / після ремонту',
        'прив’язка до заявки та клієнта',
        'менше суперечок із клієнтами',
      ],
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <LuWrench className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: '🧪 Мобільна діагностика',
      description: 'Проведення діагностики та фіксація результатів безпосередньо в боксі.',
      list: ['результати одразу в системі', 'збереження історії авто', 'жодних втрат даних'],
      classForHover: 'classForHoverPurple',
    },

    {
      icon: <HiOutlineCheckCircle className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: '🔧 Управління роботами',
      description: 'Повний контроль ходу робіт по кожному автомобілю.',
      list: [
        'оновлення статусів завдань',
        'видно, що в роботі, а що очікує',
        'менше дзвінків і уточнень',
      ],
      classForHover: 'classForHoverGreen',
    },
    {
      icon: <LuBox className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: '🔩 Наявність та статус запчастин',
      description: 'Запчастини замовляються під авто, а їх статус завжди актуальний.',
      list: [
        'видно, що замовлено і що на складі',
        'менше простоїв через очікування',
        'порядок замість хаосу',
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
            <p>Екосистема MechOrbit</p>
          </div>
          <h3 className={styles.titleScreen}>
            <span>Мобільний додаток автомеханіка</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>Всі дані з додатку миттєво потрапляють у CRMmech</p>
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
                  Запросити демо
                </button>

                <Link
                  to='https://mechorbit.com/ua'
                  target='_blank'
                  className={clsx(styles.button, styles.buttonTwo)}>
                  Більше про MechOrbit <BsArrowRightShort className={styles.buttonIconTwo} />
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
