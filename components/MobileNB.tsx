'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent side="left" className="border-none bg-white p-5">
         
          <Link href="/" className="flex items-center gap-2 mb-10">
            <Image 
              src="/icons/logo-SKFI.png"
              width={100}
              height={34}
              alt="SKFI logo"
            />
          </Link>

       
          <div className="flex h-[calc(100vh-140px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex flex-col gap-4">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn(
                          'flex items-center gap-4 rounded-lg p-3 transition-colors duration-200',
                          isActive ? 'bg-bank-gradient text-white' : 'hover:bg-gray-100'
                        )}
                      >
                        <Image 
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn('transition-all', {
                            'brightness-[3] invert-0': isActive
                          })}
                        />
                        <p className={cn(
                          "text-sm font-semibold",
                          isActive ? 'text-white' : 'text-black-2'
                        )}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>

           
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav;
