function Rating(props) {
    const {rating, numreReviews} = props;
    return (
        <div className="rating">
            <span> 
                <i className={
                    rating >= 1
                    ? 'fas fa-star'
                    : rating>=0.5 
                    ? 'fa-star-half-alt'
                    : 'far fa-star'
                } 
            />
            </span>
            <span>
                <i className={
                    rating >= 2
                    ? 'fas fa-star'
                    : rating>=1.5 
                    ? 'fa-star-half-alt'
                    : 'far fa-star'
                } 
            />
            </span>
            <span>
                <i className={
                    rating >= 3
                    ? 'fas fa-star'
                    : rating >= 2.5 
                    ? 'fa-star-half-alt'
                    : 'far fa-star'
                } 
            />
            </span>
            <span>
                <i className={
                    rating >= 4
                    ? 'fas fa-star'
                    : rating>=3.5 
                    ? 'fa-star-half-alt'
                    : 'far fa-star'
                } 
            />
            </span>
            <span>
                <i className={
                    rating >= 5
                    ? 'fas fa-star'
                    : rating>=4.5 
                    ? 'fa-star-half-alt'
                    : 'far fa-star'
                } 
            />
            </span>
        </div>
    )
}