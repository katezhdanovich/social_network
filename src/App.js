import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';
import News from './components/news/News';
import Music from './components/music/Music';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class="content">
          <Route path="/profile" render={() => <Profile />}/>
          <Route path="/dialogs" render={() => <DialogsContainer />}/>
          <Route path="/news" render={() => <News />}/>
          <Route path="/music" render={() => <Music />}/>
          <Route path="/settings" render={() => <Settings />}/>
          <Route path="/users" render={() => <UsersContainer />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;