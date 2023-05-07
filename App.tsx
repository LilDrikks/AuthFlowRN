import * as React from "react";
import Router from "./src/routes/router";
import { AuthProvider } from "./src/contexts/Auth";


const App = () => {
  return (
     <AuthProvider>
       <Router />
     </AuthProvider>
  );
};

export default App;
