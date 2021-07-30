import { FormControl, TextField, Select, InputLabel, MenuItem, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from '../../../../styles/Home-section-one.module.css';
import bgImage from '../../../../public/assets/bg-image.webp';
import Box from '@material-ui/core/Box';

export default function HomeSectionOne() {
  const laufZeits = [1,2,3,4,5,6,7,8,9,10];
  const verwendungszwecks = ['Umschuldung', 'Gebrauchtfahrzeug', 'Neufahrzeug', 'Einrichtung/Möbel', 'Renovierung', 'Urlaub', 'PC/TV/Hifi/Video', 'Ausgleich Girokonto', 'Umzug', 'Immobilienfinanzierung', 'Freie Verwendung'];
  return (
    <Box className={styles.mainFirstSectionContainer}>
          <img className={styles.bgImageStyling} src={bgImage.src}/>
          <Box className={`row ${styles.mainGridStyling}`}>
            <Box className="col-md-6 col-sm-12">
              <Box className={styles.mainInfoContainer}>
                <p className={styles.mainContentInfoStyle}>
                  Die Kreditexperten
                </p>
                <p className={`${styles.mainContentInfoStyle} ${styles.mainContentInfoStyleContent}`}>
                  Online vergleichen, persönlich beraten
                </p>

                <Box className={styles.mainFormContainer}>
                    <FormControl className={`${styles.mainFormInputFields} ${styles.mainFormInputFieldsContainer}`} >
                      <TextField className={styles.mainFormInputFields} id="standard-basic" label="Wunschbetrag" />
                    </FormControl>
                    
                    <FormControl className={`${styles.mainFormInputFields} ${styles.mainFormInputFieldsContainer}`}>
                      <InputLabel id="demo-simple-select-label">Laufzeit</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        {
                          laufZeits.map(laufzeit => <MenuItem value={laufzeit}>{laufzeit}&nbsp; Jahre</MenuItem>)
                        }
                      </Select>
                    </FormControl>

                    <FormControl className={`${styles.mainFormInputFields} ${styles.mainFormInputFieldsContainer}`}>
                      <InputLabel id="demo-simple-select-label">Verwendungszweck</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        {
                          verwendungszwecks.map(verwendungszweck => <MenuItem value={verwendungszweck}>{verwendungszweck}</MenuItem>)
                        }
                      </Select>
                    </FormControl>
                    <Box className={`${styles.mainFormInputFieldsContainer} ${styles.formWarningContainer}`}>
                        <Box className={styles.formWarningHeading}>
                          Günstigster Kredit aus über 60 Angeboten ab:
                        </Box>
                        <Box className={`${styles.formWarningHeading} ${styles.formWarningContent}`}>
                          Günstigster Kredit aus über 60 Angeboten ab:
                        </Box>
                    </Box>
                    <Button className={`${styles.mainFormInputFields} ${styles.mainFormInputFieldsContainer} ${styles.mainFormSubmitBtnStyling}`}>
                      <Box style={{display: 'flex'}}>
                        <span>
                          Kreditvergleich starten
                        </span>
                        <ArrowForwardIcon className={styles.arrowSubmitBtn}/>
                      </Box>
                      <Box className={styles.btnContent}>
                        (Kostenlos und unverbindlich)
                      </Box>
                    </Button>
                </Box>
              </Box>
            </Box>
            <Box className="col-md-6 col-sm-12">
              <Box className={styles.homeCircleContainer}>
                <Box className={styles.homeCircle}>
                    <Box>
                      Schon ab
                    </Box>
                    <h1>
                      -0,4%
                    </h1>
                    <Box>
                      effektiver
                    </Box>
                    <Box>
                      Jahreszins¹
                    </Box>
                </Box>
                <Box className={styles.listContainer}>
                  <Box className={styles.flexBox}>
                    <CheckCircleIcon className={styles.checkIcon}/> &nbsp; &nbsp; <span>100% kostenlos</span>
                  </Box>
                  <Box className={styles.flexBox}>
                    <CheckCircleIcon className={styles.checkIcon}/> &nbsp; &nbsp; <span>Unverbindliche Kreditanfrage</span>
                  </Box>
                  <Box className={styles.flexBox}>
                    <CheckCircleIcon className={styles.checkIcon}/> &nbsp; &nbsp; <span>99,3% positive Bewertungen</span>
                  </Box>
                </Box>
              </Box>
              
            </Box>
          </Box>
        </Box>
  )
}
