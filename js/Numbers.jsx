const Numbers = () => {
  const [go, setGo] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true); }, { threshold: 0.3 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <section className="numbers-block" id="rede" ref={ref}>
      <div className="container">
        <div className="numbers-head">
          <span className="eyebrow" style={{color:'#F78253',background:'rgba(240,90,40,.15)'}}>Quem está por trás</span>
          <h2>A Rede Losango em números.</h2>
          <p>O Losango Play é um produto novo. A escola que está por trás dele, não.</p>
        </div>
        <div className="numbers">
          <Counter go={go} pre="+" to={43}  label="anos de história em sala de aula"/>
          <Counter go={go} pre=""  to={16}  label="unidades físicas em Minas Gerais"/>
          <Counter go={go} pre="+" to={600} label="aprovações em 2024"/>
          <Counter go={go} pre="+" to={350} label="aprovações em federais"/>
          <Counter go={go} pre="+" to={100} label="aprovações em Medicina"/>
        </div>
        <p className="quote-block">O método que está mudando a educação em Minas Gerais agora é uma aba no seu navegador.</p>
      </div>
    </section>
  );
};

const Counter = ({ go, to, pre, label }) => {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!go) return;
    const dur = 1200, start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [go, to]);
  return (
    <div className="num">
      <div className="v">{pre}{v.toLocaleString('pt-BR')}</div>
      <div className="l">{label}</div>
    </div>
  );
};

const ForWhom = () => (
  <section className="section">
    <div className="container forwhom-layout" style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:48,alignItems:'flex-start'}}>
      <div>
        <span className="eyebrow">Para quem é</span>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(30px, 3.6vw, 44px)',fontWeight:900,letterSpacing:'-.02em',lineHeight:1.1,margin:'14px 0 16px',color:'var(--ink-900)'}}>Este curso é para você que…</h2>
        <p style={{fontSize:16,color:'var(--ink-600)',lineHeight:1.55}}>Se você se reconhece em um dos pontos ao lado, o PAS UFLA 2026 foi desenhado com você em mente.</p>
      </div>
      <div className="forwhom">
        {[
          'Está no 1º ou 2º ano do Ensino Médio e vai prestar o PAS da UFLA.',
          'Mora em uma cidade sem unidade da Rede Losango — ou mora perto, mas prefere estudar de casa.',
          'Já é aluno de uma das nossas unidades e quer um reforço a mais, focado só no seriado.',
          'Não quer depender de material de ENEM para se preparar para uma prova que cobra outras coisas.',
          'Quer começar a sua preparação para a UFLA agora, sem pagar cursinho presencial no valor cheio.',
        ].map((t, i) => (
          <div className="forwhom-item" key={i}>
            <div className="ic">»</div>
            <p>{t}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section bg-paper2">
    <div className="container">
      <div className="sec-head">
        <span className="eyebrow">Prova social</span>
        <h2>Quem já passou por aqui.</h2>
        <p>Estudantes de Lavras, Varginha e região aprovados nas universidades federais mais cobiçadas do sul de Minas.</p>
      </div>
      <div className="testimonials">
        <Testi name="Mariana Oliveira"    city="Lavras · MG"  univ="UFLA — Medicina Veterinária"    initials="MO" quote="Estudar pela Rede Losango foi o que me deu disciplina. O PAS é longo, mas a gente não se perde porque o cronograma já vem pronto."/>
        <Testi name="Pedro Henrique Silva" city="Varginha · MG" univ="UFLA — Engenharia de Alimentos" initials="PS" quote="Morava longe da unidade e não tinha como ir todo dia. Com o Play, eu assistia da minha casa e ainda revia as aulas no fim de semana."/>
        <Testi name="Clara Ferreira"      city="Viçosa · MG"  univ="UFV — Ciências Biológicas"      initials="CF" quote="O material do Bernoulli fez diferença na prova. Era o mesmo que meu primo usou na unidade de BH — e ele também passou."/>
      </div>
    </div>
  </section>
);

const Testi = ({ name, city, univ, initials, quote }) => (
  <div className="testi">
    <div className="testi-head">
      <div className="avatar">{initials}</div>
      <div>
        <div className="testi-name">{name}</div>
        <div className="testi-sub">{city}</div>
      </div>
    </div>
    <blockquote>"{quote}"</blockquote>
    <div className="univ-tag">{univ}</div>
  </div>
);

window.Numbers = Numbers;
window.ForWhom = ForWhom;
window.Testimonials = Testimonials;
