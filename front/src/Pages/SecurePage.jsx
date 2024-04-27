import TopBar from "../Layout/TopBar.jsx";


/**
 * Secure page (need to be logged in)
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const SecurePage = ({children}) => {

    return <TopBar>{children}</TopBar>
}

export default SecurePage;