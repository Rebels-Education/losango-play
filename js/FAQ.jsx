const FAQ = () => {
  const items = [
    { q: "O curso é ao vivo ou gravado?",          a: "Os dois. As aulas acontecem ao vivo, de segunda a sexta, e ficam salvas na plataforma logo depois. Você assiste de novo quantas vezes quiser." },
    { q: "Preciso baixar algum aplicativo?",        a: "Não. Tudo acontece dentro do losangoplay.com, direto do navegador. Funciona no computador, no celular e no tablet." },
    { q: "Tem material didático? Vou receber impresso?", a: "O material é 100% digital e já está incluso na matrícula. Você acessa pela plataforma, baixa em PDF e, se preferir, imprime em casa." },
    { q: "Qual a diferença entre PAS 1 e PAS 2?",  a: "PAS 1 é a etapa para estudantes do 1º ano do Ensino Médio. PAS 2 é para quem está no 2º ano. O conteúdo cobrado pela UFLA muda em cada etapa, por isso as turmas são separadas." },
    { q: "Já sou aluno da Rede Losango. Tenho desconto?", a: "Sim. Alunos matriculados em qualquer uma das 16 unidades físicas da Rede Losango têm condição especial no Losango Play. Fala com a secretaria da sua escola ou com a gente pelo WhatsApp que explicamos direitinho." },
    { q: "Como funciona o pagamento?",              a: "A matrícula é paga direto no site, via Mercado Pago. Você pode pagar no cartão de crédito, Pix ou boleto. Condições de parcelamento a confirmar com o financeiro da Rede Losango." },
    { q: "E se eu quiser cancelar?",               a: "Você tem até 7 dias após a matrícula para pedir o cancelamento e receber o valor de volta integralmente, conforme o Código de Defesa do Consumidor. Depois desse prazo, o cancelamento é analisado caso a caso." },
    { q: "Minha internet é instável. Consigo acompanhar?", a: "As aulas ao vivo funcionam bem em conexões simples de banda larga ou 4G. Se a conexão travar em algum dia, a aula fica gravada na plataforma — você assiste depois, sem prejuízo." },
    { q: "O PAS tem redação?", a: "Não. Para os preparatórios de vestibulares seriados — PAS incluído — o foco é nas disciplinas do vestibular. Se você quer preparação em redação, fique de olho na gente: os cursos do segundo semestre (Pré-ENEM Intensivo, Reta Final ENEM 2026 e outros seriados) vão ter redação inclusa." },
    { q: "Posso comprar só algumas disciplinas?", a: "No PAS, não. Como é um curso curto (menos de dois meses) e com valor acessível, a matrícula é sempre no pacote completo, com todas as disciplinas que caem na prova da UFLA." },
    { q: "As aulas têm horário fixo?", a: "Sim, o cronograma completo de horários vai para o seu e-mail assim que a matrícula é confirmada. Em geral, as aulas acontecem entre o fim da tarde e o início da noite, de segunda a sexta." },
    { q: "O acesso à plataforma dura quanto tempo?", a: "Você tem acesso a todas as aulas, gravações e materiais até o final do curso (12 de junho de 2026). Depois disso, o acesso às gravações permanece liberado por mais [X dias — a confirmar] para revisões de última hora antes da prova." },
  ];
  return (
    <section className="section" id="duvidas">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>Perguntas mais feitas.</h2>
          <p>Se a sua dúvida não está aqui, chama a gente no WhatsApp.</p>
        </div>
        <div className="faq">
          {items.map((it, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>{it.q}<span className="chev">»</span></summary>
              <div className="a">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const target = new Date('2026-04-27T19:00:00-03:00').getTime();
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = target - now;
  const ended = diff <= 0;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  if (ended) {
    return (
      <section className="final-cta">
        <div className="container">
          <span className="eyebrow" style={{color:'#fff',background:'rgba(255,255,255,.18)'}}>As aulas já começaram</span>
          <h2>Próxima turma: PAS 2027</h2>
          <p>As inscrições para o PAS UFLA 2026 estão encerradas. Entre na lista de espera e seja o primeiro a saber quando as matrículas do PAS 2027 abrirem.</p>
          <button className="btn btn-secondary btn-lg" style={{background:'#fff',color:'#D94A1C'}}>
            Entrar na lista de espera <span className="chev">»</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="final-cta">
      <div className="container">
        <span className="eyebrow" style={{color:'#fff',background:'rgba(255,255,255,.18)'}}>Antes que as aulas comecem</span>
        <h2>A sua vaga fecha em…</h2>
        <p>No dia 27/04/2026, às 19h, a primeira aula começa ao vivo. Depois disso, as inscrições do PAS UFLA 2026 fecham — a próxima turma só em 2027.</p>
        <div className="countdown">
          <CdCell v={d} l="dias"/>
          <CdCell v={h} l="horas"/>
          <CdCell v={m} l="min"/>
          <CdCell v={s} l="seg"/>
        </div>
        <button className="btn btn-secondary btn-lg" style={{background:'#fff',color:'#D94A1C'}} onClick={() => window.openCheckout && window.openCheckout()}>
          Quero minha vaga <span className="chev">»</span>
        </button>
      </div>
    </section>
  );
};

const CdCell = ({ v, l }) => (
  <div className="cd-cell">
    <div className="v">{String(v).padStart(2, '0')}</div>
    <div className="l">{l}</div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="assets/logos/losango-play-full-white.png" alt="Losango Play"/>
          <p>O braço online da Rede Losango — a maior rede de ensino de Minas Gerais. Preparatórios para vestibulares seriados, 100% pelo navegador.</p>
        </div>
        <div>
          <h5>Losango Play</h5>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#curso">O curso PAS</a></li>
            <li><a href="#como">Como funciona</a></li>
            <li><a href="#duvidas">Perguntas frequentes</a></li>
            <li><a href="#">Entrar na plataforma</a></li>
          </ul>
        </div>
        <div>
          <h5>Rede Losango</h5>
          <ul>
            <li><a href="#">A maior rede de MG</a></li>
            <li><a href="#">Conheça as 16 unidades</a></li>
            <li><a href="#">Histórico de aprovações</a></li>
            <li><a href="https://redelosango.com" target="_blank" rel="noopener">redelosango.com »</a></li>
          </ul>
        </div>
        <div>
          <h5>Fale com a gente</h5>
          <ul>
            <li>WhatsApp: [inserir]</li>
            <li>contato@losangoplay.com</li>
            <li>Seg a sex · 8h às 18h</li>
          </ul>
          <h5 style={{marginTop:24}}>Legal</h5>
          <ul>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Política de cookies</a></li>
            <li><a href="#">LGPD — Encarregado de dados</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Losango Play · Uma iniciativa da Rede Losango · CNPJ [inserir]</div>
        <div>Todos os direitos reservados.</div>
      </div>
    </div>
  </footer>
);

window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
