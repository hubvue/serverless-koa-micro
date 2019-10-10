module.exports = {
  hooks: {
    'pre-commit': 'npm run eslint',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-push': 'npm run eslint'
  }
}
