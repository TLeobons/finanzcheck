import styles from '../../../../styles/Home-section-three.module.css';
import ideaIc from '../../../../public/assets/idea-ic.png';
import zertifikatImage from '../../../../public/assets/Zertifikat.png'
import Box from '@material-ui/core/Box';

export default function HomeSectionThree() {
  const ideas = ['Wir bieten Ihnen einen unabhängigen und kostenlosen Vergleich von Kreditangeboten', 
                 'Wir holen für Sie individuelle Kreditangebote ein. Unsere Kreditanfragen sind SCHUFA-neutral, also ohne negative Auswirkung auf Ihren SCHUFA-Score', 
                 'Zusätzlich bieten wir Ihnen weitere Dienstleistungen rund um Ihren Kreditwunsch, z. B. unsere individuelle telefonische Beratung und technische Unterstützung, um die Bearbeitung Ihrer Kreditanfrage durch die Bank zu beschleunigen', 
                 'Mit FINANZCHECK.de gelangen Sie sicher und mühelos an Ihr Wunschdarlehen'];
  return (
    <Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling} ${styles.ideasHeadingStyling}`}>
          <h3 className={`${styles.blueColor}`}>
            Die FINANZCHECK.de Vorteile im Überblick
          </h3>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.ideaContainer}`}>
        <Box className={`${styles.ideaImageContainer}`}>
          <img src={ideaIc.src}/>
        </Box>
        <Box className={`${styles.flexBoxDisplay} ${styles.ideaListingcontainer}`}>
          <ul>
            {
              ideas.map(idea => {
                return <li><p className={`${styles.paragraphStyleSection3}`}>{idea}</p></li>
              })
            }
          </ul>
        </Box>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h3 className={`${styles.blueColor}`}>
            Warum FINANZCHECK.de?
          </h3>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          FINANZCHECK.de ist Ihre erste Adresse, wenn es um günstige, sichere und seriöse Kredite geht. Ein Kredit ist etwas sehr Persönliches. Daher stehen Sie und Ihre Bedürfnisse bei uns immer im Mittelpunkt. Es gibt viele gute Gründe, weshalb Sie uns als Experten für Ihren individuellen Finanzierungswunsch vertrauen können:
        </p>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil wir eine ausgezeichnete Beratung haben
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Effektiver Jahreszins, Tilgungsmodalitäten, Haushaltsrechnung – bei Ihrer Suche nach dem passenden Kredit können viele Fragen auftauchen. Wir vermitteln daher nicht nur günstige Kredite, sondern kümmern uns wirklich um Ihr Anliegen. Sie haben jederzeit die Möglichkeit, persönlich mit einem unserer 170 erfahrenen Kreditberater zu sprechen. Dabei finden Sie gemeinsam mit Ihrem persönlichen Berater die passende Lösung für Ihr Finanzierungsvorhaben.
        </p>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil Ihre Daten bei uns sicher sind
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        {/* <Box>
            <img className={styles.zertifikatImageStyling} src={zertifikatImage.src}/>
        </Box> */}
        <p className={`${styles.flexBoxDisplay} ${styles.ideasParaStyling}`}>
          <img className={styles.zertifikatImageStyling} src={zertifikatImage.src}/> 
          <span>Wir legen größten Wert auf den Schutz Ihrer Daten. Wir wissen Ihr Vertrauen zu schätzen. Daher ist uns der gewissenhafte Umgang mit Ihren sensiblen Daten auch enorm wichtig. Unsere hohen Standards im Bereich der Datensicherheit haben wir daher auch dieses Jahr wieder für Sie vom <a className={`${styles.paragraphAnchor}`} href="https://www.tuev-saar.de/zertifikat/tk43790/"><u>TÜV Saarland</u></a> prüfen lassen.</span>
        </p>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil Sie bei uns sparen können
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          FINANZCHECK.de kooperiert mit über 20 Partnerbanken in ganz Deutschland. Ihr Vorteil: Wir vergleichen die Angebote der Banken miteinander, suchen Ihnen das passende Angebot und finden so Ihren Wunschkredit.
        </p>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil Sie mit uns schnell und effizient zum Kredit kommen
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Wir holen für Sie mithilfe unserer Datenschnittstellen individuelle Kreditangebote in Echtzeit, d.h. binnen weniger Minuten ein. Der Abschluss des Kreditvertrages bei der Bank kann ebenfalls softwaregestützt erfolgen, so dass Sie binnen kürzester Zeit über Ihr Geld verfügen können. Auch die Abwicklung des Kreditvertrags und die Auszahlung des Geldes erfolgen schnell, in vielen Fällen schon innerhalb einer Woche. Schließen Sie Ihren Kredit komplett digital ab, erhalten Sie Ihr Geld sogar noch schneller. Wir bieten im Zuge unseres Kreditvergleichs sichere und schnelle Legitimationsverfahren an, die Ihren Kreditantrag beschleunigen. Wählen Sie ganz entspannt zwischen Videoident, das Sie bequem von Zuhause aus nutzen können, oder dem klassischen Postident-Verfahren.
        </p>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil unsere Auszeichnungen für uns sprechen
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          99,3 Prozent der Kreditnehmer sind mit unseren Leistungen absolut zufrieden. Damit haben wir als Onlinevergleichsportal eine überdurchschnittlich hohe Kundenzufriedenheit. Damit dies auch so bleibt und wir in Zukunft noch besser werden, arbeiten wir jeden Tag daran, unseren Service für Sie weiter zu verbessern.
        </p>
      </Box>
    </Box>
  )
}
