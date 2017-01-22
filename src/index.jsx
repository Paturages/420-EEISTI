import Inferno from 'inferno';

import Background from 'layouts/Background';
import Rhythm from 'layouts/Rhythm';
import Status from 'layouts/Status';

import './style.scss';

export default () =>
  <div className="Hues">
    <div className="Hues__background">
      <Background color="blue" />
    </div>
    <div className="Hues__rhythm">
      <Rhythm
        notes="o.x.o.x.oxox....oxox....oxox....o.x.o.x.oxox....oxox....oxox"
        currentNote="x"
      />
    </div>
    <div className="Hues__status">
      <Status
        mode="idk"
        color="ffffff"
        image="foo"
        song="weed"
        index="50"
        time="42"
        interval="1200"
        x="0"
        y="0"
      />
    </div>
    <div className="Hues__controls">
      Controls placeholder
    </div>
  </div>
;
