import "./board.css"

function Board({ children, title, id }) {
   
    return (
        <div  className="board">
            <div className="board__header">
                <h1 className="board__title">{title}</h1>
                <i class="fa-solid fa-plus"></i>
            </div>
            {children}
        </div>
    )
}

export default Board