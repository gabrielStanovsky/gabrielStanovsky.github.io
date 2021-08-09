---
title: "SLAB"
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
  </style>

</head>


<!--Our team focuses on ... -->

<table style="border:0px solid black;">
<tr>
<td style="border-bottom: 0;">
<h2> Ph.D </h2>
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
{% endfor %}

<tr>
<td style="border-bottom: 0;">
<h2> M.Sc. </h2>
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


<tr>
<td style="border-bottom: 0;">
<h2> B.Sc. </h2>
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
            <font style="font-size:16px">
              <b>Bsc:</b>
            </font>
        </td>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
             <font style="font-size:16px">
               Shahar Levy (2021)
            </font>
        </td>
</tr>

<tr>
        <td style="vertical-align:top; border-bottom: 0;width:30%;">
        <font style="font-size:16px">
        <b>Msc:</b>
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



</table>



