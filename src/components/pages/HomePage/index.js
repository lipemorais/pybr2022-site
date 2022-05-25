import React, { useState } from "react";

import TitleChip from "@components/shared/TitleChip";
import Footer from "@components/shared/Footer";
import IconTitle from "@components/shared/IconTitle";
import LandingBackground from "@images/home/bg_landing_page.svg";
import SponsoringBackground from "@images/home/bg_cta.svg";
import GirlImage from "@images/home/girl.svg";
import CalendarIcon from "@images/home/calendar.svg";

import VirusIcon from "@images/home/covid/virus.svg";
import GearIcon from "@images/home/covid/gear.svg";
import BookIcon from "@images/home/covid/book.svg";

import "./style.scss";

const emptyFaqItem = {
  question: "",
  response: "",
};

const HomePage = ({ text, file }) => {
  const [faqItem, setFaqItem] = useState(emptyFaqItem);

  const redirectToSponsor = () =>
    window.location.replace("https://pretalx.com/python-brasil-2022/cfp");

  const faqItems = [
    {
      question: "Evento será presencial ou on-line?",
      response:
        "Em 2022 teremos a primeira Python Brasil em formato híbrido, iremos transmitir online e ao vivo todas as palestras, keynotes, mesas redondas e palestras relâmpago.",
    },
    {
      question:
        "Preciso estar vacinado para participar presencialmente do evento?",
      response:
        "Sim! A apresentação do comprovante de vacina será necessário para a participação do evento.",
    },
  ];

  const handleOnFaqQuestionClick = (item) => {
    setFaqItem(faqItem.question === item.question ? emptyFaqItem : item);
  };

  return (
    <div id="home">
      <section id="section-landing-page">
        <div className="container">
          <div className="row desktop-only">
            <div className="call-to-action col-12 col-sm-6">
              <IconTitle
                icon={CalendarIcon}
                title={text.HOME.LANDING.TITLE}
                isHome
              />
              <p>{text.HOME.LANDING.INFO}</p>
              <button onClick={redirectToSponsor}>
                {text.HOME.LANDING.BUTTON}
              </button>
            </div>
          </div>

          <div className="section-landing-page__content tablet-only">
            <IconTitle
              icon={CalendarIcon}
              title={text.HOME.LANDING.TITLE}
              isHome
            />
            <p>{text.HOME.LANDING.INFO}</p>
            <button onClick={redirectToSponsor}>
              {text.HOME.LANDING.BUTTON}
            </button>
          </div>
        </div>
        <img
          src={LandingBackground}
          className="desktop-only background"
          alt=""
        />
      </section>
      <section id="section-info">
        <div className="container">
          <div className="row section-info__content">
            <div className="tablet-only section-info__title">
              <TitleChip>{text.HOME.ABOUT.TITLE}</TitleChip>
            </div>
            <div className="col-6 image-column desktop-only">
              <img src={GirlImage} alt="" />
            </div>
            <div className="col-6 section-info__about">
              <div className="desktop-only">
                <TitleChip>{text.HOME.ABOUT.TITLE}</TitleChip>
              </div>
              <div className="info">
                <img
                  src={GirlImage}
                  alt=""
                  className="section-info__image tablet-only"
                />

                {text.HOME.ABOUT.CONTENT.map((item) => <p>{item} </p>)}

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-sponsoring">
        <div className="container">
          <div className="row section-sponsoring__title">
            <TitleChip>{text.HOME.SPONSORING.TITLE}</TitleChip>
          </div>
          <button>
            <a className="link-sponsor" href={file}>
              {text.HOME.SPONSORING.BUTTON}
            </a>
          </button>
        </div>
        <img src={SponsoringBackground} className="background" alt="" />
      </section>
      <section id="section-covid">
        <div className="container">
          <TitleChip>{text.HOME.COVID.TITLE}</TitleChip>
          <ul className="row">
            {text.HOME.COVID.CONTENT.map((card) => (
              <li className="col-12 col-sm-4 col-md-4">
                <div className="card">
                  <img src={card.icon} alt={card.title} />
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="section-faq">
        <div className="container">
          <div className="row">
            <TitleChip>FAQ</TitleChip>
          </div>
          <div className="row">
            <div className={`left-panel ${faqItem.response ? "active" : ""}`}>
              <ul>
                {faqItems.map((item) => (
                  <li
                    className={
                      faqItem.question === item.question ? "active" : ""
                    }
                  >
                    <button onClick={() => handleOnFaqQuestionClick(item)}>
                      {item.question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`right-panel ${faqItem.response ? "active" : ""}`}>
              {faqItem.response && (
                <div className="right-panel-inner">
                  <h3>{faqItem.question}</h3>
                  <p>{faqItem.response}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer text={text} />
    </div>
  );
};

export default HomePage;
