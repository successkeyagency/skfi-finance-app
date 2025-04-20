'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 left-0 h-screen w-fit max-md:hidden flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white sm:p-4 xl:p-6 2xl:w-[355px]">
      <nav className="flex flex-col gap-6">
     
        <Link href="/" className="mb-12 flex items-center gap-2 cursor-pointer">
          <Image
            src="/icons/logo-SKFI.png"
            width={200}
            height={50}
            alt="SKFIlogo"
            
          />
          <h1 className="text-[26px] font-bold text-black font-ibm-plex-serif 2xl:text-26 max-xl:hidden">
            
          </h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              key={item.label}
              href={item.route}
              className={cn(
                'flex items-center gap-3 rounded-lg justify-center xl:justify-start py-2 md:py-3 2xl:py-4 px-2 2xl:px-4 text-black hover:bg-gray-50 transition-all',
                { 'bg-gray-100': isActive }
              )}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn(
                    'object-contain',
                    {
                      'invert-0 brightness-0': isActive && item.label === 'Home',
                      'brightness-[3] invert-0': isActive && item.label !== 'Home',
                    }
                  )}
                />
              </div>

              <p
                className={cn(
                  'text-[16px] font-semibold text-black-2 max-xl:hidden',
                  { '!text-black': isActive }
                )}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
