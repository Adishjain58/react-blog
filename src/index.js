import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, withRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App'
import AuthService from './services/auth';
import ArticlesService from './services/articles';
import NotificationService from './services/notifications';

const Main=withRouter((props)=>{
return(
<App authService={ new AuthService()}
articlesService={new ArticlesService()}
notyService={new NotificationService()}
{...props} />
);
});

ReactDOM.render(
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    
    , document.getElementById('root'));
registerServiceWorker();
