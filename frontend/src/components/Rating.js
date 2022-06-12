function Rating(props) {
    const {rating, numreReviews} = props;
    return (
        <div className="rating">
            <span>
                <i className={
                    rating>=1
                    ? 'fas fa-star'
                    : rating>=0.5 
                    ? 'fa-star-half-alt'
                    : 'far fa-star'
                } 
            />
            </span>
        </div>
    )
}