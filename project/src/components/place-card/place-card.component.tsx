import { Offer } from '../../types/offer';
import { capitalizeFirstLetter } from '../../utils/utils';

const APROXIMATE_RATING_STAR_MARKUP_WIDTH = 15;

type PlaceCardProps = {
  offer: Offer;
}

/**Application place card component*/
export function PlaceCardComponent(props: PlaceCardProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {id, city, previewImage, images, title, isFavorite, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description, location} = props.offer;

  return (
    <article className="cities__card place-card">

      {getPremiumJSX(isPremium)}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          {getBookmarkButtonJSX(isFavorite)}

        </div>

        {getPlaceCardRatingJSX(rating)}

        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

function getPremiumJSX(isPremium: boolean){
  if(isPremium){
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
  else{
    return null;
  }
}

function getBookmarkButtonJSX(isFavorite: boolean){
  const bookmarkOnOffButtonClass = isFavorite ? 'place-card__bookmark-button--active' : '';

  return (
    <button className={`place-card__bookmark-button ${bookmarkOnOffButtonClass} button`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

function getPlaceCardRatingJSX(rating: number){
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: APROXIMATE_RATING_STAR_MARKUP_WIDTH * rating }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
