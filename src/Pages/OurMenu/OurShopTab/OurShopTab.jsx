import FoodCard from "../../../Shared/FoodCard/FoodCard";


const OurShopTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-4 justify-center items-center">
            {
            items?.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OurShopTab;