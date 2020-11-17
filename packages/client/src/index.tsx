import { render } from 'react-dom'
import AppProvider from 'store'
import { IndexTemplate } from 'components/templates/IndexTemplate'
import 'ress'

render(
  <AppProvider>
    <IndexTemplate />
  </AppProvider>,
  document.getElementById('root'),
)
