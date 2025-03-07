import Features from './components/Features'
import About from './components/About'
import Hero from './components/hero'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <main className='relative min-h-screen w-screen overflow-x-hidden'>
            <Navbar />
            <Hero />
            <About />
            <Features />
        </main>
    )
}

export default App