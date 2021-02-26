import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const labelDefault = require('components/snippets/classes').labelDefault
const inputDefault = require('components/snippets/classes').inputDefault
const checkDefault = require('components/snippets/classes').checkDefault
const radioDefault = require('components/snippets/classes').radioDefault
const switchDefault = require('components/snippets/classes').switchDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">
  <div class="xt-row xt-row-x-6 xt-row-y-4">

    <div class="w-full md:w-auto">
      <div class="xt-row xt-row-x-6 xt-row-y-4">

        <div class="w-full md:w-auto md:self-center">
          <label class="xt-label whitespace-nowrap ${labelDefault()}">
            Lorem ipsum
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="xt-row xt-row-x-6 xt-row-y-4">

        <div class="w-full md:w-auto md:self-center">
          <label class="xt-label whitespace-nowrap ${labelDefault()}">
            Dolor sit amet
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="xt-row xt-row-x-6 xt-row-y-4">

        <div class="w-full md:w-auto md:self-center">
          <label class="xt-label whitespace-nowrap ${labelDefault()}">
            Lorem ipsum
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="xt-row xt-row-x-6 xt-row-y-4">

        <div class="w-full md:w-auto md:self-center">
          <label class="xt-label whitespace-nowrap ${labelDefault()}">
            Dolor sit amet
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="xt-row xt-row-x-6 xt-row-y-4">

        <div class="w-full md:w-auto md:self-baseline">
          <label class="xt-label whitespace-nowrap ${labelDefault()}">
            Checkbox
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="xt-row xt-row-x-8 xt-row-y-2">

            <div class="w-full md:w-auto">
              <label class="xt-label-check">
                <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" checked disabled>
                <span class="xt-check-content">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="xt-label-check">
                <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}">
                <span class="xt-check-content">Lorem ipsum</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="xt-row xt-row-x-6 xt-row-y-4">

        <div class="w-full md:w-auto md:self-baseline">
          <label class="xt-label whitespace-nowrap ${labelDefault()}">
            Radio
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="xt-row xt-row-x-8 xt-row-y-2">

            <div class="w-full md:w-auto">
              <label class="xt-label-check">
                <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-horizontal" checked>
                <span class="xt-check-content">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="xt-label-check">
                <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-horizontal">
                <span class="xt-check-content">Lorem ipsum</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="xt-row xt-row-x-6 xt-row-y-4">

        <div class="w-full md:w-auto md:self-baseline">
          <label class="xt-label whitespace-nowrap ${labelDefault()}">
            Switch
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="xt-row xt-row-x-8 xt-row-y-2">

            <div class="w-full md:w-auto">
              <label class="xt-label-check">
                <input type="checkbox" class="xt-check xt-switch rounded-full ${switchDefault()}">
                <span class="xt-check-content">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="xt-label-check">
                <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-horizontal">
                <span class="xt-check-content">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="xt-label-check">
                <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-horizontal">
                <span class="xt-check-content">Lorem ipsum</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <button type="submit" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`
