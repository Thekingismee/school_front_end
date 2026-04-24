import React, { useState } from "react";

const Admission = () => {
   

    return (
        <>
            <header className="inscription-header-hero">
                <img src="/inscrip2.jpg" alt="Recrutement Groupe Scolaire L'Atome" className="hero-background" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="inscription-titre">Admission</h1>
                    <p className="hero-subtitle">Candidature spontanée & opportunités de carrière</p>
                </div>
            </header>

            <section className="inscription-section">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, consequuntur iusto excepturi totam dolorem nam inventore. Ad molestias sapiente accusamus placeat, voluptas cum quis quod illo minus cumque temporibus beatae?
                Facere, eaque? Iusto deserunt numquam nemo assumenda consequuntur exercitationem minima in nesciunt saepe. Iusto placeat recusandae dolorem molestiae quasi? Odio beatae molestiae atque? Beatae velit expedita, tempora consectetur quis eligendi.
                Consequatur velit saepe voluptas nam dicta. Labore excepturi atque voluptatibus repellendus dolore accusamus vel praesentium illum earum veniam! Quam eum neque quos id deleniti nesciunt ex sit adipisci nostrum quae.
                Sequi numquam nostrum magni sed pariatur debitis veniam! Vitae tenetur ratione officiis suscipit nesciunt aut libero perspiciatis nam molestiae reprehenderit! Sunt necessitatibus illo voluptatem provident officiis porro distinctio repellat odio!
                Alias itaque non sit veritatis, quibusdam ex at corporis aspernatur eum, molestias porro, voluptatem consectetur dolores. Ipsa voluptates, nobis quibusdam quia quaerat atque, neque excepturi accusamus tenetur dolorem culpa consequuntur!
                Sint incidunt nisi iste, optio reprehenderit vitae excepturi natus, asperiores, animi voluptatem delectus fuga eius necessitatibus nulla minima ipsum voluptates beatae sed. Sint molestias praesentium placeat magni quisquam laborum provident!
                Nobis, dignissimos? Sed, maiores veniam. Incidunt aperiam, magni ut beatae possimus saepe eligendi doloremque quos in? Provident inventore sunt autem quisquam incidunt voluptates magnam ullam, dicta harum illo recusandae perferendis!
                Iure repellendus eligendi eum at animi deserunt? Adipisci aut odio quia dolore, ut, facere voluptates aliquam quis fugit rem nam totam cumque voluptatem? Alias quae rerum maiores id eos provident!
            </section>

            <style jsx>{`
                .inscription-header-hero { position: relative; text-align: center; min-height: 550px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
                .hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
                .hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.5) 100%); z-index: 1; }
                .hero-content { position: relative; z-index: 2; padding: 140px 70px; }
                .inscription-titre { text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5); font-size: 4rem; font-weight: bold; font-family: 'Georgia', 'Times New Roman', serif; color: #fff; margin: 0 0 16px 0; }
                .hero-subtitle { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 1.2rem; color: rgba(255, 255, 255, 0.9); margin: 0; }
            `}</style>
        </>
    );
};

export default Admission;