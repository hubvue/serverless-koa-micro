module.exports = {
  hooks: {
    'pre-commit': 'npm run eslint',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'prepare-commit-mgs':
      'conventional-changelog -p angular -i CHANGELOG.md  -s && git add CHANGELOG.md',
    'pre-push': 'npm run eslint'
  }
}
