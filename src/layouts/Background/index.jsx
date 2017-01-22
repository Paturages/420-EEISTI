import Inferno from 'inferno';

import './style.scss';

export default props =>
  <div className="Background">
    <div className="Background__overlay" style={{ 'background-color': props.color }} />
    <div className="Background__image">
      background placeholder
    </div>
  </div>
;
