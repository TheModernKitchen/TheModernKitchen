import React from 'react';
import ReactDOM from 'react-dom';
import pla1 from '../images/s3-min.jpg' ;
const Modals3 = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
            
     <img className='picmodal' src={pla1} />      
          
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modals3;