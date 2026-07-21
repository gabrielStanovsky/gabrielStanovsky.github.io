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
      </div>

      {% assign fallback_group_photo = site.data.group_photos | first %}
      <figure class="group-photo">
        <button class="group-photo__button" type="button" aria-label="Show next group photo" data-group-photo-trigger>
          <img src="{{ fallback_group_photo.src }}" alt="{{ fallback_group_photo.alt }}" style="--group-photo-position: {{ fallback_group_photo.position | default: 'center' }};" data-group-photo-image>
        </button>
        <figcaption data-group-photo-caption aria-live="polite">{{ fallback_group_photo.caption }}</figcaption>
      </figure>
      <div hidden data-group-photo-pool>
        {% for photo in site.data.group_photos %}
        <span data-src="{{ photo.src | escape }}" data-alt="{{ photo.alt | escape }}" data-caption="{{ photo.caption | escape }}" data-position="{{ photo.position | default: 'center' | escape }}"></span>
        {% endfor %}
      </div>
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
          <dd>Orian Dabod (2026), Shahar Levy (2026), Niv Eckhaus (2025), Noam Dahan (2025), Saifun Naveh (2024), Eliya Habba (2024), Yarden Yagil (2023), Bar Eluz (2022), Dan Malkin (2022), Gili Lior (2022), Bar Tamir (2022), Eran Nussinovitch (2022), Sapir Weissbuch (2022), Koren Lazar (2021)</dd>
        </div>
        <div>
          <dt>B.Sc.</dt>
          <dd>Daniel Nisnevich (2025), Liron Naccache (2024), Shahar Spencer (2023), Niv Eckhaus (2023), Mohr Wenger (2021), Tom Kalir (2021), Shahar Levy (2021)</dd>
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

<script>
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

  (function () {
    var photos = Array.prototype.slice.call(document.querySelectorAll("[data-group-photo-pool] [data-src]"));
    var trigger = document.querySelector("[data-group-photo-trigger]");
    var image = document.querySelector("[data-group-photo-image]");
    if (!photos.length || !image) return;

    var caption = document.querySelector("[data-group-photo-caption]");
    var storageKey = "slabGroupPhotoIndex";
    var loadedPhotos = {};

    function getLastPhotoIndex() {
      try {
        var stored = window.sessionStorage.getItem(storageKey);
        var index = parseInt(stored, 10);
        return isNaN(index) ? -1 : index;
      } catch (error) {
        return -1;
      }
    }

    function rememberPhotoIndex(index) {
      try {
        window.sessionStorage.setItem(storageKey, String(index));
      } catch (error) {
        return;
      }
    }

    function chooseStartIndex() {
      if (photos.length < 2) return 0;

      var lastIndex = getLastPhotoIndex();
      var index = Math.floor(Math.random() * photos.length);

      if (index === lastIndex) {
        index = (index + 1 + Math.floor(Math.random() * (photos.length - 1))) % photos.length;
      }

      return index;
    }

    var currentIndex = chooseStartIndex();

    function preloadPhoto(index) {
      var photo = photos[index].dataset;
      if (!photo.src) return Promise.resolve(photo);
      if (loadedPhotos[photo.src]) return loadedPhotos[photo.src];

      loadedPhotos[photo.src] = new Promise(function (resolve) {
        var preload = new Image();

        function done() {
          resolve(photo);
        }

        preload.onload = function () {
          if (preload.decode) {
            preload.decode().then(done).catch(done);
          } else {
            done();
          }
        };
        preload.onerror = done;
        preload.src = photo.src;
      });

      return loadedPhotos[photo.src];
    }

    function applyPhoto(index) {
      var photo = photos[index].dataset;
      image.style.setProperty("--group-photo-position", photo.position || "center");
      image.setAttribute("src", photo.src);
      image.setAttribute("alt", photo.alt || "SLAB group photo");
      rememberPhotoIndex(index);

      if (caption) {
        caption.textContent = photo.caption || "";
      }
    }

    function showPhoto(index) {
      preloadPhoto(index).then(function () {
        currentIndex = index;
        applyPhoto(index);
      });
    }

    showPhoto(currentIndex);

    if (!trigger || photos.length < 2) return;

    trigger.addEventListener("click", function () {
      showPhoto((currentIndex + 1) % photos.length);
    });

    trigger.addEventListener("mouseenter", function () {
      preloadPhoto((currentIndex + 1) % photos.length);
    });

    window.setTimeout(function () {
      photos.forEach(function (_, index) {
        preloadPhoto(index);
      });
    }, 700);
  }());
</script>
