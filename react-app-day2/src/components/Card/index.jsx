export const Card=(props)=>{
    const handledel=(e)=>{
     e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }
    return <>
        <div className="card p-2 m-2">
        <div className="card-body">
            {props.children}
        </div>

        <div className="card-footer">
            <button className="btn btn-danger" onClick={handledel}>
                del
            </button>
        </div>
    </div></>

}