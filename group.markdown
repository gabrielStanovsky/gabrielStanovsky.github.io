---
layout: single
title: Group
permalink: /group/
classes: wide slab-home-page slab-group-page
author_profile: false
sitemap: false
---

<section class="slab-group" aria-labelledby="slab-group-title">
  <aside class="slab-rail" aria-label="Site navigation">
    <nav class="slab-index" aria-label="Site sections">
      <a href="/" aria-label="Home" title="Home" data-label="Home">
        <span class="slab-index__icon slab-index__icon--home"><img src="/logos/home-logo/1.png" alt="" aria-hidden="true" data-random-home-icon></span>
        <strong>Home</strong>
      </a>
      <a href="/group/" aria-label="Group" title="Group" data-label="Group" aria-current="page">
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
        <span class="slab-index__icon slab-index__icon--talks"><img src="/logos/talk-logo.svg" alt="" aria-hidden="true"></span>
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

  <main class="group-workspace">
    <header class="group-hero">
      <div class="group-hero__copy">
        <p class="group-kicker">Research Group</p>
        <h1 id="slab-group-title">SLAB</h1>
        <p>
          We develop NLP models for real-world texts and interdisciplinary research questions across domains and languages.
          We welcome collaboration; please <a href="mailto:gabriel.stanovsky@mail.huji.ac.il">reach out</a> if interested.
        </p>
        <a class="group-text-link" href="https://github.com/SLAB-NLP" target="_blank">Open-source projects</a>
      </div>

      <figure class="group-photo">
        <img src="/images/teampic/group_photo.jpg" alt="SLAB members at a lab meeting">
        <figcaption>Lab meeting, March 2023</figcaption>
      </figure>
    </header>

    <section class="group-people" aria-labelledby="group-current-title">
      <div class="group-section-heading">
        <p class="group-kicker">People</p>
        <h2 id="group-current-title">Current members</h2>
      </div>

      <section class="group-role" aria-labelledby="group-phd-title">
        <h3 id="group-phd-title">Ph.D.</h3>
        <div class="group-member-list">
          {% for member in site.data.phd_students %}
          <article class="group-member">
            <img src="/images/teampic/{{ member.photo }}" alt="{{ member.name | strip_html }}">
            <div>
              <h4>
                {% if member.website %}
                <a href="{{ member.website }}" target="_blank">{{ member.name }}</a>
                {% else %}
                {{ member.name }}
                {% endif %}
              </h4>
              <p>{{ member.info }}</p>
            </div>
          </article>
          {% endfor %}
        </div>
      </section>

      <section class="group-role" aria-labelledby="group-msc-title">
        <h3 id="group-msc-title">M.Sc.</h3>
        <div class="group-member-list">
          {% for member in site.data.msc_students %}
          <article class="group-member">
            <img src="/images/teampic/{{ member.photo }}" alt="{{ member.name | strip_html }}">
            <div>
              <h4>
                {% if member.website %}
                <a href="{{ member.website }}" target="_blank">{{ member.name }}</a>
                {% else %}
                {{ member.name }}
                {% endif %}
              </h4>
              <p>{{ member.info }}</p>
            </div>
          </article>
          {% endfor %}
        </div>
      </section>
    </section>

    <section class="group-alumni" aria-labelledby="group-alumni-title">
      <div class="group-section-heading">
        <span aria-hidden="true"></span>
        <h2 id="group-alumni-title">Alumni</h2>
      </div>

      <dl class="group-alumni-list">
        <div>
          <dt>Ph.D.</dt>
          <dd>Yonatan Bitton (2023)</dd>
        </div>
        <div>
          <dt>M.Sc.</dt>
          <dd>Shahar Levy (2026), Niv Eckhaus (2025), Noam Dahan (2025), Saifun Naveh (2024), Eliya Habba (2024), Yarden Yagil (2023), Bar Eluz (2022), Dan Malkin (2022), Gili Lior (2022), Bar Tamir (2022), Eran Nussinovitch (2022), Sapir Weissbuch (2022), Koren Lazar (2021)</dd>
        </div>
        <div>
          <dt>B.Sc.</dt>
          <dd>Liron Naccache (2024), Shahar Spencer (2023), Niv Eckhaus (2023), Mohr Wenger (2021), Tom Kalir (2021), Shahar Levy (2021)</dd>
        </div>
        <div>
          <dt>Visitors</dt>
          <dd>Tomasz Limisiewicz (2022)</dd>
        </div>
      </dl>
    </section>
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
	      "/logos/home-logo/1.png": 0.94,
	      "/logos/home-logo/2.png": 1.14,
	      "/logos/home-logo/3.png": 1.10,
	      "/logos/home-logo/4.png": 0.90,
	      "/logos/home-logo/5.png": 1.01,
	      "/logos/home-logo/6.png": 1.10,
	      "/logos/home-logo/7.png": 1.08,
	      "/logos/home-logo/8.png": 0.88,
	      "/logos/home-logo/9.png": 1.01,
	      "/logos/home-logo/10.png": 0.90,
	      "/logos/home-logo/11.png": 1.10,
	      "/logos/home-logo/12.png": 1.07,
	      "/logos/home-logo/13.png": 0.90,
	      "/logos/home-logo/14.png": 1.04,
	      "/logos/home-logo/15.png": 0.94,
	      "/logos/home-logo/16.png": 1.02,
	      "/logos/home-logo/17.png": 0.96,
	      "/logos/home-logo/18.png": 1.01,
	      "/logos/home-logo/19.png": 0.94,
	      "/logos/home-logo/20.png": 0.92
	    };
	    var chosen = window.slabHomeIcon || homeIcons[Math.floor(Math.random() * homeIcons.length)];
	    document.querySelectorAll("[data-random-home-icon]").forEach(function (icon) {
	      icon.setAttribute("src", chosen);
	      icon.style.setProperty("--slab-icon-scale", homeIconScales[chosen] || 1);
	    });
  }());

  (function () {
    var rail = document.querySelector(".slab-group .slab-rail");
    if (!rail) return;

    var lastY = window.pageYOffset || document.documentElement.scrollTop || 0;
    var threshold = rail.offsetHeight + 18;
    var ticking = false;

    function setNavState() {
      var currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
      var delta = currentY - lastY;

      if (currentY <= threshold) {
        document.body.classList.remove("slab-group-nav-floating", "slab-group-nav-visible");
      } else {
        document.body.classList.add("slab-group-nav-floating");
        if (delta < -4) {
          document.body.classList.add("slab-group-nav-visible");
        } else if (delta > 4) {
          document.body.classList.remove("slab-group-nav-visible");
        }
      }

      lastY = currentY;
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(setNavState);
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener("resize", function () {
      threshold = rail.offsetHeight + 18;
      setNavState();
    });

    setNavState();
  }());
</script>
