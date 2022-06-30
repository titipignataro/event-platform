import { ApolloProvider } from "@apollo/client";
import { Router } from "./Router";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
