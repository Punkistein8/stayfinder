import "./cardStyle.css";

const Card = ({ className }) => {
    return (
        <div className={`card mb-24 mx-auto ${className}`}>
            <div className="overlap">
                <img className="hotel" alt="Hotel" src="hotel-1.png" />
                <div className="card-secundaria" />
                <div className="pais-provincia">
                    <img className="ubicacion-marcador" alt="Ubicacion marcador" src="ubicacion-marcador.svg" />
                    <div className="latacunga">Latacunga</div>
                    <div className="ecuador">Ecuador</div>
                </div>
                <p className="caracteristicas">económico • en las afueras</p>
                <p className="direccion">Av. Simón Rodriguez y Otawa</p>
                <div className="por-noche">por noche</div>
                <div className="hotel-las-armenias">Hotel Las Armenias</div>
                <div className="precio">
                    <div className="overlap-group">
                        <div className="element">$16</div>
                    </div>
                </div>
                <div className="calificacion">
                    <img className="estrella" alt="Estrella" src="estrella.svg" />
                    <div className="text-wrapper">4.6</div>
                </div>
            </div>
        </div>
    );
};

export default Card;