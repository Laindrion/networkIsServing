import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import MobileNavbar from "@/components/ui/MobileNavbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = {
        firstName: "Oh Wow",
        lastName: "That's pizza"
    }
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar
                user={loggedIn}
            />
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/icons/logo.svg"
                        width={30} height={30}
                        alt="logo" />
                    <div>
                        <MobileNavbar user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
