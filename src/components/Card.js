import './Card.css'


function Card({title, body}) {
    return (
        <div className='card-container'>
            <div className="image-container">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="card-content">
                
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            
            <div className="btn">
                <button>
                    <a href="{() => false}">
                        다운로드
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Card