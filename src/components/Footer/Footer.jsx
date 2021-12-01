import logo from '../../assets/img/logo.png';
import vk from '../../assets/img/vk.svg';
import telegram from '../../assets/img/telegram.svg';
import instagram from '../../assets/img/instagram.svg';
import {Link} from "react-router-dom";


export const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-wrapper container">
        <div class="footer-info">
          <Link to="/" class="footer-info__img">
            <img src={logo} alt="IndexEda: Logo" />
          </Link>
          <ul class="footer-text">
            <li class="footer-text__el">Доставка и оплата</li>
            <li class="footer-text__el">Напишите нам</li>
          </ul>
        </div>
        <div class="footer-contacts">
          <Link to="/" class="footer-contact">
            <img src={telegram} alt="Index.Eda: Контакты" class="footer-contact__img" />
          </Link>
          <Link to="/" class="footer-contact">
            <img src={vk} alt="Index.Eda: Контакты" class="footer-contact__img" />
          </Link>
          <Link to="/" class="footer-contact">
            <img src={instagram} alt="Index.Eda: Контакты" class="footer-contact__img" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;