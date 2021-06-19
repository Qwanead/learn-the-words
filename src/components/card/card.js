import React from 'react';
import cl from 'classnames';
import s from './card.module.scss';

class Card extends React.Component {
  state = {
    done: false,
  }

  onCardClick = () => {
    this.setState({
      done: !this.state.done,
    });
  }

  render() {
    const { eng, rus } = this.props;
    const { done } = this.state;

    return (
      <div
        className={cl(s.card, { [s.done]: done })}
        onClick={this.onCardClick}
      >
        <div className={s.cardInner}>
          <div className={s.cardFront}>
            { eng }
          </div>
          <div className={s.cardBack}>
            { rus }
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
