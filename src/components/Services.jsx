import { Icon } from './Illustrations.jsx';
import { SERVICES } from '../data.js';

export default function Services() {
  return (
    <section className="sec" id="servicos">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Serviços</span>
          <h2 className="h2">Tudo que você precisa para treinar bem</h2>
        </div>
        <div className="grid-srv">
          {SERVICES.map((s) => (
            <article className="srv" key={s[1]}>
              <Icon name={s[0]} />
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
              <span className="tag">{s[3]}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
