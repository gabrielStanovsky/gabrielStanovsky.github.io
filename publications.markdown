---
layout: single
title: Publications
permalink: /publications/
classes: wide slab-home-page slab-publications-page
author_profile: false
---

<section class="slab-publications" aria-labelledby="slab-publications-title">
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
      <a href="/publications/" aria-label="Publications" title="Publications" data-label="Publications" aria-current="page">
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

  <section class="pub-workspace">
    <header class="pub-toolbar">
      <h1 id="slab-publications-title">Publications</h1>
      <div class="pub-toolbar-actions">
        <a class="pub-scholar-link" href="https://scholar.google.co.il/citations?user=AtkvBFYAAAAJ&hl=en" target="_blank" rel="noopener" aria-label="Google Scholar profile" title="Google Scholar profile">
          <img src="/logos/scholar-logo.png" alt="" aria-hidden="true">
        </a>
        <button class="pub-search-toggle" type="button" aria-label="Search publications" title="Search publications">Search</button>
      </div>
      <label class="pub-search">
        <span class="sr-only">Search publications</span>
        <input type="search" id="pub-search-input" placeholder="Search papers, authors, venues, years" autocomplete="off" spellcheck="false">
      </label>
    </header>

    <div class="pub-scroll" id="pub-scroll" tabindex="0">
      <div class="pub-year-stack" id="pub-year-stack" aria-label="Folded publication years"></div>
      <section class="pub-search-results" id="pub-search-results" aria-label="Search results" hidden></section>

      {% assign paper_posts = site.posts | where_exp: "post", "post.authors" %}
      {% assign active_year = "" %}
      {% for post in paper_posts %}
      {% assign pdf_ext = post["pdf-ext"] %}
      {% assign bib_ext = post["bib-ext"] %}
      {% assign data_name = post["data-name"] | default: "DATA" %}
      {% assign demo_name = post["demo-name"] | default: "DEMO" %}
      {% assign slides_ext = post["slides-ext"] %}
      {% assign poster_ext = post["poster-ext"] %}
      {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}

      {% if this_year != active_year %}
      {% unless active_year == "" %}
        </div>
      </section>
      {% endunless %}
      <section class="pub-year" data-year="{{ this_year }}">
        <h2 class="pub-year__heading" id="{{ this_year }}-ref">{{ this_year }}</h2>
        <div class="pub-year__items">
      {% assign active_year = this_year %}
      {% endif %}

          <article class="pub-item" data-year="{{ this_year }}" data-search="{{ post.title | strip_html | escape }} {{ post.authors | strip_html | escape }} {{ post.venue | strip_html | escape }} {{ this_year }}">
            <div class="pub-item__body">
              <h3 class="pub-item__title">
                {% unless post.pdf == 'NONE' %}
                <a href="/assets/papers/{{ post.base }}/{{ post.pdf }}" target="_blank">{{ post.title }}</a>
                {% endunless %}
                {% unless pdf_ext == 'NONE' %}
                <a href="{{ pdf_ext }}" target="_blank">{{ post.title }}</a>
                {% endunless %}
                {% if post.pdf == 'NONE' and pdf_ext == 'NONE' %}
                {{ post.title }}
                {% endif %}
                <span class="pub-item__venue" data-venue-text>{{ post.venue }}</span>
              </h3>

              <p class="pub-item__authors">{{ post.authors }}</p>

              <div class="pub-item__links" aria-label="Publication links">
                {% if post.project and post.project != '' and post.project != 'NONE' %}
                <a href="{{ post.project }}" target="_blank">PROJECT</a>
                {% endif %}
                {% if post.data and post.data != '' and post.data != 'NONE' %}
                <a href="{{ post.data }}" target="_blank">{{ data_name }}</a>
                {% endif %}
                {% if post.demo and post.demo != '' and post.demo != 'NONE' %}
                <a href="{{ post.demo }}" target="_blank">{{ demo_name }}</a>
                {% endif %}
                {% if post.code and post.code != '' and post.code != 'NONE' %}
                <a href="{{ post.code }}" target="_blank">CODE</a>
                {% endif %}
                {% if post.talk and post.talk != '' and post.talk != 'NONE' %}
                <a href="{{ post.talk }}" target="_blank">TALK</a>
                {% endif %}
                {% if post.slides and post.slides != '' and post.slides != 'NONE' %}
                <a href="/assets/papers/{{ post.base }}/{{ post.slides }}" target="_blank">SLIDES</a>
                {% endif %}
                {% if slides_ext and slides_ext != '' and slides_ext != 'NONE' %}
                <a href="{{ slides_ext }}" target="_blank">SLIDES</a>
                {% endif %}
                {% if post.poster and post.poster != '' and post.poster != 'NONE' %}
                <a href="/assets/papers/{{ post.base }}/{{ post.poster }}" target="_blank">POSTER</a>
                {% endif %}
                {% if poster_ext and poster_ext != '' and poster_ext != 'NONE' %}
                <a href="{{ poster_ext }}" target="_blank">POSTER</a>
                {% endif %}
                {% if post.bib and post.bib != '' and post.bib != 'NONE' %}
                <a href="/assets/papers/{{ post.base }}/{{ post.bib }}" target="_blank">BIB</a>
                {% endif %}
                {% if bib_ext and bib_ext != '' and bib_ext != 'NONE' %}
                <a href="{{ bib_ext }}" target="_blank">BIB</a>
                {% endif %}
              </div>
            </div>
          </article>
      {% endfor %}
      {% unless active_year == "" %}
        </div>
      </section>
      {% endunless %}

      <p class="pub-empty" id="pub-empty" hidden>No matching publications.</p>
    </div>
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
	    var chosen = window.slabHomeIcon || homeIcons[Math.floor(Math.random() * homeIcons.length)];
	    document.querySelectorAll("[data-random-home-icon]").forEach(function (icon) {
	      icon.setAttribute("src", chosen);
	      icon.style.setProperty("--slab-icon-scale", homeIconScales[chosen] || 1);
	    });
  }());
