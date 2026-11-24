import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="panel" data-testid="not-found">
      <h2>404 — Pagina nu există</h2>
      <p className="info">Adresa cerută nu duce nicăieri în atelierul emax.</p>
      <Link to="/">← Înapoi la intervenții</Link>
    </section>
  );
}