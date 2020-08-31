import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { time2Text, mapDifficulty } from '../utils';
import Detail from './Detail';

const styles = {
  primaryText: {
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '-0.3px',
    lineHeight: '1.7em',
    color: '#343434',
    fontWeight: 400,
    margin: 0,
  },
  detailTitle: {},
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
    { emoji: '⏲', text: time2Text(time), label: 'preparation time' },
    { emoji: '💪', text: mapDifficulty(difficulty), label: 'difficulty' },
    { emoji: '🔥', text: calories, label: 'calories' },
    { emoji: '🥖', text: carbos, label: 'carbos' },
    { emoji: '🍖', text: proteins, label: 'proteins' },
    { emoji: '🧈', text: fats, label: 'fats' },
  ];

  return (
    <div className={className}>
      <h3 className={classNames(classes.primaryText, classes.detailTitle)}>
        Details
      </h3>
      {details.map((detail, index) => {
        if (detail.text) {
          return <Detail key={index} emoji={detail.emoji} text={detail.text} />;
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
