import { Dumbbell, HeroPlate } from './Illustrations.jsx';
import { fmtH, useCount, useOpenNow } from '../hooks.js';

export default function Hero() {
  const st = useOpenNow();
  const a = useCount(1400), b = useCount(60), c = useCount(25);
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div>
          <span className="open-pill">
            <span className={'dot' + (st.open ? '' : ' off')}></span>
            {st.open ? 'Aberto agora, fecha às ' + fmtH(st.b) : 'Fechado agora'}
          </span>
          <h1>Treino sério, <span>sem complicação.</span></h1>
          <p className="lede">Musculação, aulas coletivas e treinadores que corrigem de verdade. Reserve sua vaga pelo celular e chegue só para treinar.</p>
          <div className="cta-row">
            <a className="btn primary" href="#aulas">Reservar aula</a>
            <a className="btn" href="#planos">Ver planos</a>
          </div>
          <div className="stats">
            <div className="stat"><b>{a.toLocaleString('pt-BR')}</b><span>m² de treino</span></div>
            <div className="stat"><b>{b}+</b><span>aparelhos</span></div>
            <div className="stat"><b>{c}</b><span>aulas por semana</span></div>
          </div>
        </div>
        <div className="stage" aria-hidden="true">
          <HeroPlate />
          <div className="floor"></div>
          <div className="lift"><Dumbbell accent /></div>
        </div>
      </div>
    </section>
  );
}
