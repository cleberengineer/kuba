import h from '@kuba/h'
import * as f from '@kuba/f'
import render from './render'

export default (page) =>
  render(<meta name='robots' content={f.or(page.robots, 'index, follow')} />)
