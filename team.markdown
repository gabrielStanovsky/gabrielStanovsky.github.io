---
title: "SLAB"
layout: single
excerpt: "Slab: Team"
sitemap: false
permalink: /team/
---

Our team focuses on ...


## PhD Students

{% for member in site.data.phd_students %}
<div>
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="20%" style="float: left; margin-right: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />
  <p>
  <h5> {{ member.name }} </h5>
  {{ member.info }}
  </p>
</div>
{% endfor %}

## Msc Students

{% for member in site.data.msc_students %}
<div>
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="20%" style="float: left; margin-right: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />
  <p>
  <h5> {{ member.name }} </h5>
  {{ member.info }}
  </p>
</div>
{% endfor %}
