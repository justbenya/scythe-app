import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ScoreForm } from './ScoreForm';

const players = [
  {
    id: 'c8GevSBG89ToiqSlrtBLe',
    name: 'sdas',
    faction: 'Северное королевство',
    mat: 'Патриотический (3)',
    gold: 0,
    popularity: 0,
    stars: 0,
    territories: 0,
    resources: 0,
    buildingBonuses: 0,
    points: 0,
  },
  {
    id: 'gTqiooyUe-hObS7Ssznb4',
    name: 'Player 2',
    faction: 'Саксонская империя',
    mat: 'Промышленный (1)',
    gold: 0,
    popularity: 0,
    stars: 0,
    territories: 0,
    resources: 0,
    buildingBonuses: 0,
    points: 0,
  },
];
const player = players[1];

describe('ScoreForm', () => {
  it('should display required error when value is null', async function () {
    const mockSaveData = jest.fn();
    render(<ScoreForm saveData={ mockSaveData } player={ player } />);

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByText(/введите накопленные монеты/i)).toBeInTheDocument();
    expect(await screen.findByText(/введите накопленную популярность/i)).toBeInTheDocument();
    expect(await screen.findByText(/введите накопленные звезды/i)).toBeInTheDocument();
    expect(await screen.findByText(/введите кол\-во контролируемых территорий/i)).toBeInTheDocument();
    expect(await screen.findByText(/введите кол\-во контролируемых ресурсов/i)).toBeInTheDocument();
    expect(await screen.findByText(/введите кол\-во монет за бонус зданий/i)).toBeInTheDocument();

    expect(mockSaveData).not.toBeCalled();
  });

  it('should display required error when value is not correct', async function () {
    const mockSaveData = jest.fn();
    render(<ScoreForm saveData={ mockSaveData } player={ player } />);

    userEvent.type(screen.getByLabelText(/монеты на руках/i), '-1');
    userEvent.type(screen.getByLabelText(/популярность/i), '-1');
    userEvent.type(screen.getByLabelText(/кол\-во звезд/i), '-1');
    userEvent.type(screen.getByLabelText(/территорий \(фабрика дает \+3\)/i), '-1');
    userEvent.type(screen.getByLabelText(/всего ресурсов \(каждый ресурс\)/i), '-1');
    userEvent.type(screen.getByLabelText(/бонусы зданий/i), '-2');

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByText(/Значение не может быть отрицательным/i)).toHaveLength(6);
    expect(mockSaveData).not.toBeCalled();
  });

  it('should work when correct data', async function () {
    const mockSaveData = jest.fn();
    render(<ScoreForm saveData={ mockSaveData } player={ player } />);

    userEvent.type(screen.getByLabelText(/монеты на руках/i), '1');
    userEvent.type(screen.getByLabelText(/популярность/i), '1');
    userEvent.type(screen.getByLabelText(/кол\-во звезд/i), '1');
    userEvent.type(screen.getByLabelText(/территорий \(фабрика дает \+3\)/i), '1');
    userEvent.type(screen.getByLabelText(/всего ресурсов \(каждый ресурс\)/i), '1');
    userEvent.type(screen.getByLabelText(/бонусы зданий/i), '2');

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() =>
      expect(mockSaveData).toHaveBeenCalledWith({
        gold: 1,
        popularity: 1,
        stars: 1,
        territories: 1,
        resources: 1,
        buildingBonuses: 2,
      }),
    );
  });
});
