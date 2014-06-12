apostrophe-notfound-fix
=======================

Apostrophe 2 has an issue that prevents it from showing menus on 404 pages. This module is a quick fix to this issue, until the core developers will address the bug.

This module needs to be cloned in to the `lib/modules` folder in your site folder.

To add this to your Apostrophe 2 site, simply add this line under `modules` in `app.js`:
```javascript
<<<<<<< HEAD
'apostrophe-menu-fix': {
}
```

You can also set the number of the depth of your menu simply like this:
```javascript
'apostrophe-menu-fix': {
	depth: 2
}
```
by default the depth is set to 1.

=======
'apostrophe-menu-fix': {}
```

>>>>>>> b889e04443f020c74e238173238d4af2f5341d79
Then, in your views, instead of using `page.tabs` to iterate over the menus, use `menu`. For example, in the sandbox, the default menu looks like this:
```
<ul class="tabs">
    {% for tab in page.tabs %}
      {% if tab.slug == page.slug %}
        <li class="tab current-page">{{ pageLink(tab) }}</li>
      {% else %}
        <li class="tab">{{ pageLink(tab) }}</li>
      {% endif %}
    {% endfor %}
  </ul>
```

All we need to do is change `page.tabs` to `menu`, and it becomes:
```
<ul class="tabs">
    {% for tab in menu %}
      {% if tab.slug == page.slug %}
        <li class="tab current-page">{{ pageLink(tab) }}</li>
      {% else %}
        <li class="tab">{{ pageLink(tab) }}</li>
      {% endif %}
    {% endfor %}
  </ul>
```
