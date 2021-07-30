import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useState } from 'react';
import styles from '../../../../styles/Home-section-two.module.css';
import finanzCheck from '../../../../public/assets/FFG-Finanzcheck-T.png';
import goldIcon from '../../../../public/assets/ekomi_gold_siegel_finanzcheck_de.png';
import topZinsIcon from '../../../../public/assets/top-zins-garantie-seal.png';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

let index = 0;
export default function HomeSectionTwo() {
  const carouselItems = [
    'Die Beratung war sehr freundlich. Leider war die Änderung der Telefonnum...',
    'Ich war und bin mit der Beratung vom Herrn Rein sehr zufrieden. So stel...',
    'Schnelle kompetente Beratung, nicht aufdringlich, sondern sachlich und z...',
    'Ich war und bin mit der Beratung vom Herrn Rein sehr zufrieden. So stel...',
    'Schnelle kompetente Beratung, nicht aufdringlich, sondern sachlich und z...',
    'sehr angenehmer Kontakt',
    'Sehr gute, schnelle Abwicklung, tolle Beratung. Alles Gute bis nächste...',
    'Sehr kompetent, schnelle und unproblematisch Abwicklung. Sehr zu empfeh...',
    'Sehr kompetent, hilfreich und menschlich. Sehr empfehlenswert',
    'Angebot der Tagobank, sehr empfehlenswert. Schnelle Abwicklung, freundli...',
    'Alles ok',
    'Sehr sehr sehr zufrieden schnell und zuverlässig herzlichen Dank'
  ];
  const [displayedCarouselItem, setDisplayCarouselItem] = useState(carouselItems.slice(0, 3));

  const nextPrevious = (action: String) => {
    if(action === 'next'){
      if(index === (carouselItems.length - 1) || carouselItems[carouselItems.length - 1] === displayedCarouselItem[displayedCarouselItem.length - 1]){
        return;
      }
      index++;
      setDisplayCarouselItem(carouselItems.slice(index, (index + 3)));
      return;
    }
    if(index === 0 || carouselItems[0] === displayedCarouselItem[0]){
      return;
    }
    index--;
    setDisplayCarouselItem(carouselItems.slice(index, (index + 3)));
  }

  return (
    <Box>
      <Box className={`row ${styles.sectionTwoGridStyling}`}>
        <Box className={`${styles.flexBoxDisplay} col-md-6 col-sm-12`} >
          <Box>
            <img src={finanzCheck.src}/>
          </Box>
          <Box className={styles.sectionTwoIconsContainerStyling}>
            <img src={goldIcon.src}/>
          </Box>
          <Box className={styles.sectionTwoIconsContainerStyling}>
            <img src={topZinsIcon.src}/>
          </Box>
        </Box>
        <Box className="col-md-6 col-sm-12">
          <p className={styles.sectionTwoParaStyle}>
            <a href="https://www.finanzcheck.de/lp/minuszins/"><u>¹-0,4% Effektiver Jahreszins</u> </a> bei: 1.000€ Netto-Darlehensbetrag, 12 Monate Laufzeit, 0,00% fester Sollzins p.a., monatliche Rate 83,15€, Gesamtbetrag 997,83€, Fidor Bank | Entspricht zugleich dem repräsentativen Beispiel gem. § 6a PAngV. Kredit erfordert Online-Kontoauszug (Kontoblick) und Eröffnung eines Girokontos bei der Fidor Bank. Das Girokonto ist während der Kreditlaufzeit kostenlos.
          </p>
        </Box>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoHeadng}`}>
        <p>Das sagen unsere Kunden</p>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.centerAlignment}`}>
        <ChevronLeftIcon className={styles.chevronStyling} onClick={()=>{nextPrevious('prev')}}/>
        {
          displayedCarouselItem.map((item, index)=>{
            return  <Box className={`${styles.sectionItemContainer} ${(index === displayedCarouselItem.length-1) ? '' : styles.sectionTwoRightBorder}`}>
                      <p key={index} className={`${styles.sectionTwoCarouselItemToDisplay} `}>
                        {item}
                      </p>
                    </Box>
          })
        }
        <ChevronRightIcon className={styles.chevronStyling} onClick={()=>{nextPrevious('next')}}/>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.contentContainer}`}>
          <Box>
            <img src={goldIcon.src}/>
          </Box>
          <Box className={`${styles.leftSpacing}`}>
            <Box className={`${styles.letterSpacing}`}>FINANZCHECK.de</Box>
            <Box className={`${styles.flexBoxDisplay}`}>
              <Rating
                className={`${styles.leftMinusMargin}`}
                name="simple-controlled"
                value={5}
              />
              <span className={`${styles.ratingRatio}`}>
              4.9/5
              </span>
            </Box>
            <Box className={`${styles.topMinusMargin} ${styles.letterSpacing1Px} ${styles.ratingRatio}`}>
              2190 Bewertungen
            </Box>
          </Box>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.contentContainer}`}>
        <h2 className={`${styles.centerAlignmentHeading}`}>
          Der FINANZCHECK Kreditvergleich – unabhängig und kundenorientiert
        </h2>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.contentContainer}`}>
        <p className={`${styles.marginLeftRight} ${styles.paragraphStyle}`}>
          Auf der Suche nach einem passenden Kredit? FINANZCHECK.de findet für Sie das optimale Angebot! Ob klassischer Ratenkredit, zweckgebundener&nbsp;<a className={`${styles.paragraphAnchor}`} href="https://www.finanzcheck.de/kredit/"><u>Kredit</u></a>&nbsp;oder Kleinkredit: Mithilfe unseres&nbsp;<a className={`${styles.paragraphAnchor}`} href="https://www.finanzcheck.de/kreditvergleich/"><u>Kreditvergleichs</u></a>&nbsp;finden Sie bei über 20 Partnerbanken sicher und schnell die passende Lösung.
        </p>
      </Box>
    </Box>
  )
}
