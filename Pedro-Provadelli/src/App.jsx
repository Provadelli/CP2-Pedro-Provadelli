import './index.css'
import Foto from './assets/img.jpg'
import Titulo from './components/cartao'
import Botao from './components/botao'

function App() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex items-center gap-4 rounded-lg border p-4 shadow-sm">
        <img
          src={Foto}
          alt="Imagem do card"
          className="h-32 w-32 rounded object-cover"
        />

        <div className="flex flex-col items-start gap-3">
          <Titulo />
          <p className="text-gray-600">
            Foto do Neymar.
          </p>
          <Botao />
        </div>
      </div>
    </main>
  )
}

export default App