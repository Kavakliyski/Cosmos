
// styles
import '../styles/Header_Footer/Header.scss';

// react router dom

function Header() {


    return (
        <div className='Header'>
            <nav className='nav'>
                <ul>
                    <li>за нас</li>
                    <li>филми</li>
                    <li><a href="/shop">магазин</a></li>
                </ul>

            </nav>
        </div>
    )
}

export default Header