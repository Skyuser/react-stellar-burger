import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ingredientsStyle from "./burger-ingredients.module.css";
import IngridientItem from "../ingridient-item/ingridient-item";
import { ingredientPropType } from "../../utils/prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";


function BurgerIngredients({ ingredients }) {
  const buns = useMemo(() => ingredients.filter((m) => m.type === "bun"), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((m) => m.type === "sauce"), [ingredients])
  const fillings = useMemo(() => ingredients.filter((m) => m.type === "main"), [ingredients])
  const [openIngredient, setOpenIngredient] = useState(false);
  const [dataIngredient, setDataIngredient] = useState(null);
  const [current, setCurrent] = useState("one");
  const handleClosePopupIngredient = () => {
    setOpenIngredient(false);
    setDataIngredient(null);
  };

  function handleOpenPopupIngredient(ingredient) {
    setOpenIngredient(true);
    setDataIngredient(ingredient);
  }

  return (
    <>
      <div className={`${ingredientsStyle.tab} pt-5 pb-5`}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>Булки</Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>Соусы</Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>Начинки</Tab>
      </div>
      <div className={`${ingredientsStyle.ingridientcontainer} mt-5`}>
        <div className="pb-5">
          <h2 className="text text_type_main-medium pb-1" >Булки</h2>
          <ul className={`${ingredientsStyle.ingridientlist} pt-5`}>
            {buns.map((ingredients) => (
              <li key={ingredients._id}>
                <IngridientItem
                  data={ingredients}
                  openIngredient={handleOpenPopupIngredient}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-5 pb-5">
          <h2 className="text text_type_main-medium pb-1" >Соусы</h2>
          <ul className={`${ingredientsStyle.ingridientlist} pt-5`}>
            {sauces.map((ingredients) => (
              <li key={ingredients._id}>
                <IngridientItem
                  data={ingredients}
                  openIngredient={handleOpenPopupIngredient}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-5 pb-5">
          <h2 className="text text_type_main-medium pb-1" >Начинки</h2>
          <ul className={`${ingredientsStyle.ingridientlist} pt-5`}>
            {fillings.map((ingredients) => (
              <li key={ingredients._id}>
                <IngridientItem
                  data={ingredients}
                  openIngredient={handleOpenPopupIngredient}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {openIngredient && 
      ((<Modal close={handleClosePopupIngredient} title="Детали ингредиента">
          <IngredientDetails ingredient={dataIngredient} />
        </Modal>) 
      )}
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerIngredients;