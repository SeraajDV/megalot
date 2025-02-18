import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import CartButton from "./cart-button";
import MobileSearch from "./mobile-search";
import SideMenu from "./side-menu";
import WishlistButton from "./wishlist-button";

const Header = () => {
  return (
    <div className="relative w-screen py-2 text-white">
      <div className="mx-auto hidden items-center justify-between sm:flex md:max-w-[calc(900px+24px)] xl:max-w-[calc(1200px+24px)] 2xl:max-w-[calc(1500px+24px)]">
        <div className="flex items-center gap-10">
          <Image src="/logo.webp" width={200} height={100} alt="logo" />
          <ul className="hidden cursor-pointer items-center text-sm sm:flex">
            <li className="hidden border-r-2 border-gray-500 px-4 hover:underline md:block">
              Help Center
            </li>
            <li className="px-4 hover:underline md:hidden">Help Center</li>
            <li className="hidden px-4 hover:underline md:block">
              Sell on Megalot
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <ul className="hidden cursor-pointer items-center text-sm md:flex">
            <li className="border-r-2 border-gray-500 px-4 hover:underline">
              Login
            </li>
            <li className="border-r-2 border-gray-500 px-4 hover:underline">
              Register
            </li>
            <li className="border-r-2 border-gray-500 px-4 hover:underline">
              Orders
            </li>
          </ul>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hidden bg-transparent px-2 text-sm sm:flex">
                  My Account
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col px-2 text-sm">
                  <NavigationMenuLink className="px-4 hover:underline">
                    My Account
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-4 hover:underline">
                    Track Order
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-4 hover:underline">
                    Returns
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-4 hover:underline">
                    Credit & Refunds
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-4 hover:underline">
                    Product Reviews
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-4 hover:underline">
                    Invoices
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-4 hover:underline">
                    Personal Details
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-4 hover:underline">
                    Security Settings
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-4 hover:underline">
                    Help Center
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <WishlistButton />
            <CartButton items={0} />
          </div>
        </div>
      </div>
      <div className="sticky left-0 top-0 flex items-center justify-between px-4 py-2 sm:hidden">
        <SideMenu />
        <Image src="/logo.webp" width={200} height={100} alt="logo" />
        <div className="flex items-center gap-2">
          <MobileSearch />
          <div className="cursor-pointer">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
