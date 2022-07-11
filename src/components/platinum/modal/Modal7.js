import React from 'react';
import ReactDOM from 'react-dom';
import pla7 from '../images/pla7-min.jpg' ;
const Modal7 = ({ isShowing7, hide7 }) => isShowing7 ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide7}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
            
     <img className='picmodal' src={pla7} />      
          
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal7;