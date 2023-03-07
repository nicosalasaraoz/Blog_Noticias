import { Button, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemNews = ({noticias, setNoticias}) => {
    const {id, category, title, description, url, content } = {...noticias}

    const borrarProducto = ()=>{
        // TAREA: agregar con SWAL una ventana que pregunte al usuario si desea eliminar el producto
        // si presiona que si entonces hago el siguiente
        borrarProductoAPI(id).then((respuesta)=>{
            if(respuesta.status === 200){
                Swal.fire('Producto eliminado', 'El producto fue correctamente eliminado','success');
                //busco todos los productos existentes en ese instante de tiempo
                consultarAPI().then((respuesta)=>{
                    //actualizo el state de productos de Administrador con los datos que hay en la api
                    setNoticias(respuesta);
                })
            }else{
                Swal.fire('Ocurrio un error', 'Intente esta operacion en unos minutos','error');
            }
        })
    }

    return (
       <>
            <tr style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <td >{id}</td>
                <td>{category}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{url}</td>
                <td>{content}</td>
                <td className="text-center">
                    <Link className='btn btn-outline-warning me-1' to={`/administrar/editar/${id}`}>
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="outline-danger" onClick={borrarProducto}>
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemNews;
