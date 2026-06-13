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
      <a href="/" aria-label="Home" title="Home" data-label="Home">
        <span class="slab-index__icon slab-index__icon--home"><img src="/logos/home-logo/1.png" alt="" aria-hidden="true" data-random-home-icon></span>
        <strong>Home</strong>
      </a>
      <a href="/group/" aria-label="Group" title="Group" data-label="Group">
        <span class="slab-index__icon slab-index__icon--group"><img src="/logos/group-logo.svg" alt="" aria-hidden="true"></span>
        <strong>Group</strong>
      </a>
      <a href="/publications/" aria-label="Publications" title="Publications" data-label="Publications">
        <span class="slab-index__icon slab-index__icon--publications"><img src="/logos/pub-logo.png" alt="" aria-hidden="true"></span>
        <strong>Publications</strong>
      </a>
      <a href="/teaching" aria-label="Teaching" title="Teaching" data-label="Teaching">
        <span class="slab-index__icon slab-index__icon--teaching"><img src="/logos/teaching-logo.png" alt="" aria-hidden="true"></span>
        <strong>Teaching</strong>
      </a>
      <a href="/talks/" aria-label="Talks" title="Talks" data-label="Talks" aria-current="page">
        <span class="slab-index__icon slab-index__icon--talks"><img src="/logos/talk-logo.png" alt="" aria-hidden="true"></span>
        <strong>Talks</strong>
      </a>
      <a href="https://calendar.app.google/W2sssSbJwg39aCas9" target="_blank" aria-label="Schedule" title="Schedule" data-label="Schedule">
        <span class="slab-index__icon slab-index__icon--schedule"><img src="/logos/calendar-logo.png" alt="" aria-hidden="true"></span>
        <strong>Schedule</strong>
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabriel.stanovsky@mail.huji.ac.il" target="_blank" aria-label="Contact" title="Contact" data-label="Contact">
        <span class="slab-index__icon slab-index__icon--contact"><img src="/logos/contact-logo.png" alt="" aria-hidden="true"></span>
        <strong>Contact</strong>
      </a>
      <a href="/assets/docs/cv.pdf" target="_blank" aria-label="CV" title="CV" data-label="CV">
        <span class="slab-index__icon slab-index__icon--cv"><img src="/logos/cv-logo.png" alt="" aria-hidden="true"></span>
        <strong>CV</strong>
      </a>
    </nav>
  </aside>

  <main class="talks-workspace">
    <header class="talks-hero">
      <h1 id="slab-talks-title">Invited Talks</h1>
      <p>A selection of invited talks, tutorials, keynotes, and seminars.</p>
    </header>

    <div class="talks-scroll" id="talks-scroll" tabindex="0">
      <div class="pub-year-stack talks-year-stack" id="talks-year-stack" aria-label="Folded talk years"></div>
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
    var chosen = window.slabHomeIcon || homeIcons[Math.floor(Math.random() * homeIcons.length)];
    document.querySelectorAll("[data-random-home-icon]").forEach(function (icon) {
      icon.setAttribute("src", chosen);
    });
  }());

  (function () {
    var scroller = document.getElementById("talks-scroll");
    var stack = document.getElementById("talks-year-stack");
    var years = Array.prototype.slice.call(document.querySelectorAll(".talk-year"));
    var lastScrollTop = scroller ? scroller.scrollTop : 0;
    if (!scroller || !stack || !years.length) return;

    function updateCompactHeader() {
      var isScrolled = scroller.scrollTop > 12;
      document.body.classList.toggle("slab-talks-compact", !!isScrolled);
    }

    function updateNavVisibility() {
      var current = scroller.scrollTop;
      var delta = current - lastScrollTop;

      if (current <= 12) {
        document.body.classList.remove("slab-talks-nav-hidden");
      } else if (delta > 4) {
        document.body.classList.add("slab-talks-nav-hidden");
      } else if (delta < -4) {
        document.body.classList.remove("slab-talks-nav-hidden");
      }

      lastScrollTop = current;
    }

    function updateStack() {
      updateCompactHeader();
      updateNavVisibility();
      var complete = [];
      years.forEach(function (year) {
        var bottom = year.offsetTop + year.offsetHeight;
        if (bottom < scroller.scrollTop + stack.offsetHeight + 16) {
          complete.push(year.getAttribute("data-year"));
        }
      });

      stack.innerHTML = complete.slice().reverse().map(function (year) {
        return '<button class="pub-year-chip" type="button" data-jump-year="' + year + '" aria-label="Jump to ' + year + '">' + year + '</button>';
      }).join("");
    }

    function jumpToYear(year) {
      var target = document.querySelector('.talk-year[data-year="' + year + '"]');
      if (!target) return;
      scroller.scrollTo({
        top: Math.max(0, target.offsetTop - stack.offsetHeight),
        behavior: "smooth"
      });
    }

    scroller.addEventListener("scroll", updateStack, { passive: true });
    stack.addEventListener("click", function (event) {
      var button = event.target.closest("[data-jump-year]");
      if (!button) return;
      jumpToYear(button.getAttribute("data-jump-year"));
    });
    window.addEventListener("resize", updateStack);
    updateStack();
  }());
</script>
