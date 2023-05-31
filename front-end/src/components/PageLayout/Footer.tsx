// styles
import '../../styles/Header_Footer/Footer.scss';
import styled from 'styled-components';

// logo
import logo from '../../assets/logo_black.svg';

// router
import { Link } from 'react-router-dom';


const LogoSVG = styled.img`
    width: 25rem;
    display: block;
    margin: auto;
`



function Footer() {


    return (
        <div className="FooterWrapper">

            <div className="FooterLogo">
                <LogoSVG src={logo} alt='КОСМОС' />
            </div>

            <div className="FooterMenu">
                <ul>
                    <li><Link to='/'>начало</Link></li>
                    <li><Link to='/about'>за нас</Link></li>
                    <li><Link to='/flims'>филми</Link></li>
                    <li><Link to='/shop'>магазин</Link></li>
                    <li><Link to='/terms'>правила и условия</Link></li>
                    <li><Link to='/faq'>често задавани въпроси</Link></li>
                    <li><Link to='/careers'>кариери</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer