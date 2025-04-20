import MobileNB from "@/components/MobileNB";
import MobileMB from "@/components/MobileNB";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'William', lastName: 'Ngumo'}
  return (
    <main className="flex h-screen w-full font-inter">
           
           <Sidebar user={loggedIn}/>

           <div className="flex size-full flex-col">
            <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
              <Image src="/icons/logo-SKFI.png" width={200} height={200} alt="menu icon"/>
              <div>
                <MobileNB user={loggedIn} />
              </div>
            </div>
            {children}
           </div>
           
           
           

    </main>
  );
}