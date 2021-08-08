---
title: "SLAB"
layout: single
excerpt: "Slab: Team"
sitemap: false
permalink: /group/
header:
  image: /assets/images/pano_2.jpg
---

<!--Our team focuses on ... -->

<table style="border:0px solid black;">
<tr>
<td style="border-bottom: 0;">
<h2> Phd Students </h2>
</td>
</tr>
{% for member in site.data.phd_students %}
<tr>
<td style="vertical-align:top; border-bottom: 0; width:30%;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="90%" style="float: left; margin-right: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />
</td>
<td style="vertical-align:top; border-bottom: 0;width:70%;">
  <h5> {{ member.name }} </h5>
  {{ member.info }}
</td>
<td></td>
</tr>
{% endfor %}

<tr>
<td style="border-bottom: 0;">
<h2> Msc Students </h2>
</td>
</tr>
{% for member in site.data.msc_students %}
<tr>
<td style="vertical-align:top; border-bottom: 0;width:30%;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="90%" style="float: left; margin-right: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />
</td>
<td style="vertical-align:top; border-bottom: 0;width:70%;">
  <h5> {{ member.name }} </h5>
  {{ member.info }}
</td>

</tr>
{% endfor %}


<tr>
<td style="border-bottom: 0;">
<h2> Bsc Students </h2>
</td>
</tr>
{% for member in site.data.bsc_students %}
<tr>
<td style="vertical-align:top; border-bottom: 0;width:30%;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="90%" style="float: left; margin-right: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />
</td>
<td style="vertical-align:top; border-bottom: 0;width:70%;">
  <h5> {{ member.name }} </h5>
  {{ member.info }}
</td>

</tr>
{% endfor %}


<tr>
        <td style="vertical-align:top; border-bottom: 0;">
            <h2> Alumni </h2>
        </td>
</tr>

<tr>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
            <b>Bsc:</b>
        </td>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
            Shahar Levy (2021)
        </td>
</tr>

<tr>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
        <b>Msc:</b>
        </td>
</tr>

<tr>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
            <b>Phd:</b>
       </td>

</tr>



</table>



