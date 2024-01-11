import { renderIntoDocument, debug } from 'react-dom/test-utils';
import { act } from 'react';
import App from '../App'

describe('main rendering tests', () => {
  it('renders Welcome component', async () => {
    const { getByText } = debug();
    const { findByTestID } = renderIntoDocument({
      factory: ({ children }) => <App />,
      inMemoryDatabase: true,
    });

    await act(() => findByTestID(/benvenuti in epibooks/i)).then(() => {
      expect(getByText('Welcome')).toBeInTheDocument();
    });
  });
});
