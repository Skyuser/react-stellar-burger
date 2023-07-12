import styles from "./ingredient-details.module.css";
import { ingridientDetailsPropType } from "../../utils/prop-types";


const IngredientDetails = ({ingredient}) => {
  return (
    <>
      <img className='ml-30 mr-25' src={ingredient.image_large} alt={ingredient.name}/>
      <p className='text text_type_main-medium mt-4' style={{textAlign: 'center'}} >{ingredient.name}</p>
      <ul className={styles.grid}>
        <li className={styles.numbers}>
          <p className='text text_type_main-default text_color_inactive'>Калории, ккал</p>
          <p className='text text_type_main-default text_color_inactive'>{ingredient.calories}</p>
        </li>
        <li className={styles.numbers}>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_main-default text_color_inactive'>{ingredient.proteins}</p>
        </li>
        <li className={styles.numbers}>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_main-default text_color_inactive'>{ingredient.fat}</p>
        </li>
        <li className={styles.numbers}>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_main-default text_color_inactive'>{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingridientDetailsPropType.isRequired,
};

export default IngredientDetails;