import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test("renders todo items", () => {
  const todos = ["Learn React", "Write Tests"];
  render(<TodoList todos={todos} />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
});