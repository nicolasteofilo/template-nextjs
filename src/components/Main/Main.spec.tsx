import { screen, render } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /nextjs na prática/i })
    ).toBeInTheDocument()
  }),
    it('should render correct', () => {
      const { container } = render(<Main />)

      expect(container.firstChild).toMatchSnapshot()
    })
})
