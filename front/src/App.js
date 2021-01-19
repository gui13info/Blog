import Header from "./components/Header";
import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
)

export default App;
