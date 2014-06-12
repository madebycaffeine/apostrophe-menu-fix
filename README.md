apostrophe-notfound-fix
=======================

Apostrophe 2 has an issue that prevents it from showing menus on 404 pages. This module is a quick fix to this issue, until the core developers will address the bug.

To add this to your Apostrophe 2 site, simply add this line under `modules` in `app.js`:
```javascript
'apostrophe-menu-fix': {}
```

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
