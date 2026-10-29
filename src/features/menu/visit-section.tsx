import styles from "./visit-section.module.css";

export function VisitSection() {
  return (
    <section className={styles.section} aria-labelledby="visit-heading">
      <div className={styles.inner}>
        <div className={styles.info}>
          <p className={styles.eyebrow}>PEARL ISLAND 2GO</p>
          <h2 id="visit-heading">Visit &amp; pickup</h2>

          <div className={styles.group}>
            <h3>Location</h3>
            <address>
              <span>221 Carlton Road, Suite 1</span>
              <span>Charlottesville, VA 22902</span>
            </address>
            <p className={styles.muted}>Inside B.E.A.C.O.N Shared Kitchen</p>
          </div>

          <div className={styles.group}>
            <h3>Hours</h3>
            <p className={styles.lines}><span>Tuesday–Friday</span><span>11:00 AM – 3:00 PM</span></p>
            <p className={styles.muted}>Monday, Saturday &amp; Sunday: Closed</p>
            <p className={styles.muted}>Preorders for pickup and delivery.</p>
          </div>

          <div className={styles.group}>
            <h3>Contact</h3>
            <a className={styles.contactLink} href="tel:+14344660092">(434) 466-0092</a>
            <a className={styles.contactLink} href="mailto:info@pearlislandcatering.com">Email Pearl Island</a>
          </div>
        </div>

        <div className={styles.mapColumn}>
          <iframe
            title="Map to Pearl Island 2GO, 221 Carlton Road, Suite 1, Charlottesville, VA"
            src="https://www.google.com/maps?q=221+Carlton+Road+Suite+1,+Charlottesville+VA+22902&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a className={styles.mapLink} href="https://www.google.com/maps/search/?api=1&query=221+Carlton+Road+Suite+1+Charlottesville+VA+22902" target="_blank" rel="noopener noreferrer">Open in Google Maps<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </section>
  );
}
