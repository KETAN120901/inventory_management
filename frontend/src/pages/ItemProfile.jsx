import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom'
import './styles.css' 
function ItemProfile(props){

    const params = useParams()

    // search in db, search through products, 

    // console.log(params)

    return (<div className="itemprofile">{params.name}</div>)
}
export default ItemProfile;