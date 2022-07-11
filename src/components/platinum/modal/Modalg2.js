import React from 'react';
import ReactDOM from 'react-dom';
import pla1 from '../images/whites-min.jpg' ;
const Modalg2 = ({ isShowingg2, hideg2 }) => isShowingg2 ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hideg2}>
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

export default Modalg2;