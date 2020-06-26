---
type: "Components"
badge: "Core"
parent: "Toggle"
title: "Option Js"
date: "2019-11-01"
---

## Class

You can specify classes to toggle with `class: 'my-class-0 my-class-1'`. Toggled class is by default `.active`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active`        | Class name for activation            |
| Option                  | `classIn:String`                          | `in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `out`        | Class name for out animation            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/class">
  </demovanilla>
</demo>

You can start with toggled elements and targets just by adding **one of the classes** to the **elements** or **targets**.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-toggle`        | Class name for activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/start">
  </demovanilla>
</demo>

## Min and Max

You can specify `min` and `max` concurrent activations. The `min` option is fulfilled on initialization, the `max` options deactivates the first activated when max is reached.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `0`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |
| Option                  | `autoDisable:Boolean`                          | `false`        | Disable automatically when cannot be activated             |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/minmax">
  </demovanilla>
</demo>

## Event

You can specify **on** and **off** events for the toggle. Fore example `on: 'mouseenter'` `off: 'mouseleave'`. Default is `on: 'click'`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                          | `'click'`        | Activation event to attach to elements            |
| Option                  | `off:String`                          | `false`        | Dectivation event to attach to elements            |
| Option                  | `eventLimit:Query`                          | `'.event-limit'`        | Limit events inside self.object            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/event">
  </demovanilla>
</demo>

## Jump

Use `jump: true` to enable clicking on a **target** to jump to them.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `jump:Boolean`                          | `false`        | Clicking on targets triggers activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/jump">
  </demovanilla>
</demo>

## Navigation

You can add navigation with `navigation: QuerySelector`, set the amount to add (`+1`) or remove (`-1`) to the current activation index with `[data-xt-nav="value"]`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `navigation:Query`                          | `false`        | Query for navigation elements             |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/navigation">
  </demovanilla>
</demo>

## Loop

Use `loop: false` to disable looping on activation.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |

</div>

## Timing

Activation/deactivation automatically waits for the <strong>duration</strong> of animations and transitions on <code>.active</code> and <code>.out</code>.

You can use a function for <code>delayOn</code> and <code>delayOff</code> for example <code>(current, total) => {return Math.min((total - current) * 150, 300)}</code>.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `instant:Boolean|Object`                 | `{ elements: true, elementsInner: true }`     | Set instant activation and deactivation, can be one or more booleans `elements` `elementsInner` `targets` `targetsInner`          |
| Option                  | `delayOn:Milliseconds|Function`                          | `false`        | Activation delay            |
| Option                  | `delayOff:Milliseconds|Function`                          | `false`        | Deactivation delay            |
| Option                  | `delayInitial:Boolean`                          | `true`        | Initial activation delay            |
| Option                  | `durationOn:Milliseconds`                          | `false`        | Activation duration            |
| Option                  | `durationOff:Milliseconds`                          | `false`        | Deactivation duration            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/timing-duration">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/timing-delay">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/timing-delay-fnc">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/timing-instant">
  </demovanilla>
</demo>

## Auto

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |
| Option                  | `auto.pause:Query`                          | `false`        | Elements that pause automatic on mouseenter            |

</div>

[[notePrimary]]
| Auto doesn't run if the toggle is `display: none`. Start it manually when visible when using [toggle events](/components/toggle/api#trigger).

<demo>
  <demovanilla src="vanilla/components/toggle/auto-initial">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/auto-step">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/auto-inverse">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/auto-pause">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/auto-minmax">
  </demovanilla>
</demo>

Use the [api](/components/toggle/api#listen) and listen to events to make auto progress indicators.

<demo>
  <demovanilla src="vanilla/components/toggle/progress">
  </demovanilla>
</demo>

## Keyboard

Use `keyboard: { selector: 'object' }` or `keyboard: { selector: QuerySelector }` to enable keyboard navigation on focus.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `keyboard.selector:Boolean`                          | `false`        | Elements that triggers the events            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/usability-keyboard">
  </demovanilla>
</demo>

## Other

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `autoClose:Boolean`                          | `false`        | Close automatically on `autoclose.trigger.xt` event            |
| Option                  | `appendTo:Query`                          | `false`        | Append targets to Node on activation            |
| Option                  | `classHtml:String`                          | `false`        | Class to add to html element on activation            |
| Option                  | `closeInside:Query`                          | `false`        | Query Node inside to close on click            |
| Option                  | `closeOutside:Query`                          | `false`        | Query Node outside to close on click            |
| Option                  | `closeOnDisable:Boolean`                          | `false`        | Automatically close on disable            |
| Option                  | `scrollbar:Boolean`                          | `false`        | Hide body scrollbars on activation            |
| Option                  | `onBlock:Milliseconds`                          | `true`        | Block concurrent activation events for some time            |
| Option                  | `offBlock:Milliseconds`                          | `true`        | Block concurrent deactivation events for some time            |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Media loaded classes on elements and targets            |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit component on media loaded elements and targets            |
| Option                  | `zIndex:Boolean|Object`                 | `false`     | Set zIndex on activation, can be one or more objects `elements` `elementsInner` `targets` `targetsInner`, the object have `start` and `factor` for the starting zIndex and the factor number to add          |
| Option                  | `focusLimit:Boolean`                          | `false`        | Limit focus on activation            |
| Option                  | `aria:Object|false`                          | `Object`        | Inject aria attributes            |
| Option                  | `aria.tabindex:Boolean`                          | `true`        | Inject aria tabindex attributes            |
| Option                  | `aria.controls:Boolean`                          | `true`        | Inject aria controls attributes            |
| Option                  | `aria.labelledby:Boolean`                          | `true`        | Inject aria labelledby attributes            |

</div>
