const APROXIMATE_RATING_STAR_MARKUP_WIDTH = 20;

type reviewItemComponentProps = {
  userName: string;
  rating: number;
  reviewText: string;
  dataTime: string;
  avatarUrl: string;
}

/*
*Review item component
*/
export function ReviewItemComponent({userName, rating, reviewText, dataTime, avatarUrl}: reviewItemComponentProps): JSX.Element {

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"></img>
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: APROXIMATE_RATING_STAR_MARKUP_WIDTH * rating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}
