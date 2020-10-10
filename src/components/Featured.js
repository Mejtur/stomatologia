import React from "react";
import "../css/Featured.css";
import SingleFeatured from "./SingleFeatured";

function Featured() {
  return (
    <div className="featured">
      <h1 className="featured__title">Polecane usługi: </h1>
      <div className="featured__container">
        <SingleFeatured
          title="Leczenie kanałowe pod mikroskopem"
          description="Wykonujemy leczenie kanałowe pod najnowocześniejszym na świecie mikroskopem Zeiss Extaro. Leczenie jest precyzyjne, komfortowe, bezbolesne i może odbyć się na jednej wizycie."
          image="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <SingleFeatured
          title="Pogotowie stomatologiczne"
          description="Nagły ból zęba? Uraz? Złamanie? Zgłoś się na nasze pogotowie stomatologiczne. Przyjmujemy pacjentów bólowych i zapewniamy pierwsze zaopatrzenie w przypdku bolącego zęba."
          image="https://images.unsplash.com/photo-1530293902459-fb26ee1c53e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <SingleFeatured
          title="Leczenie zębów w narkozie"
          description="Boisz się dentysty? Od dziś to przeszłość. Proponujemy Ci leczenie stomatologiczne w narkozie – komfortowo i bezboleśnie wyleczysz zęby i będziesz cieszyć się zdrowym uśmiechem."
          image="https://images.unsplash.com/photo-1486049125644-f35e226a5e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </div>
    </div>
  );
}

export default Featured;
