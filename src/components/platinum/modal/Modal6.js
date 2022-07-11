import React from 'react';
import ReactDOM from 'react-dom';
import pla6 from '../images/pla6-min.jpg' ;
const Modal6 = ({ isShowing6, hide6 }) => isShowing6 ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide6}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
            
     <img className='picmodal' src={pla6} />      
          
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal6;