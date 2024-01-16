import styles from './Form.module.css';
import Modal from '../Modal';
import { useState } from 'react';

function Form(){

    const [modalOpen, setModalOpen] = useState(false);
    const [statusRegister, setStatusRegister] = useState();
    const [msgErrorName, setMsgErrorName] = useState();
    const [msgErrorEmail, setMsgErrorEmail] = useState();

    const openModal = (status) => {
        // Definir o status do registro antes de abrir o modal
        setStatusRegister(status);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envio do formulário e determinação do status do registro (success ou error)
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        let nomeValido = false;
        let emailValido = false;
        let status

        // Validação do nome no formulário
        if (nome === "" || nome === null || nome.length < 3) {
            const errorName = "O nome é obrigatório e precisa ter no mínimo 3 caracteres!";
            setMsgErrorName(errorName);
        } else {
            nomeValido = true;
            setMsgErrorName("");
        }

        // REGEX PARA VALIDAÇÃO DE EMAIL 
        // /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/

        // Validação do email no formulário
        const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/

        if (!regexEmail.test(email)) {
            const errorEmail = "O email é obrigatório e precisa ser válido!";
            setMsgErrorEmail(errorEmail);
        } else {
            emailValido = true;
            setMsgErrorEmail("");
        }

        if (nomeValido && emailValido) {
            const cadastro = {
                nome,
                email
            }
            status = 'success';
            console.log(cadastro);
            document.querySelector('form').reset();
        } else {
            status = 'error';
        }
        openModal(status);
    }

    return(
        <section className={styles.form}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="nome">Nome </label>
                <input type="text" name='nome' id='nome' />
                <span className={styles.errorMsg}>{msgErrorName}</span>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
                <span className={styles.errorMsg}>{msgErrorEmail}</span>
                <button type='submit'>Enviar</button>
            </form>
            <Modal isOpen={modalOpen} onClose={closeModal} >
                <div className={styles.modal}>
                    {statusRegister === 'success' && (
                        <p>E-mail cadastrado com <span className={styles.success}>sucesso</span>!
                            <div className={styles.bg_success} onClick={closeModal}>
                                <button>Fechar</button>
                            </div>
                        </p>
                    )}
                    {statusRegister === 'error' && (
                        <p>E-mail <span className={styles.error}>não</span> cadastrado!
                            <div className={styles.bg_error} onClick={closeModal}>
                                <button>Fechar</button>
                            </div>
                        </p>
                    )}
                </div>
            </Modal>
        </section>
    );
}

export default Form;