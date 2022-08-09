

import React from "react";

import "../styles/Menu.css";

function Menu() {
  return (
    <div>
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
      
    </head>
    <div class="explore-menu-section pt-5 pb-5">
    
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="menu-section-heading">Menu</h1>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="shadow menu-item-card p-3 mb-3">
                <img
                  src="https://image.shutterstock.com/image-photo/bikaneri-seek-kebab-charcoal-grilled-600w-2123383745.jpg"
                  class="menu-item-image w-100" alt="starters"
                />
                <h1 class="menu-card-title">Veg Starters</h1>
                <a href="/Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="shadow menu-item-card p-3 mb-3">
                <img
                  src="https://image.shutterstock.com/image-photo/chicken-leg-piece-served-plate-600w-1621465948.jpg"
                  class="menu-item-image w-100" alt="veg"
                />
                <h1 class="menu-card-title">Non-Veg Starters</h1>
                <a href="/Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
              <div class="shadow menu-item-card p-3 mb-3">
                <img
                  src="https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?s=612x612"
                  class="menu-item-image w-100" alt="biryani"
                />
                <h1 class="menu-card-title">Biryani's</h1>
                <a href="Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>


            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://media.istockphoto.com/photos/seafood-lunch-on-the-beach-picture-id1059571390?s=612x612"
                  class="menu-item-image w-100" alt="fish"
                />
                <h1 class="menu-card-title">Fish</h1>
                <a href="Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://media.istockphoto.com/photos/variety-of-garnished-soups-in-colorful-bowls-picture-id595734992?s=612x612"
                  class="menu-item-image w-100" alt="soups"
                />
                <h1 class="menu-card-title">Soups</h1>
                <a href="Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            

            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/j8qvsdybeu4tz008irld"
                  class="menu-item-image w-100" alt="mandi"
                />
                <h1 class="menu-card-title">Mandi</h1>
                <a href="Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://img.freepik.com/free-photo/close-uo-fork-with-spaghetti-tomato-sauce_101125-968.jpg?w=996"
                  class="menu-item-image w-100" alt="chinese"
                />
                <h1 class="menu-card-title">Chinese Food</h1>
                <a href="Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://img.freepik.com/free-photo/ice-cream-scoops-bowl-mixed-ice-cream-ice-cream-cup-black-background_64762-40.jpg?w=996"
                  class="menu-item-image w-100" alt="ice"
                />
                <h1 class="menu-card-title">Ice Creams</h1>
                <a href="Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>


            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://img.freepik.com/free-vector/soft-drink-contained-metallic-cans-with-lemon-ice-cube-elements-light-blue-background_317442-47.jpg?w=900"
                  class="menu-item-image w-100" alt="soft"
                />
                <h1 class="menu-card-title">Soft-Drinks</h1>
                <a href="Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://img.freepik.com/free-photo/selection-various-cocktails-table_140725-2909.jpg?t=st=1656406023~exp=1656406623~hmac=1f7706ba3c7d7c26c0039ac032bdacdbbb100e834d8c093be907f259dc5842cb&w=826"
                  class="menu-item-image w-100" alt="mocktails"
                />
                <h1 class="menu-card-title">Mocktails</h1>
                <a href="Menulist" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            
          </div>
        </div>
        </div>
      </div>
  );
}

export default Menu

