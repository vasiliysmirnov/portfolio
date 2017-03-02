// import Parse from 'parse'

import projects from './modules/projects'
import tags from './modules/tags'

// Parse

export default {
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    projects,
    tags
  }
}
