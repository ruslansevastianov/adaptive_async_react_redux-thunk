import React from "react";
import { useState, useRef } from "react";
import './style.css';
import { connect } from "react-redux";
import Planets from "../Planets";
import Vehicles from "../Vehicles";
import People from "../People";
import Films from "../Films";
import {fetchPlanets, fetchVehicles, fetchPeople, fetchFilms} from '../actions'



const Tabs = ({fetchPlanets, fetchVehicles, fetchPeople, fetchFilms, planets, vehicles, people, films}) => {

    // ссылки для того, чтобы ориентироваться  в каждом Компоненте на соответствие
    let myRef1 = useRef();
    let myRef2 = useRef();
    let myRef3 = useRef();
    let myRef4 = useRef();
    
    const [isOpen, setIsOpen] = useState(false);
   
    return(
        <div className="mainBlockTabs">
            <div className="block-headers-tabs">
                    <div className={`${ isOpen === myRef1.current ? 'tab selectedTab' : 'tab' }`}
                             ref={myRef1} 
                             onClick={(event)=>{
                                setIsOpen(event.target); 
                                if(planets.length < 1){ // чтобы не делать повторный запрос, если у нас уже есть этот response
                                    fetchPlanets();
                                }
                    }}>Planets</div>
                    <div className={`${ isOpen === myRef2.current ? 'tab selectedTab' : 'tab' }`}
                             ref={myRef2}
                             onClick={(event)=>{
                                setIsOpen(event.target);
                                if(vehicles.length < 1){ // чтобы не делать повторный запрос, если у нас уже есть этот response                                  
                                    
                                    setTimeout(()=>{fetchVehicles()},1000); // дополнительно ставлю задержку, чтобы посмотреть спиннер
                                    
                                }
                        }}>Vehicles</div>
                    <div className={`${ isOpen === myRef3.current ? 'tab selectedTab' : 'tab' }`}
                             ref={myRef3}
                             onClick={(event)=>{
                                setIsOpen(event.target); 
                                if(people.length < 1){ // чтобы не делать повторный запрос, если у нас уже есть этот response

                                    setTimeout(()=>{fetchPeople()},1000); // дополнительно ставлю задержку, чтобы посмотреть спиннер
                                    
                                }                                
                        }}>People</div>
                    <div className={`${ isOpen === myRef4.current ? 'tab selectedTab' : 'tab' }`}
                             ref={myRef4}
                             onClick={(event)=>{
                                setIsOpen(event.target);
                                if(films.length < 1){ // чтобы не делать повторный запрос, если у нас уже есть этот response
                                    
                                    setTimeout(()=>{fetchFilms()},1000); // дополнительно ставлю задержку, чтобы посмотреть спиннер
                                    
                                }                                 
                        }}>Films</div>
            </div>
                <Planets isOpen={isOpen} myRef1 = {myRef1} setIsOpen={setIsOpen}/>
                <Vehicles isOpen = {isOpen} myRef2 = {myRef2} />
                <People isOpen = {isOpen} myRef3 = {myRef3} />
                <Films isOpen = {isOpen} myRef4 = {myRef4} />
        </div>
    )
} 

const mapStateFromProps = (state) => {
    return{
        planets: state.planets,
        vehicles: state.vehicles,
        people: state.people,
        films: state.films
    }
}

export default connect(mapStateFromProps,{fetchPlanets, fetchVehicles, fetchPeople, fetchFilms})(Tabs);