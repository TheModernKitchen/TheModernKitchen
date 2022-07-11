import React from 'react';
import ReactDOM from 'react-dom';
import pla4 from '../images/pla4-min.jpg' ;
const Modal4 = ({ isShowing4, hide4 }) => isShowing4 ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide4}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
            
     <img className='picmodal' src={pla4} />      
          
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal4;