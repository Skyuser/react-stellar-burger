import React from 'react'
import Modal from '../modal/modal';
import PropTypes from "prop-types";
import OrderDetails from '../order-details/order-details';
import burgerconstructorStyles from './burger-constructor.module.css'
import { ingredientPropType } from "../../utils/prop-types";
import { ConstructorElement, 
        DragIcon, 
        Button, 
        CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


function BurgerConstructor({ data }) {
    const [active, setActive] = React.useState(false);
    const buns = React.useMemo(() => data.length > 0 && data.find((m) => m.type === "bun"), [data])


    const popupSetClose = () => {
        setActive(false)
    }

    const popupSetOpen = () => {
        setActive(true)
    }


    return (
        <section className={`${burgerconstructorStyles.container}`}>
            <div className={`${burgerconstructorStyles.content} pl-4 pr-4 pb-5 pt-5`}>
                <div className={burgerconstructorStyles.component}>
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${buns.name} (верх)`}
                    price={buns.price}
                    thumbnail={buns.image}
                /></div>
                <ul className={`${burgerconstructorStyles.listitems}  custom-scroll`}>
                    {data.map((item) => {
                        return item.type !== "bun" && (
                            <li key={item._id} className={burgerconstructorStyles.item}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image}
                                /></li>
                        )
                    })}
                </ul>
                <div className={burgerconstructorStyles.component}>
                    <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${buns.name} (низ)`}
                    price={buns.price}
                    thumbnail={buns.image}
                />
                </div>
            </div>
            <div className={burgerconstructorStyles.items}>
                <span className={`${burgerconstructorStyles.pricetag} text text_type_main-large mr-2`}>800<CurrencyIcon type="primary" /></span>
                <Button onClick={popupSetOpen} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
            {active && 
            (<Modal close={popupSetClose}>
                <OrderDetails  />
            </Modal>)}
        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType.isRequired)
}

export default BurgerConstructor