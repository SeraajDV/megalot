import { Heart } from "lucide-react";

const WishlistButton = () => {
  return (
    <div className="rounded-full bg-pink-500 p-2 transition-all ease-in-out hover:bg-pink-600 cursor-pointer">
      <Heart size={20} />
    </div>
  );
};

export default WishlistButton;
