import {useSelector} from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai'

import MercadoLogo from './MercadoLogo'

function Topbar({showSidebarOnMobile, handleShowSidebar}) {
    const {isAuth} = useSelector(state => state.user);
    return (
        <div className="topbar">
            {
                isAuth
                ? (
                    <>
                    {!showSidebarOnMobile && <Link to='/'><MercadoLogo height={36}/></Link>}
                    <AiOutlineMenuUnfold onClick={handleShowSidebar} className="toggle-sidebar-icon" size={22} />
                    </>
                )
                : (
                    <>
                        {/* <MercadoLogo height={36}/> */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h6 style={{ marginTop: 30, color: 'black', textDecoration: 'none' }}>ImmoDev</h6>
                        <img src="/images/logo.png" width="50px" />
                    </div>
                    <nav>
                        <NavLink to='/login'>Sign in</NavLink>
                        <NavLink to='/register'>Sign up</NavLink>
                    </nav>
                    </>
                    
                )
            }
        </div>
    )
}

export default Topbar;