import React from 'react';
import DateSlider from './DateSlider';
import { render } from '@testing-library/react';
import { dateToSol } from '../services/sols';

describe('Date Slider', () => {
  describe('render', () => {
    it('Should display the correct date', () => {
      const { getByTestId } = render(
        <DateSlider earth_date='2017-5-3' onDateChanged={() => {}} />
      );
      const date = getByTestId('date-label');
      expect(date).toHaveTextContent('2017-5-3');
    });
    it('Should have the correct slider position', () => {
      const { getByTestId } = render(
        <DateSlider earth_date='2017-5-3' onDateChanged={() => {}} />
      );
      const input = getByTestId('date-slider');
      expect(input).toHaveValue(dateToSol('2017-5-3').toString());
    });
  });
});
