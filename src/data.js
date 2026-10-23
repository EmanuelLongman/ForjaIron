export const DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
export const DAYS_FULL = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
// [abre, fecha] para cada dia, de segunda a domingo
export const HOURS = [[5, 23], [5, 23], [5, 23], [5, 23], [5, 22], [7, 15], [8, 12]];

export const CATS = {
  'Força': '#2B44FF',
  'Cardio': '#E5645B',
  'Mobilidade': '#2FA37A',
  'Funcional': '#C48A1A',
  'Lutas': '#9B5DE5',
};

// [dia, horário, nome, treinador, categoria, duração, capacidade, vagas ocupadas]
export const CLASSES = [
  [0, '06:00', 'Funcional Forja', 'Rafa', 'Funcional', 50, 20, 14],
  [0, '09:00', 'Yoga & Mobilidade', 'Marina', 'Mobilidade', 60, 16, 9],
  [0, '18:30', 'Powerlifting Base', 'Caio', 'Força', 75, 12, 10],
  [0, '19:45', 'Spinning Noturno', 'Duda', 'Cardio', 45, 24, 18],
  [1, '06:00', 'Kettlebell Flow', 'Rafa', 'Força', 45, 14, 8],
  [1, '12:15', 'HIIT Ferro', 'Duda', 'Cardio', 30, 20, 12],
  [1, '18:00', 'Boxe Fitness', 'Caio', 'Lutas', 60, 16, 15],
  [1, '19:30', 'Yoga & Mobilidade', 'Marina', 'Mobilidade', 60, 16, 6],
  [2, '06:00', 'Spinning Noturno', 'Duda', 'Cardio', 45, 24, 11],
  [2, '09:00', 'Treino de Glúteos', 'Marina', 'Força', 50, 16, 16],
  [2, '18:30', 'Cross Treino', 'Rafa', 'Funcional', 60, 18, 13],
  [2, '20:00', 'Pilates Solo', 'Marina', 'Mobilidade', 50, 12, 5],
  [3, '06:00', 'Funcional Forja', 'Rafa', 'Funcional', 50, 20, 9],
  [3, '12:15', 'HIIT Ferro', 'Duda', 'Cardio', 30, 20, 7],
  [3, '18:30', 'Powerlifting Base', 'Caio', 'Força', 75, 12, 8],
  [3, '19:45', 'Boxe Fitness', 'Caio', 'Lutas', 60, 16, 11],
  [4, '06:00', 'Kettlebell Flow', 'Rafa', 'Força', 45, 14, 6],
  [4, '09:00', 'Yoga & Mobilidade', 'Marina', 'Mobilidade', 60, 16, 7],
  [4, '18:00', 'Cross Treino', 'Rafa', 'Funcional', 60, 18, 17],
  [4, '19:15', 'Spinning Noturno', 'Duda', 'Cardio', 45, 24, 9],
  [5, '08:00', 'Cross Treino', 'Rafa', 'Funcional', 60, 18, 12],
  [5, '09:30', 'Treino de Glúteos', 'Marina', 'Força', 50, 16, 10],
  [5, '11:00', 'Funcional Forja', 'Duda', 'Funcional', 50, 20, 8],
  [6, '09:00', 'Yoga & Mobilidade', 'Marina', 'Mobilidade', 60, 16, 4],
  [6, '10:30', 'Kettlebell Flow', 'Rafa', 'Força', 45, 14, 5],
].map((r, i) => ({
  id: 'c' + i, day: r[0], time: r[1], name: r[2], coach: r[3],
  cat: r[4], dur: r[5], cap: r[6], taken: r[7],
}));

export const PLANS = [
  { id: 'base', name: 'Base', price: 89, desc: 'Musculação e cardio, no seu ritmo.', items: [[1, 'Acesso à musculação e cardio'], [1, 'Vestiários e armário diário'], [1, 'Avaliação inicial gratuita'], [0, 'Aulas coletivas'], [0, 'Treino com personal']] },
  { id: 'forja', name: 'Forja', price: 129, hot: true, desc: 'A academia inteira, com aulas à vontade.', items: [[1, 'Tudo do plano Base'], [1, 'Aulas coletivas ilimitadas'], [1, 'Reserva de vaga pelo celular'], [1, 'Avaliação física a cada 3 meses'], [0, 'Treino com personal']] },
  { id: 'elite', name: 'Elite', price: 199, desc: 'Acompanhamento próximo e resultado medido.', items: [[1, 'Tudo do plano Forja'], [1, '4 sessões de personal por mês'], [1, 'Plano de nutrição mensal'], [1, 'Leve 1 convidado por semana'], [1, 'Toalha e armário fixo']] },
];

export const PERIODS = [
  { id: 'm', label: 'Mensal', off: 0, n: 1 },
  { id: 't', label: 'Trimestral', off: 0.1, n: 3 },
  { id: 'a', label: 'Anual', off: 0.2, n: 12 },
];

export const SERVICES = [
  ['dumb', 'Musculação', 'Mais de 60 aparelhos, halteres de 2 a 50 kg, racks e plataformas de levantamento.', 'Acesso livre'],
  ['users', 'Aulas coletivas', 'Funcional, spinning, yoga, boxe fitness e kettlebell, em turmas pequenas com vaga reservada.', '25 aulas por semana'],
  ['target', 'Personal training', 'Treino individual com planilha ajustada a cada semana e foco no seu objetivo.', 'Sob agendamento'],
  ['pulse', 'Avaliação física', 'Bioimpedância, medidas e testes de força. Refeita a cada 3 meses para ver o progresso.', 'Grátis na matrícula'],
  ['leaf', 'Nutrição', 'Plano alimentar com nutricionista parceira, alinhado ao seu treino e à sua rotina.', 'Plano Elite'],
  ['shield', 'Área de lutas', 'Ringue e sacos pesados para boxe fitness e condicionamento, sem precisar saber lutar.', 'Terça e quinta'],
];

export const COACHES = [
  ['RM', 'Rafa Monteiro', 'funcional e kettlebell', 'Ex-atleta de CrossFit. Corrige a técnica do levantamento com paciência e aumenta a carga com consistência.'],
  ['MA', 'Marina Alves', 'mobilidade e glúteos', 'Fisioterapeuta de formação. Cuida de quem volta de lesão e de quem quer evoluir sem dor.'],
  ['CB', 'Caio Braga', 'powerlifting e boxe', 'Competidor de supino e agachamento. Monta ciclos de força e conduz o boxe fitness.'],
  ['DF', 'Duda Farias', 'spinning e HIIT', 'Fôlego de maratonista. Turmas de ritmo forte, com playlist boa e metas claras.'],
];

export const GOALS = ['Ganhar massa', 'Emagrecer', 'Ganhar força', 'Condicionamento', 'Voltar a treinar'];
