  import { ingredientPropType } from "../../utils/prop-types.js";
  import ingridientStyle from "./ingridient-item.module.css";
  import {
    CurrencyIcon,
    Counter,
  } from "@ya.praktikum/react-developer-burger-ui-components";

  
  const ingridientItem = ({ data, openIngredient}) => {
  
    return (
      <div className={ingridientStyle.item} onClick={() => openIngredient(data)}>
        <img src={data.image} alt="фото." id={data._id}/>
        <div className={`${ingridientStyle.price} pt-1 pb-1`}><p className="text text_type_digits-default pr-2">{data.price}</p><CurrencyIcon type="primary" /> </div>
        <p className={`${ingridientStyle.paragraph} text text_type_main-default`}>{data.name}</p>
        <Counter size="small" />
      </div>
    );
  };
  
  ingridientItem.propTypes = {
    data: ingredientPropType.isRequired,
  };
  
  export default ingridientItem;