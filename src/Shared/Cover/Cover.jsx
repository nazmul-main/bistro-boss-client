import { Parallax } from 'react-parallax';

const Cover = ({ img, height, title, para }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero" style={{ height: `${height}` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{para}</p>
                    </div>
                </div>
            </div>
        </Parallax>



    );
};

export default Cover;