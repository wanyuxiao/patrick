import { version } from '@/package'
import sticky from './directives/sticky'

const directives = [sticky]
const install = app => {
  directives.forEach(directive => {
    app.directive(directive.name, directive)
  })
}

export default { version, install, sticky }
