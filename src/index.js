import React from 'react';
import ReactDOM from 'react-dom';

// Store
import store from 'redux/index';

// Containers
import App from 'containers/App/App';

// Helpers
import registerServiceWorker from 'helpers/registerServiceWorker';

// Styles
import 'theme/default.css';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
