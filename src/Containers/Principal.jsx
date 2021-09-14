import React, { Component } from 'react'
import Productos from '../Components/Productos'


const url="https://appiyudith.herokuapp.com/tienda"

export default class Principal extends Component {

    constructor() {
        super()
        this.state = {
            tienda: [],
            searchTerm:'',
            error: '',
          
        }
    }

    async componentDidMount() {
        const resp = await fetch(url)
        const data = await resp.json()
        this.setState({ tienda: data })
        console.log(this.state.tienda)
     
    }
    render() {
        return (
            <div>
                {
                    this.state.tienda.map((tienda ) =>{
                        return (
                               <Productos
                               key={tienda.id}
                               data={tienda}
                               /> 
                            )
                    })
                     
                    
                   
                }
              

            </div>
        )
    }
}
