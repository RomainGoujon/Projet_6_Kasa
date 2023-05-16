import React from "react";
import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import HousingDatas from "../../Data/logements.json";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import Tag from '../../components/Tags';
import Stars from '../../components/Rating';

function Housing() {
    const { id } = useParams();
    const data = HousingDatas.find(data => data.id === id);
    const navigate = useNavigate();

    if (!data) {
        navigate("/error");
    }

    return (
        <main>
            <Carousel pictures={data.pictures} />

            <div className="details">
                <div className="tag-title">
                    <div className="title">
                        <h1>{data.title}</h1>
                        <h2>{data.location}</h2>
                    </div>

                    <div className="tag-container">
                        {data.tags.map(tag => <Tag key={`${data.id}-${tag}`} tag={tag} />)}
                    </div>
                </div>

                <div className="stars-name">
                    <div className="host-name-picture">
                        <p className="host-name">{data.host.name}</p>
                        <img className="host-picture" src={data.host.picture} alt={data.host.name}/>
                    </div>

                    <div className="rating">
                        <Stars rating={data.rating} className="rating-star" />
                    </div>
                </div>
            </div>
                
                
            <div className="collapse-housing">
                <div className="description-housing">
                    <Collapse
                    collapseTitle={<h2 className="collapse-title">Description</h2>}
                    collapseDescription={<p className="collapse-description">{data.description}</p>} 
                    />
                </div>
                    
                <div className="equipments-housing">
                    <Collapse 
                    collapseTitle={<h2 className="collapse-title">Equipements</h2>}
                    collapseDescription={
                        <ul className="list-equipement">
                            {data.equipments.map((equipments, index) => (
                            <li key={`${index}-${equipments}`} className="equipements">{equipments}</li>
                        ))}
                        </ul>
                        }
                    />
                </div>
            </div>
            


        </main>
    )
}

export default Housing