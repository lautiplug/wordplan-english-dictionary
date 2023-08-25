import { getInTouch } from '../hooks/useContact';
import './styles/styles.css'

export const Footer = () => {

  const handleClick = getInTouch()

  return (
    <footer className='animate__animated animate__fadeIn'>
      <section className="footer-grid">
        <p>© Lautiplug</p>
        <div className="footer-smedia">
          <a target='_blank' href="https://www.linkedin.com/in/emir-lautaro-pintos-848463255/">
            <i className="fa-brands fa-linkedin-in icon"></i>
          </a>
          <a target='_blank' href="https://github.com/lautiplug">
            <i className="fa-brands fa-github icon"></i>
          </a>
          <i className="fa-regular fa-paper-plane icon" onClick={handleClick}></i>
        </div>
      </section>
    </footer>
  );
};
