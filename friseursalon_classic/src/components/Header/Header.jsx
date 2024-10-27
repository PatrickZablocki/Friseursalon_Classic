import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faScissors, faImages, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Header_module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Friseursalon Classic</h1>
            <nav style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}> {/* Temporäre Hintergrundfarbe */}
                <Link to="/"><FontAwesomeIcon icon={faHome} /> Startseite</Link>
                <Link to="/Services"><FontAwesomeIcon icon={faScissors} /> Services</Link>
                <Link to="/gallery"><FontAwesomeIcon icon={faImages} /> Galerie</Link>
                <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Kontakt</Link>
            </nav>
        </header>
    );
};

export default Header;

