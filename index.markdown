---
layout: single
classes: wide slab-home-page
author_profile: false
title: "Gabriel Stanovsky"
---

<section class="slab-home" aria-labelledby="slab-home-title">
  <aside class="slab-rail" aria-label="Homepage navigation">
    <nav class="slab-index" aria-label="Homepage sections">
      <a href="/" aria-label="Home" title="Home" data-label="Home" data-mobile-target="slab-home-top">
        <span class="slab-index__icon slab-index__icon--home"><img src="/logos/home-logo/1.png" alt="" aria-hidden="true" data-random-home-icon></span>
        <strong><u>Home</u></strong>
      </a>
      <a href="/group/" aria-label="Group" title="Group" data-label="Group" data-mobile-target="mobile-group">
        <span class="slab-index__icon slab-index__icon--group"><img src="/logos/group-logo.svg" alt="" aria-hidden="true"></span>
        <strong><u>Group</u></strong>
      </a>
      <a href="/publications/" aria-label="Publications" title="Publications" data-label="Publications" data-mobile-target="mobile-publications">
        <span class="slab-index__icon slab-index__icon--publications"><img src="/logos/pub-logo.png" alt="" aria-hidden="true"></span>
        <strong><u>Publications</u></strong>
      </a>
      <a href="/teaching" aria-label="Teaching" title="Teaching" data-label="Teaching" data-mobile-target="mobile-teaching">
        <span class="slab-index__icon slab-index__icon--teaching"><img src="/logos/teaching-logo.png" alt="" aria-hidden="true"></span>
        <strong><u>Teaching</u></strong>
      </a>
      <a href="/talks/" aria-label="Talks" title="Talks" data-label="Talks" data-mobile-target="mobile-talks">
        <span class="slab-index__icon slab-index__icon--talks"><img src="/logos/talk-logo.svg" alt="" aria-hidden="true"></span>
        <strong><u>Talks</u></strong>
      </a>
      <a href="https://calendar.app.google/W2sssSbJwg39aCas9" target="_blank" aria-label="Schedule" title="Schedule" data-label="Schedule">
        <span class="slab-index__icon slab-index__icon--schedule"><img src="/logos/calendar-logo.png" alt="" aria-hidden="true"></span>
        <strong><u>Schedule</u></strong>
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabriel.stanovsky@mail.huji.ac.il" target="_blank" aria-label="Contact" title="Contact" data-label="Contact" data-mobile-target="mobile-contact">
        <span class="slab-index__icon slab-index__icon--contact"><img src="/logos/contact-logo.png" alt="" aria-hidden="true"></span>
        <strong><u>Contact</u></strong>
      </a>
      <a href="/assets/docs/cv.pdf" target="_blank" aria-label="CV" title="CV" data-label="CV">
        <span class="slab-index__icon slab-index__icon--cv"><img src="/logos/cv-logo.png" alt="" aria-hidden="true"></span>
        <strong><u>CV</u></strong>
      </a>
    </nav>
  </aside>

  <section class="slab-intro" id="slab-home-top">
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

  <section class="slab-mobile-overview" aria-label="Mobile overview">
    <section class="slab-mobile-section" id="mobile-group">
      <h2>People</h2>
      <div class="slab-mobile-people">
        {% for member in site.data.phd_students %}
        <article>
          <img src="/images/teampic/{{ member.photo }}" alt="{{ member.name | strip_html }}">
          <div>
            <h3>{{ member.name }}</h3>
            <p>{{ member.info | strip_html }}</p>
          </div>
        </article>
        {% endfor %}
        {% for member in site.data.msc_students %}
        <article>
          <img src="/images/teampic/{{ member.photo }}" alt="{{ member.name | strip_html }}">
          <div>
            <h3>{{ member.name }}</h3>
            <p>{{ member.info | strip_html }}</p>
          </div>
        </article>
        {% endfor %}
      </div>
      <a class="slab-mobile-more" href="/group/">Full group</a>
    </section>

    <section class="slab-mobile-section" id="mobile-publications">
      <h2>Recent Papers</h2>
      <div class="slab-mobile-list">
        {% assign paper_posts = site.posts | where_exp: "post", "post.authors" %}
        {% for post in paper_posts limit: 5 %}
        <article>
          <h3>{{ post.title }}</h3>
          <p>{{ post.date | date: "%Y" }} · {{ post.venue }}</p>
        </article>
        {% endfor %}
      </div>
      <a class="slab-mobile-more" href="/publications/">Full archive</a>
    </section>

    <section class="slab-mobile-section" id="mobile-teaching">
      <h2>Courses &amp; Seminars</h2>
      <div class="slab-mobile-list">
        {% for course in site.data.teaching limit: 4 %}
        <article>
          <h3>{{ course.title }}</h3>
          <p>{{ course.time }} · {{ course.level }} · {{ course.students }} students</p>
        </article>
        {% endfor %}
      </div>
      <a class="slab-mobile-more" href="/teaching">Teaching page</a>
    </section>

    <section class="slab-mobile-section" id="mobile-talks">
      <h2>Recent Talks</h2>
      <div class="slab-mobile-list">
        {% for talk in site.data.invited_talks limit: 4 %}
        <article>
          <h3>{{ talk.title }}</h3>
          <p>{{ talk.year }}</p>
        </article>
        {% endfor %}
      </div>
      <a class="slab-mobile-more" href="/talks/">Talks archive</a>
    </section>

    <section class="slab-mobile-section" id="mobile-contact">
      <h2>Contact &amp; CV</h2>
      <p class="slab-mobile-copy">
        For collaboration, advising, or speaking invitations, email me at
        <a href="mailto:gabriel.stanovsky@mail.huji.ac.il">gabriel.stanovsky@mail.huji.ac.il</a>.
      </p>
      <div class="slab-mobile-actions">
        <a class="slab-mobile-more" href="https://calendar.app.google/W2sssSbJwg39aCas9" target="_blank">Schedule</a>
        <a class="slab-mobile-more" href="/assets/docs/cv.pdf" target="_blank">CV</a>
      </div>
    </section>
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
	    var chosen = window.slabHomeIcon || null;

    if (!chosen || homeIcons.indexOf(chosen) === -1) {
      chosen = homeIcons[Math.floor(Math.random() * homeIcons.length)];
    }

	    document.querySelectorAll("[data-random-home-icon]").forEach(function (icon) {
	      icon.setAttribute("src", chosen);
	      icon.style.setProperty("--slab-icon-scale", homeIconScales[chosen] || 1);
	    });
  }());

  (function () {
    var nav = document.querySelector(".slab-home .slab-rail");
    var mobileQuery = window.matchMedia("(max-width: 980px)");
    var lastY = window.pageYOffset || document.documentElement.scrollTop || 0;
    var ticking = false;

    function isMobile() {
      return mobileQuery.matches;
    }

    document.querySelectorAll(".slab-home [data-mobile-target]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        if (!isMobile()) return;
        var target = document.getElementById(link.getAttribute("data-mobile-target"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    function updateNav() {
      if (!nav || !isMobile()) {
        document.body.classList.remove("slab-home-nav-floating", "slab-home-nav-visible");
        ticking = false;
        return;
      }

      var current = window.pageYOffset || document.documentElement.scrollTop || 0;
      var delta = current - lastY;

      if (current <= nav.offsetHeight + 24) {
        document.body.classList.remove("slab-home-nav-floating", "slab-home-nav-visible");
      } else {
        document.body.classList.add("slab-home-nav-floating");
        if (delta < -4) {
          document.body.classList.add("slab-home-nav-visible");
        } else if (delta > 4) {
          document.body.classList.remove("slab-home-nav-visible");
        }
      }

      lastY = current;
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    }, { passive: true });
    window.addEventListener("resize", updateNav);
    updateNav();
  }());
</script>
