import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Users from './pages/users/users'
import Daftar from './pages/users/Daftar'
import Login from './pages/users/Login'
import Home from './pages/home/index'
import homeUser from './pages/home/indexUser'

import PageNotFound from './pages/PageNotFound'


function App() {
  return (
    <BrowserRouter>
      <>
      <div className="container mx-auto ">
        <Switch>
        <Route path="/" component={homeUser} exact/>

          <Route path="/home" component={homeUser} exact/>

          <Route path="/homeAdmin" component={Home} exact />
          <Route path="/users" component={Users} exact />
          
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;