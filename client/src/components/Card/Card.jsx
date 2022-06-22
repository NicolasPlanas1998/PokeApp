import { pokemonByName } from "../../actions";
import { useDispatch, useSelector } from 'react-redux'
// import { connect } from "react-redux";
import React, { useEffect } from "react";

export function Card({pokemon}){
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(pokemonByName("charizar"))
    },[pokemon])
    const allDetails = useSelector(state => state.pokesDetail)
    return(
        <div>
            {
            Object.keys(allDetails).length > 0
            ?
                <div> 
                    <h2>'hola</h2>
                <h2>{allDetails["charizar"].name}</h2> 
                 <p>{allDetails["charizar"].id}</p>
                <p>{allDetails["charizar"].height}</p>
                <p>{allDetails["charizar"].wheight}</p>
                <p>{allDetails["charizar"].type}</p>
            
                </div>
            :
                <h2>Cargando...</h2>
                }
        </div>
    )
}





// allDetails = {
//     bulbasor :{id:2,name:"bulbasor"},
//     charizar: {id:3,name:"charizar"}
// }
// class Card extends React.Component{
//     constructor(props){					
//         super(props);				
//         this.state = {}			
//         setState(this.props.pokesDetail)	
//     }			
//     componentDidMount(){
//         this.props.getDetails(this.props.pokemon.name)
//         // const {id,name,height,weight,type,img} = this.props.pokesDetail
//     } 
//     render(){ 
//         return(
//             <div>
//                 {this.props.pokesDetail.length > 1?
//                 console.log(this.props.pokesDetail.name)
//                 // <h2 key={this.props.pokesDetail.id}>{this.props.pokesDetail.name}</h2>
//                 // this.props.pokesDetail.map(el=>(
//                 //     <div key={el.id}> 
//                 //         <h2>{el.name}</h2>
//                 //         <p>{el.id}</p>
//                 //         <p>{el.height}</p>
//                 //         <p>{el.wheight}</p>
//                 //         <p>{el.type}</p>
//                 //     </div>
//                 // ))
//                 :
//                 <h2>Cargando...</h2>}
//             </div>
//         )
//     }
// }

// function mapStateToProps(state){
//     return{
//         pokesDetail: state.pokesDetail
//     }
// }
// function mapDispatchToProps(dispatch){
//     return {
//         getDetails: (name) => dispatch(pokemonByName(name))
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Card);


