import { useEffect, useState } from "react";



const UseMenu = () => {

    const [menues, setMenues] = useState([]);
    // console.log(menues);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5001/api/v1/menus')
            .then(res => res.json())
            .then(data => {
                setMenues(data);
                setLoading(false)
            });
    }, []);

    return [menues, loading];
};

export default UseMenu;