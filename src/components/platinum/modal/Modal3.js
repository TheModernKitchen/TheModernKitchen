import React from 'react';
import ReactDOM from 'react-dom';
import pla3 from '../images/pla3-min.jpg' ;
const Modal3 = ({ isShowing3, hide3 }) => isShowing3 ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide3}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
            
     <img className='picmodal' src={pla3} />      
          
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal3;