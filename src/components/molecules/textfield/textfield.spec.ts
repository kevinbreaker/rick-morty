import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import Textfield from './Textfield.vue'

const ICON_SKULL = '<svg data-testid="skull" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--lucide"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M8 20v2h8v-2"></path><path d="M12.5 17l-.5-1l-.5 1h1z"></path><path d="M16 20a2 2 0 0 0 1.56-3.25a8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"></path></g></svg>'

describe('Textfield [Molecule]', () => {
  it('render textfield without label and without icon', () => {
    const id = 'awesome'
    const label = 'The best label 4ever'

    render(Textfield, {
      props: {
        id,
      },
    })

    screen.getByTestId(`textfield-${id}`)
    expect(() => screen.getByLabelText(label)).toThrow(`Unable to find a label with the text of: ${label}`)
  })

  it('renders Textfield with label', () => {
    const id = 'awesome'
    const label = 'The best label 4ever'

    render(Textfield, {
      props: {
        id,
        label,
      },
    })

    screen.getByTestId(`textfield-${id}`)
    screen.getByLabelText(label)
  })

  it('renders Textfield with label and Skull icon', () => {
    const id = 'awesome'
    const label = 'The best label 4ever'

    render(Textfield, {
      props: {
        id,
        label,
      },
      slots: {
        icon: ICON_SKULL,
      },
    })

    screen.getByTestId(`textfield-${id}`)
    screen.getByLabelText(label)
    screen.getByTestId('skull')
  })

  it('renders Textfield and type text', () => {
    const id = 'awesome'
    const label = 'The best label 4ever'
    const text = 'Lorem ipsum dolor set amet'

    const { getByTestId } = render(Textfield, {
      props: {
        id,
        label,
      },
      slots: {
        icon: ICON_SKULL,
      },
    })

    screen.getByTestId(`textfield-${id}`)
    screen.getByLabelText(label)
    screen.getByTestId('skull')

    const input = getByTestId(`input-${id}`) as HTMLInputElement
    expect(input.value).toBe('')

    userEvent.type(input, text)
    expect(input.value).toBe(text)
  })

  it('renders Textfield and type text', () => {
    const id = 'awesome'
    const label = 'The best label 4ever'
    const text = 'Lorem ipsum dolor set amet'

    const { getByTestId } = render(Textfield, {
      props: {
        id,
        label,
      },
      slots: {
        icon: ICON_SKULL,
      },
    })

    screen.getByTestId(`textfield-${id}`)
    screen.getByLabelText(label)
    screen.getByTestId('skull')

    const input = getByTestId(`input-${id}`) as HTMLInputElement
    expect(input.value).toBe('')

    userEvent.type(input, text)
    expect(input.value).toBe(text)
  })
})
