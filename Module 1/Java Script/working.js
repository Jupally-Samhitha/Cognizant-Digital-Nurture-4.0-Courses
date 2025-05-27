<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Community Events</title>

  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">

  <!-- Leaflet CSS for maps -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

  <style>
    #map {
      height: 300px;
      width: 100%;
      margin-top: 1rem;
    }
  </style>
</head>

<body>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Community Events</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#gallery">Gallery</a></li>
            <li class="nav-item"><a class="nav-link" href="#register">Register</a></li>
            <li class="nav-item"><a class="nav-link" href="#feedback">Feedback</a></li>
            <li class="nav-item"><a class="nav-link" href="#cards">Cards</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Welcome Message -->
    <header class="text-center bg-light py-5">
      <div class="container">
        <h1 id="welcome-message" class="display-4 text-primary">Welcome to Our Community Events!</h1>
        <p class="lead">Join us in making a difference.</p>
        <button class="btn btn-outline-primary btn-lg mt-3">Explore Events</button>
      </div>
    </header>

    <!-- Main Content Wrapper -->
    <main class="flex-grow-1">
      <!-- Image Gallery -->
      <section id="gallery" class="container my-5">
        <h2 class="mb-4">Event Gallery</h2>
        <div class="row g-3">
          <div class="col-12 col-sm-6 col-md-4"><img src="https://via.placeholder.com/300x200" class="img-fluid rounded" alt="Event 1"></div>
          <div class="col-12 col-sm-6 col-md-4"><img src="https://via.placeholder.com/300x200" class="img-fluid rounded" alt="Event 2"></div>
          <div class="col-12 col-sm-6 col-md-4"><img src="https://via.placeholder.com/300x200" class="img-fluid rounded" alt="Event 3"></div>
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-secondary">View More Photos</button>
        </div>
      </section>

      <!-- Cards Section -->
      <section id="cards" class="container my-5">
        <h2 class="mb-4">Featured Events</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100">
              <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Cleanup">
              <div class="card-body">
                <h5 class="card-title">Community Cleanup</h5>
                <p class="card-text">Help us clean and green our neighborhood this weekend.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Food Drive">
              <div class="card-body">
                <h5 class="card-title">Food Drive</h5>
                <p class="card-text">Join our effort to collect and distribute food to those in need.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Health Fair">
              <div class="card-body">
                <h5 class="card-title">Health Fair</h5>
                <p class="card-text">Free health screenings and wellness information for all ages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Video Invite -->
      <section class="container my-5">
        <h2 class="mb-4">Video Invite</h2>
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowfullscreen></iframe>
        </div>
      </section>

      <!-- Registration Form -->
      <section id="register" class="container my-5">
        <h2>Event Registration</h2>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <form id="registrationForm" class="needs-validation" novalidate>
              <div class="mb-3">
                <label for="fullname" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="fullname" required>
                <div class="invalid-feedback">Please enter your full name.</div>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required>
                <div class="invalid-feedback">Please enter a valid email.</div>
              </div>
              <div class="mb-3">
                <label for="event" class="form-label">Event</label>
                <select class="form-select" id="event" required>
                  <option value="">Select an event</option>
                  <option value="cleanup">Community Cleanup</option>
                  <option value="fooddrive">Food Drive</option>
                  <option value="healthfair">Health Fair</option>
                </select>
                <div class="invalid-feedback">Please select an event.</div>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message (Optional)</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
              <button type="reset" class="btn btn-outline-secondary ms-2">Clear</button>
            </form>
            <div id="registrationFeedback" class="mt-3"></div>
          </div>
        </div>
      </section>

      <!-- Feedback Form -->
      <section id="feedback" class="container my-5">
        <h2>Event Feedback</h2>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <form id="feedbackForm" class="needs-validation" novalidate>
              <div class="mb-3">
                <label for="username" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="username" required>
                <div class="invalid-feedback">Name is required.</div>
              </div>
              <div class="mb-3">
                <label for="rating" class="form-label">Rating</label>
                <select class="form-select" id="rating" required>
                  <option value="">Choose...</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                </select>
                <div class="invalid-feedback">Please select a rating.</div>
              </div>
              <div class="mb-3">
                <label for="comments" class="form-label">Comments</label>
                <textarea class="form-control" id="comments" rows="3" required></textarea>
                <div class="invalid-feedback">Please add a comment.</div>
              </div>
              <button type="submit" class="btn btn-success">Submit Feedback</button>
              <button type="reset" class="btn btn-outline-secondary ms-2">Clear</button>
            </form>
            <div id="feedbackDisplay" class="mt-3"></div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="container my-5">
        <h2>Event Locations</h2>
        <div id="mapStatus"></div>
        <div id="map"></div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-primary text-white text-center py-3">
      <p class="mb-0">&copy; 2025 Community Events. All rights reserved.</p>
    </footer>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

  <!-- Form Logic -->
  <script>
    (() => {
      'use strict';
      const forms = document.querySelectorAll('.needs-validation');
      forms.forEach(form => {
        form.addEventListener('submit', e => {
          if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    })();

    document.getElementById('registrationForm').addEventListener('submit', function (e) {
      e.preventDefault();
      if (this.checkValidity()) {
        const name = document.getElementById('fullname').value;
        const event = document.getElementById('event').value;
        document.getElementById('registrationFeedback').innerHTML = `
          <div class="alert alert-success mt-3">Thank you, <strong>${name}</strong>, for registering for the <strong>${event}</strong> event!</div>
        `;
      }
    });

    document.getElementById('feedbackForm').addEventListener('submit', function (e) {
      e.preventDefault();
      if (this.checkValidity()) {
        const user = document.getElementById('username').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comments').value;
        document.getElementById('feedbackDisplay').innerHTML = `
          <div class="alert alert-info mt-3">
            <strong>${user}</strong> rated the event as <strong>${rating}</strong> and commented: <em>${comment}</em>
          </div>
        `;
      }
    });
  </script>

  <!-- Modern JS Features -->
  <script>
    const eventNames = ["Cleanup", "Food Drive", "Health Fair"];
    const upperEvents = eventNames.map(e => e.toUpperCase());

    const eventMap = new Map([
      ["Cleanup", { date: "2025-06-01" }],
      ["Food Drive", { date: "2025-06-15" }],
      ["Health Fair", { date: "2025-07-10" }]
    ]);

    class Event {
      constructor(name, date) {
        this.name = name;
        this.date = date;
      }
      getDetails = () => `${this.name} is scheduled for ${this.date}`;
    }

    const eventInstances = upperEvents.map(name => {
      const original = name.toLowerCase().replace(" ", "");
      const details = eventMap.get(original.charAt(0).toUpperCase() + original.slice(1));
      return new Event(name, details?.date || "TBA");
    });

    console.log("Modern JS Event Instances:", eventInstances.map(e => e.getDetails()));
  </script>

  <!-- Map Script -->
  <script>
    function initializeMap(lat, lng, label = 'You are here') {
      const map = L.map('map').setView([lat, lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
      L.marker([lat, lng]).addTo(map).bindPopup(label).openPopup();
    }

    window.addEventListener('load', () => {
      const mapStatus = document.getElementById('mapStatus');

      setTimeout(() => {
        if (navigator.geolocation) {
          mapStatus.innerText = 'Locating...';
          navigator.geolocation.getCurrentPosition(
            pos => {
              mapStatus.innerText = '';
              initializeMap(pos.coords.latitude, pos.coords.longitude);
            },
            err => {
              mapStatus.innerHTML = '<div class="alert alert-danger">Unable to retrieve your location. Showing default location.</div>';
              initializeMap(40.7128, -74.0060, 'Default Location');
            }
          );
        } else {
          mapStatus.innerHTML = '<div class="alert alert-warning">Geolocation is not supported. Showing default location.</div>';
          initializeMap(40.7128, -74.0060, 'Default Location');
        }
      }, 300);
    });
  </script>
</body>
</html>
