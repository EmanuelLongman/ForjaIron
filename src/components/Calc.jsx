import { useState } from 'react';

export default function Calc() {
  const [peso, setPeso] = useState('72');
  const [alt, setAlt] = useState('172');
  const p = parseFloat(String(peso).replace(',', '.'));
  const a = parseFloat(String(alt).replace(',', '.')) / 100;
  const ok = p > 20 && p < 350 && a > 1 && a < 2.5;
  const bmi = ok ? p / (a * a) : null;
  const cat = !ok ? '' : bmi < 18.5 ? 'abaixo do peso' : bmi < 25 ? 'peso adequado' : bmi < 30 ? 'sobrepeso' : 'obesidade';
  const pos = ok ? Math.max(2, Math.min(98, ((bmi - 15) / 25) * 100)) : 0;
  const tip = !ok ? '' : bmi < 18.5
    ? 'Foco sugerido: musculação com progressão de carga e boa alimentação.'
    : bmi < 25
      ? 'Foco sugerido: manter a rotina e buscar mais força e condicionamento.'
      : bmi < 30
        ? 'Foco sugerido: musculação combinada com cardio moderado.'
        : 'Foco sugerido: começar com treino guiado e acompanhamento da equipe.';

  return (
    <section className="sec alt" id="imc">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Ponto de partida</span>
          <h2 className="h2">Calcule seu IMC</h2>
        </div>
        <div className="calc">
          <div style={{ display: 'grid', gap: '14px', alignContent: 'start' }}>
            <div className="two">
              <div className="field">
                <label htmlFor="peso">Peso (kg)</label>
                <input id="peso" inputMode="decimal" value={peso} onChange={(e) => setPeso(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="alt">Altura (cm)</label>
                <input id="alt" inputMode="decimal" value={alt} onChange={(e) => setAlt(e.target.value)} />
              </div>
            </div>
            {!ok && <span className="err" style={{ color: 'var(--warn)', fontSize: '14px' }}>Informe peso em kg e altura em cm, por exemplo 72 e 172.</span>}
          </div>
          <div className="res">
            <div className="big">{ok ? bmi.toFixed(1).replace('.', ',') : '--'}<small>{cat}</small></div>
            <div>
              <div className="gauge"><i style={{ left: pos + '%' }}></i></div>
              <div className="gauge-l"><span>15</span><span>18,5</span><span>25</span><span>30</span><span>40</span></div>
            </div>
            <p className="note">{tip} O IMC é só uma referência e não substitui a avaliação física feita na academia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
