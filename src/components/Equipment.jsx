import { Barbell, Dumbbell, Kettlebell, Plate } from './Illustrations.jsx';

const RACK = [[6, 0.55], [10, 0.68], [16, 0.82], [24, 0.95], [32, 1.05], [40, 1.15]];

export default function Equipment() {
  return (
    <section className="sec alt" id="equipamentos">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Equipamentos</span>
          <h2 className="h2">Peso de sobra, em todas as medidas</h2>
          <p className="lede">Halteres emborrachados, kettlebells de ferro fundido e anilhas olímpicas calibradas, sempre no lugar.</p>
        </div>
        <div className="eq-grid">
          <article className="eq">
            <h3>Rack de halteres</h3>
            <div className="rack">
              {RACK.map((r) => (
                <div className="rack-cell" key={r[0]}>
                  <Dumbbell s={r[1]} label={'Haltere ' + r[0] + ' kg'} />
                  <b>{r[0]} kg</b>
                </div>
              ))}
            </div>
            <span className="note">De 2 a 50 kg, em passos de 2 kg.</span>
          </article>
          <article className="eq">
            <h3>Anilhas olímpicas</h3>
            <div className="row-plates">
              {[25, 20, 15, 10, 5].map((k) => (
                <figure key={k}><Plate kg={k} /><figcaption>{k} kg</figcaption></figure>
              ))}
            </div>
            <span className="note">Cores do padrão de competição: vermelha 25, azul 20, amarela 15, verde 10 e branca 5.</span>
          </article>
          <article className="eq">
            <h3>Kettlebells</h3>
            <div className="kbs">
              <figure><Kettlebell size={62} kg={8} /><figcaption>8 kg</figcaption></figure>
              <figure><Kettlebell size={80} kg={16} /><figcaption>16 kg</figcaption></figure>
              <figure><Kettlebell size={98} kg={24} /><figcaption>24 kg</figcaption></figure>
            </div>
            <span className="note">Passe o dedo ou o mouse e veja eles balançarem.</span>
          </article>
          <article className="eq">
            <h3>Barra olímpica</h3>
            <div className="bar-wrap"><Barbell /></div>
            <span className="note">Barras de 20 kg, 8 plataformas de levantamento e 4 racks de agachamento.</span>
          </article>
        </div>
      </div>
    </section>
  );
}
