import { useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Equipment from './components/Equipment.jsx';
import Schedule from './components/Schedule.jsx';
import Plans from './components/Plans.jsx';
import Coaches from './components/Coaches.jsx';
import Calc from './components/Calc.jsx';
import Join from './components/Join.jsx';
import Sheet from './components/Sheet.jsx';
import { CLASSES, DAYS_FULL } from './data.js';
import { load, save } from './hooks.js';

export default function App() {
  const [bookings, setBookings] = useState(() => load('forja-bookings', []));
  const [sheet, setSheet] = useState(false);
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState(null);
  const [plan, setPlan] = useState('forja');
  const [period, setPeriod] = useState('t');
  const timer = useRef(null);

  const say = (msg, bad) => {
    setToast({ msg, bad });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 2800);
  };

  const commit = (b) => { setBookings(b); save('forja-bookings', b); };

  const onBook = (c) => {
    if (bookings.includes(c.id)) {
      commit(bookings.filter((x) => x !== c.id));
      say('Reserva cancelada: ' + c.name);
      return;
    }
    const clash = CLASSES.find((o) => bookings.includes(o.id) && o.day === c.day && o.time === c.time);
    if (clash) { say('Você já tem ' + clash.name + ' às ' + c.time + '.', true); return; }
    commit([...bookings, c.id]);
    say('Reservado: ' + c.name + ', ' + DAYS_FULL[c.day].toLowerCase() + ' às ' + c.time);
  };

  return (
    <>
      <Header onReservas={() => setSheet(true)} count={bookings.length} menu={menu} setMenu={setMenu} />
      <main>
        <Hero />
        <Services />
        <Equipment />
        <Schedule bookings={bookings} onBook={onBook} />
        <Plans setPlan={setPlan} period={period} setPeriod={setPeriod} />
        <Coaches />
        <Calc />
        <Join plan={plan} setPlan={setPlan} />
      </main>
      <footer>
        <div className="wrap">
          <span>© 2026 Forja Iron Club. Site de demonstração.</span>
          <span>Treine com técnica, evolua com constância.</span>
        </div>
      </footer>
      {sheet && (
        <Sheet
          bookings={bookings}
          onClose={() => setSheet(false)}
          onCancel={onBook}
          onClear={() => { commit([]); say('Todas as reservas foram canceladas.'); }}
        />
      )}
      {toast && <div className={'toast' + (toast.bad ? ' bad' : '')} role="status">{toast.msg}</div>}
    </>
  );
}
