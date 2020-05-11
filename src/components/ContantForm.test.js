import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test('Testing the rendering of the ContactForm', () => {
    render(<ContactForm />);
  })

test('testing form and submissions', ()=> {
  async () => {const { getByLabelText, getByTestId, getByText } = render(<ContactForm/>)

  const firstName = getByLabelText(/first name*/i);
  const lastName = getByLabelText(/last name*/i);
  const email = getByLabelText(/email*/i);
  const message = getByLabelText(/message/i);

  expect(firstName).toBeInTheDocument;
  expect(lastName).toBeInTheDocument;
  expect(email).toBeInTheDocument;
  expect(message).toBeInTheDocument;

  fireEvent.change(firstName, {target: {value: 'Timmothy'}});
  fireEvent.change(lastName, {target: {value: 'Green'}});
  fireEvent.change(email, {target: {value: 'GreenCorp@live.com'}});
  fireEvent.change(message, {target: {value: 'Its done'}});

  expect(firstName.value).toBe('Timmothy');
  expect(lastName.value).toBe('Green');
  expect(email.value).toBe('GreenCorp@live.com');
  expect(message.value).toBe('Its done');

  fireEvent.click(getByTestId('submit'));
  await act(() => promise);
  expect(getByText(/Timmothy/i)).toBeInTheDocument();
}})

