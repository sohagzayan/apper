import Header from "@/components/shared/Nav/Header"
import MobileNav from "@/components/shared/Nav/MobileNav"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative">
            <Header />
            <MobileNav />
            <main>{children}</main>
        </div>
    )
}
