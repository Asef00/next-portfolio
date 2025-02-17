export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-portfolio-heading text-orange-500">
            Admin Dashboard
          </h1>
        </header>
        {children}
      </div>
    </div>
  )
}
