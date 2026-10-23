import { useState } from 'react';
import { DAYS_FULL, GOALS, HOURS, PLANS } from '../data.js';
import { fmtH, useOpenNow } from '../hooks.js';

const EMPTY = { nome: '', fone: '', obj: GOALS[0] };

export default function Join({ plan, setPlan }) {
  const [f, setF] = useState(EMPTY);
  const [err, setErr] = useState({});
  const [done, setDone] = useState(null);
  const st = useOpenNow();

  const upd = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (f.nome.trim().length < 3) er.nome = 'Digite seu nome completo.';
    if (f.fone.replace(/\D/g, '').length < 10) er.fone = 'Digite o WhatsApp com DDD.';
    setErr(er);
    if (Object.keys(er).length === 0) setDone({ ...f, plan });
  };

  return (
    <section className="sec" id="contato">
      <div className="wrap join">
        {done ? (
          <div className="ok-box">
            <span className="eyebrow" style={{ color: 'var(--ok)' }}>Pedido registrado</span>
            <h3>Boa, {done.nome.trim().split(' ')[0]}!</h3>
            <p>
              Aula experimental do plano {PLANS.find((p) => p.id === done.plan).name} anotada para o objetivo "{done.obj}".
              Esta é uma versão de demonstração, então nada foi enviado a uma academia real.
            </p>
            <div><button className="btn" onClick={() => { setDone(null); setF(EMPTY); }}>Fazer outro pedido</button></div>
          </div>
        ) : (
          <form className="form" onSubmit={submit} noValidate>
            <div className="sec-head" style={{ marginBottom: 6 }}>
              <span className="eyebrow">Matrícula</span>
              <h2 className="h2">Peça sua aula experimental</h2>
            </div>
            <div className="field">
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" autoComplete="name" value={f.nome} onChange={upd('nome')} />
              {err.nome && <span className="err">{err.nome}</span>}
            </div>
            <div className="field">
              <label htmlFor="fone">WhatsApp com DDD</label>
              <input id="fone" inputMode="tel" autoComplete="tel" placeholder="81 99999-0000" value={f.fone} onChange={upd('fone')} />
              {err.fone && <span className="err">{err.fone}</span>}
            </div>
            <div className="two">
              <div className="field">
                <label htmlFor="plano">Plano</label>
                <select id="plano" value={plan} onChange={(e) => setPlan(e.target.value)}>
                  {PLANS.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="obj">Objetivo</label>
                <select id="obj" value={f.obj} onChange={upd('obj')}>
                  {GOALS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div><button className="btn primary" type="submit">Quero treinar na Forja</button></div>
          </form>
        )}

        <aside className="hours">
          <h3>Horários</h3>
          <dl>
            {DAYS_FULL.map((d, i) => (
              <div key={d} className={'hr' + (i === st.d ? ' now' : '')}>
                <dt>{d}</dt><dd>{fmtH(HOURS[i][0])} às {fmtH(HOURS[i][1])}</dd>
              </div>
            ))}
          </dl>
          <div className="addr">
            <span>Rua do Ferro, 100, Boa Viagem, Recife PE</span>
            <span>WhatsApp <b>(81) 99999-0100</b></span>
            <span>Instagram <b>@forjaironclub</b></span>
          </div>
        </aside>
      </div>
    </section>
  );
}
