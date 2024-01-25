import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="font-bold text-3xl mb-4">Welcome to our Crowdfunding Campaign</h1>
        <p>Introduce the company and the crowdfunding campaign here.</p>
      </main>
    </div>
  )
}