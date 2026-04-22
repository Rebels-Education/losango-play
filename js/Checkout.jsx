const Checkout = ({ open, onClose, course }) => {
  const [state, setState] = React.useState('form');

  React.useEffect(() => {
    if (!open) setState('form');
  }, [open]);

  if (!open) return null;

  return (
    <div className={`modal ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-inner" onClick={e => e.stopPropagation()} style={{position:'relative'}}>
        <button className="checkout-close" onClick={onClose}>×</button>
        {state === 'form' ? (
          <>
            <div className="checkout-form">
              <span className="eyebrow">Só mais um passo</span>
              <h3>Preencha rapidinho para garantir sua vaga.</h3>
              <p className="sub">Em até 15 minutos após o pagamento, você recebe no WhatsApp e no e-mail o link da sua primeira aula.</p>
              <div className="field">
                <label>Nome completo do aluno</label>
                <input placeholder="Como aparece no RG"/>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <div className="field">
                  <label>WhatsApp (com DDD)</label>
                  <input placeholder="(35) 9 ____-____"/>
                </div>
                <div className="field">
                  <label>E-mail</label>
                  <input placeholder="voce@email.com"/>
                </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <div className="field">
                  <label>CPF do aluno</label>
                  <input placeholder="000.000.000-00"/>
                </div>
                <div className="field">
                  <label>Turma</label>
                  <select defaultValue={course || 'PAS 1'}>
                    <option>PAS 1 · 1º ano EM</option>
                    <option>PAS 2 · 2º ano EM</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-primary btn-lg" style={{marginTop:12}} onClick={() => setState('ok')}>
                Ir para o pagamento <span className="chev">»</span>
              </button>
              <p style={{fontSize:12,color:'var(--ink-500)',margin:0}}>Pagamento processado pelo Mercado Pago. Cartão, Pix ou boleto.</p>
            </div>
            <div className="checkout-side">
              <span className="eyebrow">Resumo do pedido</span>
              <div style={{background:'#fff',borderRadius:16,padding:20,display:'flex',flexDirection:'column',gap:10,border:'1px solid var(--border-2)'}}>
                <div style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:18}}>PAS UFLA 2026 · Turma {course || 'PAS 1'}</div>
                <div style={{fontSize:13,color:'var(--ink-600)'}}>Aulas ao vivo + gravações + material digital Bernoulli, até 12/06/2026.</div>
                <hr style={{border:0,borderTop:'1px solid var(--border-2)',margin:'6px 0'}}/>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:14}}><span>Matrícula</span><span>R$ [—]</span></div>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:14,color:'#1F9D55'}}><span>Desconto primeira turma</span><span>−R$ [—]</span></div>
                <div style={{display:'flex',justifyContent:'space-between',fontFamily:'var(--font-display)',fontWeight:900,fontSize:18,marginTop:8,color:'var(--brand-orange)'}}><span>Total</span><span>R$ [—]</span></div>
              </div>
              <div style={{fontSize:12,color:'var(--ink-500)',display:'flex',gap:8,alignItems:'flex-start'}}>
                <span>●</span><span>Até 12x no cartão. Pix à vista com desconto. Boleto em até 3 dias.</span>
              </div>
              <div style={{fontSize:12,color:'var(--ink-500)',display:'flex',gap:8,alignItems:'flex-start'}}>
                <span>●</span><span>7 dias para cancelar e receber reembolso integral, pelo CDC.</span>
              </div>
            </div>
          </>
        ) : (
          <div style={{gridColumn:'1 / -1',padding:60,textAlign:'center'}}>
            <div style={{width:72,height:72,borderRadius:9999,background:'#E8F5EE',color:'#1F9D55',margin:'0 auto 20px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:36,fontWeight:900}}>✓</div>
            <h3 style={{fontFamily:'var(--font-display)',fontSize:28,fontWeight:900,margin:'0 0 10px'}}>Sua vaga está garantida.</h3>
            <p style={{fontSize:16,color:'var(--ink-600)',maxWidth:460,margin:'0 auto 28px',lineHeight:1.55}}>Em até 15 minutos você recebe no WhatsApp e no e-mail o link da sua área do aluno e o cronograma da primeira semana.</p>
            <button className="btn btn-primary btn-lg" onClick={onClose}>Fechar <span className="chev">»</span></button>
          </div>
        )}
      </div>
    </div>
  );
};

window.Checkout = Checkout;
