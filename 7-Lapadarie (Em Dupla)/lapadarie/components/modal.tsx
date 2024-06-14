"use client"
import React from 'react';
import Modal from 'react-modal';
import content from './content';
    

  export default  function modall() {
      const [modalIsOpen, setModalIsOpen] = React.useState(false);

      const customStyles = {
        content:{
            
        }
      }
    
      function openModal() {
        setModalIsOpen(true);
      }
    
      function closeModal() {
        setModalIsOpen(false);
      }
    
      return (
        <div>
            <div>
          <button onClick={openModal}>+Adicionar pessoas na fila</button>
          <Modal className="Black"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            
            <h4>Adicionar pessoas na fila</h4>
            <div className='Formulario'>
            <input placeholder='Nome completo do cliente'></input>
            <input placeholder='Total de pães'></input>
            </div>
            <div className='Botoes'>
              <div className='Botao1'>
            <button onClick={closeModal}>Enviar</button>
            </div>
            <div className='Botao2'>
            <button onClick={closeModal}>Cancelar</button>
            </div>
            </div>
          </Modal>
          </div>
        </div>
      );
    }
    
     