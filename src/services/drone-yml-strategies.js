const keys = ['helm_deploy_staging', 'helm_deploy_production']
const valuesToHash = str => str.split(',').reduce((h, s) => {
  const [k, v] = s.split('=')
  return { ...h, [k]: v }
}, {})

const hashToValues = hsh => Object.keys(hsh).map(k => `${k}=${hsh[k]}`).sort().join(',')

export const addSecret = {
  path: 'drone.yml',
  action: async ({key, content, name}) => {
    keys.forEach(k => {
      if (!content.pipeline[k]) return
      const values = valuesToHash(content.pipeline[k].values)
      values[`secrets.${key}`] = `\${${name}}`
      content.pipeline[k].values = hashToValues(values)
    })
    return content
  }
}

export const removeSecret = {
  path: 'drone.yml',
  action: async ({key, content, name}) => {
    keys.forEach(k => {
      if (!content.pipeline[k] || !content.pipeline[k].values) return
      const values = valuesToHash(content.pipeline[k].values)
      delete values[`secrets.${key}`]
      content.pipeline[k].values = hashToValues(values) 
    })
    return content
  }
}
