export default function Busca({busca, setBusca}){
    return(
        <div className="busca">
            <h1>Buscar tarefas</h1>
            <input type="text"
            placeholder="Buscar tarefas" 
            value={busca} 
            onChange={(e) => setBusca(e.target.value)} />
        </div>
    )
}