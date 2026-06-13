---
layout: single
classes: wide slab-home-page
author_profile: false
title: "Gabriel Stanovsky"
---

<section class="slab-home" aria-labelledby="slab-home-title">
  <aside class="slab-rail" aria-label="Homepage navigation">
    <nav class="slab-index" aria-label="Homepage sections">
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
      <a href="/talks/" aria-label="Talks" title="Talks" data-label="Talks">
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

  <section class="slab-intro">
    <div class="slab-heading">
      <div>
        <h1 id="slab-home-title">Gabriel Stanovsky</h1>
        <p class="slab-subtitle">Associate Prof. at HUJI</p>
      </div>

      <figure class="slab-profile-photo">
        <img src="/assets/images/bio-photo.jpg" alt="Gabriel Stanovsky">
      </figure>
    </div>

    <p>
      I develop AI models that help experts tackle real-world research questions across domains such as law, medicine, archaeology, and beyond. I also head <a href="https://www.cs.huji.ac.il/page/10931/" target="_blank">HUJI's BSc. program in AI</a>.
Outside work, I’m a wannabe <a href="https://letterboxd.com/gabistanovsky/films/diary/" target="_blank">movie buff</a>, <a href="http://www.setlist.fm/concerts/Gabis" target="_blank">concert goer</a>, <a href="https://www.goodreads.com/user/show/24306303-gabriel-stanovsky" target="_blank">book lover</a>, and <a href="https://tunein.com/user/gabrielsatanovsky/" target="_blank">radio</a> <a href="https://www.mixcloud.com/gabriel-satanovsky/" target="_blank">enthusiast</a>.
    </p>
  </section>
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
    var chosen = window.slabHomeIcon || null;

    if (!chosen || homeIcons.indexOf(chosen) === -1) {
      chosen = homeIcons[Math.floor(Math.random() * homeIcons.length)];
    }

    document.querySelectorAll("[data-random-home-icon]").forEach(function (icon) {
      icon.setAttribute("src", chosen);
    });
  }());
</script>
