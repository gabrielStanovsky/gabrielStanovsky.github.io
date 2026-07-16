---
layout: single
classes: wide slab-home-page slab-summary-page
author_profile: false
title: "Gabriel Stanovsky"
---

<section class="slab-home" aria-labelledby="slab-home-title">
  <aside class="slab-rail" aria-label="Homepage navigation">
    <nav class="slab-index" aria-label="Homepage sections">
      <a href="#slab-home-top" aria-label="Home" title="Home" data-label="Home">
        <span class="slab-index__icon slab-index__icon--home"><img src="/logos/home-logo/1.png" alt="" aria-hidden="true" data-random-home-icon></span>
        <strong><u>Home</u></strong>
      </a>
      <a href="/group/" aria-label="Group" title="Group" data-label="Group">
        <span class="slab-index__icon slab-index__icon--group"><img src="/logos/group-logo.svg" alt="" aria-hidden="true"></span>
        <strong><u>Group</u></strong>
      </a>
      <a href="/publications/" aria-label="Publications" title="Publications" data-label="Publications">
        <span class="slab-index__icon slab-index__icon--publications"><img src="/logos/pub-logo.png" alt="" aria-hidden="true"></span>
        <strong><u>Publications</u></strong>
      </a>
      <a href="/teaching" aria-label="Teaching" title="Teaching" data-label="Teaching">
        <span class="slab-index__icon slab-index__icon--teaching"><img src="/logos/teaching-logo.png" alt="" aria-hidden="true"></span>
        <strong><u>Teaching</u></strong>
      </a>
      <a href="/talks/" aria-label="Talks" title="Talks" data-label="Talks">
        <span class="slab-index__icon slab-index__icon--talks"><img src="/logos/talk-logo.svg" alt="" aria-hidden="true"></span>
        <strong><u>Talks</u></strong>
      </a>
      <a href="https://calendar.app.google/W2sssSbJwg39aCas9" target="_blank" aria-label="Schedule" title="Schedule" data-label="Schedule">
        <span class="slab-index__icon slab-index__icon--schedule"><img src="/logos/calendar-logo.png" alt="" aria-hidden="true"></span>
        <strong><u>Schedule</u></strong>
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabriel.stanovsky@mail.huji.ac.il" target="_blank" aria-label="Contact" title="Contact" data-label="Contact">
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

      {% assign default_profile_photo = site.data.profile_photos | first %}
      <figure class="slab-profile-photo">
        <button class="slab-profile-photo__button" type="button" aria-label="Show next profile photo" data-profile-photo-trigger>
          <img src="{{ default_profile_photo.src }}" alt="{{ default_profile_photo.alt | default: 'Gabriel Stanovsky' }}" style="--slab-profile-photo-position: {{ default_profile_photo.position | default: 'center' }};" data-profile-photo-image>
        </button>
      </figure>

      <div hidden data-profile-photo-pool>
        {% for photo in site.data.profile_photos %}
        <span data-src="{{ photo.src | escape }}" data-alt="{{ photo.alt | default: 'Gabriel Stanovsky' | escape }}" data-caption="{{ photo.caption | escape }}" data-position="{{ photo.position | default: 'center' | escape }}"></span>
        {% endfor %}
      </div>
    </div>

    <p>
      I develop AI models that help experts tackle real-world research questions across domains such as law, medicine, archaeology, and beyond. I also head <a href="https://www.cs.huji.ac.il/page/10931/" target="_blank">HUJI's BSc. program in AI</a>.
