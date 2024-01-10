export default function Filter({status, setStatus, setOrdenacao}){
    return(
        <div className="filter">
            <h1>Filtrar</h1>
            <div className="filtros">
                <div className="opcoes">
                    <p>Status:</p>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} >
                        <option value="All">Todas</option>
                        <option value="Concluídas">Concluída</option>
                        <option value="pedentes">Pendentes</option>
                    </select>
                </div>
                <div className="ordenacao-alfabetica">
                    <p>Ordem alfabética:</p>
                    <div>
                        <button onClick={() => setOrdenacao("Asc")}>Asc</button>
                        <button onClick={() => setOrdenacao("Desc")}>Desc</button>
                    </div>
                </div>
            </div>
        </div>
    )
}