# [Molecule] [Button](./TextfieldPassword.vue)


## Props
| name               | required             | description                                                       |
| ------------------ | -------------------- | ----------------------------------------------------------------- |
| id                 | Strongly Recommended | To own id, to pass id to **for** attribute label and data-testids |
| class              | no                   | Just avoid a "bug" in `v-bind="$attrs"`                           |
| label              | no                   | To render textfield with this label                               |
| hint               | no                   | To render textfield with a hint                                   |
| validationMessages | no                   | To custom validations messages                                    |


```ts
type ValidationMessages = {
    required?: string;
    pattern?: string;
    custom?: string;
    min?: string;
}
```

## Events
No have special events

## Slots

Just predefined slot. It can change the password visible.

## Classes (css)

| modifier        | is main | explain         |
| --------------- | ------- | --------------- |
| nothing for now | Yes     | Nothing for now |



## Accessability
- Labels
  1. [W3 - labeling controls](https://www.w3.org/WAI/tutorials/forms/labels/)
  
- Some tips about button
  1. [General important references](https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-text-fields)



## Use Examples
```html
<TextfieldPassword />

<TextfieldPassword
  id="pass"
  label="secret password"
  hint="Your secret password"
/>

<!--@@ With  validations @@-->
<TextfieldPassword
  id="pass"
  required
  label="Password"
  hint="This is required!"
/>


<TextfieldPassword
  id="pass"
  pattern="\d{9, 12}"
  label="pass"
  :validationMessages="{
    pattern: 'You pattern is wrong, please fix it!'
  }"
/>
```

## Tips
Read about [validity states](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#validity-states)

