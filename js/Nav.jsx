const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <a href="#" className="nav-brand">
        <img src="assets/logos/losango-play-full.png" alt="Losango Play"/>
      </a>
      <div className="nav-links">
        <a href="#curso">O curso</a>
        <a href="#como">Como funciona</a>
        <a href="#rede">Rede Losango</a>
        <a href="#duvidas">Dúvidas</a>
      </div>
      <div className="nav-actions">
        <button className="btn btn-ghost btn-sm">Entrar</button>
        <button className="btn btn-primary btn-sm" onClick={() => window.openCheckout && window.openCheckout()}>
          Quero minha vaga <span className="chev">»</span>
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <img className="float-chev" src="assets/logos/play-chevron-outline.png" alt=""/>
    <div className="container hero-grid">
      <div>
        <span className="eyebrow">PAS UFLA 2026 · Matrículas abertas</span>
        <h1>O preparatório da Rede Losango, <em>agora na sua tela.</em></h1>
        <p className="hero-lead">Aulas ao vivo, professores de Minas, material digital. Tudo no losangoplay.com — sem baixar nada, sem sair de casa.</p>
        <div className="hero-ctas">
          <button className="btn btn-primary btn-lg" onClick={() => window.openCheckout && window.openCheckout()}>
            Quero minha vaga <span className="chev">»</span>
          </button>
          <a href="#como" className="btn btn-ghost btn-lg">Como funciona</a>
        </div>
        <div className="hero-trust">
          <div className="trust-chip"><span className="dot">+</span>43 anos de tradição</div>
          <div className="trust-chip"><span className="dot">+</span>600 aprovações em 2024</div>
          <div className="trust-chip"><span className="dot">■</span>16 unidades em MG</div>
          <div className="trust-chip"><span className="dot">●</span>Ao vivo + gravado</div>
        </div>
      </div>
      <HeroMock/>
    </div>
  </section>
);

const HeroMock = () => (
  <div className="hero-mock">
    <div className="mock-frame">
      <div className="mock-bar"><i></i><i></i><i></i></div>
      <div className="mock-screen">
        <div className="mock-live">
          <div className="live"><span className="d"></span>AO VIVO · Matemática</div>
          <div style={{fontSize:11,fontWeight:700,color:'#6A7A8C'}}>43 alunos na sala</div>
        </div>
        <div className="mock-video"><div className="play-btn"></div></div>
        <div className="mock-meta">
          <span>Prof. Marcos · Geometria analítica</span>
          <span>19:20 / 22:00</span>
        </div>
        <div className="mock-chat">
          <div className="avatar"></div>
          <div><b>Júlia</b><span>Professor, pode repetir o exemplo da parábola?</span></div>
        </div>
      </div>
    </div>
  </div>
);

window.Nav = Nav;
window.Hero = Hero;
