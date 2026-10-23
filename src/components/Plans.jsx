import { Icon } from './Illustrations.jsx';
import { PERIODS, PLANS } from '../data.js';

export default function Plans({ setPlan, period, setPeriod }) {
  const per = PERIODS.find((p) => p.id === period);
  return (
    <section className="sec alt" id="planos">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Planos</span>
          <h2 className="h2">Sem taxa de matrícula e sem pegadinha</h2>
        </div>
        <div className="seg" role="group" aria-label="Período de pagamento">
          {PERIODS.map((p) => (
            <button key={p.id} className={period === p.id ? 'on' : ''} onClick={() => setPeriod(p.id)}>
              {p.label}{p.off > 0 && <small>-{Math.round(p.off * 100)}%</small>}
            </button>
          ))}
        </div>
        <div className="plans">
          {PLANS.map((p) => {
            const v = Math.round(p.price * (1 - per.off));
            return (
              <article key={p.id} className={'plan' + (p.hot ? ' hot' : '')}>
                <div className="top"><h3>{p.name}</h3>{p.hot && <span className="flag">mais escolhido</span>}</div>
                <p className="desc">{p.desc}</p>
                <div className="price"><b>R$ {v}</b><span>por mês</span></div>
                <div className="bill">
                  {per.n === 1
                    ? 'Cobrança mensal, cancele quando quiser.'
                    : 'R$ ' + (v * per.n).toLocaleString('pt-BR') + ' a cada ' + (per.n === 3 ? '3 meses' : '12 meses') + '.'}
                </div>
                <a className={'btn' + (p.hot ? ' primary' : '')} href="#contato" onClick={() => setPlan(p.id)}>Quero o {p.name}</a>
                <ul>
                  {p.items.map((it, i) => (
                    <li key={i} className={it[0] ? '' : 'no'}>
                      <Icon name={it[0] ? 'check' : 'x'} /><span>{it[1]}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
