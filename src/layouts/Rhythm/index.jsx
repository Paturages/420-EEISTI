import Inferno from 'inferno';

import './style.scss';

export default props =>
  <div className="Rhythm">
    <div className="Rhythm__container">
      <div className="Rhythm__left">
        {`\u202e${props.notes}`}
      </div>
      <div className="Rhythm__current">
        {props.currentNote}
      </div>
      <div className="Rhythm__right">
        {props.notes}
      </div>
    </div>
  </div>
;
