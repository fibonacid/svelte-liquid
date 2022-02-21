```html
<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<!-- This value comes from liquid -->
<h1>{{- shop.name -}}</h1>

<button on:click="{handleClick}">
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<style>
  h1 {
    color: blue;
  }
</style>
```

```liquid
{% javascript %}
  // compiled js code that adds reactivity
</script>
<style>
  h1.svelte-123 {
    color: blue;
  }
</style>
<h1 class="svelte-123">Hello {{- shop.name -}}</h1>
```
