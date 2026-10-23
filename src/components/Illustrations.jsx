export function Dumbbell({ s = 1, accent, className, label }) {
  const ih = 48 * s, oh = 32 * s, ch = 16 * s;
  const pl = accent ? 'acc' : 'plate';
  const pl2 = accent ? 'acc2' : 'plate2';
  return (
    <svg viewBox="0 0 240 100" className={'db ' + (className || '')} role="img" aria-label={label || 'Haltere'}>
      <rect className="steel" x="56" y="45" width="128" height="10" rx="3" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect key={i} className="knurl" x={96 + i * 6} y="45" width="2" height="10" />
      ))}
      <rect className={pl} x="46" y={50 - ih / 2} width="14" height={ih} rx="3" />
      <rect className={pl2} x="32" y={50 - oh / 2} width="14" height={oh} rx="3" />
      <rect className="capx" x="25" y={50 - ch / 2} width="7" height={ch} rx="2" />
      <rect className={pl} x="180" y={50 - ih / 2} width="14" height={ih} rx="3" />
      <rect className={pl2} x="194" y={50 - oh / 2} width="14" height={oh} rx="3" />
      <rect className="capx" x="208" y={50 - ch / 2} width="7" height={ch} rx="2" />
      <rect className="shine" x="48" y={50 - ih / 2 + 3} width="3" height={ih - 6} rx="1.5" />
      <rect className="shine" x="182" y={50 - ih / 2 + 3} width="3" height={ih - 6} rx="1.5" />
    </svg>
  );
}

export function Kettlebell({ size = 80, kg }) {
  return (
    <svg viewBox="0 0 120 130" width={size} height={(size * 130) / 120} role="img" aria-label={'Kettlebell ' + kg + ' kg'}>
      <path className="k-handle" d="M40 52 C34 10 86 10 80 52" />
      <circle className="k-body" cx="60" cy="84" r="38" />
      <rect className="k-body" x="34" y="112" width="52" height="10" rx="4" />
      <path className="k-shine" d="M32 74 A30 30 0 0 1 52 52" />
      <circle className="k-label" cx="60" cy="86" r="17" />
      <text className="k-text" x="60" y="93" textAnchor="middle">{kg}</text>
    </svg>
  );
}

// Cores das anilhas no padrão de competição
const PLATE_COL = {
  25: ['#D9483B', '#fff'],
  20: ['#2F6FD0', '#fff'],
  15: ['#E2B93B', '#1B1204'],
  10: ['#3FA66A', '#fff'],
  5: ['#F2F2F2', '#1B1204'],
};

export function Plate({ kg }) {
  const c = PLATE_COL[kg];
  return (
    <svg viewBox="0 0 120 120" role="img" aria-label={'Anilha ' + kg + ' kg'}>
      <circle cx="60" cy="60" r="58" fill={c[0]} stroke="rgba(0,0,0,.18)" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(0,0,0,.22)" strokeWidth="2" />
      <circle cx="60" cy="60" r="22" fill="none" stroke="rgba(0,0,0,.22)" strokeWidth="2" />
      <circle cx="60" cy="60" r="9" fill="#12151C" />
      <text x="60" y="38" textAnchor="middle" fontFamily="Bricolage Grotesque, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="20" fill={c[1]}>{kg}</text>
      <text x="60" y="94" textAnchor="middle" fontFamily="Geist Mono, monospace" fontWeight="500" fontSize="12" letterSpacing="1" fill={c[1]}>kg</text>
    </svg>
  );
}

export function Barbell() {
  const L = [[108, 14, 92, '#D9483B'], [122, 14, 78, '#2F6FD0'], [136, 12, 64, '#E2B93B']];
  const mirror = (x, w) => 400 - x - w;
  return (
    <svg viewBox="0 0 400 110" role="img" aria-label="Barra olímpica com anilhas">
      <rect className="b-bar" x="6" y="51" width="388" height="8" rx="3" />
      <rect className="b-sleeve" x="70" y="47" width="260" height="16" rx="3" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} className="b-knurl" x={176 + i * 6} y="51" width="2" height="8" />
      ))}
      {L.map((p, i) => (
        <g key={i}>
          <rect x={p[0]} y={55 - p[2] / 2} width={p[1]} height={p[2]} rx="3" fill={p[3]} />
          <rect x={mirror(p[0], p[1])} y={55 - p[2] / 2} width={p[1]} height={p[2]} rx="3" fill={p[3]} />
        </g>
      ))}
      <rect className="b-collar" x="96" y="44" width="8" height="22" rx="2" />
      <rect className="b-collar" x="296" y="44" width="8" height="22" rx="2" />
    </svg>
  );
}

export function HeroPlate() {
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  return (
    <svg className="heroplate" viewBox="0 0 400 400" aria-hidden="true">
      <circle className="hp-fill" cx="200" cy="200" r="196" />
      <circle className="hp-dash" cx="200" cy="200" r="172" />
      {ticks.map((i) => (
        <line key={i} className="hp-tick" x1="200" y1="8" x2="200" y2={i % 5 === 0 ? 24 : 16} transform={'rotate(' + i * 6 + ' 200 200)'} />
      ))}
      <circle className="hp-ring" cx="200" cy="200" r="120" />
      <circle className="hp-ring" cx="200" cy="200" r="60" />
      <circle className="hp-hole" cx="200" cy="200" r="14" />
    </svg>
  );
}

export function Logo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="var(--accent)" />
      <rect x="6" y="14" width="20" height="4" rx="1" fill="var(--accent-ink)" />
      <rect x="8.5" y="9" width="4" height="14" rx="1.5" fill="var(--accent-ink)" />
      <rect x="19.5" y="9" width="4" height="14" rx="1.5" fill="var(--accent-ink)" />
    </svg>
  );
}

export function Monogram({ ini }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle className="m-ring" cx="50" cy="50" r="50" />
      <circle className="m-in" cx="50" cy="50" r="38" />
      <text className="m-text" x="50" y="61" textAnchor="middle">{ini}</text>
    </svg>
  );
}

const ICONS = {
  dumb: [['M3 9v6M6 6v12M18 6v12M21 9v6M6 12h12']],
  users: [['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'], ['M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'], ['circle', 9, 7, 4]],
  target: [['circle', 12, 12, 10], ['circle', 12, 12, 6], ['circle', 12, 12, 2]],
  pulse: [['M3 12h4l2-5 4 10 2-5h6']],
  leaf: [['M5 21c0-9 5-15 15-16 0 10-6 16-15 16z'], ['M5 21c3-5 6-8 10-10']],
  shield: [['M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z']],
  check: [['M4 12l5 5L20 6']],
  x: [['M6 6l12 12M18 6L6 18']],
};

export function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name].map((p, i) =>
        p[0] === 'circle' ? <circle key={i} cx={p[1]} cy={p[2]} r={p[3]} /> : <path key={i} d={p[0]} />
      )}
    </svg>
  );
}
