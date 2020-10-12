import React from 'react'
import Navbar from '../components/Navbar';
import SingleService from '../components/SingleService';
import SingleServiceText from '../components/SingleServiceText';
import Footer from '../components/Footer';

function Services() {
    return (
        <div>
            <Navbar />
            <SingleService title="DSD – cyfrowe projektowanie uśmiechu"
                description="Planując leczenie z zakresu stomatologii estetycznej często korzystamy z nowoczesnej metody, jaką jest DSD – cyfrowe projektowanie uśmiechu.
Jakie są jej zalety?"
                descriptionDots={
                    [" Brak ryzyka: pacjenci mogą zobaczyć, jak będzie wyglądał ich uśmiech, zanim rozpoczną leczenie",
                        "Dokładność: lekarz i pacjent mogą szczegółowo omówić możliwości i oczekiwania względem leczenia na bardzo konkretnym przykładzie",
                        "Bezpieczeństwo i komfort: DSD redukuje stres pacjenta związany z oczekiwaniem na efekt dużej metamorfozy"
                    ]}
                image="https://images.pexels.com/photos/3845759/pexels-photo-3845759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <SingleServiceText
                containerTitle="DSD – cyfrowe projektowanie uśmiechu: pytania i odpowiedzi"
                text={[{
                title: "JAK WYGLĄDA PLANOWANIE UŚMIECHU Z UŻYCIEM DSD?",
                description: "Rozpoczynamy od wywiadu medycznego, następnie przechodzimy do wykonania dokumentacji fotograficznej i nagrania krótkiego video. Te materiały posłużą programowi komputerowemu nie tylko do odzwierciedlenia zgryzu, ale także mimiki twarzy pacjenta oraz sposobu, w jaki się uśmiecha.",
            }, {
                    title: "KIEDY NAJCZĘŚCIEJ KORZYSTAMY Z DSD?",
                description: "Po cyfrowe planowanie uśmiechu najczęściej sięgamy w przypadku szeroko zakrojonych prac protetycznych, leczenia implantologicznego oraz w przypadku metamorfoz stomatologicznych.",
                }, {
                    title: "DLACZEGO WARTO SKORZYSTAĆ Z DSD?",
                    description: "DSD pozwala na bardzo szczegółowe ułożenie planu leczenia oraz przewidywalne zaplanowanie wizyt i kosztów leczenia w czasie. Dla wielu pacjentów jest podstawą decyzji o podjęciu leczenia implantoprotetycznego.",
                    }]} />
            <SingleService
                image="https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=738&q=80"
                title="Chirurgia stomatologiczna"
                description="Jak przeprowadzamy zabiegi chirurgii stomatologicznej?"
                descriptionDots={[
                    " bezboleśnie: w znieczuleniu lub pod narkozą",
                    "bezpiecznie: w osłonie antybiotykowej",
                    "interdyscyplinarnie: zabiegami chirurgicznymi wspomagamy inne dziedziny stomatologii: endodoncję, ortodoncję, periodontologię i implantologię",
                ]}
            />
            <SingleServiceText
            
                containerTitle="Chirurgia stomatologiczna: pytania i odpowiedzi"
                text={[
                    {
                        title: "JAKIE ZABIEGI CHIRURGII STOMATOLOGICZNEJ WYKONUJEMY?",
                        description:"Wykonujemy większość zabiegów chirurgicznych i mikrochirurgicznych w jamie ustnej. Możesz umówić się do nas na zabiegi takie, jak: usunięcie (ekstrakcja) zęba lub korzeni zęba, usunięcie „ósemek”, także zatrzymanych"
                    },
                    {
                        title: "JAKIE SĄ NAJWAŻNIEJSZE ZALECENIA PO USUNIĘCIU ZĘBA?",
                        description: "Przede wszystkim należy: powstrzymać się od picia alkoholu i palenia (co najmniej 2 dni), nie płukać intensywnie jamy ustnej przez pierwsze 3 dni po zabiegu w dniu zabiegu spożywać zimne/chłodne pokarmy i napoje"
                    },
                    {
                        title: "CZY ZĄB MOŻNA USUNĄĆ W DOWOLNEJ CHWILI?",
                        description: "W zasadzie tak, po badaniu wstępnym i  zakwalifikowaniu przez lekarza do zabiegu. Są jednak pewne przeciwwskazania: zaburzenia krzepliwości krwi, menstruacja, pierwszy trymestr ciąży, infekcje, stany zapalne, nowotworowe w jamie ustnej."
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Services
