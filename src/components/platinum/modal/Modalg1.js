import React from 'react';
import ReactDOM from 'react-dom';
import pla1 from '../images/white8-min.jpg' ;
const Modalg1 = ({ isShowingg1, hideg1 }) => isShowingg1 ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hideg1}>
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

export default Modalg1;