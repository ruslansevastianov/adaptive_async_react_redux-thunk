import React from "react";
// import './style.css';
import { connect } from "react-redux";
import { v4 } from 'uuid';


const Vehicle = ({vehicles,isOpen, myRef2}) => {


let vehiclesList = vehicles.map((item)=>{
    return(
        <div className="row" key={v4()}>
            <div className="item-row"><div className="description">Name:</div>{item.name}</div>
            <div className="item-row"><div className="description">Model:</div>{item.model}</div>
            <div className="item-row"><div className="description">Crew:</div>{item.crew}</div>
            <div className="item-row"><div className="description">Passengers:</div>{item.passengers}</div>
            <div className="item-row"><div className="description">Cargo:</div>{item.cargo_capacity}</div>
            <div className="item-row"><div className="description">Consumables:</div>{item.consumables}</div>
        </div>
    )
})

// логика - если response нет, ничего не отрисовываем вообще, ставим анимацию
if(vehicles.length < 1 && isOpen === myRef2.current ){
    return <div className="spinner" ></div>
}

let visibleMainBlock = `${isOpen === myRef2.current? 'show-main-block' : 'main-block'}` // соответствует ли соотв. title необх. Компонету

    return (
        <div className={visibleMainBlock}>
            <div className="block-header">
                <div className="header">Name</div>
                <div className="header">Model</div>
                <div className="header">Crew</div>
                <div className="header">Passengers</div>
                <div className="header">Cargo</div>
                <div className="header">Consumables</div>
            </div>
            <div>{vehiclesList}</div>
        </div>
    )
}

const mapStateFromProps = (state) => {
    return {
        vehicles: state.vehicles
    }
}


export default connect(mapStateFromProps)(Vehicle)
