import { View } from "react-native"
import Header from "./components/Header"
import Home from "./screens/Home/Home"
import Styles from "./styles/Styles"

const App = () => {
  return(
    <View style={[Styles.container, Styles.padding]}>
      <Header />

      <Home />
    </View>
  );
}

export default App;