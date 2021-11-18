# [Molecule] [Button](./Button.vue)

## Props
No have special props

## Events
- Click (native html)
- Double Click (native html)

## Slots

You must pass a **default slot**, it can be:
- Text (pure, span, p or similar)
- Icon (svg, img)
- Text and Icon

## Classes (css)

| modifier       | is main   |  explain              |
| -------------  | --------- | --------------------- |
| **-primary**   |  Yes      | To style button as primary button (filled color without borders)
| **-secondary** |  Yes      | To style button as secondary button (transparent color with borders)
| **-link**      |  Yes      | To style button as link button (transparent color just text or icon)
| **-block**     |  no       | To stretch button 
| **-icon**      |  no       | To shrink button to min width


### Children

| modifier       | is main   |  explain              |
| -------------  | --------- | --------------------- |
| **icon-right** |  Yes      | To apply styles (margins) at the right icon
| **icon-left**  |  Yes      | To apply styles (margins) at the left icon


## Accessability
- If the button just have icon as children, you must use **aria-label**
  1. Reference: [W3 WCAG 21](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
  2. Reference: [W3 org](https://www.w3.org/TR/wai-aria/#aria-label)
  3. Reference: [Web dev](https://web.dev/button-name/)

- Some tips about button
  1. [General important references](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
  2. [General reference](https://a11y-style-guide.com/style-guide/section-general.html)


## Use Examples
```html
<Button class="-primary bg-primary-dark" @click="fn">
  Awesome button
</Button>

<Button class="-secondary block bg-primary-light" @click="fn">
  Advance 
  <Icon:arrow-right class="icon-right" />
</Button>

<Button class="-link  -icon" @click="fn">
  <Icon:menu  />
</Button>
```

## Tips
Nope for now;


