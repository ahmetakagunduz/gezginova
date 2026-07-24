import './Footer.css';

/**
 * Footer – simple dark footer with copyright and legal disclaimer.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__copyright">
          © 2026 <span className="text-gradient">GezgiNova</span> — Türk Pasaportu Seyahat Rehberi
        </p>
        <p className="footer__disclaimer">
          Vize bilgileri referans amaçlıdır, güncel bilgi için konsolosluk web sitelerini kontrol edin.
        </p>
      </div>
    </footer>
  );
}
