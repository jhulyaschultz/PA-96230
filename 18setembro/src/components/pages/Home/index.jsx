// src\components\pages\Home\index.jsx

import './style.css';

function Home() {
    return (
        <section className='home'>
            <div className='hero_text'>
                <h1>Transforme a Gestão do Seu Negócio</h1>
                <h2>Contabilidade Inteligente, Sucesso Garantido</h2>
                <p>
                    Bem-vindo à <b>Contabilidade XYZ</b>, onde tecnologia, experiência e atendimento humano se unem para impulsionar o crescimento da sua empresa.<br/>
                    De microempresas a grandes negócios, oferecemos soluções personalizadas, consultoria estratégica e total transparência.<br/>
                    <span style={{color:'#2e7d32', fontWeight:'bold'}}>Confiança, inovação e resultados para você focar no que realmente importa!</span>
                </p>
                <a href='/Servicos' className='btn primary'>Conheça nossos serviços</a>
            </div>
            <div className='hero_img'>
                <img src='/vite.svg' alt='Contabilidade moderna' style={{maxWidth:'320px'}} />
            </div>
            <div className='destaques'>
                <h3>Por que escolher a gente?</h3>
                <ul>
                    <li>✔️ Atendimento consultivo e próximo</li>
                    <li>✔️ Soluções digitais e seguras</li>
                    <li>✔️ Redução de custos e riscos</li>
                    <li>✔️ Suporte rápido e eficiente</li>
                </ul>
            </div>
            <div className='cta'>
                <p>Pronto para evoluir sua empresa? <a href='/FaleConosco' className='btn secondary'>Fale com um especialista</a></p>
            </div>
        </section>
    );
}

export default Home;
