---
layout: single
title: Teaching
permalink: /teaching
classes: wide slab-home-page slab-teaching-page
author_profile: false
---

<section class="slab-teaching" aria-labelledby="slab-teaching-title">
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
      <a href="/teaching" aria-label="Teaching" title="Teaching" data-label="Teaching" aria-current="page">
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

  <main class="teaching-workspace">
    <header class="teaching-hero">
      <h1 id="slab-teaching-title">Teaching</h1>
      <p>
        I draw meaning and satisfaction out of teaching, and see it as an important role of my job in academia.
        I strive for effective communication, and believe that every subject can be made accessible to any audience.
        I regularly give meta-presentations about <a href="https://docs.google.com/presentation/d/1pEYlINlYdTUIBViRKEQrU3-ecGxeO5MQEobAE6ri2iE/edit?usp=sharing" target="_blank">How to Write</a>
        and <a href="https://docs.google.com/presentation/d/127_MiTrOOByDcJr9Q983xImAPOfuvLyLm4UpPOa9U54/edit?usp=sharing" target="_blank">How to Present</a>,
        my pale spinoff of the legendary <a href="https://youtu.be/Unzc731iCUY?si=uRG9qqFLtq4AMDYn" target="_blank">How to Speak</a> lecture by Prof. Patrick Winston.
        I won several teaching awards at the Hebrew University.
      </p>
    </header>

    {% assign ongoing_courses = site.data.teaching | where: "type", "course" %}
    {% assign seminars = site.data.teaching | where: "type", "seminar" %}

    <section class="teaching-courses" aria-labelledby="teaching-courses-title">
      <div class="teaching-section-heading">
        <span aria-hidden="true"></span>
        <h2 id="teaching-courses-title">Courses</h2>
      </div>

      <div class="teaching-course-list">
        {% for course in ongoing_courses %}
        <article class="teaching-course">
          <div class="teaching-course__time">{{ course.time }}</div>
          <div class="teaching-course__body">
            <details class="teaching-course__details">
              <summary>{{ course.title }}</summary>
              <p>{{ course.details }}</p>
              <div class="teaching-course__links" aria-label="{{ course.title }} links">
                {% unless course.slides == 'NONE' %}
                <a href="{{ course.slides }}" target="_blank">materials</a>
                {% endunless %}
                {% unless course.paper == 'NONE' %}
                <a href="{{ course.paper }}" target="_blank">paper</a>
                {% endunless %}
              </div>
            </details>
            <p class="teaching-course__meta">{{ course.level }} level course for {{ course.students }} students at {{ course.location }}.</p>
          </div>
        </article>
        {% endfor %}
      </div>
    </section>

    <section class="teaching-courses" aria-labelledby="teaching-seminars-title">
      <div class="teaching-section-heading">
        <span aria-hidden="true"></span>
        <h2 id="teaching-seminars-title">Seminars</h2>
      </div>

      <div class="teaching-course-list">
        {% for course in seminars %}
        <article class="teaching-course">
          <div class="teaching-course__time">{{ course.time }}</div>
          <div class="teaching-course__body">
            <details class="teaching-course__details">
              <summary>{{ course.title }}</summary>
              <p>{{ course.details }}</p>
              <div class="teaching-course__links" aria-label="{{ course.title }} links">
                {% unless course.slides == 'NONE' %}
                <a href="{{ course.slides }}" target="_blank">materials</a>
                {% endunless %}
                {% unless course.paper == 'NONE' %}
                <a href="{{ course.paper }}" target="_blank">paper</a>
                {% endunless %}
              </div>
            </details>
            <p class="teaching-course__meta">{{ course.level }} level course for {{ course.students }} students at {{ course.location }}.</p>
          </div>
        </article>
        {% endfor %}
      </div>
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
    var chosen = window.slabHomeIcon || homeIcons[Math.floor(Math.random() * homeIcons.length)];
    document.querySelectorAll("[data-random-home-icon]").forEach(function (icon) {
      icon.setAttribute("src", chosen);
    });
  }());
</script>
