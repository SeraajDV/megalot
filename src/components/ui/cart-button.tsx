import { ShoppingCart } from "lucide-react";

export type CartButtonProps = {
  items: number;
};

const CartButton = ({ items }: CartButtonProps) => {
  return (
    <div className="rounded-full bg-green-600 p-2 transition-all ease-in-out hover:bg-green-700 flex gap-2 items-center cursor-pointer">
      <ShoppingCart size={20} />
      <p className="text-sm text-white">{items}</p>
    </div>
  );
};

export default CartButton;
