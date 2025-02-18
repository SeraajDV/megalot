import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Heart, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";

const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="bg-dark_bg">
        <SheetHeader>
          <SheetTitle className="border-b-4 border-gray-500 py-2">
            <Image src="/logo.webp" width={150} height={100} alt="logo" />
          </SheetTitle>
          <SheetDescription className="text-md flex flex-col items-start text-white">
            <div className="w-full border-b-4 border-gray-500 py-2">
              <div className="w-full py-2 text-left">Home</div>
              <div className="flex w-full flex-1 items-center justify-between py-2">
                <div className="">
                  <p className="">Shop by Category</p>
                </div>
                <div className="">
                  <ArrowRight />
                </div>
              </div>
              <div className="w-full py-2 text-left">Deals</div>
              <div className="w-full py-2 text-left">Orders</div>
              <div className="w-full py-2 text-left">My Account</div>
              <div className="w-full py-2 text-left">Help Center</div>
            </div>
            <div className="w-full border-b-4 border-gray-500 py-2">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div>
                    <ShoppingCart className="text-green-600" />
                  </div>
                  <div>
                    <p className="">Cart</p>
                  </div>
                </div>
                <div className="text-sm">0 items</div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div>
                    <Heart className="text-pink-500" />
                  </div>
                  <div>
                    <p className="">Lists</p>
                  </div>
                </div>
                <div className="text-sm"></div>
              </div>
            </div>
            
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
