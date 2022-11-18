import '../estilos/home.css'


const Home = (props) => {
    return (
        <main className="holder">
    <div>
        <img src="img/home/img01.jpg" alt=""/>
    </div>
    <div className="columnas">
        <section className="bienvenidos">
            <h2>Bienvenidos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio praesentium officiis modi perspiciatis quis nulla, laboriosam, vero deserunt sunt voluptas laudantium incidunt maxime odio, temporibus magni voluptatem sequi! Eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio praesentium officiis modi perspiciatis quis nulla, laboriosam, vero deserunt sunt voluptas laudantium incidunt maxime odio, temporibus magni voluptatem sequi! Eligendi!</p>

        </section>
        <section className="testimonios">
            <h2>Testimonios</h2>
            <div className="testimonio">
                <span className="cita">Simplemente excelente</span>
                <span className="autor">Juan Gomez - zapatos.com</span>
            </div>
        </section>
    </div>
</main>
    )
}

export default Home;