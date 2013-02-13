# HTML5 Placeholder for Oldies jQuery Plugin

Adds HTML5 Placeholder like behavior for non HTML5 supporting Browsers. 

## Demo

[Demo jquery-plugins: jquery.placeholder-for-oldies/](http://spielwiese.datenschubse.de/jquery-plugins/jquery.placeholder-for-oldies/)

## Usage

### HTML

```html
<form class="search-form-small" id="search-form" action="" method="get">
  <input type="text" name="search" id="search-content1" value="" placeholder="search" class="placeholder">
  <input type="text" name="search" id="search-content2" value="" placeholder="search" class="placeholder">
</form> 
```

### jQuery

Use the plugin as follows to adress one input:

```js
$('.search-form-small').placeholderforoldies({
 elementId: "#search-content1"
});
```

or to adress all input elements in #search-form

```js
$('#search-form').placeholderforoldies();
```

or to adress all elements

```js
$('body').placeholderforoldies();
```

## Notes

* Requires jQuery 1.7+. 
* tested in IE 7,8,9


## License

This plugin is dual licensed under the MIT and GPL licenses.

