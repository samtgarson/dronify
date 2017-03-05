const keys = ['helm_deploy_staging', 'helm_deploy_production']
const valuesToHash = str => str.split(',').reduce((h, s) => {
  const [k, v] = s.split('=')
  return { ...h, [k]: v }
}, {})

export const addSecret = {
  path: 'drone.yml',
  action: async ({key, content, name}) => {
    keys.forEach(k => {
      if (!content.pipeline[k]) return
      const values = valuesToHash(content.pipeline[k].values)
      values[`secrets.${key}`] = `\${${name}}`
      content.pipeline[k].values = Object.keys(values)
        .map(k => `${k}=${values[k]}`).sort().join(',')
    })
    return content
  }
}
