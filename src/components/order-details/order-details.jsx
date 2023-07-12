import style from "./order-details.module.css";
import check from '../../images/check.png'

function OrderDetails() {
  return (
    <>
    <ul className={style.container}>
        <li className={`${style.number} text text_type_digits-large mt-4`}>
          034536
        </li>
        <li className={`${style.identifier} text text_type_main-default`}>
          идентификатор заказа
        </li>
        <li className='mt-10'><img src={check} alt="done" /></li>
        <li className="text text_type_main-small mt-15">
          Ваш заказ начали готовить
        </li>
        <li className={`${style.attention} text text_type_main-small mt-2`}>
          Дождитесь готовности на орбитальной станции
        </li>
    </ul>
</>
  );
}

export default OrderDetails;