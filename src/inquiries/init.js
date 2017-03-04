import c from 'chalk'
const path = process.cwd().split('/')
const defaultName = path[path.length - 1]

const q = t => `${c.dim('>')} ${t} `
const required = v => !!v.length

const questions = [
  {
    type: 'input',
    name: 'name',
    message: q('Application name'),
    default: defaultName,
    validate: required
  },
  {
    type: 'input',
    name: 'org',
    message: q('Organisation'),
    validate: required
  },
  {
    type: 'checkbox',
    name: 'lang',
    message: q('Languages to be tested on Drone (optional)'),
    choices: ['ruby', 'javascript'],
    filter: arr => arr.reduce((hsh, l) => ({ ...hsh, [l]: true }), {})
  },
  {
    type: 'list',
    name: 'repoHost',
    message: q('Container image registry'),
    default: 'quay.io',
    choices: ['quay.io', 'hub.docker.com']
  },
  {
    type: 'input',
    name: 'droneServer',
    message: q('Drone Server URI'),
    default: process.env.DRONE_SERVER
  },
  {
    type: 'input',
    name: 'domain',
    message: q('Target deploy domain'),
    default: 'staging.yourdomain.com'
  },
  {
    type: 'input',
    name: 'imagePullSecretName',
    message: q('K8S Secret Key'),
    default: ans => `${ans.org.toLowerCase()}-k8s-deploy-pull-secret`
  },
]

const repoEnvVars = {
  'quay.io': { repoUserEnv: 'QUAY_USERNAME', repoPassEnf: 'QUAY_PASSWORD' },
  'hub.docker.com': { repoUserEnv: 'DOCKER_USERNAME', repoPassEnf: 'DOCKER_PASSWORD' }
}

export default async cmd => {
  const answers = await cmd.prompt(questions)
  const view = {
    ...answers,
    ...repoEnvVars[answers.repoHost],
    repo: `${answers.repoHost}/${answers.org}/${answers.name}`
  }
  return view
}
