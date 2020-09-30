import React from 'react';
import Alert from './Alert';

import FlipMove from 'react-flip-move';

import './Alerts.css';
import { useStateValue } from './context/State';

const Alerts = () => {
  const [{ alerts }, dispatch] = useStateValue();

  return (
    <div className='alerts'>
      <FlipMove>
        {alerts.map((alert) => (
          <Alert {...alert} dispatch={dispatch} key={alert.id} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Alerts;
