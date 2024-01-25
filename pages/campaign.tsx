import Header from '../components/Header'

export default function Campaign() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="font-bold text-3xl mb-4">Our Crowdfunding Campaign</h1>
        <p>Include information on how to contribute, rewards for contributors, and progress towards the funding goal here.</p>
      </main>
    </div>
  )
}