import React from "react";
// import './style.css'
import { connect } from "react-redux";
import { v4 } from 'uuid';


const People = ({people, isOpen, myRef3}) => {


let peopleList = people.map((item)=>{
    return(
        <div className="row" key={v4()}>
            <div className="item-row"><div className="description">Name:</div>{item.name}</div>
            <div className="item-row"><div className="description">Gender:</div>{item.gender}</div>
            <div className="item-row"><div className="description">Mass:</div>{item.mass}</div>
            <div className="item-row"><div className="description">Height:</div>{item.height}</div>
            <div className="item-row"><div className="description">Hair color:</div>{item.hair_color}</div>
            <div className="item-row"><div className="description">Eye color:</div>{item.eye_color}</div>
        </div>
    )
})

// логика - если response нет, ничего не отрисовываем вообще, ставим анимацию
if(people.length < 1 && isOpen === myRef3.current ){
    return <div className="spinner" ></div>
}


let visibleMainBlock = `${isOpen === myRef3.current? 'show-main-block' : 'main-block'}` // соответствует ли соотв. title необх. Компонету

return (
    <div className={visibleMainBlock}>
        <div className="block-header">
            <div className="header">Name</div>
            <div className="header">Gender</div>
            <div className="header">Mass</div>
            <div className="header">Height</div>
            <div className="header">Hair color</div>
            <div className="header">Eye color</div>
        </div>
        <div>{peopleList}</div>
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        people: state.people
    }
}

export default connect(mapStateToProps)(People);