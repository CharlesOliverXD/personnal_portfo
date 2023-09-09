// import Datas from "../../datas/portfolio/portfolio.js"

export default function Elements( { name, category, image, title }) {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
                <img src={image} className="img-fluid" alt="" />
                <div className="portfolio-info">
                    <h4>{name}</h4>
                    <p>{category}</p>
                    <div className="portfolio-links">
                        <a href={image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={title}><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}