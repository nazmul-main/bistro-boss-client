import SectionTitle from "../SectionTitle/SectionTitle";
import feature from "../../assets/home/featured.jpg"
import './Feature.css'


const Feature = () => {
    return (
        <div className="featured-item text-white bg-fixed pt-8  md:pt-24 my-24">
            <SectionTitle 
            subHeading={"---Check it out---" }
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-16 py-12 pb-36">
                <div>
                    <img className="h-50vh" src={feature} alt="" />
                </div>
                <div className="md:ml-12 space-y-2">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where get i can some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos voluptatum in laudantium aut quaerat accusantium exercitationem molestias rerum iure quam iste et rem, hic assumenda labore minima iusto nobis similique cupiditate ratione maxime illum vel perferendis maiores. Dolorem, et quas consectetur quam animi impedit, repudiandae nihil enim, ullam rem possimus.</p>
                    <button className=" btn btn-ghost border-white border-0 border-b-4"> Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;