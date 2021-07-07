import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import schema from './schema'

@paint(component)
@jsonld(data)
@markup
class Cadeiras {
  get description () {
    return __settings.app.description
  }

  get paths () {
    return schema.paths
  }

  get title () {
    return 'Cadeiras'
  }
}

export default Cadeiras