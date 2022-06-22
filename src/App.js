import "./App.css";
import Main from "./main";
import NavigationNotConnected from "./components/navigationNotConected";
import NavigationConnected from "./components/navigationConected";

export const connected = false;

function App() {
     return (
          <div className="App">
               {connected ? (
                    <NavigationConnected />
               ) : (
                    <NavigationNotConnected />
               )}

               <Main />
          </div>
     );
}

export default App;
