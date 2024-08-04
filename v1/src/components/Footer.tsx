import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer className = "bg-white text-gray-700 text-center p-4">
        <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/alanlwu" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-700 hover:text-gray-900" size="lg"/>
            </a>
            <a href="https://www.github.com/alan-w25" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faGithub} className="text-gray-700 hover:text-gray-900" size="lg"/>
            </a>
        </div>
        <p>Copyright &copy; Alan Wu {new Date().getFullYear()}</p>
    </footer>
);

export default Footer;