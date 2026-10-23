import { Monogram } from './Illustrations.jsx';
import { COACHES } from '../data.js';

export default function Coaches() {
  return (
    <section className="sec" id="equipe">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Equipe</span>
          <h2 className="h2">Quem acompanha o seu treino</h2>
        </div>
        <div className="coaches">
          {COACHES.map((c) => (
            <article className="coach" key={c[0]}>
              <Monogram ini={c[0]} />
              <h3>{c[1]}</h3>
              <span className="role">{c[2]}</span>
              <p>{c[3]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
