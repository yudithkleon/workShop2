import React, { Component } from 'react'

export default class Productos extends Component {
    render() {
        const {Producto, Precio, Imagen,Descripcion}
        return (
            <div>
                <div>
                    <div className="card" style="width: 18rem;">
                            <img src={Imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">{Producto}</h5>
                            <p className="card-text">{Descripcion}</p>
                            <a href="#" className="btn btn-primary">Comprar</a>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
