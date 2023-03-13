// styles
import '../../styles/Header_Footer/Footer.scss';
import styled from 'styled-components';

// logo
import logo from '../../assets/logo_black.svg';

// router
import { Link } from 'react-router-dom';


const LogoSVG = styled.img`
    width: 20vw;
    display: block;
    margin: auto;
`



function Footer() {


    return (
        <div className="FooterWrapper">

            <div className="FooterLogo">
                <LogoSVG src={logo} />
            </div>

            <div className="FooterMenu">
                <ul>
                    <Link to='/'><li>начало</li></Link>

                    <Link to='/about'><li>за нас</li></Link>

                    <Link to='/flims'><li>филми</li></Link>

                    <Link to='/shop'><li>магазин</li></Link>

                    <Link to='/terms'><li>правила и условия</li></Link>

                    <Link to='/faq'><li>често задавани въпроси</li></Link>

                    <Link to='/careers'><li>кариери</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer