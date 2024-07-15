export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <div className="h-32"></div>
        </>
    )
}