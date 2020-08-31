import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { time2Text, mapDifficulty } from '../utils';
import Detail from './Detail';
import Theme from '../utils/theme';

const styles = {
  primaryText: Theme.primaryText,
  detailTitle: {
    fontWeight: 500,
  },
};

const DetailsList = ({
  time,
  difficulty,
  classes,
  calories,
  carbos,
  proteins,
  fats,
  className,
}) => {
  const details = [
    { emoji: '⏲', text: time2Text(time), label: 'Time' },
    { emoji: '🎚', text: mapDifficulty(difficulty), label: 'Difficulty' },
    { emoji: '🔥', text: calories, label: 'Calories' },
    { emoji: '🥖', text: carbos, label: 'Carbohydrate' },
    { emoji: '🍖', text: proteins, label: 'Protein' },
    { emoji: '🧈', text: fats, label: 'Fat' },
  ];

  return (
    <div className={className}>
      <h3 className={classNames(classes.primaryText, classes.detailTitle)}>
        Details
      </h3>
      {details.map((detail, index) => {
        if (detail.text) {
          return (
            <Detail
              key={index}
              emoji={detail.emoji}
              text={detail.text}
              label={detail.label}
            />
          );
        }
        return undefined;
      })}
    </div>
  );
};

DetailsList.defaultProps = {
  time: '',
  difficulty: '',
  calories: '',
  carbos: '',
  proteins: '',
  fats: '',
  className: '',
};

DetailsList.propTypes = {
  time: PropTypes.string,
  difficulty: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  calories: PropTypes.string,
  carbos: PropTypes.string,
  proteins: PropTypes.string,
  fats: PropTypes.string,
  className: PropTypes.string,
};

export default withStyles(styles)(DetailsList);
