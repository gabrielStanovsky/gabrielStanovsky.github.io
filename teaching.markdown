---
title: Teaching
layout: single
permalink: /teaching
header:
  image: /assets/images/pano_5_crop.jpg

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
<br>
I draw a lot of meaning and satisfaction out of teaching, and see it as an important role of my job at academia. I strive for effective communication, and believe that every subject can be made accessible to any audience. I regularly give a meta-presentation about <a href= "https://docs.google.com/presentation/d/1pEYlINlYdTUIBViRKEQrU3-ecGxeO5MQEobAE6ri2iE/edit?usp=sharing">How to Write</a> and <a href="https://docs.google.com/presentation/d/1LkZF2zVoV9oJYxt4S48uWwy7qwRRAvJyPwDI27UbpKE/edit?usp=sharing">How to Present</a>, my pale spinoff of the legendary <a href="https://youtu.be/Unzc731iCUY?si=uRG9qqFLtq4AMDYn">How to Speak </a> lecture by Prof. Patrick Winston. I won several teaching awards at the Hebrew University.

<div id="main">
  <div id="content" class="container">

<br>



    {% for post in site.data.teaching %}
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
      <i><font style="color:DimGray;font-size:15px;">{{ post.location }}, {{ post.time }}</font></i> <br>
      <i> {{ post.level }} level course ({{ post.students }} students) </i>

      <!-- {{ post.venue }} <br> -->
      {% unless post.paper == 'NONE' %}
      <br><a href="{{ post.paper }}" target="_blank"><span class="label label-warning">PAPER</span></a>
      {% endunless %}

</p>
</div>

    <!-- <a href="{{ site.prefix }}{{ post.url }}" class="button button-style1">Read More</a> -->
    <!--				</section> -->
    <!--			</div> > -->
    {% endfor %}

    <hr style='margin-bottom:-5em' />

  