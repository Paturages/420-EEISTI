import Inferno from 'inferno';
import Hues from '.';
import './index.html';

if (module.hot) {
  require('inferno-devtools'); // eslint-disable-line
}

document.getElementById('LoadingScreen').remove();
Inferno.render(<Hues />, document.getElementById('root')); // eslint-disable-line

if (module.hot) {
  module.hot.accept();
}
