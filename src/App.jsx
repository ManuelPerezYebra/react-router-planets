import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import Router from "./components/router/Router";

const App = () => {
	return <BrowserRouter >

	<GlobalStyles></GlobalStyles>
	<Router></Router>
	
	</BrowserRouter> 
	
};

export default App;
