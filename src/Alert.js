import React, { forwardRef } from 'react';

const Alert = forwardRef(({ image, title, id, dispatch }, ref) => {
  const onClose = () => {
    dispatch({
      type: 'REMOVE_TO_ALERT',
      payload: id,
    });
  };

  return (
    <div ref={ref} className='alert'>
      <img src={image} alt={title} />
      <p>
        {title} <span>was added to your basket </span>
      </p>
      <i className='fas fa-times close' onClick={onClose}></i>
    </div>
  );
});

export default Alert;
