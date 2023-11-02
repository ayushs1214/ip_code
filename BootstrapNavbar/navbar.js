<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Navbar Example</title>
    <!-- Include Bootstrap CSS from a CDN (Content Delivery Network) -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-d7I12SO6lFD+OI0iGGD6PEsZ5Ujze9vDwF+W5q6f5rqEKMBenF5Cq5F5Cq7F5F1A9T5F5Cq5F5Cp7A+5+5O5A=="
      crossorigin="anonymous"
    >
</head>
<body>
    <!-- Bootstrap Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <!-- Brand/logo -->
            <a class="navbar-brand" href="#">My Website</a>

            <!-- Hamburger menu button for small screens -->
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navigation links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Include Bootstrap JavaScript and jQuery from a CDN -->
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha384-oj6E9j3f8U02/5O1Zz4BTI0pmxtAC6F0sw5NcWl5SzmVUn7F6i5F5K5C5F5F6F7D5"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
      integrity="sha384-o7yL5f+6zt4zBAj5dH7Nef1X6CKXcg5K5C5F5C5F5F5C5F5C5F5C5F5C5F5"
      crossorigin="anonymous"
    ></script>
</body>
</html>
