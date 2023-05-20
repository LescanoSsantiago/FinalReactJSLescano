import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const {idCategoria} = useParams ();   

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        .catch(error => console.log(error))
    }, [idCategoria]) 
    return(
        <>
        <h2 style={{textAlign: "center"}} > Productos </h2>
        <ItemList productos={productos}/>
        </>    
        )
    }

export default ItemListContainer
