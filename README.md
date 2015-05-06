# jquery.smart-tabs
==================
Jquery plugin for creation tabs

Javascript
~~~javascript
$('.tabs').smartTabs();
~~~

Html markup

~~~html
<div class="tabs">
    <div class="tabs-head">
        <ul class="inline-list">
            <li><a href="#first" data-trigger>first</a></li>
            <li><a href="#second" data-trigger>second</a></li>
            <li><a href="#third" data-trigger>third</a></li>
        </ul>
    </div>
    <div class="tabs-body">
        <div data-content="first" style="display: block">...</div>
        <div data-content="second">....</div>
        <div data-content="third">....</div>
    </div>
</div>
~~~
