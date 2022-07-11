import React from 'react';
import ReactDOM from 'react-dom';
import s2 from '../images/s3-min.jpg' ;
const Modals2 = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
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
            
     <img className='picmodal' src={s2} />      
          
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modals2;