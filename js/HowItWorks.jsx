const HowItWorks = () => (
  <section className="section" id="como">
    <div className="container">
      <div className="sec-head">
        <span className="eyebrow">Como funciona</span>
        <h2>Tudo dentro da sua área do aluno.</h2>
        <p>Sem baixar aplicativo, sem conta em três lugares diferentes. Do primeiro clique ao dia da prova, você fica em um lugar só.</p>
      </div>
      <div className="steps">
        <Step n="1" title="Você se matricula online" body="Escolhe PAS 1 ou PAS 2, finaliza o pagamento e recebe os acessos por e-mail e WhatsApp em até 15 minutos."/>
        <Step n="2" title="Entra na aula ao vivo" body="No horário marcado, o botão da aula do dia aparece na sua área. Um clique e você está na sala junto do professor."/>
        <Step n="3" title="Revisa quando precisar" body="Cada aula é gravada automaticamente. Se você faltou ou quer rever um tópico, abre a gravação no painel."/>
        <Step n="4" title="Estuda com o material digital" body="Todo o material do curso fica na plataforma. Baixe em PDF, imprima, destaque — como funciona para você."/>
      </div>
    </div>
  </section>
);

const Step = ({ n, title, body }) => (
  <div className="step">
    <div className="step-num">{n}</div>
    <h4>{title}</h4>
    <p>{body}</p>
  </div>
);

const Benefits = () => (
  <section className="section bg-paper2">
    <div className="container">
      <div className="sec-head">
        <span className="eyebrow">Diferenciais</span>
        <h2>Tradição de rede grande. Praticidade de curso online.</h2>
        <p>O melhor da Rede Losango, reunido em uma plataforma só.</p>
      </div>
      <div className="benefits">
        <Benefit icon="Live"     t="Aulas ao vivo todo dia"      b="Segunda a sexta, entre o fim da tarde e o início da noite. Câmera, chat e microfone abertos."/>
        <Benefit icon="Play"     t="100% das aulas gravadas"     b="Faltou? Chegou atrasado? Quer rever na véspera da prova? A gravação fica liberada."/>
        <Benefit icon="Book"     t="Material Bernoulli incluso"  b="Um dos sistemas mais premiados do Brasil, já dentro da plataforma — pode baixar em PDF."/>
        <Benefit icon="Pin"      t="Professores de Minas"        b="Os mesmos professores que formam aprovados nas 16 unidades físicas da Rede."/>
        <Benefit icon="WhatsApp" t="Secretaria no WhatsApp"      b="Dúvida de matrícula, troca de turma, problema técnico — resposta de humano, de segunda a sexta."/>
        <Benefit icon="Shield"   t="7 dias para desistir"        b="Você tem até 7 dias após a matrícula para pedir reembolso integral, conforme o CDC."/>
      </div>
    </div>
  </section>
);

const Benefit = ({ icon, t, b }) => {
  const Cmp = Icon[icon];
  return (
    <div className="benefit">
      <div className="ic"><Cmp/></div>
      <h4>{t}</h4>
      <p>{b}</p>
    </div>
  );
};

window.HowItWorks = HowItWorks;
window.Benefits = Benefits;
