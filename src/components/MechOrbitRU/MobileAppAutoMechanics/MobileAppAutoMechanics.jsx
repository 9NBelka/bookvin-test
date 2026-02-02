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
      title: '📸 Фотофиксация автомобиля',
      description: 'Быстрая фиксация состояния и повреждений прямо с телефона механика.',
      list: ['фото до / после ремонта', 'привязка к заявке и клиенту', 'меньше споров с клиентами'],
      classForHover: 'classForHoverBlue',
    },
    {
      icon: <LuWrench className={clsx(styles.cardIcon, styles.colorLightBlue)} />,
      title: '🧪 Мобильная диагностика',
      description: 'Проведение диагностики и фиксация результатов прямо в боксе.',
      list: [
        'результаты сразу в системе',
        'сохранение истории автомобиля',
        'никаких потерь данных',
      ],
      classForHover: 'classForHoverPurple',
    },
    {
      icon: <HiOutlineCheckCircle className={clsx(styles.cardIcon, styles.colorGreen)} />,
      title: '🔧 Управление работами',
      description: 'Полный контроль хода работ по каждому автомобилю.',
      list: [
        'обновление статусов задач',
        'видно, что в работе, а что ожидает',
        'меньше звонков и уточнений',
      ],
      classForHover: 'classForHoverGreen',
    },
    {
      icon: <LuBox className={clsx(styles.cardIcon, styles.colorPurple)} />,
      title: '🔩 Наличие и статус запчастей',
      description: 'Запчасти заказываются под конкретный автомобиль, статус всегда актуален.',
      list: [
        'видно, что заказано и что уже на складе',
        'меньше простоев из-за ожидания',
        'порядок вместо хаоса',
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
            <p>Экосистема MechOrbit</p>
          </div>
          <h3 className={styles.titleScreen}>
            <span>Мобильное приложение автомеханика</span>
          </h3>
          <div className={styles.borderLine}></div>
          <p className={styles.textDescription}>
            Все данные из приложения мгновенно попадают в CRMmech
          </p>
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
                  Запросить демо
                </button>

                <Link
                  to='https://mechorbit.com/ua'
                  target='_blank'
                  className={clsx(styles.button, styles.buttonTwo)}>
                  Больше про MechOrbit <BsArrowRightShort className={styles.buttonIconTwo} />
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
