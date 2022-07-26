import { FaLinkedin, FaGithub, FaWhatsapp, FaSpaceShuttle } from 'react-icons/fa';
import spaceVideo from '../images/Futuristic - 26798.mp4';

const icons = [
  { name: 'linkedin', link: 'https://www.linkedin.com/in/welton-santo-lopes/', icon: <FaLinkedin /> },
  { name: 'github', link: 'https://github.com/wltonlopes', icon: <FaGithub /> },
  { name: 'phone', link: 'https://api.whatsapp.com/send?phone=+5511946820302', icon: <FaWhatsapp /> },
];
export default function InitPage() {
  return (
    <div className="container-lg Container_Page container-video">
          {/* <video autoPlay muted loop id="myVideo" className='bg-video'>
            <source src={spaceVideo} type="video/mp4"/>
          </video> */}
      <div id="home" class="row">
        <div class="col-md-6">

          <h1>
            Olá meu nome é Welton Lopes e eu sou um desenvolvedor Front End! Focado nas tecnologias React, JavaScript e NodeJS.
          </h1>
          <div>
            {
              icons.map(icon => (
                <a
                  className='iconSocial'
                  href={icon.link}
                  id={icon.name}
                  key={icon.name}
                  target="_blank"
                >
                  {icon.icon}
                </a>
              ))
            }

          </div>
        </div>
        <div class="col-md-6">
          <img
            className="img-fluid"
            src="https://avatars.githubusercontent.com/u/39802614?v=4"
            alt="Welto Lopes"
          />
        </div>
      </div>
    </div>
  );
}