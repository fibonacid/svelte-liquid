# svelte-liquid

Write svelte

```html
// section.svelte

<script>
  let name = "world";
</script>

<h1>Hello {name}!</h1>

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

<h1>Hello {name}!</h1>
```
