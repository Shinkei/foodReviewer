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
    { emoji: '⏲', text: time2Text(time) },
    { emoji: '💪', text: mapDifficulty(difficulty) },
    { emoji: '🔥', text: calories },
    { emoji: '🥖', text: carbos },
    { emoji: '🍖', text: proteins },
    { emoji: '🧈', text: fats },
  ];

  return (
    <div className={className}>
      <h3 className={classNames(classes.primaryText, classes.detailTitle)}>
        Details
      </h3>
      {details.map(detail => {
        if (detail.text) {
          return <Detail emoji={detail.emoji} text={detail.text} />;
        }
        return undefined;
      })}
    </div>
  );
};

DetailsList.defaultProps = {
  time: '',
  difficulty: '',
  classes: '',
  calories: '',
  carbos: '',
  proteins: '',
  fats: '',
  className: '',
};

DetailsList.propTypes = {
  time: PropTypes.string,
  difficulty: PropTypes.string,
  classes: PropTypes.string,
  calories: PropTypes.string,
  carbos: PropTypes.string,
  proteins: PropTypes.string,
  fats: PropTypes.string,
  className: PropTypes.string,
};

export default withStyles(styles)(DetailsList);
