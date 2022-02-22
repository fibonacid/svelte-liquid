# svelte-liquid

## Idea

Write svelte

```html
// section.svelte

<script>
  let name = "{{ shop.name }}";
</script>

<h1>Welcome to {name}!</h1>

<style>
  h1 {
    color: blue;
  }
</style>
```

Get shopify section with reactivity and scoped css.

```liquid
{% javascript %}
// compiled svelte javascript
{% endjavascript %}

{% stylesheet %}
// compiled svelte css
{% endstylesheet %}

<h1 class="svelte-123">Welcome to {{ shop.name }}!</h1>
```

## Run demo

Install modules

```bash
yarn install
```

Build source and print result.

```bash
yarn build && cat dist/main.liquid
```
