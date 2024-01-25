import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="font-bold text-3xl mb-4">Welcome to French Heritage Preservation</h1>
        <p>We are a company dedicated to preserving French heritage. We are currently running a crowdfunding campaign to fund our upcoming projects. We invite you to join us in this noble cause.</p>
      </main>
    </div>
  )
}