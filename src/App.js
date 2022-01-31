import { Route, Switch, Redirect } from 'react-router-dom';

import EmployeeDetails from './pages/EmployeeDetails';
import UploadDetails from './pages/UploadDetails';
import PageNotFound from './pages/PageNotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact><Redirect to='/up-details' /></Route>
        <Route path='/empl-details' exact><EmployeeDetails /></Route>
        <Route path='/up-details'><UploadDetails /></Route>
        <Route path='*'><PageNotFound /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
