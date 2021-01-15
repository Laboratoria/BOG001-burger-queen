import React from 'react';
import PropTypes from 'prop-types';
import './statusNav.css';

// https://www.youtube.com/watch?v=SKqFMYOSy4g&ab_channel=LogRocket

export default function StatusNav(props) {
  const { setView } = props;
  return (
    <ul className="status-nav">
      <li className="status-opt" role="presentation" onClick={() => setView('convocatoria')}>
        Convocatoria workshop
      </li>
      <li className="status-opt" role="presentation" onClick={() => setView('workshop')}>
      Workshop
      </li>
      <li className="status-opt" role="presentation" onClick={() => setView('summary')}>
        Resumen workshop
      </li>
      <li className="status-opt" role="presentation" onClick={() => setView('comite')}>
        Comité ERPC
      </li>
    </ul>
  );
}

StatusNav.propTypes = {
  setView: PropTypes.func.isRequired,
 };
