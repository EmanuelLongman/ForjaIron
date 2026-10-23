import { useMemo, useState } from 'react';
import { CATS, CLASSES, DAYS, DAYS_FULL } from '../data.js';
import { pad, todayIdx } from '../hooks.js';

export default function Schedule({ bookings, onBook }) {
  const t = todayIdx();
  const [day, setDay] = useState(t);
  const [cat, setCat] = useState('Todas');

  const monday = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - t);
    return d;
  }, [t]);

  const list = CLASSES.filter((c) => c.day === day && (cat === 'Todas' || c.cat === cat));

  return (
    <section className="sec" id="aulas">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Grade da semana</span>
          <h2 className="h2">Reserve sua vaga</h2>
          <p className="lede">Escolha o dia, toque em Reservar e pronto. Cancele quando quiser em Minhas reservas.</p>
        </div>

        <div className="days" role="tablist" aria-label="Dia da semana">
          {DAYS.map((d, i) => {
            const dt = new Date(monday);
            dt.setDate(monday.getDate() + i);
            return (
              <button key={d} role="tab" aria-selected={day === i}
                className={'day' + (day === i ? ' on' : '') + (i === t ? ' today' : '')}
                onClick={() => setDay(i)}>
                <small>{d}</small><b>{dt.getDate()}</b>
              </button>
            );
          })}
        </div>

        <div className="chips">
          {['Todas', ...Object.keys(CATS)].map((c) => (
            <button key={c} className={'chip' + (cat === c ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>

        {list.length === 0 && (
          <div className="empty">Nenhuma aula de {cat} em {DAYS_FULL[day].toLowerCase()}. Tente outra modalidade.</div>
        )}

        {list.length > 0 && (
          <div className="classes">
            {list.map((c) => {
              const mine = bookings.includes(c.id);
              const taken = c.taken + (mine ? 1 : 0);
              const left = c.cap - taken;
              const pct = Math.round((taken / c.cap) * 100);
              const full = left <= 0;
              const fillCls = 'fill' + (full ? ' full' : pct >= 75 ? ' mid' : '');
              const [h, m] = c.time.split(':').map(Number);
              const end = h * 60 + m + c.dur;
              const status = full ? 'turma lotada' : left === 1 ? 'última vaga' : left <= 3 ? 'últimas ' + left + ' vagas' : left + ' vagas livres';
              return (
                <article className="cls" key={c.id}>
                  <div className="time">{c.time}<small>até {pad(Math.floor(end / 60) % 24)}:{pad(end % 60)}</small></div>
                  <div>
                    <h3>{c.name}</h3>
                    <div className="meta">
                      <span className="cat" style={{ '--c': CATS[c.cat] }}>{c.cat}</span>
                      <span>{c.dur} min</span>
                      <span>com {c.coach}</span>
                    </div>
                  </div>
                  <div className="act">
                    <div className="cap-bar">
                      <div className="track"><div className={fillCls} style={{ width: pct + '%' }}></div></div>
                      <small>{status}</small>
                    </div>
                    <button className={'btn small' + (mine ? ' booked' : full ? '' : ' primary')}
                      disabled={full && !mine} onClick={() => onBook(c)}>
                      {mine ? 'Reservado, cancelar' : full ? 'Lotada' : 'Reservar'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
