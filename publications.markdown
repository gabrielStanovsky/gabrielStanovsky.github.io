---
layout: single
title: Publications
permalink: /publications/
header:
  image: /assets/images/pano_4_crop.png
---

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

<!--  <div id="content" class="container">
        Filter: <b>All</b> - <b><a href="bias.html">Model Analysis</a></b> - <b><a href="sem_rep.html">Semantic Representations</a></b> - <b><a href="downstream">Downstream Applications</a></b> 
    <br> -->

<!--    <h3> Conferences </h3> -->
    <br>
    {% for post in site.posts offset: 0 %}


    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

    {% if forloop.first %}
    <h3 id="{{ this_year }}-ref">{{this_year}}</h3>

    {% endif %}

    <!-- 			<div class="row"> -->
    <!--				<section class="8u -2u"> -->
    <header>
      <font style="font-weight:500;font-size:15px">
        {% unless post.pdf == 'NONE' %}
        <a href="/assets/papers/{{ post.base }}/{{ post.pdf }}" target="_blank">{{ post.title }}</a>
        {% endunless %}
        {% unless post.pdf-ext == 'NONE' %}
        <a href="{{ post.pdf-ext }}" target="_blank">{{ post.title }}</a>
        {% endunless %}
        {% if (post.pdf == 'NONE' and post.pdf-ext == 'NONE')  %}
        {{ post.title }}
        {% endif %}

      </font> <br>
      <i><font style="color:DimGray;font-size:15px">{{ post.authors }}</font></i> <br>
      <font style = "font-size:15px">
      {{ post.venue }} </font><br>
      {% unless post.pdf == 'NONE' %}
<!--      <a href="/assets/papers/{{ post.base }}/{{ post.pdf }}" target="_blank"><span class="label label-success">PDF</span></a> -->
      {% endunless %}

{% unless post.pdf-ext == 'NONE' %}
<!--
      <a href="{{ post.pdf-ext }}" target="_blank"><span class="label label-success">PDF</span></a> -->
      {% endunless %}

      {% unless post.data == %}
      <a href="{{ post.data }}" target="_blank"><span class="label label-success">{{ post.data-name }}</span></a>
      {% endunless %}

      {% unless post.code == 'NONE' %}
      <a href="{{ post.code }}" target="_blank"><span class="label label-primary">CODE</span></a>
      {% endunless %}

      {% unless post.talk == 'NONE' %}
      <a href="{{ post.talk }}" target="_blank"><span class="label label-warning">TALK</span></a>
      {% endunless %}

      {% unless post.slides == 'NONE' %}
      <a href="/assets/papers/{{ post.base }}/{{ post.slides }}" target="_blank"><span class="label label-danger">SLIDES</span></a>
      {% endunless %}

      {% unless post.poster == 'NONE' %}
      <a href="/assets/papers/{{ post.base }}/{{ post.poster }}" target="_blank"><span class="label label-info">POSTER</span></a>
      {% endunless %}

      {% unless post.bib == 'NONE' %}
      <a href="/assets/papers/{{ post.base }}/{{ post.bib }}" target="_blank"><span class="label label-default">BIB</span></a>
      {% endunless %}

      {% unless post.bib-ext == 'NONE' %}
      <a href="{{ post.bib-ext }}" target="_blank"><span class="label label-default">BIB</span></a>
      {% endunless %}


    </header>
    <!-- <a href="{{ site.prefix }}{{ post.url }}" class="button button-style1">Read More</a> -->
    <!--				</section> -->
    <!--			</div> > -->
    {% if this_year != next_year %}
    <br>
<h3 id="{{ next_year }}-ref">{{next_year}}</h3>

  {% endif %}
<br/>
    {% endfor %}
    

  </div>

