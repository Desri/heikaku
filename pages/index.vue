<template>
  <div>

    <header class="agency">
      <!-- Logo -->
      <div class="logo white">
        <img src="@/static/assets/images/logo-bg-white.png" class="black" alt="" style="width: 90px">
      </div>
      <!-- Navigation -->
      <div @click="showListMenu(action)" id="icon-menu" class="mobile-btn">
        <i class="fas fa-hamburger"></i>
        <i class="fas fa-times"></i>
      </div>
      <nav id="navigationBox">
        <div class="nav-menu">
          <ul>
            <li id="menu-home"><a href="javascript:void(0)" @click="goTo('hero')">Home</a></li>
            <li id="menu-about"><a href="javascript:void(0)" @click="goTo('about')">Why Us?</a></li>
            <li id="menu-benefit"><a href="javascript:void(0)" @click="goTo('benefit')">Benefit</a></li>
            <li id="menu-price"><a href="javascript:void(0)" @click="goTo('plan')">Price</a></li>
            <li id="menu-contact"><a href="javascript:void(0)" @click="goTo('contact')">Contact</a></li>
          </ul>
        </div>
      </nav>
      <!-- Down/up arrow -->
      <a href="#/about" class="down-arrow">
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="14.486" height="18.412" viewBox="0 0 14.486 18.412">
          <path d="M7.073,26.241h0L0,19.172l1.414-1.415,4.829,4.829V8h2V22.586l4.829-4.829,1.415,1.415-7.241,7.24Z" transform="translate(0 -8)"></path>
        </svg>
      </a>
      <!-- Say Hello -->
      <a href="#/contact" class="say-hello">Say Hello</a>
      <!-- Social Links -->
      <div class="follow-us">    
          <i class="follow fas fa-share-alt"></i>
        <ul class="social-links">
          <li><a href="http://instagram.com/inviteme.digital" target="_blank"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
        </ul>
      </div>
    </header>

    <div id="main" class="site-main">

      <!-- HOME SECTION
      ================================================== --> 
      <section id="hero" class="pt-page page-layout hero agency page-current">
          <div class="outter">
            <div class="inner text-center">
              <span class="little">Welcome to Perfect Digital Invitation</span>
              <h1 class="title">InviteMe!<br>
                  <span id="element" data-typist="To Be Perfect">Create Your Best Moment Here</span></h1>
                  <div class="down-link no-border">
                      <a href="#/about" class="section-down-arrow ">
                          <svg class="nectar-scroll-icon" viewBox="0 0 30 45" enable-background="new 0 0 30 45">
                              <path class="nectar-scroll-icon-path" fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z">
                              </path>
                          </svg>
                      </a>
                  </div> 
            </div>
          </div>
          <div class="video-wrapper"> 
            <video loop="" muted="" autoplay>
                <source src="@/static/assets/images/videos/videobg.webm" type="video/webm">
                <source src="@/static/assets/images/videos/videobg.mp4" type="video/mp4">
            </video>   
            <!--<div class="gif" style="background:url('images/videos/home.gif') no-repeat center center fixed"></div>-->
          </div>
      </section>

      <!-- ABOUT SECTION
      ================================================== --> 
      <section id="about" class="pt-page page-layout">
          <div class="section-out">
            <div class="inclusive">
                <!-- page title -->
                <div class="page-caption">
                  <h1 class="page-title">Our<br><span>Intro</span></h1>
                  <h2 class="page-subtitle" >We help to simplify invitation process for your event.</h2>
                </div>
              <!-- Who we are -->
              <div class="row split-content whoweare">
                <div class="col-lg-4">
                  <h2 class="little-title">Who we are?</h2>
                </div>
                <div class="col-lg-7 second">
                    <p>Welcome to InviteMe!</p>
                  <p>InviteMe! is a perfect digital invitation platform designed practically to help you organize all things related to invitations.</p>
                    <p>By using InviteMe! the process of inviting guests can be set automatically by our system. Starting from the recap of guest data, invitation distribution, attendance registration, guest barcode code, guest book, table number & envelope, cashless payment, photos of guests who attend, everything has been made in full in just one platform, named InviteMe!</p>
                    <p>We are handle for any event like Wedding, Birthday, Music Event, Reunion, etc.</p>
                </div>
              </div>
            </div>

            <!-- Call to action -->
            <a href="https://api.whatsapp.com/send?phone=081288051455&text=Hello InviteMe!" target="_blank" class="cta text-center">
              <div class="got-project">You need Us for Invitation Management?</div>
              <div class="lets"><span>Let's</span> talk.</div>
            </a>

            <!-- footer -->
              <footer>
                <div class="row">
                  <p class="col-lg-6 col-md-6 col-sm-6">© 2020 InviteMe. All rights reserved.</p>
                  <p class="col-lg-6 col-md-6 col-sm-6 ft-right">Built by Luvemedia</p>
                </div>
              </footer>

          </div> <!-- inclusive end -->
      </section>

      <!-- ABOUT SECTION
      ================================================== -->
      <section id="benefit" class="pt-page page-layout">
          <div class="section-out3">
              <div class="inclusive">
                  <!-- page title -->
                  <div class="page-caption">
                      <h1 class="page-title">Benefit<br><span>Comparison</span></h1>
                      <h2 class="page-subtitle" >Before you using our service, better you know about InviteMe benefit.</h2>
                  </div>
                  <!-- Who we are -->
                  <div class="row">
                      <div class="col-xl-12">
                          <table>
                              <thead>
                                  <tr>
                                      <th>Poin</th>
                                      <th>Conventional</th>
                                      <th>InviteMe!</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Invitation Handling</td>
                                      <td>By your self</td>
                                      <td>Our Team will handling all your invitation with system</td>
                                  </tr>
                                  <tr>
                                      <td>Invitation Spread Radius</td>
                                      <td>Limited</td>
                                      <td>Unlimited</td>
                                  </tr>
                                  <tr>
                                      <td>Reservation</td>
                                      <td>No or manual reservation</td>
                                      <td>Will be handling by reservation system</td>
                                  </tr>
                                  <tr>
                                      <td>Delivery Time</td>
                                      <td>Slow</td>
                                      <td>Very Fast Will be handling by system</td>
                                  </tr>
                                  <tr>
                                      <td>Paperless </td>
                                      <td>No, because we you must print the invitation</td>
                                      <td>Yes, we using system to all process</td>
                                  </tr>
                                  <tr>
                                      <td>Accurate</td>
                                      <td>Very possible</td>
                                      <td>Yes, we deliver to personal phone number via WhatApp</td>
                                  </tr>
                                  <tr>
                                      <td>Wedding Crasher</td>
                                      <td>Very possible</td>
                                      <td>No, we use qrcode as verification for invited guests before entering your event</td>
                                  </tr>
                                  <tr>
                                      <td>Efficient & Effective</td>
                                      <td>Very Complicated</td>
                                      <td>Yes, you can find out the number of invitees who will attend</td>
                                  </tr>
                                  <tr>
                                      <td>Editable</td>
                                      <td>Very Complicated</td>
                                      <td>Yes, you can change the guest list as you like</td>
                                  </tr>
                                  <tr>
                                      <td>New Experience</td>
                                      <td>Nothing new experience</td>
                                      <td>Can provide new experiences for invited guests</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>

              <!-- Call to action -->
              <a href="https://api.whatsapp.com/send?phone=081288051455&text=Hello InviteMe!" target="_blank" class="cta text-center">
                  <div class="got-project">You need Us for Invitation Management?</div>
                  <div class="lets"><span>Let's</span> talk.</div>
              </a>

              <!-- footer -->
              <footer>
                  <div class="row">
                      <p class="col-lg-6 col-md-6 col-sm-6">© 2020 InviteMe. All rights reserved.</p>
                      <p class="col-lg-6 col-md-6 col-sm-6 ft-right">Built by Luvemedia</p>
                  </div>
              </footer>

          </div> <!-- inclusive end -->
      </section>

      <!-- PLAN SECTION
      ================================================== --> 
      <section id="plan" class="pt-page page-layout">
          <div class="">
              <div class="inclusive">
                  <!-- page title -->
                  <div class="page-caption">
                      <h1 class="page-title">Choose<br><span>Your Plan</span></h1>
                      <h2 class="page-subtitle">You can choose of our packages base on needed.</h2>
                  </div>
                  <div class="row masonry">

                      <!-- a news -->
                      <div class="col-xl-6 grid-item">
                          <div class="news">
                              <div class="news-content">
                                  <div class="author-info">
                                      <div class="author-logo">
                                          <img src="@/static/assets/images/logo_icon.png" alt="" style="width: 58px">
                                      </div>
                                      <div class="news-info">
                                          <div class="author-name">
                                              Silver <span>Packages</span>
                                          </div>
                                          <div class="news-date">
                                              Rp.1.999.000
                                          </div>
                                      </div>
                                  </div>
                                  <div class="outter">
                                      <div class="inner">
                                          <p>
                                          <ul>
                                              <li>Dedicated internet connection</li>
                                              <li>50 Invitation, QR Code by WhatsApp</li>
                                              <li>Reservation System Only</li>
                                              <li>2 Device</li>
                                              <li>Digital Guest Book <b>without</b> Selfie</li>
                                              <li style="text-decoration: line-through">Seating Arragement on App</li>
                                              <li style="text-decoration: line-through">Angpao Support by System</li>
                                              <li style="text-decoration: line-through">Print QR Code - Namecard Size</li>
                                              <li style="text-decoration: line-through">Print Physical Invitation</li>
                                              <li>Technical Advisor</li>
                                          </ul>
                                          </p>
                                          <a href="https://api.whatsapp.com/send?phone=081288051455&text=Hello InviteMe!" target="_blank" class="read">Call Us <svg height="16pt" viewBox="-23 -21 682 682.66669" width="16pt" xmlns="http://www.w3.org/2000/svg">
                                              <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" fill-rule="evenodd"/>
                                          </svg></a>
                                      </div>
                                  </div>
                              </div>
                              <div class="image"  style="background-image:url('../assets/images/news-1.jpg');">
                                  <img src="@/static/assets/images/news-1.jpg" alt="">
                              </div>
                          </div>
                      </div>

                      <div class="col-xl-6 grid-item">
                          <div class="news">
                              <div class="news-content">
                                  <div class="author-info">
                                      <div class="author-logo">
                                          <img src="@/static/assets/images/logo_icon.png" alt="" style="width: 58px">
                                      </div>
                                      <div class="news-info">
                                          <div class="author-name">
                                              Gold <span>Packages</span>
                                          </div>
                                          <div class="news-date">
                                              Rp.3.999.000
                                          </div>
                                      </div>
                                  </div>
                                  <div class="outter">
                                      <div class="inner">
                                          <p>
                                          <ul>
                                              <li>Dedicated internet connection</li>
                                              <li>100 Invitation, QR Code by WhatsApp</li>
                                              <li>Website Wedding & Reservation System</li>
                                              <li>2 Device</li>
                                              <li>Digital Guest Book with Selfie</li>
                                              <li style="text-decoration: line-through">Seating Arragement on App</li>
                                              <li style="text-decoration: line-through">Angpao Support by System</li>
                                              <li>Print QR Code - Namecard Size</li>
                                              <li style="text-decoration: line-through">Print Physical Invitation</li>
                                              <li>Technical Advisor</li>
                                          </ul>
                                          </p>
                                          <a href="https://api.whatsapp.com/send?phone=081288051455&text=Hello InviteMe!" target="_blank" class="read">Call Us <svg height="16pt" viewBox="-23 -21 682 682.66669" width="16pt" xmlns="http://www.w3.org/2000/svg">
                                              <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" fill-rule="evenodd"/>
                                          </svg></a>
                                      </div>
                                  </div>
                              </div>
                              <div class="image"  style="background-image:url('../assets/images/news-1.jpg');">
                                  <img src="@/static/assets/images/news-1.jpg" alt="">
                              </div>
                          </div>
                      </div>

                      <div class="col-xl-6 grid-item">
                          <div class="news">
                              <div class="news-content">
                                  <div class="author-info">
                                      <div class="author-logo">
                                          <img src="@/static/assets/images/logo_icon.png" alt="" style="width: 58px">
                                      </div>
                                      <div class="news-info">
                                          <div class="author-name">
                                              Platinum <span>Packages</span>
                                          </div>
                                          <div class="news-date">
                                              Rp.6.999.000
                                          </div>
                                      </div>
                                  </div>
                                  <div class="outter">
                                      <div class="inner">
                                          <p>
                                          <ul>
                                              <li>Dedicated internet connection</li>
                                              <li>250 Invitation, QR Code by WhatsApp</li>
                                              <li>Website Wedding & Reservation System</li>
                                              <li>4 Device</li>
                                              <li>Digital Guest Book with Selfie</li>
                                              <li>Seating Arragement on App</li>
                                              <li>Angpao Support by System</li>
                                              <li>Print QR Code - Namecard Size</li>
                                              <li>Print Physical Invitation</li>
                                              <li>Technical Advisor</li>
                                          </ul>
                                          </p>
                                          <a href="https://api.whatsapp.com/send?phone=081288051455&text=Hello InviteMe!" target="_blank" class="read">Call Us <svg height="16pt" viewBox="-23 -21 682 682.66669" width="16pt" xmlns="http://www.w3.org/2000/svg">
                                              <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" fill-rule="evenodd"/>
                                          </svg></a>
                                      </div>
                                  </div>
                              </div>
                              <div class="image"  style="background-image:url('../assets/images/news-1.jpg');">
                                  <img src="@/static/assets/images/news-1.jpg" alt="">
                              </div>
                          </div>
                      </div>

                      <div class="col-xl-6 grid-item">
                          <div class="news">
                              <div class="news-content">
                                  <div class="author-info">
                                      <div class="author-logo">
                                          <img src="@/static/assets/images/logo_icon.png" alt="" style="width: 58px">
                                      </div>
                                      <div class="news-info">
                                          <div class="author-name">
                                              Diamond <span>Packages</span>
                                          </div>
                                          <div class="news-date">
                                              Rp.9.999.000
                                          </div>
                                      </div>
                                  </div>
                                  <div class="outter">
                                      <div class="inner">
                                          <p>
                                          <ul>
                                              <li>Dedicated internet connection</li>
                                              <li>500 Invitation, QR Code by WhatsApp</li>
                                              <li>Website Wedding & Reservation System</li>
                                              <li>6 Device</li>
                                              <li>Digital Guest Book with Selfie</li>
                                              <li>Seating Arragement on App</li>
                                              <li>Angpao Support by System</li>
                                              <li>Print QR Code - Namecard Size</li>
                                              <li>Print Physical Invitation</li>
                                              <li>Technical Advisor</li>
                                          </ul>
                                          </p>
                                          <a href="https://api.whatsapp.com/send?phone=081288051455&text=Hello InviteMe!" target="_blank" class="read">Call Us <svg height="16pt" viewBox="-23 -21 682 682.66669" width="16pt" xmlns="http://www.w3.org/2000/svg">
                                              <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" fill-rule="evenodd"/>
                                          </svg></a>
                                      </div>
                                  </div>
                              </div>
                              <div class="image"  style="background-image:url('../assets/images/news-1.jpg');">
                                  <img src="@/static/assets/images/news-1.jpg" alt="">
                              </div>
                          </div>
                      </div>

                  </div> <!-- row end -->

                  <!-- Call to action -->
                  <a href="https://api.whatsapp.com/send?phone=081288051455&text=Hello InviteMe! Kami adalah WO yang ingin bertanya lebih lanjut soal kemitraan InviteMe!" target="_blank" class="cta text-center">
                      <div class="got-project">If you have a wedding organizer service business, we really hope to partner with you and let's get special price from us</div>
                      <div class="lets"><span>Let's</span> talk.</div>
                  </a>

                  <!-- footer -->
                  <footer>
                      <div class="row">
                          <p class="col-lg-6 col-md-6 col-sm-6">© 2020 InviteMe. All rights reserved.</p>
                          <p class="col-lg-6 col-md-6 col-sm-6 ft-right">Built by Luvemedia</p>
                      </div>
                  </footer>

              </div>
          </div>
      </section>

      <!-- CONTACT SECTION
      ================================================== --> 
      <section id="contact" class="pt-page page-layout">
          <div class="section-out2">
              <div class="inclusive">
                  <!-- page title -->
                  <div class="page-caption">
                      <h1 class="page-title">Get in<br><span>Touch</span></h1>
                      <h2 class="page-subtitle">Where you can find us?</h2>
                  </div>

                  <!-- Map-->
                  <div class="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.074817131886!2d107.60006311477271!3d-6.881640695027234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6f39283a3db%3A0x49828164e2889971!2sJl.%20Hegarmanah%20No.10%2C%20Hegarmanah%2C%20Kec.%20Cidadap%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040141!5e0!3m2!1sen!2sid!4v1603642008501!5m2!1sen!2sid" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                  </div>

                  <div class="contact-information row">
                      <!-- form -->
                      <div class="col-xl-5">
                          <div id="contact-formular">
                              <div id="message"></div>
                              <form method="post" action="contact.php" name="contactform" id="contactform">
                                  <!-- name -->
                                  <div class="form-group">
                                      <div class="placeholder">Your name</div>
                                      <input class="inp" name="name" type="text" id="name">
                                  </div>
                                  <!-- email -->
                                  <div class="form-group">
                                      <div class="placeholder">Your e-mail</div>
                                      <input class="inp" name="email" type="text" id="email">
                                  </div>
                                  <!-- company -->
                                  <div class="form-group">
                                      <div class="placeholder">Your Company</div>
                                      <input class="inp" name="company" type="text" id="company">
                                  </div>
                                  <!-- about project -->
                                  <div class="form-group">
                                      <div class="placeholder">Tell us about your project</div>
                                      <textarea class="inp" name="comments" id="comments" rows="1"  placeholder=""></textarea>
                                  </div>
                                  <!-- button -->
                                  <div class="form-btn">
                                      <input class="site-btn" type="submit" value="Sent it">
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div class="col-xl-6 offset-xl-1">
                          <div class="contact-info email">
                              <span>Or just say</span>
                              <a href="mailto:nope@lavanda.id">info@luvemedia.id</a>
                          </div>
                          <div class="contact-info address">
                              <span>Our Camp</span>
                              <p>Jl Hegarmanah No. 10<br>
                                  Kota Bandung<br>
                                  Tel. +62 812 8805 1455</p>
                          </div>
                          <div class="contact-info address">
                              <span>Follow us</span>
                              <a href="https://instagram.com/inviteme.digital">Instagram.</a>
                          </div>
                      </div>
                  </div>


                  <!-- footer -->
                  <footer>
                      <div class="row">
                          <p class="col-lg-6 col-md-6 col-sm-6">© 2020 InviteMe. All rights reserved.</p>
                          <p class="col-lg-6 col-md-6 col-sm-6 ft-right">Built by Luvemedia</p>
                      </div>
                  </footer>

              </div>
          </div>
      </section>

    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    components:{
      
    },
    data() {
      return {
        action: '',
      }
    },
    computed: {
			...mapGetters({
				
			}),
		},
    async mounted() {
      
    },
    methods: {
      showListMenu(data){
        if (data == '') {
          let listMenu = document.getElementById("icon-menu");
          listMenu.classList.add("itsopend");
          let navigation = document.getElementById("navigationBox");
          navigation.classList.add("opened");
          this.action = 'open'
        }else if (data == 'open') {
          let listMenu = document.getElementById("icon-menu");
          listMenu.classList.remove("itsopend");
          let navigation = document.getElementById("navigationBox");
          navigation.classList.remove("opened");
          this.action = ''
        }
      },
      goTo(data){
        if (data == 'hero') {
          let el1 = document.getElementById("hero");
          el1.classList.add("page-current");
          let el2 = document.getElementById("about");
          el2.classList.remove("page-current");
          let el3 = document.getElementById("benefit");
          el3.classList.remove("page-current");
          let el4 = document.getElementById("plan");
          el4.classList.remove("page-current");
          let el5 = document.getElementById("contact");
          el5.classList.remove("page-current");

          let menu1 = document.getElementById("menu-home");
          menu1.classList.add("current_page_item");
          let menu2 = document.getElementById("menu-about");
          menu2.classList.remove("current_page_item");
          let menu3 = document.getElementById("menu-benefit");
          menu3.classList.remove("current_page_item");
          let menu4 = document.getElementById("menu-price");
          menu4.classList.remove("current_page_item");
          let menu5 = document.getElementById("menu-contact");
          menu5.classList.remove("current_page_item");

          let listMenu = document.getElementById("icon-menu");
          listMenu.classList.remove("itsopend");
          let navigation = document.getElementById("navigationBox");
          navigation.classList.remove("opened");
          this.action = ''

        }else if (data == 'about') {
          let el2 = document.getElementById("about");
          el2.classList.add("page-current");
          let el1 = document.getElementById("hero");
          el1.classList.remove("page-current");
          let el3 = document.getElementById("benefit");
          el3.classList.remove("page-current");
          let el4 = document.getElementById("plan");
          el4.classList.remove("page-current");
          let el5 = document.getElementById("contact");
          el5.classList.remove("page-current");

          let menu1 = document.getElementById("menu-home");
          menu1.classList.remove("current_page_item");
          let menu2 = document.getElementById("menu-about");
          menu2.classList.add("current_page_item");
          let menu3 = document.getElementById("menu-benefit");
          menu3.classList.remove("current_page_item");
          let menu4 = document.getElementById("menu-price");
          menu4.classList.remove("current_page_item");
          let menu5 = document.getElementById("menu-contact");
          menu5.classList.remove("current_page_item");

          let listMenu = document.getElementById("icon-menu");
          listMenu.classList.remove("itsopend");
          let navigation = document.getElementById("navigationBox");
          navigation.classList.remove("opened");
          this.action = ''

        }else if (data == 'benefit') {
          let el3 = document.getElementById("benefit");
          el3.classList.add("page-current");
          let el1 = document.getElementById("hero");
          el1.classList.remove("page-current");
          let el2 = document.getElementById("about");
          el2.classList.remove("page-current");
          let el4 = document.getElementById("plan");
          el4.classList.remove("page-current");
          let el5 = document.getElementById("contact");
          el5.classList.remove("page-current");

          let menu1 = document.getElementById("menu-home");
          menu1.classList.remove("current_page_item");
          let menu2 = document.getElementById("menu-about");
          menu2.classList.remove("current_page_item");
          let menu3 = document.getElementById("menu-benefit");
          menu3.classList.add("current_page_item");
          let menu4 = document.getElementById("menu-price");
          menu4.classList.remove("current_page_item");
          let menu5 = document.getElementById("menu-contact");
          menu5.classList.remove("current_page_item");

          let listMenu = document.getElementById("icon-menu");
          listMenu.classList.remove("itsopend");
          let navigation = document.getElementById("navigationBox");
          navigation.classList.remove("opened");
          this.action = ''

        }else if (data == 'plan') {
          let el4 = document.getElementById("plan");
          el4.classList.add("page-current");
          let el3 = document.getElementById("benefit");
          el3.classList.remove("page-current");
          let el1 = document.getElementById("hero");
          el1.classList.remove("page-current");
          let el2 = document.getElementById("about");
          el2.classList.remove("page-current");
          let el5 = document.getElementById("contact");
          el5.classList.remove("page-current");

          let menu1 = document.getElementById("menu-home");
          menu1.classList.remove("current_page_item");
          let menu2 = document.getElementById("menu-about");
          menu2.classList.remove("current_page_item");
          let menu3 = document.getElementById("menu-benefit");
          menu3.classList.remove("current_page_item");
          let menu4 = document.getElementById("menu-price");
          menu4.classList.add("current_page_item");
          let menu5 = document.getElementById("menu-contact");
          menu5.classList.remove("current_page_item");

          let listMenu = document.getElementById("icon-menu");
          listMenu.classList.remove("itsopend");
          let navigation = document.getElementById("navigationBox");
          navigation.classList.remove("opened");
          this.action = ''

        }else if (data == 'contact') {
          let el5 = document.getElementById("contact");
          el5.classList.add("page-current");
          let el4 = document.getElementById("plan");
          el4.classList.remove("page-current");
          let el3 = document.getElementById("benefit");
          el3.classList.remove("page-current");
          let el1 = document.getElementById("hero");
          el1.classList.remove("page-current");
          let el2 = document.getElementById("about");
          el2.classList.remove("page-current");

          let menu1 = document.getElementById("menu-home");
          menu1.classList.remove("current_page_item");
          let menu2 = document.getElementById("menu-about");
          menu2.classList.remove("current_page_item");
          let menu3 = document.getElementById("menu-benefit");
          menu3.classList.remove("current_page_item");
          let menu4 = document.getElementById("menu-price");
          menu4.classList.remove("current_page_item");
          let menu5 = document.getElementById("menu-contact");
          menu5.classList.add("current_page_item");

          let listMenu = document.getElementById("icon-menu");
          listMenu.classList.remove("itsopend");
          let navigation = document.getElementById("navigationBox");
          navigation.classList.remove("opened");
          this.action = ''

        }
      },
    }

  }
</script>
