import BusquedaGuiada from "./busquedaGuiada/BusquedaGuiada"
import BusquedaNormal from "./busquedaNormal/BusquedaNormal"
import ComparacionPrecios from "./comparacionPrecios/ComparacionPrecios"

const BusquedaCentral = () => {
    return (
        <div className="flex justify-center items-center">
            <BusquedaGuiada />
            {/* <BusquedaNormal /> */}
            <ComparacionPrecios />
        </div>
    )
}

export default BusquedaCentral