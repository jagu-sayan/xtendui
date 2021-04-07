const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <a role="button" class="xt-badge ${classes.badgeMd()} ${classes.badgeDefaultInteractive()}"> Gray </a>

      <a role="button" class="xt-badge ${classes.badgeMd()} ${classes.badgePrimaryInteractive()}"> Primary </a>
    </div>
  </div>
`

export const object = {
  html: html,
}
