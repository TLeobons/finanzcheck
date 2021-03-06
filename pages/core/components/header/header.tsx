import Box from '@material-ui/core/Box';
import styles from '../../../../styles/Header.module.css';

export default function Home() {
  return (
    <Box> 
        <Box className={styles.mainHeaderContainer}>
            <svg className={styles.logoStyle} preserveAspectRatio="xMinYMin meet" viewBox="287.5 432.8 275 25" role="img" aria-labelledby="finanzcheck-logo-svg"><title id="finanzcheck-logo-svg">FINANZCHECK.de</title><path style={{fill: "#f09103"}} d="M531.6 449.9v6.8h-6.5v-6.8h6.5z"></path><path style={{fill: "#11437d"}} d="M287.8 456.8h4.5v-9.7H303v-3.8h-10.7v-6.4h11.3v-3.7h-15.8zM306.4 433.2h4.5v23.6h-4.5zM332.9 446.8v6h-.1l-.9-1.9-.9-1.9c-.7-1.5-1.4-2.8-1.9-3.8l-6.2-12h-7.7v23.6h4.6v-19.6h.2l.8 1.7.8 1.7c.7 1.6 1.2 2.7 1.6 3.4l6.9 12.9h7.7v-23.6H333l-.1 13.5zM347.4 433.2l-7.9 23.6h4.8l1.5-4.5h10.3l1.5 4.5h4.7l-8.1-23.6h-6.8zm-.6 15.7l4.1-12.3 4.1 12.3h-8.2zM382.1 446.8v6h-.1l-.9-1.9-.9-1.9c-.7-1.5-1.4-2.8-1.9-3.8l-6.2-12h-7.7v23.6h4.5v-19.6h.2l.8 1.7.8 1.7c.7 1.6 1.2 2.7 1.6 3.4l6.9 12.9h7.7v-23.6h-4.6l-.2 13.5zM395.3 452.9l13.2-16v-3.7h-18.4v3.7h12.6v.2L389.5 453v3.8h19.2V453h-13.4zM426.4 449.4c0 1.5-.3 2.6-1 3-.7.5-2.1.7-4.4.7-2.8 0-4.4-.4-4.9-1.3-.5-.8-.8-3.5-.8-8 0-3.4.3-5.4.9-6s2.3-1 5.1-1c2.1 0 3.5.2 4 .7.6.4.9 1.4.9 3v.6h4.6v-.5c0-3-.6-5-1.7-6s-3.4-1.5-6.9-1.5c-4.7 0-7.8.6-9.2 1.8-1.5 1.2-2.2 3.8-2.2 7.7 0 6.6.5 10.7 1.6 12.2s4 2.3 8.7 2.3c4.2 0 6.9-.5 8.1-1.5s1.8-3.1 1.8-6.4v-.8h-4.6v1zM449.5 442.8h-11.2v-9.6h-4.5v23.6h4.5v-10.2h11.2v10.2h4.6v-23.6h-4.6zM462.4 446.3h11.2V443h-11.2v-6.1h11.8v-3.7h-16.4v23.6h16.5V453h-11.9zM492.5 449.4c0 1.5-.3 2.6-1 3-.7.5-2.1.7-4.4.7-2.8 0-4.4-.4-4.9-1.3-.5-.8-.8-3.5-.8-8 0-3.4.3-5.4.9-6 .6-.7 2.2-1 5.1-1 2.1 0 3.5.2 4 .7.6.4.9 1.4.9 3v.6h4.6v-.5c0-3-.6-5-1.7-6s-3.4-1.5-6.9-1.5c-4.7 0-7.8.6-9.2 1.8-1.5 1.2-2.2 3.8-2.2 7.7 0 6.6.5 10.7 1.6 12.2s4 2.3 8.7 2.3c4.2 0 6.9-.5 8.1-1.5s1.8-3.1 1.8-6.4v-.8h-4.6v1zM520.2 433.2h-5.6l-8 9.6h-2.2v-9.6h-4.5v23.6h4.5v-10.3h2.2l8.8 10.3h5.8l-10.7-12.2zM544.2 442.1h-7.3v14.7h7.4c2.3 0 3.9-.5 4.5-1.5.7-1 1-3.4 1-7 0-2.2-.4-3.8-1.2-4.7-.9-1-2.4-1.5-4.4-1.5zm2.1 11.4c-.4.6-1.3.9-2.6.9h-4v-10h4.2c1.3 0 2.1.3 2.5.9.3.6.5 2 .5 4.1 0 2.2-.2 3.5-.6 4.1zM554.3 454.4v-4.1h7v-2.1h-7v-3.8h7.4v-2.3h-10.2v14.7h10.3v-2.4z"></path></svg>
            <Box className={styles.mainHeaderContent}>
                <Box className={styles.mainHeaderInfo}>
                    <Box>
                        <b>Kostenlose Beratung</b>
                        <br/>
                        0800 433 88 77 66
                        <Box className={styles.infoTimings}>Mo - So von 08 - 20 Uhr</Box>
                    </Box>
                </Box>
                <Box className={styles.roundCallButtonContainer}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                </Box>
            </Box>
        </Box>
        <Box className={` ${styles.mainNavContainer}`}>
            <Box className={styles.navContainer}>
                <a className={`${styles.navItem}`}>Kreditvergleich</a>
                <Box className="dropdown">
                    <a className={`nav-link dropdown-toggle ${styles.navItem}`} id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kredit</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><a className="dropdown-item" href="#">Kreditrechner</a></li>
                        <li><a className="dropdown-item" href="#">Umschuldung</a></li>
                    </ul>
                </Box>
                
                <a className={`nav-link ${styles.navItem}`}>Autokredit</a>
                <a className={`nav-link ${styles.navItem}`}>Ratenkredit</a>
                <a className={`nav-link ${styles.navItem}`}>Baufinanzierung</a>
                <a className={`nav-link ${styles.navItem}`}>Karriere</a>
            </Box>
            <Box className={styles.mainHeaderContent}>
                <a className={styles.navContent}>Kundenbereich</a>
            </Box>
        </Box>

    </Box>
  )
}
