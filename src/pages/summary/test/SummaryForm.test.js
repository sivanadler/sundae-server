import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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

    userEvent.click(summaryFormCheckbox)
    expect(summaryFormButton).toBeEnabled()

    userEvent.click(summaryFormCheckbox)
    expect(summaryFormCheckbox).not.toBeChecked()
    expect(summaryFormButton).toBeDisabled()
})


//     //popover disappears on mouseout checkbox label
//     userEvent.unhover(termsAndConditions)
//     await waitForElementToBeRemoved(() => {
//         screen.queryByText(/no ice cream will actually be delivered/i)
//     })


test('popover responds to hover', async () => {
    render(<SummaryForm />)
  
    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i)
    expect(nullPopover).not.toBeInTheDocument()
  
    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    userEvent.hover(termsAndConditions)
  
    const popover = screen.getByText(/no ice cream will actually be delivered/i)
    expect(popover).toBeInTheDocument()
  
    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions)
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    )
})