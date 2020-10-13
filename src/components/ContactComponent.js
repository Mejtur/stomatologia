import React from 'react'
import "../css/ContactComponent.css"

function ContactComponent() {
    return (
        <div className="contactComponent">
            <div className="contactComponent__column">
                <div className="contactComponent__container">
                <p className="contactComponent__title">Rejestracja wizyt</p>
                <p className="contactComponent__subtitle">Umów wizytę pod numerem:</p>
                <p className="contactComponent__text">000 000 000</p>
                <p className="contactComponent__title">Adres gabinetu</p>
                <p className="contactComponent__subtitle">Zapraszamy na wizytę:</p>
                <p className="contactComponent__text">Nazwa stomatologia mikroskopowa</p>
                <p className="contactComponent__text">ul. Nazwa Ulicy 11</p>
                <p className="contactComponent__text">Nazwa miasta</p>
                </div>
            </div>
            <div className="contactComponent__column">
                <div className="contactComponent__container">
                    <p className="contactComponent__title">
                        Kontakt z nami
                    </p>
                    <p className="contactComponent__subtitle">
                        Masz pytania? Chętnie na nie odpowiemy.
                        Zapraszamy na konsultację.
                    </p>
                    <div className="contactComponent__formContainer">
                        <form>
                            <input type="text" placeholder="Imie i nazwisko*" required/>
                            <input type="text" placeholder="Email*" required />
                            <textarea cols="30" rows="10" placeholder="Zadaj pytanie" required></textarea>
                            <button type="submit">WYSLIJ</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent
