import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({producto, setProductos}) => {
    const {_id, nombreProducto, precio, imagen, categoria } = {...producto}

    const borrarProducto = ()=>{
        // TAREA: agregar con SWAL una ventana que pregunte al usuario si desea eliminar el producto
        // si presiona que si entonces hago el siguiente
        borrarProductoAPI(_id).then((respuesta)=>{
            if(respuesta.status === 200){
                Swal.fire('Producto eliminado', 'El producto fue correctamente eliminado','success');
                //busco todos los productos existentes en ese instante de tiempo
                consultarAPI().then((respuesta)=>{
                    //actualizo el state de productos de Administrador con los datos que hay en la api
                    setProductos(respuesta);
                })
            }else{
                Swal.fire('Ocurrio un error', 'Intente esta operacion en unos minutos','error');
            }
        })
    }

    return (
        <>
            <tr>
                {/* <td>{producto._id}</td> */}
                <td>{_id}</td>
                <td>{nombreProducto}</td>
                <td>${precio}</td>
                <td>{imagen}</td>
                <td>{categoria}</td>
                <td className="text-center">
                    <Link className='btn btn-outline-warning me-1' to={`/administrar/editar/${_id}`}>
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

export default ItemProducto;
