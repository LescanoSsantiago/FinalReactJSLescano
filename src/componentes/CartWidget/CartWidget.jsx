import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "data:image/jpeg;base64,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";

    return (
        <div>
            <Link style={{ textDecoration: "none" }} to='/cart'>
                <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
                {
                    cantidadTotal > 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget