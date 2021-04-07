const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Textarea autosize </label>
          <textarea
            class="xt-input xt-textarea rounded-md ${classes.inputDefault()} overflow-hidden resize-none"
            aria-label="Textarea autosize"
            data-xt-textareaautosize
          ></textarea>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
