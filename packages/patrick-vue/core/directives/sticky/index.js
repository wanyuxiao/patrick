import sticky from './src/sticky'

sticky.install = app => {
  app.directive(sticky.name, sticky)
}

export default sticky
