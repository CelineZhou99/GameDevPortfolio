import logo from './logo.svg';
import './App.css';
import { Header, RowParent, RowChild, LinkText } from './css/Header';

function App() {
  return (
    <div className="App">
      <Header>
        <RowParent>
          <LinkText>Celine Zhou</LinkText>
          <RowChild>
              <LinkText id="profile">Profile</LinkText>
              <LinkText id="unreal">Unreal</LinkText>
              <LinkText id="unity">Unity</LinkText>
              <LinkText id="contacts">Contacts</LinkText>
          </RowChild>
        </RowParent>
      </Header>
    </div>
  );
}

export default App;
