import logo from '../../assets/img/logo.png';
import vk from '../../assets/img/vk.svg';
import telegram from '../../assets/img/telegram.svg';
import instagram from '../../assets/img/instagram.svg';
import {Link} from "react-router-dom";


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper container">
        <div className="footer-info">
          <Link to="/" className="footer-info__img">
            <img src={logo} alt="IndexEda: Logo" />
          </Link>
          <ul className="footer-text">
            <li className="footer-text__el">Доставка и оплата</li>
            <li className="footer-text__el">Напишите нам</li>
          </ul>
        </div>
        <div className="footer-contacts">
          <Link to="/" className="footer-contact">
            <img src={telegram} alt="Index.Eda: Контакты" className="footer-contact__img" />
          </Link>
          <Link to="/" className="footer-contact">
            <img src={vk} alt="Index.Eda: Контакты" className="footer-contact__img" />
          </Link>
          <Link to="/" className="footer-contact">
            <img src={instagram} alt="Index.Eda: Контакты" className="footer-contact__img" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;