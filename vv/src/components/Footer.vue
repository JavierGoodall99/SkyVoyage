<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod nisi, in posuere libero pulvinar eu.</p>
        </div>
        <div class="col-md-4">
          <h4>Contact Us</h4>
          <p>125 Main Road <br> Cape Town, South Africa <br> Email: info@volunteerventures.com <br> Phone: (021) 703-7890</p>
        </div>
        <div class="col-md-4">
          <h4>Follow Us</h4>
          <ul class="social-icons">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <hr>
      <p class="text-center">Copyright © 2023 Volunteer Ventures</p>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: rgb(27, 61, 102);
  color: white;
  padding: 50px 0;
}

.footer h4 {
  color: white;
}

.footer p {
  color: white;
}

.social-icons li {
  display: inline-block;
  margin-right: 10px;
}

.social-icons li a i {
  font-size: 20px;
  color: white;
}

.social-icons li a i:hover {
  color: white;
}

hr {
  border-top: 1px solid white;
  border-bottom: none;
}
</style>