import Inferno from 'inferno';

import './style.scss';

export default props =>
  <div className="Status">
    <div>M={props.mode}</div>
    <div>I={props.image}</div>
    <div>T=0x{+(props.time).toString(16)}</div>
    <div>B=0x{+(props.index).toString(16)}</div>
    <div>X=0x{+(props.x).toString(16)}</div>
    <div>Y=0x{+(props.y).toString(16)}</div>
    <div>0x{props.color}</div>
    <div>{props.song}</div>
  </div>
;
