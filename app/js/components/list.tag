<list>
    <!-- layout -->
  <h3>{opts.title}</h3>

  <ul>
    <li each={ items }>
      <label class={ completed: done }>
        <input type="checkbox" checked={ done } onclick={ parent.toggle }> { title }
      </label>
    </li>
  </ul>

  <form onsubmit={add}>
    <input ref="input">
      <button>Add #{items.length + 1}</button>
  </form>

  <style>
    list { 
      display: block
    }
    list h3 { 
      font-size: 120% 
    }
    list ul {
      list-style: none;
      padding-left: 0;
    }
    list label.completed {
      text-decoration: line-through;
    }
    /** other tag specific styles **/
  </style>

  <script>
    this.items = opts.items;
    edit(e) {
      this.text = e.target.value
    }
    add(e) {
      e.preventDefault();
      var input = this.refs.input;
      this.items.push({title: input.value});
      input.value = '';
    }
    toggle(e) {
      const item = e.item
      item.done = !item.done
    }
  </script>
</list>