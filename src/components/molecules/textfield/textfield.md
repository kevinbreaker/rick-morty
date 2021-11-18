# [Molecule] [Button](./Textfield.vue)

## Extends
 - [Password](./TextfieldPassword.vue) & [Doc](./textfield-password.md)
 - [Search](./Search.vue) & [Doc](./search.md)


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

You can use the **icon** slot to pass some icon to textfield, this can be a `<button>` with a icon or directly icon.

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
<Textfield
  label="username"
/>

<Textfield
  id="fullname"
  label="Full name"
  hint="Your real full name"
/>

<!--@@ With  validations @@-->
<Textfield
  id="username"
  required
  label="username"
  hint="This is required!"
/>


<Textfield
  id="phone"
  pattern="\d{9, 12}"
  label="Mobile phone"
  :validationMessages="{
    pattern: 'You pattern is wrong, please fix it!'
  }"
/>


<Textfield
  id="username"
  required
  label="username"
>
  <template #icon>
    <button aria-label="To send your message" @click="fn()">
      <mdi:abacus />
    </button>
  </template>
</Textfield>


<Textfield label="username" id="username">
  <template #icon>
      <mdi:abacus />
  </template>
</Textfield>
```

## Tips
Read about [validity states](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#validity-states)

