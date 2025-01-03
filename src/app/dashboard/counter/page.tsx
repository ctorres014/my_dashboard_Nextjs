import { CartCounter } from "@/shopping-cart";


export const metadata = {
  title: 'Shopping Cart',
  description: 'The counter simple'
}

export default function CounterPage() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el Carrito de Compras</span>
      <CartCounter value={20}></CartCounter>
    </div>
  );
}