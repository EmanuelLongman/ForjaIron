import { CLASSES, DAYS_FULL } from '../data.js';

export default function Sheet({ bookings, onClose, onCancel, onClear }) {
  const items = CLASSES
    .filter((c) => bookings.includes(c.id))
    .sort((a, b) => a.day - b.day || a.time.localeCompare(b.time));

  return (
    <>
      <div className="scrim" onClick={onClose}></div>
      <div className="sheet" role="dialog" aria-label="Minhas reservas">
        <div className="sheet-in">
          <div className="sheet-top">
            <h3>Minhas reservas</h3>
            <button className="x" onClick={onClose} aria-label="Fechar">×</button>
          </div>
          {items.length === 0 && (
            <div className="empty">Você ainda não reservou nenhuma aula. Abra a grade e toque em Reservar.</div>
          )}
          {items.map((c) => (
            <div className="bk" key={c.id}>
              <div><b>{c.name}</b><span>{DAYS_FULL[c.day]}, {c.time}, com {c.coach}</span></div>
              <button className="btn small" onClick={() => onCancel(c)}>Cancelar</button>
            </div>
          ))}
          {items.length > 0 && <button className="btn" onClick={onClear}>Cancelar todas</button>}
          <a className="btn primary" href="#aulas" onClick={onClose}>Ver grade</a>
        </div>
      </div>
    </>
  );
}
