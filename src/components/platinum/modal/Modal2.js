import React from 'react';
import ReactDOM from 'react-dom';
import pla2 from '../images/pla2-min.jpg' ;
const Modal2 = ({ isShowing2, hide2 }) => isShowing2 ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide2}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
            
     <img className='picmodal' src={pla2} />      
          
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal2;