import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Lista from './components/Lista'
import Button from './components/Button'
import Badge from './components/Badge'
import Input from './components/Input'
import Alert from './components/Alert'

function App() {
  const entregaveis = ['Entregavel 1', 'Entregavel 2', 'Entregavel 3', 'Entregavel 4', 'Entregavel 5', 'Entregavel 6', 'Entregavel 7', 'Entregavel 8']

  const [nome, setNome] = useState("")
  const [mensagem, setMensagem] = useState(null)

  function salvar() {
    if (nome.trim() === "") {
      setMensagem({ tipo: "error", texto: "Digite seu nome antes de salvar." })
    } else {
      setMensagem({ tipo: "success", texto: `Olá, ${nome}! Salvo com sucesso.` })
    }
  }

  function cancelar() {
    setNome("")
    setMensagem({ tipo: "warning", texto: "Operação cancelada." })
  }

  function excluir() {
    setNome("")
    setMensagem(null)
  }

  return (
    <>
      <Header />
      <Card titulo="Primeiro Passo" descricao="Ir para o AVA no site do CEUMA." />
      <Card titulo="Segundo Passo" descricao="Fazer as atividades que pedirem." />
      <Lista itens={entregaveis} />

      <div className="p-4 space-y-4">
        <Input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          variant={mensagem?.tipo === "error" ? "error" : "default"}
        />

        <div className="flex gap-2">
          <Button variant="primary" onClick={salvar}>Salvar</Button>
          <Button variant="danger" onClick={excluir}>Excluir</Button>
          <Button variant="secondary" onClick={cancelar}>Cancelar</Button>
        </div>

        <div className="flex gap-2">
          <Badge variant="info">Novo</Badge>
          <Badge variant="success">Pago</Badge>
          <Badge variant="danger">Atrasado</Badge>
        </div>

        {mensagem && <Alert variant={mensagem.tipo}>{mensagem.texto}</Alert>}
      </div>

      <Footer />
    </>
  )
}

export default App