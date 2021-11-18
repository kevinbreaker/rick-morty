import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/vue'

import Button from './Button.vue'

const ICON_SKULL = '<svg data-testid="skull" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--lucide"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M8 20v2h8v-2"></path><path d="M12.5 17l-.5-1l-.5 1h1z"></path><path d="M16 20a2 2 0 0 0 1.56-3.25a8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"></path></g></svg>'
// const ICON_ARROW_RIGHT = '<svg data-testid="arrow-right" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="icon-left"><g fill="none"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>'

describe('Button [Molecule]', () => {
  it('renders text when pass by slot', () => {
    const text = 'awesome button'

    render(Button, {
      slots: {
        default: text,
      },
    })

    screen.getByText(text)
  })

  it('renders skull icon when passa by slot', () => {
    const testId = 'awesome'

    render(Button, {
      attrs: {
        'data-testid': testId,
      },
      slots: {
        default: ICON_SKULL,
      },
    })

    screen.getByTestId(testId)
    screen.getByTestId('skull')
  })

  it('trigger clickedEvent when click at the button', async() => {
    const clickedEvent = jest.fn()
    const text = 'click here!'

    render(Button, {
      attrs: {
        onClick: clickedEvent,
      },
      slots: {
        default: text,
      },
    })

    const button = screen.getByText(text)

    await fireEvent.click(button)
    expect(clickedEvent).toBeCalledTimes(1)

    await fireEvent.click(button)
    await fireEvent.click(button)
    expect(clickedEvent).toBeCalledTimes(3)
  })
})