</script>

<script>
  (function () {
    var scroller = document.getElementById("pub-scroll");
    var stack = document.getElementById("pub-year-stack");
    var search = document.getElementById("pub-search-input");
    var searchToggle = document.querySelector(".pub-search-toggle");
    var empty = document.getElementById("pub-empty");
    var results = document.getElementById("pub-search-results");
    var years = Array.prototype.slice.call(document.querySelectorAll(".pub-year"));
    var items = Array.prototype.slice.call(document.querySelectorAll(".pub-item"));
    var searchIndex = [];
    var venueGroups = [];
    var lastQuery = "";
    var lastScrollTop = scroller ? scroller.scrollTop : 0;
    var keepSearchOnBlur = false;
    var keepSearchOnBlurTimer = null;
    var searchBlurTimer = null;

    function showSearch() {
      document.body.classList.add("slab-publications-searching");
      search.removeAttribute("tabindex");
      search.focus();
      search.select();
    }

    function hideSearch() {
      clearSearchBlurTimer();
      search.value = "";
      applySearch();
      search.setAttribute("tabindex", "-1");
      document.body.classList.remove("slab-publications-searching");
    }

    function clearSearchBlurTimer() {
      if (!searchBlurTimer) return;
      window.clearTimeout(searchBlurTimer);
      searchBlurTimer = null;
    }

    function clearKeepSearchOnBlurTimer() {
      if (!keepSearchOnBlurTimer) return;
      window.clearTimeout(keepSearchOnBlurTimer);
      keepSearchOnBlurTimer = null;
    }

    function handleSearchBlur(event) {
      var nextTarget = event.relatedTarget;
      if (nextTarget && nextTarget.closest && nextTarget.closest(".pub-item a")) return;

      if (keepSearchOnBlur) {
        keepSearchOnBlur = false;
        clearKeepSearchOnBlurTimer();
        return;
      }

      clearSearchBlurTimer();
      searchBlurTimer = window.setTimeout(function () {
        searchBlurTimer = null;
        if (keepSearchOnBlur) {
          keepSearchOnBlur = false;
          clearKeepSearchOnBlurTimer();
          return;
        }
        hideSearch();
      }, 250);
    }

    function preserveSearchForResultClick() {
      keepSearchOnBlur = true;
      clearSearchBlurTimer();
      clearKeepSearchOnBlurTimer();
      keepSearchOnBlurTimer = window.setTimeout(function () {
        keepSearchOnBlur = false;
        keepSearchOnBlurTimer = null;
      }, 400);
    }

    function isPublicationLinkTarget(event) {
      var target = event.target;
      return !!(target && target.closest && target.closest(".pub-item a"));
    }

    function normalize(value) {
      return (value || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
    }

    function acronym(value) {
      return normalize(value).split(/\s+/).filter(Boolean).map(function (word) {
        return word[0];
      }).join("");
    }

    function editDistance(a, b, limit) {
      if (Math.abs(a.length - b.length) > limit) return limit + 1;
      var previous = [];
      for (var i = 0; i <= b.length; i += 1) previous[i] = i;

      for (var row = 1; row <= a.length; row += 1) {
        var current = [row];
        var best = current[0];
        for (var col = 1; col <= b.length; col += 1) {
          var cost = a[row - 1] === b[col - 1] ? 0 : 1;
          current[col] = Math.min(
            previous[col] + 1,
            current[col - 1] + 1,
            previous[col - 1] + cost
          );
          best = Math.min(best, current[col]);
        }
        if (best > limit) return limit + 1;
        previous = current;
      }

      return previous[b.length];
    }

    function isOrderedMatch(text, token) {
      var cursor = 0;
      var gaps = 0;
      var lastMatch = -1;
      for (var i = 0; i < text.length && cursor < token.length; i += 1) {
        if (text[i] === token[cursor]) {
          if (lastMatch !== -1) gaps += i - lastMatch - 1;
          lastMatch = i;
          cursor += 1;
        }
      }
      return cursor === token.length && gaps <= Math.max(8, token.length * 4);
    }

    function tokenMatch(words, compactText, initialism, token) {
      if (token.length === 1) {
        return words.some(function (word) {
          return word[0] === token;
        });
      }

      if (compactText.indexOf(token) !== -1 || initialism.indexOf(token) !== -1) return true;

      return words.some(function (word) {
        if (word.indexOf(token) !== -1) return true;
        if (token.length >= 3 && word.indexOf(token.slice(0, Math.max(3, token.length - 1))) === 0) return true;
        if (token.length >= 4 && editDistance(token, word.slice(0, Math.max(token.length, Math.min(word.length, token.length + 2))), 1) <= 1) return true;
        if (token.length >= 6 && editDistance(token, word, 2) <= 2) return true;
        return token.length >= 4 && isOrderedMatch(word, token);
      });
    }

    function compactPhraseMatch(words, compactNeedle) {
      if (compactNeedle.length < 5) return false;

      for (var start = 0; start < words.length; start += 1) {
        var phrase = "";
        for (var end = start; end < Math.min(words.length, start + 4); end += 1) {
          phrase += words[end];
          if (phrase.indexOf(compactNeedle) !== -1) return true;
          if (compactNeedle.length >= 7 && editDistance(compactNeedle, phrase, 1) <= 1) return true;
        }
      }

      return false;
    }

    function tokenScore(words, compactText, initialism, token) {
      if (token.length === 1) {
        return words.some(function (word) {
          return word[0] === token;
        }) ? 20 : -1;
      }

      if (words.indexOf(token) !== -1) return 100;
      if (compactText.indexOf(token) !== -1) return 82;
      if (initialism.indexOf(token) !== -1) return 76;

      var best = -1;
      words.forEach(function (word) {
        if (word.indexOf(token) === 0) best = Math.max(best, 70);
        else if (word.indexOf(token) !== -1) best = Math.max(best, 58);
        else if (token.length >= 3 && word.indexOf(token.slice(0, Math.max(3, token.length - 1))) === 0) best = Math.max(best, 50);
        else if (token.length >= 4 && editDistance(token, word.slice(0, Math.max(token.length, Math.min(word.length, token.length + 2))), 1) <= 1) best = Math.max(best, 42);
        else if (token.length >= 6 && editDistance(token, word, 2) <= 2) best = Math.max(best, 34);
        else if (token.length >= 4 && isOrderedMatch(word, token)) best = Math.max(best, 22);
      });

      return best;
    }

    function matchScore(haystack, needle) {
      var normalizedNeedle = normalize(needle);
      if (!normalizedNeedle) return 0;

      var words = haystack.split(/\s+/).filter(Boolean);
      var compactText = words.join("");
      var initialism = acronym(haystack);
      var compactNeedle = normalizedNeedle.replace(/\s+/g, "");
      var score = 0;

      if (words.indexOf(normalizedNeedle) !== -1) score += 140;
      else if (haystack.indexOf(normalizedNeedle) !== -1) score += 120;
      else if (compactPhraseMatch(words, compactNeedle)) score += 96;
      else if (initialism.indexOf(compactNeedle) !== -1) score += 88;

      var tokens = normalizedNeedle.split(/\s+/).filter(Boolean);
      for (var i = 0; i < tokens.length; i += 1) {
        var current = tokenScore(words, compactText, initialism, tokens[i]);
        if (current < 0) return -1;
        score += current;
      }

      return score;
    }

    function fuzzyMatch(haystack, needle) {
      if (!needle) return true;
      var normalizedNeedle = normalize(needle);
      if (!normalizedNeedle) return true;
      var words = haystack.split(/\s+/).filter(Boolean);
      var compactText = words.join("");
      var initialism = acronym(haystack);
      var compactNeedle = normalizedNeedle.replace(/\s+/g, "");

      if (compactPhraseMatch(words, compactNeedle) || initialism.indexOf(compactNeedle) !== -1) return true;

      var tokens = normalizedNeedle.split(/\s+/).filter(Boolean);
      return tokens.every(function (token) {
        return tokenMatch(words, compactText, initialism, token);
      });
    }

    function venueParts(value) {
      var normalized = normalize(value);
      var group = value || "Other";
      var note = "";

      if (normalized.indexOf("tacl") !== -1) group = "TACL";
      else if (normalized.indexOf("naacl") !== -1) group = "NAACL";
      else if (normalized.indexOf("eacl") !== -1) group = "EACL";
      else if (normalized.indexOf("aacl") !== -1) group = "AACL";
      else if (normalized.indexOf("emnlp") !== -1) group = "EMNLP";
      else if (normalized.indexOf("acl") !== -1) group = "ACL";
      else if (normalized.indexOf("colm") !== -1) group = "COLM";
      else if (normalized.indexOf("icml") !== -1) group = "ICML";
      else if (normalized.indexOf("neurips") !== -1) group = "NeurIPS";
      else if (normalized.indexOf("coling") !== -1) group = "COLING";
      else if (normalized.indexOf("iccv") !== -1) group = "ICCV";
      else if (normalized.indexOf("aaai") !== -1) group = "AAAI";
      else if (normalized.indexOf("icail") !== -1) group = "ICAIL";
      else if (normalized.indexOf("cogsci") !== -1) group = "CogSci";
      else if (normalized.indexOf("conll") !== -1) group = "CoNLL";
      else if (normalized.indexOf("semeval") !== -1) group = "SemEval";
      else if (normalized.indexOf("starsem") !== -1) group = "STARSEM";
      else if (normalized.indexOf("sigtig") !== -1 || normalized.indexOf("sigtyp") !== -1) group = "SIGTYP";
      else if (normalized.indexOf("nllp") !== -1) group = "NLLP";
      else if (normalized.indexOf("wmt") !== -1 || normalized.indexOf("machine translation") !== -1) group = "WMT";
      else if (normalized.indexOf("communications of the acm") !== -1) group = "CACM";
      else if (normalized.indexOf("arxiv") !== -1) group = "arXiv";

      if (normalized.indexOf("findings") !== -1) note = "Findings";
      else if (normalized.indexOf("demo") !== -1) note = "Demo";
      else if (normalized.indexOf("workshop") !== -1) note = "Workshop";
      else if (normalized.indexOf("tutorial") !== -1) note = "Tutorial";
      else if (normalized.indexOf("datasets and benchmarks") !== -1) note = "Datasets and Benchmarks";
      else if (normalized.indexOf("@ acl") !== -1) note = "@ ACL";
      else if (normalized.indexOf("@ emnlp") !== -1) note = "@ EMNLP";

      return {
        group: group,
        note: note
      };
    }

    function clearVenueGroups() {
      venueGroups.forEach(function (group) {
        group.remove();
      });
      venueGroups = [];
    }

    function groupByVenue() {
      clearVenueGroups();

      years.forEach(function (year) {
        var container = year.querySelector(".pub-year__items");
        var yearItems = Array.prototype.slice.call(container.querySelectorAll(":scope > .pub-item"));
        var groups = [];
        var byGroup = {};

        yearItems.forEach(function (item) {
          var venue = item.querySelector("[data-venue-text]");
          var parts = venueParts(venue ? venue.textContent : "");
          item.setAttribute("data-venue-group", parts.group);
          if (venue) {
            venue.hidden = !parts.note;
            venue.textContent = parts.note ? " (" + parts.note + ")" : "";
          }

          if (!byGroup[parts.group]) {
            byGroup[parts.group] = [];
            groups.push(parts.group);
          }
          byGroup[parts.group].push(item);
        });

        groups.forEach(function (groupName) {
          var section = document.createElement("section");
          section.className = "pub-venue-group";
          section.setAttribute("data-venue-group-section", groupName);

          var heading = document.createElement("h3");
          heading.className = "pub-venue-heading";
          heading.textContent = groupName;

          var itemsWrap = document.createElement("div");
          itemsWrap.className = "pub-venue-items";

          section.appendChild(heading);
          section.appendChild(itemsWrap);
          container.appendChild(section);
          venueGroups.push(section);

          byGroup[groupName].forEach(function (item) {
            itemsWrap.appendChild(item);
          });
        });
      });
    }

    function buildSearchIndex() {
      searchIndex = items.map(function (item) {
        var title = item.querySelector(".pub-item__title");
        var authors = item.querySelector(".pub-item__authors");
        var venue = item.querySelector(".pub-item__venue");
        return {
          element: item,
          fields: [title, authors, venue].filter(Boolean).map(function (field) {
            return {
              element: field,
              html: field.innerHTML
            };
          }),
          originalParent: item.parentNode,
          originalNext: item.nextElementSibling,
          year: Number(item.getAttribute("data-year")) || 0,
          text: normalize([item.getAttribute("data-search"), item.textContent].join(" "))
        };
      });
    }

    function restoreOriginalOrder() {
      clearVenueGroups();
      searchIndex.forEach(function (entry) {
        if (entry.originalNext && entry.originalNext.parentNode === entry.originalParent) {
          entry.originalParent.insertBefore(entry.element, entry.originalNext);
        } else {
          entry.originalParent.appendChild(entry.element);
        }
      });
      groupByVenue();
    }

    function restoreHighlights(entry) {
      entry.fields.forEach(function (field) {
        field.element.innerHTML = field.html;
      });
    }

    function shouldHighlightWord(word, tokens) {
      var normalizedWord = normalize(word);
      if (!normalizedWord) return false;
      return tokens.some(function (token) {
        if (token.length < 2) return false;
        return tokenMatch([normalizedWord], normalizedWord, acronym(normalizedWord), token);
      });
    }

    function highlightTextNode(node, tokens) {
      var text = node.nodeValue;
      var wordPattern = /[A-Za-z0-9À-ž]+/g;
      var fragment = document.createDocumentFragment();
      var cursor = 0;
      var match;
      var highlighted = false;

      while ((match = wordPattern.exec(text)) !== null) {
        var word = match[0];
        var start = match.index;
        var end = start + word.length;

        if (shouldHighlightWord(word, tokens)) {
          if (start > cursor) fragment.appendChild(document.createTextNode(text.slice(cursor, start)));
          var mark = document.createElement("mark");
          mark.className = "pub-search-hit";
          mark.textContent = text.slice(start, end);
          fragment.appendChild(mark);
          cursor = end;
          highlighted = true;
        }
      }

      if (!highlighted) return;
      if (cursor < text.length) fragment.appendChild(document.createTextNode(text.slice(cursor)));
      node.parentNode.replaceChild(fragment, node);
    }

    function highlightElement(element, tokens) {
      var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
          if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          if (node.parentNode && node.parentNode.closest(".pub-search-hit")) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      var nodes = [];
      var node;

      while ((node = walker.nextNode()) !== null) {
        nodes.push(node);
      }

      nodes.forEach(function (textNode) {
        highlightTextNode(textNode, tokens);
      });
    }

    function highlightEntry(entry, query) {
      var tokens = normalize(query).split(/\s+/).filter(function (token) {
        return token.length > 1;
      });
      if (!tokens.length) return;

      entry.fields.forEach(function (field) {
        highlightElement(field.element, tokens);
      });
    }

    function updateCompactHeader() {
      var isScrolled = scroller && scroller.scrollTop > 12;
      document.body.classList.toggle("slab-publications-compact", !!isScrolled);
    }

    function updateNavVisibility() {
      if (!scroller) return;
      var current = scroller.scrollTop;
      var delta = current - lastScrollTop;

      if (current <= 12) {
        document.body.classList.remove("slab-publications-nav-hidden");
      } else if (delta > 4) {
        document.body.classList.add("slab-publications-nav-hidden");
      } else if (delta < -4) {
        document.body.classList.remove("slab-publications-nav-hidden");
      }

      lastScrollTop = current;
    }

    function updateStack() {
      updateCompactHeader();
      updateNavVisibility();
      if (!scroller || !stack || search.value.trim()) {
        if (stack) {
          stack.innerHTML = "";
          scroller.style.setProperty("--pub-stack-height", "0px");
        }
        return;
      }

      var complete = [];
      years.forEach(function (year) {
        if (year.hidden) return;
        var bottom = year.offsetTop + year.offsetHeight;
        if (bottom < scroller.scrollTop + stack.offsetHeight + 16) {
          complete.push(year.getAttribute("data-year"));
        }
      });

      stack.innerHTML = complete.slice().reverse().map(function (year) {
        return '<button class="pub-year-chip" type="button" data-jump-year="' + year + '" aria-label="Jump to ' + year + '">' + year + '</button>';
      }).join("");
      scroller.style.setProperty("--pub-stack-height", stack.offsetHeight + "px");
    }

    function jumpToYear(year) {
      var target = document.querySelector('.pub-year[data-year="' + year + '"]');
      if (!target || !scroller) return;
      scroller.scrollTo({
        top: Math.max(0, target.offsetTop - stack.offsetHeight),
        behavior: "smooth"
      });
    }

    function applySearch() {
      var query = search.value;
      var visibleCount = 0;
      var normalizedQuery = normalize(query);
      var matches = [];

      searchIndex.forEach(function (entry) {
        restoreHighlights(entry);
        var score = normalizedQuery ? matchScore(entry.text, query) : 0;
        var matched = normalizedQuery ? score >= 0 : true;
        var venue = entry.element.querySelector("[data-venue-text]");
        if (venue && normalizedQuery) venue.hidden = false;
        entry.element.hidden = !matched;
        if (matched && normalizedQuery) highlightEntry(entry, query);
        if (matched) {
          visibleCount += 1;
          matches.push({
            entry: entry,
            score: score
          });
        }
      });

      if (normalizedQuery) {
        matches.sort(function (a, b) {
          return b.score - a.score || b.entry.year - a.entry.year;
        });
        results.hidden = false;
        years.forEach(function (year) {
          year.hidden = true;
        });
        matches.forEach(function (match) {
          results.appendChild(match.entry.element);
        });
      } else {
        results.hidden = true;
        restoreOriginalOrder();
        years.forEach(function (year) {
          year.hidden = false;
        });
      }

      empty.hidden = visibleCount !== 0;
      if (normalize(lastQuery) !== normalizedQuery) {
        scroller.scrollTop = 0;
        lastQuery = query;
      }
      updateStack();
    }

    if (scroller && stack && search) {
      search.setAttribute("tabindex", "-1");
      buildSearchIndex();
      groupByVenue();
      document.addEventListener("keydown", function (event) {
        var key = event.key && event.key.toLowerCase();
        if (key === "f" && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          showSearch();
        }
      });
      ["pointerdown", "mousedown", "touchstart", "click"].forEach(function (eventName) {
        document.addEventListener(eventName, function (event) {
          if (!isPublicationLinkTarget(event)) return;
          preserveSearchForResultClick();
        }, { capture: true, passive: true });
      });
      search.addEventListener("blur", handleSearchBlur);
      if (searchToggle) {
        searchToggle.addEventListener("click", showSearch);
      }
      scroller.addEventListener("scroll", updateStack, { passive: true });
      stack.addEventListener("click", function (event) {
        var button = event.target.closest("[data-jump-year]");
        if (!button) return;
        jumpToYear(button.getAttribute("data-jump-year"));
      });
      search.addEventListener("input", applySearch);
      search.addEventListener("search", applySearch);
      search.addEventListener("keyup", applySearch);
      window.addEventListener("resize", updateStack);
      updateStack();
    }
  }());
</script>
