import React from 'react'
import Navbar from '../components/Navbar';
import "../css/Prices.css";
import PricesContent from '../components/PricesContent';
import Footer from '../components/Footer';

function Prices() {
    return (
        <div>
            <Navbar />
            <div className="prices__title">
                <p className="prices__titleBlack">Stomatologia Nazwa</p>
                 <p className="prices__titleColor">Cennik uslug</p>
            </div>
            <PricesContent
                title="Stomatologia Zachowawcza"
                prices={[
                    {
                        name:"Konsultacja stomatologiczna (badanie, przepisanie recepty)",
                        price: "50zł",
                        dark:true,
                    },
                    {
                        name: "Badanie zębów pod mikroskopem, plan leczenia",
                        price: "100zł",
                        dark:false,
                    },
                    {
                        name: "RTG zęba",
                        price: "20zł",
                        dark:true,
                    },
                    {
                        name: "Znieczulenie komputerowe",
                        price: "50zł",
                        dark:false,
                    },
                    {
                        name: "Leczenie nadwrażliwości (pojedynczy ząb)",
                        price: "50zł",
                        dark:true,
                    },
                ]}
            />
            <PricesContent
                title="Stomatologia Dziecięca"
                prices={[
                    {
                        name: "Wizyta adaptacyjna",
                        price: "100zł",
                        dark:true,
                    },
                    {
                        name: "Wypełnienie w zębie mlecznym",
                        price: "150zł",
                        dark:false,
                    },
                    {
                        name: "Usunięcie zęba mlecznego",
                        price: "200zł",
                        dark:true,
                    },
                    {
                        name: "Amputacyjne leczenie kanałowe zęba mlecznego",
                        price: "300zł",
                        dark:false,
                    },
                ]}
            />
            <PricesContent
                title="Stomatologia Zachowawcza"
                prices={[
                    {
                        name:"Konsultacja stomatologiczna (badanie, przepisanie recepty)",
                        price: "50zł",
                        dark:true,
                    },
                    {
                        name: "Badanie zębów pod mikroskopem, plan leczenia",
                        price: "100zł",
                        dark:false,
                    },
                    {
                        name: "RTG zęba",
                        price: "20zł",
                        dark:true,
                    },
                    {
                        name: "Znieczulenie komputerowe",
                        price: "50zł",
                        dark:false,
                    },
                    {
                        name: "Leczenie nadwrażliwości (pojedynczy ząb)",
                        price: "50zł",
                        dark:true,
                    },
                ]}
            />
            <PricesContent
                title="Stomatologia Dziecięca"
                prices={[
                    {
                        name: "Wizyta adaptacyjna",
                        price: "100zł",
                        dark:true,
                    },
                    {
                        name: "Wypełnienie w zębie mlecznym",
                        price: "150zł",
                        dark:false,
                    },
                    {
                        name: "Usunięcie zęba mlecznego",
                        price: "200zł",
                        dark:true,
                    },
                    {
                        name: "Amputacyjne leczenie kanałowe zęba mlecznego",
                        price: "300zł",
                        dark:false,
                    },
                ]}
            />
            <Footer />
        </div>
    )
}

export default Prices
