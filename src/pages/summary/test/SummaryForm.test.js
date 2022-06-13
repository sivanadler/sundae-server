import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';
import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../SumaryForm';


test('initial config', () => {
    render(<SummaryForm/>)
    const summaryFormCheckbox = screen.getByRole('checkbox', {name: /terms and conditions/i})
    expect(summaryFormCheckbox).not.toBeChecked()

    const summaryFormButton = screen.getByRole('button', {name: /confirm order/i})
    expect(summaryFormButton).toBeDisabled()
})

test('checking checkbox enables button and unchecking checkbox again disables button', () => {
    render(<SummaryForm/>)
    const summaryFormCheckbox = screen.getByRole('checkbox', {name: /terms and conditions/i})
    const summaryFormButton = screen.getByRole('button', {name: /confirm order/i})

    fireEvent.click(summaryFormCheckbox)
    expect(summaryFormButton).toBeEnabled()

    fireEvent.click(summaryFormCheckbox)
    expect(summaryFormCheckbox).not.toBeChecked()
    expect(summaryFormButton).toBeDisabled()
})
