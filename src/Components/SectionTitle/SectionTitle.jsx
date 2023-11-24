

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto my-8">
            <p className="text-[#D99904] text-center mb-2">{subHeading}</p>
            <h2 className=" text-center text-3xl uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;