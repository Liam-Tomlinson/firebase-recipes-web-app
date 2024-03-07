import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import "./App.css";
import LoginForm from "./components/LoginForm";
import AddEditRecipeForm from "./components/AddEsitRecipeForm";
import FirebaseFireStoreService from "./FirebaseFirestoreService";


function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  async function handleAddRecipe(newRecipe) {
    try {
      const response = await FirebaseFireStoreService.createDocument(newRecipe)

      alert(`successfully created a recipe with an ID = ${response.id}`)


    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">FireBase Recipes</h1>
        <LoginForm existingUser={user}></LoginForm>
      </div>
      <div className="main">
        <AddEditRecipeForm handleAddRecipe={handleAddRecipe}> </AddEditRecipeForm>
      </div>
    </div>
  );
}

export default App;
