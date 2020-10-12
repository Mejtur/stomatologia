import React from 'react'
import Navbar from '../components/Navbar';
import SingleDoctor from '../components/SingleDoctor';
import Footer from '../components/Footer';

function AboutUs() {
    return (
        <div>
            <Navbar />
            <SingleDoctor
                image="https://images.unsplash.com/photo-1584516150884-72a69e316970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=647&q=80"
                name="lek. dent. Imie Nazwisko"
                text={[
                    "Tytuł lekarza dentysty uzyskałam w 2000 roku na Śląskim Uniwersytecie. Ukonczyłam także podyplomowe studia z zakresu medycyny estetycznej w 2004 roku.",
                    "Na co dzień zajmuję się leczeniem endodontycznym pod mikroskopem. Ponadto pasjonuje mnie chirurgia stomatologiczna. Największą satysfakcję po zabiegu daje mi uśmiech pacjenta i jego zaufanie do mnie, kiedy kontynuuje leczenie na następnych wizytach.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet hic magnam nostrum inventore ipsa ducimus fugit, aspernatur nisi ex?"
                ]}
            />
            <SingleDoctor
                image="https://images.unsplash.com/photo-1581222423419-79e498aca20b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            name="lek.dent. Imie Nazwisko"
            text={[
                "Ukończyłem studia na Wydziale Lekarsko-Dentystycznym w 2010 roku. Na co dzień zajmuję się leczeniem endodontycznym pod mikroskopem, stomatologią estetyczną, protetyczną odbudową braków zębowych, chirurgią, a także implantologią",
                "Szczególną rolę przywiązuję do nowoczesnych metod leczenia opartych na światowych standardach, biorąc pod uwagę indywidualne potrzeby pacjenta.",
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quam explicabo ex?"
            ]}
            />
            <Footer />
        </div>
    )
}

export default AboutUs
