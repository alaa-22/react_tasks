export const Card=(props)=>{
    return <> <div className="card p-2 m-2">
        <div className="card-body">
            {props.children}
        </div>
        <div className="card-footer">
            <button className="btn btn-danger">
                del
            </button>
        </div>
    </div></>

}