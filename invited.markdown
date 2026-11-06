---
layout: single
title: Invited Talks
permalink: /talks/
classes: wide slab-home-page slab-talks-page
author_profile: false
---

<section class="slab-talks" aria-labelledby="slab-talks-title">
  <aside class="slab-rail" aria-label="Site navigation">
    <nav class="slab-index" aria-label="Site sections">
      <a href="/" aria-label="Home" data-label="Home">
        <span class="slab-index__icon slab-index__icon--home"><img src="/logos/home-logo/1.png" alt="" aria-hidden="true" data-random-home-icon></span>
        <strong>Home</strong>
      </a>
      <a href="/group/" aria-label="Group" data-label="Group">
        <span class="slab-index__icon slab-index__icon--group"><img src="/logos/group-logo.svg" alt="" aria-hidden="true"></span>
        <strong>Group</strong>
      </a>
      <a href="/publications/" aria-label="Publications" data-label="Publications">
        <span class="slab-index__icon slab-index__icon--publications"><img src="/logos/pub-logo.png" alt="" aria-hidden="true"></span>
        <strong>Publications</strong>
      </a>
      <a href="/teaching" aria-label="Teaching" data-label="Teaching">
        <span class="slab-index__icon slab-index__icon--teaching"><img src="/logos/teaching-logo.png" alt="" aria-hidden="true"></span>
        <strong>Teaching</strong>
      </a>
      <a href="/talks/" aria-label="Talks" data-label="Talks" aria-current="page">
        <span class="slab-index__icon slab-index__icon--talks"><img src="/logos/talk-logo.svg" alt="" aria-hidden="true"></span>
        <strong>Talks</strong>
      </a>
    </nav>
  </aside>

  <main class="talks-workspace">
    <header class="talks-hero">
      <p class="slab-page-kicker">Speaking Archive</p>
      <h1 id="slab-talks-title">Invited Talks</h1>
      <p>A selection of invited talks, tutorials, keynotes, and seminars.</p>
    </header>

    <div class="talks-scroll" id="talks-scroll">
      {% assign active_year = "" %}
      {% for talk in site.data.invited_talks %}
      {% if talk.year != active_year %}
      {% unless active_year == "" %}
        </div>
      </section>
      {% endunless %}
      <section class="talk-year" data-year="{{ talk.year }}">
        <h2 class="talk-year__heading" id="talks-{{ talk.year }}-ref">{{ talk.year }}</h2>
        <div class="talk-year__items">
      {% assign active_year = talk.year %}
      {% endif %}

      <article class="talk-item">
        <div class="talk-item__body">
          <h3>
            {% unless talk.pdf == 'NONE' %}
            <a href="/assets/invited_talks/{{ talk.base }}/{{ talk.pdf }}" target="_blank">{{ talk.title }}</a>
            {% endunless %}
            {% unless talk.pdf-ext == 'NONE' %}
            <a href="{{ talk.pdf-ext }}" target="_blank">{{ talk.title }}</a>
            {% endunless %}
            {% if talk.pdf == 'NONE' and talk.pdf-ext == 'NONE' %}
            {{ talk.title }}
            {% endif %}
          </h3>
          <p class="talk-item__appearances">{{ talk.authors }}</p>
          <div class="talk-item__links" aria-label="{{ talk.title }} links">
            {% unless talk.pdf == 'NONE' %}
            <a href="/assets/invited_talks/{{ talk.base }}/{{ talk.pdf }}" target="_blank">slides</a>
            {% endunless %}
            {% unless talk.pdf-ext == 'NONE' %}
            <a href="{{ talk.pdf-ext }}" target="_blank">slides</a>
            {% endunless %}
            {% unless talk.talk == 'NONE' %}
            <a href="{{ talk.talk }}" target="_blank">video</a>
            {% endunless %}
          </div>
        </div>
      </article>
      {% endfor %}
      {% unless active_year == "" %}
        </div>
      </section>
      {% endunless %}
    </div>
  </main>
</section>

<script>
  (function () {
    var homeIcons = [
      {% assign home_icon_files = site.static_files | sort: "path" %}
      {% for file in home_icon_files %}
      {% if file.path contains "/logos/home-logo/" and file.extname == ".png" %}
      "{{ file.path }}"{% unless forloop.last %},{% endunless %}
      {% endif %}
      {% endfor %}
	    ].filter(Boolean);
	    if (!homeIcons.length) return;
	    var homeIconScales = {
	      {% assign home_logo_scales = site.data.logo_scales.home %}
	      {% for file in home_icon_files %}
	      {% if file.path contains "/logos/home-logo/" and file.extname == ".png" %}
	      {% assign home_logo_settings = home_logo_scales[file.path] %}
	      "{{ file.path }}": {{ home_logo_settings.scale | default: home_logo_settings | default: 100 | times: 0.01 }},
	      {% endif %}
	      {% endfor %}
	    };
	    var homeIconOffsets = {
	      {% for file in home_icon_files %}
	      {% if file.path contains "/logos/home-logo/" and file.extname == ".png" %}
	      {% assign home_logo_settings = home_logo_scales[file.path] %}
	      "{{ file.path }}": {{ home_logo_settings.y_offset | default: 0 }},
	      {% endif %}
	      {% endfor %}
	    };
	    var chosen = window.slabHomeIcon || homeIcons[Math.floor(Math.random() * homeIcons.length)];
	    document.querySelectorAll("[data-random-home-icon]").forEach(function (icon) {
	      icon.setAttribute("src", chosen);
	      icon.style.setProperty("--slab-icon-scale", homeIconScales[chosen] || 1);
	      icon.style.setProperty("--slab-icon-y-offset", (homeIconOffsets[chosen] || 0) + "px");
	    });
  }());
</script>
