"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, TrendingUp } from "lucide-react";
import { useState } from "react";

const MobileSearch = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <Sheet>
      <SheetTrigger>
        <Search />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-screen border-transparent bg-dark_bg text-white"
      >
        <SheetHeader>
          <SheetTitle className="flex w-full items-center justify-between border-b-4 border-b-gray-500 pb-4">
            <div className="mx-auto flex w-2/3 items-center justify-between border-2 border-gray-500 p-2">
              <input
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder="Search for products, brands..."
                className="bg-transparent text-sm text-white outline-none"
              />
              {searchItem && (
                <button
                  className="text-sm text-white"
                  onClick={() => setSearchItem("")}
                >
                  X
                </button>
              )}
            </div>
          </SheetTitle>
          <SheetDescription className="flex flex-col text-white gap-2 cursor-pointer">
            <div className="flex gap-2">
              <TrendingUp className="text-main_bg" />
              <p className="text-sm">Bags</p>
            </div>
            <div className="flex gap-2">
              <TrendingUp className="text-main_bg" />
              <p className="text-sm">Shoes</p>
            </div>
            <div className="flex gap-2">
              <TrendingUp className="text-main_bg" />
              <p className="text-sm">Merch</p>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSearch;