Outside work, I’m a wannabe <a href="https://letterboxd.com/gabistanovsky/films/diary/" target="_blank">movie buff</a>, <a href="http://www.setlist.fm/concerts/Gabis" target="_blank">concert goer</a>, <a href="https://www.goodreads.com/user/show/24306303-gabriel-stanovsky" target="_blank">book lover</a>, and <a href="https://tunein.com/user/gabrielsatanovsky/" target="_blank">radio</a> <a href="https://www.mixcloud.com/gabriel-satanovsky/" target="_blank">enthusiast</a>.
    </p>
  </section>

  <section class="slab-mobile-overview" aria-label="Homepage overview">
    <section class="slab-mobile-section" id="mobile-group">
      <h2>People</h2>
      <div class="slab-mobile-people">
        {% for member in site.data.phd_students %}
        <article>
          <img src="/images/teampic/{{ member.photo }}" alt="{{ member.name | strip_html }}">
          <div>
            <h3>
              {% if member.website %}
              <a href="{{ member.website }}" target="_blank">{{ member.name }}</a>
              {% else %}
              <a href="/group/">{{ member.name }}</a>
              {% endif %}
            </h3>
            <p>{{ member.info }}</p>
          </div>
        </article>
        {% endfor %}
        {% for member in site.data.msc_students %}
        <article>
          <img src="/images/teampic/{{ member.photo }}" alt="{{ member.name | strip_html }}">
          <div>
            <h3>
              {% if member.website %}
              <a href="{{ member.website }}" target="_blank">{{ member.name }}</a>
              {% else %}
              <a href="/group/">{{ member.name }}</a>
              {% endif %}
            </h3>
            <p>{{ member.info }}</p>
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
        {% assign pdf_ext = post["pdf-ext"] %}
        <article>
          <h3>
            {% if post.pdf and post.pdf != 'NONE' %}
            <a href="/assets/papers/{{ post.base }}/{{ post.pdf }}" target="_blank">{{ post.title }}</a>
            {% elsif pdf_ext and pdf_ext != 'NONE' %}
            <a href="{{ pdf_ext }}" target="_blank">{{ post.title }}</a>
            {% else %}
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% endif %}
          </h3>
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
          <h3>
            {% if course.slides and course.slides != 'NONE' %}
            <a href="{{ course.slides }}" target="_blank">{{ course.title }}</a>
            {% elsif course.paper and course.paper != 'NONE' %}
            <a href="{{ course.paper }}" target="_blank">{{ course.title }}</a>
            {% else %}
            <a href="/teaching">{{ course.title }}</a>
            {% endif %}
          </h3>
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
        {% assign talk_pdf_ext = talk["pdf-ext"] %}
        <article>
          <h3>
            {% if talk.pdf and talk.pdf != 'NONE' %}
            <a href="/assets/invited_talks/{{ talk.base }}/{{ talk.pdf }}" target="_blank">{{ talk.title }}</a>
            {% elsif talk_pdf_ext and talk_pdf_ext != 'NONE' %}
            <a href="{{ talk_pdf_ext }}" target="_blank">{{ talk.title }}</a>
            {% elsif talk.talk and talk.talk != 'NONE' %}
            <a href="{{ talk.talk }}" target="_blank">{{ talk.title }}</a>
            {% else %}
            <a href="/talks/">{{ talk.title }}</a>
            {% endif %}
          </h3>
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
    var photoNodes = Array.prototype.slice.call(document.querySelectorAll("[data-profile-photo-pool] [data-src]"));
    var trigger = document.querySelector("[data-profile-photo-trigger]");
    var image = document.querySelector("[data-profile-photo-image]");
    if (!photoNodes.length || !image) return;

    var photos = photoNodes.map(function (node) {
      return {
        src: node.getAttribute("data-src"),
        alt: node.getAttribute("data-alt") || "Gabriel Stanovsky",
        caption: node.getAttribute("data-caption") || "",
        position: node.getAttribute("data-position") || "center"
      };
    }).filter(function (photo) {
      return photo.src;
    });
    if (!photos.length) return;

    var currentIndex = Math.floor(Math.random() * photos.length);
    var loadedPhotos = {};

    function preloadPhoto(index) {
      var photo = photos[index];
      if (!photo) return Promise.resolve();
      if (loadedPhotos[photo.src]) return loadedPhotos[photo.src];

      loadedPhotos[photo.src] = new Promise(function (resolve) {
        var preload = new Image();
        preload.onload = function () {
          if (preload.decode) {
            preload.decode().then(resolve).catch(resolve);
            return;
          }
          resolve();
        };
        preload.onerror = resolve;
        preload.src = photo.src;
      });
      return loadedPhotos[photo.src];
    }

    function applyPhoto(index) {
      var photo = photos[index];
      if (!photo) return;

      currentIndex = index;
      image.style.setProperty("--slab-profile-photo-position", photo.position);
      image.setAttribute("src", photo.src);
      image.setAttribute("alt", photo.alt);
      if (photo.caption) {
        image.setAttribute("title", photo.caption);
      } else {
        image.removeAttribute("title");
      }
    }

    function showPhoto(index) {
      preloadPhoto(index).then(function () {
        applyPhoto(index);
      });
    }

    applyPhoto(currentIndex);
    preloadPhoto(currentIndex);

    if (!trigger || photos.length < 2) return;

    trigger.addEventListener("click", function () {
      showPhoto((currentIndex + 1) % photos.length);
    });

    trigger.addEventListener("mouseenter", function () {
      preloadPhoto((currentIndex + 1) % photos.length);
    });

    window.setTimeout(function () {
      photos.forEach(function (_photo, index) {
        preloadPhoto(index);
      });
    }, 700);
  }());

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
	    var chosen = window.slabHomeIcon || null;

    if (!chosen || homeIcons.indexOf(chosen) === -1) {
      chosen = homeIcons[Math.floor(Math.random() * homeIcons.length)];
    }

	    document.querySelectorAll("[data-random-home-icon]").forEach(function (icon) {
	      icon.setAttribute("src", chosen);
	      icon.style.setProperty("--slab-icon-scale", homeIconScales[chosen] || 1);
	      icon.style.setProperty("--slab-icon-y-offset", (homeIconOffsets[chosen] || 0) + "px");
	    });
  }());
</script>
