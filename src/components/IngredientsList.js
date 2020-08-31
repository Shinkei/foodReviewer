import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Theme from '../utils/theme';

const styles = {
  primaryText: Theme.primaryText,
  secondaryText: Theme.secondaryText,
  ingredientList: {
    padding: 0,
  },
  ingredientElement: {
    listStyle: 'none',
    '&::before': {
      content: '"🌱 "',
    },
  },
  title: {
    fontWeight: 500,
  },
};

const IngredientsList = ({ ingredients, className, classes }) => {
  return (
    <div className={className}>
      <h3 className={classNames(classes.primaryText, classes.title)}>
        Ingredients
      </h3>
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
