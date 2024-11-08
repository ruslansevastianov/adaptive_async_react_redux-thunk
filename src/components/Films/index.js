import React from "react";
// import './style.css';
import { connect } from "react-redux";
import { v4 } from 'uuid';


const Films = ({films, isOpen, myRef4}) => {

let filmsList = films.map((item)=>{
    return(
        <div className="row" key={v4()}>
            <div className="item-row"><div className="description">Name:</div>{item.title}</div>
            <div className="item-row"><div className="description">Producer:</div>{item.producer}</div>
            <div className="item-row"><div className="description">Release:</div>{item.release_date}</div>
            <div className="item-row"><div className="description">Episode:</div>{item.episode_id}</div>
        </div>
    )
})

// логика - если response нет, ничего не отрисовываем вообще, ставим анимацию
if(films.length < 1 && isOpen === myRef4.current ){
    return <div className="spinner" ></div>
}

let visibleMainBlock = `${isOpen === myRef4.current? 'show-main-block' : 'main-block'}` // соответствует ли соотв. title необх. Компонету

return (
    <div className={visibleMainBlock}>
        <div className="block-header">
            <div className="header">Name</div>
            <div className="header">Producer</div>
            <div className="header">Release</div>
            <div className="header">Episode</div>
        </div>
        <div>{filmsList}</div>
    </div>
)

   
}

const mapStateFromProps = (state) => {
    return {
        films: state.films
    }
}


export default connect(mapStateFromProps)(Films);