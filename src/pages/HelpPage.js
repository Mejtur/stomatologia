import React from 'react'
import Help from '../components/Help';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HelpPage() {
    return (
        <div>
            <Navbar />
            <Help
                title="Stan zębów"
                subtitle="Dlaczego warto sprawdzać stan uzębienia?"
                text={[
                    "Jeśli chcesz dowiedzieć się, w jakim stanie jest Twoje uzębienie, zapraszamy na wizytę konsultacyjną i przegląd stomatologiczny. Przegląd jest kompleksowym badaniem uzębienia oraz stanu dziąseł i śluzówki.",
                    "Podczas badania stanu zębów lekarz stomatolog dokładnie analizuje każdy ząb. Uzębienie sprawdzane jest pod kątem ubytków próchnicowych, uszkodzenia szkliwa, przebarwień, osadów i obecności kamienia nazębnego. Oprócz zębów, badane są także dziąsła.",
                    "Badanie stomatologiczne wspomagane jest radiowizjografią cyfrową. Na każdej wizycie wykonywane jest cyfrowe RTG, które jest następnie analizowane.",
                ]}
                image="https://images.unsplash.com/photo-1593022356269-609ed284b3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
            <Help
                image="https://images.unsplash.com/photo-1601650722456-e8bdd3964218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                title="Ból zęba"
                subtitle="Ból zęba. Dlaczego boli ząb? Co robić, gdy boli ząb?"
                text={[
                    "Gdy ból zęba pojawia się podczas gryzienia pokarmu, przy spożywaniu potraw gorących, zimnych i słodkich, jest pulsujący, ”ćmiący” lub ciągły, to znak, że w jamie ustnej dzieje się coś złego. Leki przeciwbólowe nie pomogą.",
                    "Przyczyn bólu zęba może być kilka. Do najczęstszych należą: głęboko sięgająca próchnica i zgorzel zęba (zgorzel miazgi lub zgorzel około wierzchołka korzenia). Powodem tych objawów są zaniedbania w profilaktyce jamy ustnej (w tym brak regularnych przeglądów stomatologicznych)",
                    "Jeśli boli Cię ząb nie zwlekaj z wizytą stomatologiczną. Stomatolog musi jak najszybciej obejrzeć Twoją jamę ustną. W zależności od przyczyn bólu zęba, lekarz może od razu przeprowadzić leczenie stomatologiczne lub wykonać diagnostykę i zaopatrzyć ubytek, a następnie umówić się z Tobą na kolejną wizytę."  
                ]}
            
            />
            <Footer />
        </div>
    )
}

export default HelpPage
