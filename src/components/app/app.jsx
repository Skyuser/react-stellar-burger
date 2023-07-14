import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useState, useEffect } from "react";
import { getApiData } from "../../utils/api/api";


function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients();
  }, []);

  function getIngredients() {
    getApiData()
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <section className={styles.ingredients}>
          <h1 className="text text_type_main-large">Соберите бургер</h1>
          {ingredients.length && (
            <BurgerIngredients
            ingredients={ingredients} 
            />
          )}
        </section>
        <section className={styles.constructor}>
          {ingredients.length && (
            <BurgerConstructor
            data={ingredients} 
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;