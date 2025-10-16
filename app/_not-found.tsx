import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '5rem' }}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Volver al inicio
      </Link>
    </div>
  );
}
