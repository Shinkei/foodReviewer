import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const styles = {
  ingredientList: {
    padding: 0,
  },
  ingredientElement: {
    listStyle: 'none',
    '&::before': {
      content: '"🌱 "',
    },
  },
  primaryText: {
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '-0.3px',
    lineHeight: '1.7em',
    color: '#343434',
    fontWeight: 400,
    margin: 0,
  },
  secondaryText: {
    fontFamily: 'Source Sans Pro',
    lineHeight: '1.7em',
    fontWeight: 400,
  },
};

const IngredientsList = ({ ingredients, className, classes }) => {
  return (
    <div className={className}>
      <h3 className={classes.primaryText}>Ingredients</h3>
      <ul className={classes.ingredientList}>
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            className={classNames(
              classes.secondaryText,
              classes.ingredientElement
            )}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

IngredientsList.defaultProps = {
  className: '',
};

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(IngredientsList);
