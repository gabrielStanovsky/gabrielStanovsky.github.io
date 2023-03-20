---
title: "SLAB ⛰️"
layout: single
excerpt: "Slab: Team"
sitemap: false
permalink: /group/
header:
  image: /assets/images/pano_2_crop.png
---
<head>
  <meta name="viewport" content="width=device-width, initial-scale=2">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
        body {
           font-size: 16px !important;
           color: #2020131;
           font-family: Nunito, sans-serif;
         }
         h3 {
           font-size: 18px;                   
         }
         h2 {
           font-size: 20px;
         }
         h1 {
           font-size: 22px;
         }

table {
        border-collapse: separate;
                border-spacing: 10px 10px;
        }
  </style>

</head>

<div>
We develop NLP models which deal with real-world texts and help answer multi-disciplanry research questions in various domains and langauges. We always welcome collaboration, please <a href="mailto:gabriel.stanovsky@mail.huji.ac.il" target="_blank">reach out</a> if interested! <br><br>

Visit our <a href="https://github.com/SLAB-NLP" target="_blank">github page</a> for a complete list of open source projects.
  
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/group_photo.png" class="img-responsive" width="60%" style="float: center; margin-center: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />

  
</div>

<table>
<tr>
<td style="border-bottom: 0;">
<h2> Current Members</h2>
</td>
</tr>

<tr>
<td style="border-bottom: 0;">
<h3> Ph.D. </h3>
</td>
</tr>
{% for member in site.data.phd_students %}
<tr>
<td style="vertical-align:top; border-bottom: 0; width:5%;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="60%" style="float: left; margin-right: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />
</td>
<td style="vertical-align:top; border-bottom: 0;width:85%;">
  <h3> {{ member.name }} </h3>
  <p style="font-size:16px;">
    {{ member.info }}
  </p>
</td>
<td></td>
</tr>
<tr></tr>
{% endfor %}

<!--
<tr>
<td style="border-bottom: 0;">
<h3> Visitors </h3>
</td>
</tr>
{% for member in site.data.visitors %}
<tr>
<td style="vertical-align:top; border-bottom: 0; width:5%;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="60%" style="float: left; margin-right: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />
</td>
<td style="vertical-align:top; border-bottom: 0;width:85%;">
  <h3> {{ member.name }} </h3>
  <p style="font-size:16px;">
    {{ member.info }}
  </p>
</td>
<td></td>
</tr>
<tr></tr>
{% endfor %}
-->



<tr>
<td style="border-bottom: 0;">
<h3> M.Sc. </h3>
</td>
</tr>
{% for member in site.data.msc_students %}
<tr>
<td style="vertical-align:top; border-bottom: 0; width:5%;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="60%" style="float: left; margin-right: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />
</td>
<td style="vertical-align:top; border-bottom: 0;width:85%;">
  <h3> {{ member.name }} </h3>
  <p style="font-size:16px;">
    {{ member.info }}
  </p>
</td>
<td></td>
</tr>
{% endfor %}

<!--
<tr>
<td style="border-bottom: 0;">
<h3> B.Sc. </h3>
</td>
</tr>
{% for member in site.data.bsc_students %}
<tr>
<td style="vertical-align:top; border-bottom: 0; width:5%;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="60%" style="float: left; margin-right: 2rem; border-radius: 8px; box-shadow: 5px 5px 5px #ccc;" />
</td>
<td style="vertical-align:top; border-bottom: 0;width:85%;">
  <h3> {{ member.name }} </h3>
  <p style="font-size:16px;">
    {{ member.info }}
  </p>
</td>
<td></td>
</tr>
{% endfor %}
-->

<br/>

<tr>
        <td style="vertical-align:top; border-bottom: 0;">
            <h2> Alumni </h2>
        </td>
</tr>

<tr>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
            <font style="font-size:16px">
              <b>Bsc:</b>
            </font>
        </td>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
             <font style="font-size:16px">
               Mohr Wenger (2021), Tom Kalir (2021), Shahar Levy (2021)
            </font>
        </td>
</tr>

<tr>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
        <font style="font-size:16px">
        <b>Msc:</b>
        </font>
        </td>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
             <font style="font-size:16px">
               Bar Eluz (2022), Dan Malkin (2022), Gili Lior (2022), Bar Tamir (2022), Eran Nussinovitch (2022), Sapir Weissbuch (2022), Koren Lazar (2021)
            </font>
        </td>

</tr>

<tr>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
        <font style="font-size:16px">
            <b>Phd:</b>
        </font>
       </td>

</tr>

<tr>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
        <font style="font-size:16px">
        <b>Visitors:</b>
        </font>
        </td>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
             <font style="font-size:16px">
               Tomasz Limisiewicz (2022)
            </font>
        </td>

</tr>




</table>



