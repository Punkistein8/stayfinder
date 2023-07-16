import Card from "./card/Card"

const CardsContainer = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10 sm:grid sm:grid-cols-2 sm:gap-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 xl:gap-4">
            <Card />
        </div>
    )
}

export default CardsContainer