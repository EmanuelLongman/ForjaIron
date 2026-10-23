import { Logo } from './Illustrations.jsx';

const LINKS = [['servicos', 'Serviços'], ['aulas', 'Aulas'], ['planos', 'Planos'], ['equipe', 'Equipe'], ['contato', 'Matrícula']];

export default function Header({ onReservas, count, menu, setMenu }) {
  return (
    <header className="hdr">
      <div className="wrap">
        <a className="logo" href="#inicio" onClick={() => setMenu(false)}>
          <Logo />
          <span>Forja <small>iron club</small></span>
        </a>
        <nav className="nav" aria-label="Principal">
          {LINKS.map((l) => <a key={l[0]} href={'#' + l[0]}>{l[1]}</a>)}
        </nav>
        <div className="hdr-actions">
          <button className="btn small res-btn" onClick={onReservas} aria-label="Minhas reservas">
            <span className="lbl">Reservas</span>
            <span className="badge-n">{count}</span>
          </button>
          <button className="burger" aria-label="Abrir menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>
            <span></span>
          </button>
        </div>
      </div>
      {menu && (
        <div className="menu">
          <div className="wrap">
            {LINKS.map((l) => <a key={l[0]} href={'#' + l[0]} onClick={() => setMenu(false)}>{l[1]}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}
