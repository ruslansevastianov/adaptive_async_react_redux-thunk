import React from "react";
// import './style.css';
import { useEffect } from "react";
import { connect } from "react-redux";
import {fetchPlanets} from '../actions';
import { v4 } from 'uuid';

const Planets = ({planets, fetchPlanets, isOpen, setIsOpen, myRef1}) => {

    // при загрузке странице это Компонент должен загружаться сразу
    useEffect(()=>{ 
        fetchPlanets();
        setIsOpen(myRef1.current);
         
    },[])

    // логика - если response нет, ничего не отрисовываем вообще, ставим анимацию
if(planets.length < 1 && isOpen === myRef1.current ){
    return <div className="spinner" ></div>
}

let visibleMainBlock = `${isOpen === myRef1.current? 'show-main-block' : 'main-block'}` // соответствует ли соотв. title необх. Компонету


let planetsList = planets.map((item)=>{
    return(
        <div className="row" key={v4()}>
            <div className="item-row"><div className="description">Name:</div>{item.name}</div>
            <div className="item-row"><div className="description">Rotation:</div>{item.rotation_period}</div>
            <div className="item-row"><div className="description">Orbital:</div>{item.orbital_period}</div>
            <div className="item-row"><div className="description">Diametr:</div>{item.diameter}</div>
            <div className="item-row"><div className="description">Climate:</div>{item.climate}</div>
        </div>
    )
})



    return (
        <div className={visibleMainBlock}>
            <div className="block-header">
                <div className="header">Name</div>
                <div className="header">Rotation</div>
                <div className="header">Orbital</div>
                <div className="header">Diametr</div>
                <div className="header">Climate</div>
            </div>
            <div>{planetsList}</div>
        </div>
    )
}
const mapStateFromProps = (state) => {
    return {
        planets: state.planets
    }
}

export default connect(mapStateFromProps,{fetchPlanets})(Planets);