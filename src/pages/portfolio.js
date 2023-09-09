import Contents from "../components/portfolios/contents";
import Elements from "../components/portfolios/elements";


function Portfolio(){
    return(
        <section id="portfolio" className="portfolio">
        <div className="container">
    
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>
    
          <Contents />
    
          <div className="row portfolio-container">

            <Elements name="App 1" category="App" image="/img/portfolio/portfolio-1.jpg" title="App 1" />
            <Elements name="Web 3" category="Web" image="/img/portfolio/portfolio-2.jpg" title="Web 3" />
            <Elements name="App 2" category="App" image="/img/portfolio/portfolio-3.jpg" title="App 2" />
            <Elements name="Card 2" category="Card" image="/img/portfolio/portfolio-4.jpg" title="Card 2" />
            <Elements name="Web 2" category="Web" image="/img/portfolio/portfolio-5.jpg" title="Web 2" />
            <Elements name="App 3" category="App" image="/img/portfolio/portfolio-6.jpg" title="App 3" />
            <Elements name="Card 1" category="Card" image="/img/portfolio/portfolio-7.jpg" title="Card 1" />
            <Elements name="Card 3" category="Card" image="/img/portfolio/portfolio-8.jpg" title="Card 3" />
            <Elements name="Web 3" category="Web" image="/img/portfolio/portfolio-9.jpg" title="Web 3" />
    
          </div>
    
        </div>
      </section>
    );
}
export default Portfolio ;