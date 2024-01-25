import Header from '../components/Header'

export default function Campaign() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="font-bold text-3xl mb-4">Our Crowdfunding Campaign</h1>
        <p>We are running a crowdfunding campaign to fund our upcoming projects. You can contribute to our campaign and get rewards. We have already reached 70% of our funding goal thanks to our generous contributors.</p>
      </main>
    </div>
  )
}