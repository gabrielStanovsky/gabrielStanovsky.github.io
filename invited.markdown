---
title: Invited Talks
layout: single
permalink: /talks/
header:
  image: /assets/images/pano_3_crop.png

---

<!-- Main -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
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
           font-size: 20px;                   
         }
         h2 {
           font-size: 22px;
         }
         h1 {
           font-size: 24px;
         }
  </style>
         
         

</head>

<div id="main">
  <div id="content" class="container">

<br>
    {% for post in site.data.invited_talks %}
    <!-- 			<div class="row"> -->
    <!--				<section class="8u -2u"> -->
          <br/>
    <header>
<font style="font-weight:500;font-size:15px">

<div>
<p>
        {% unless post.pdf == 'NONE' %}
        <a href="/assets/invited_talks/{{ post.base }}/{{ post.pdf }}">{{ post.title }}</a>
        {% endunless %}
        {% unless post.pdf-ext == 'NONE' %}
        <a href="{{ post.pdf-ext }}">{{ post.title }}</a>
        {% endunless %}

       <br>
      <i><font style="color:DimGray;font-size:15px;">{{ post.authors }}</font></i> <br>

      <!-- {{ post.venue }} <br> -->
      {% unless post.talk == 'NONE' %}
      <a href="{{ post.talk }}" target="_blank"><span class="label label-warning">TALK</span></a>
      {% endunless %}

</p>
</div>

    <!-- <a href="{{ site.prefix }}{{ post.url }}" class="button button-style1">Read More</a> -->
    <!--				</section> -->
    <!--			</div> > -->
    {% endfor %}

    <hr style='margin-bottom:-5em' />

  