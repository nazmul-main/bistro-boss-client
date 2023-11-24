import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import ourShopImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../Hooks/UseMenu";
import OurShopTab from "../../Pages/OurMenu/OurShopTab/OurShopTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menues] = UseMenu()
    console.log(category);
    const dessert = menues?.filter(item => item.category === 'dessert');
    const salad = menues?.filter(item => item.category === 'salad');
    const pizza = menues?.filter(item => item.category === 'pizza');
    const soup = menues?.filter(item => item.category === 'soup');
    const drinks = menues?.filter(item => item.category === 'drinks');
    return (
        <div className="">
            <Helmet>
                <title>Bristo | Our Shop</title>
            </Helmet>
            <Cover img={ourShopImg} height={'60vh'} title={'OUR SHOP'} para={'Would you like to try a dish?'} />
            <div className="max-w-screen-xl mx-auto text-center min-h-screen md:py-12 py-4 px-4">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OurShopTab items={salad}></OurShopTab>
                    </TabPanel>
                    <TabPanel>
                        <OurShopTab items={pizza}></OurShopTab>
                    </TabPanel>

                    <TabPanel>
                        <OurShopTab items={soup}></OurShopTab>
                    </TabPanel>
                    <TabPanel>
                        <OurShopTab items={dessert}></OurShopTab>
                    </TabPanel>
                    <TabPanel>
                        <OurShopTab items={drinks}></OurShopTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;