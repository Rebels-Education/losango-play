const Pillars = () => (
  <section className="section" id="apresentacao">
    <div className="container">
      <div className="sec-head">
        <span className="eyebrow">Feito pela Rede Losango</span>
        <h2>Pensado para quem estuda de casa.</h2>
        <p>Losango Play é o braço online da Rede Losango, a maior rede de ensino de Minas Gerais. A gente traz para a plataforma o mesmo método que, há mais de quatro décadas, vem aprovando estudantes nas principais universidades do país.</p>
        <p style={{marginTop:12,fontSize:18,color:'var(--ink-600)',lineHeight:1.55}}>A diferença? Agora você acompanha as aulas do seu quarto, da sala, da van da escola — de onde quiser. O rigor de quem conhece o vestibular, com a liberdade de quem estuda online.</p>
      </div>
      <div className="pillars">
        <div className="pillar">
          <div className="ic"><Icon.Grad/></div>
          <h3>Tradição em sala de aula</h3>
          <p>Mais de 40 anos formando aprovados em Minas — o mesmo método, agora online.</p>
        </div>
        <div className="pillar">
          <div className="ic"><Icon.Spark/></div>
          <h3>Método que funciona</h3>
          <p>O mesmo que está nas 16 unidades físicas da rede, com material Bernoulli incluso.</p>
        </div>
        <div className="pillar">
          <div className="ic"><Icon.House/></div>
          <h3>Liberdade do online</h3>
          <p>Sem deslocamento, sem app para baixar, sem complicação. Só o navegador.</p>
        </div>
      </div>
    </div>
  </section>
);

const CoursesBlock = () => (
  <section className="section bg-paper2" id="curso">
    <div className="container">
      <div className="sec-head">
        <span className="eyebrow">O curso aberto agora</span>
        <h2>PAS UFLA 2026 — matrículas abertas</h2>
        <p>Um preparatório completo para quem está no 1º ou no 2º ano do Ensino Médio e vai prestar o Programa de Avaliação Seriada da UFLA.</p>
      </div>
      <div className="courses">
        <CourseCard year="PAS 1" label="1º ano do Ensino Médio" featured={false}/>
        <CourseCard year="PAS 2" label="2º ano do Ensino Médio · mais procurado" featured={true}/>
      </div>
      <p style={{textAlign:'center',marginTop:24,fontSize:14,color:'var(--ink-500)',maxWidth:680,marginLeft:'auto',marginRight:'auto'}}>
        Cada aluno se inscreve em uma única turma — PAS 1 ou PAS 2 — conforme o ano escolar em que está matriculado. Em caso de dúvida sobre qual turma escolher, fala com a gente pelo WhatsApp.
      </p>
    </div>
  </section>
);

const CourseCard = ({ year, label, featured }) => (
  <div className={`course ${featured ? 'featured' : ''}`}>
    <div className="course-tag">● {year} · {label}</div>
    <h3>PAS UFLA 2026<br/><span style={{color: featured ? '#F78253' : 'var(--brand-orange)'}}>Turma {year}</span></h3>
    <p className="desc">Aulas ao vivo de segunda a sexta, gravações liberadas até o final do curso, e todo o material digital da Rede Losango incluso.</p>
    <ul>
      <li>Aulas ao vivo + gravação da aula no mesmo dia</li>
      <li>Material didático digital (Bernoulli) incluso</li>
      <li>Acesso até 12 de junho de 2026</li>
      <li>Suporte por WhatsApp com a secretaria</li>
    </ul>
    <div className="price">
      <span className="val">R$ [—]</span>
      <span className="suffix">/ matrícula única · até 12x no cartão</span>
    </div>
    <button className="btn btn-primary" style={{alignSelf:'flex-start'}} onClick={() => window.openCheckout && window.openCheckout(year)}>
      Quero minha vaga <span className="chev">»</span>
    </button>
    <p className="footnote">Inscrições até 26/04/2026 · Início das aulas: 27/04/2026</p>
  </div>
);

window.Pillars = Pillars;
window.CoursesBlock = CoursesBlock;
