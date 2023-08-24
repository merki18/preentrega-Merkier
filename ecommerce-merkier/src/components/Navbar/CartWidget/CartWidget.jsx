import './CartWidget.css'

function CartWidget(props)  {
  return (
    <div className="carrito">
        🛒
        {props.saludo}
    </div>
  )
}

export default CartWidget