// src\components\Footer\index.jsx
import './style.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_wrap'>
            <div>
                <strong>Contabilidade</strong> - CNP: 00.000.000/0001-00
            </div>
            <div>
                Avenida Dendezeiros, 890 - bonfim - Salvador/BA
            </div>
            <div className='copy'>
                © {new Date().getFullYear()} Todos os direitos reservados.
            </div>
        </div>
        </footer >
    )
}

export default Footer;


