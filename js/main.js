$(document).ready(function () {

  var showHeaderAt = 150;

  var win = $(window),
    body = $('body');

  // Show the fixed header only on larger screen devices

  if (win.width() > 400) {

    // When we scroll more than 150px down, we set the
    // "fixed" class on the body element.

    win.on('scroll', function (e) {

      if (win.scrollTop() > showHeaderAt) {
        // body.addClass('fixed');
      }
      else {
        body.removeClass('fixed');
      }
    });

  }

});



// Search Function


 let data = [
    {
      image:"../img/blog-design-2.png",
      tag: "Tips",
      title: "Managing Stress with Autoimmune Disease: Tips and Techniques",
      text: "Learn how to manage stress when living with autoimmune disease with these particular tips and techniques. Learn how to manage....",
      profiler: "../img/blog2-design1-profile-img.png",
      author: "By Jenny Agnes",
      date: "Tues, 17 May 2023"
    },
    {
      image:"../img/blog-design-2.png",
      tag: "Tips",
      title: "Eating for Autoimmune Health: Tips for a Nutrient-Dense Diet",
      text: "Discover how the right nutrition can support autoimmune health with these tips for a nutrient-dense diet. Discover how the right...",
      profiler: "../img/blog2-design1-profile-img.png",
      author: "By Julian Athorn",
      date: "Wed, 22 January 2023"
    },
    {
      image:"../img/blog-design-2.png",
      tag: "Tips",
      title: "Managing Stress with Autoimmune Disease: Tips and Techniques",
      text: "Learn how to manage stress when living with autoimmune disease with these particular tips and techniques. Learn how to manage....",
      profiler: "../img/blog2-design1-profile-img.png",
      author: "By Jenny Agnes",
      date: "Tues, 17 May 2023"
    },
    {
      image:"../img/blog-design-2.png",
      tag: "Tips",
      title: "Eating for Autoimmune Health: Tips for a Nutrient-Dense Diet",
      text: "Discover how the right nutrition can support autoimmune health with these tips for a nutrient-dense diet. Discover how the right...",
      profiler: "../img/blog2-design1-profile-img.png",
      author: "By Julian Athorn",
      date: "Wed, 22 January 2023"
    },
    {
      image:"../img/blog-design-2.png",
      tag: "Tips",
      title: "Managing Stress with Autoimmune Disease: Tips and Techniques",
      text: "Learn how to manage stress when living with autoimmune disease with these particular tips and techniques. Learn how to manage....",
      profiler: "../img/blog2-design1-profile-img.png",
      author: "By Jenny Agnes",
      date: "Tues, 17 May 2023"
    },
    {
      image:"../img/blog-design-2.png",
      tag: "Tips",
      title: "Eating for Autoimmune Health: Tips for a Nutrient-Dense Diet",
      text: "Discover how the right nutrition can support autoimmune health with these tips for a nutrient-dense diet. Discover how the right...",
      profiler: "../img/blog2-design1-profile-img.png",
      author: "By Julian Athorn",
      date: "Wed, 22 January 2023"
    },
    {
      image:"../img/blog-design-2.png",
      tag: "Tips",
      title: "Managing Stress with Autoimmune Disease: Tips and Techniques",
      text: "Learn how to manage stress when living with autoimmune disease with these particular tips and techniques. Learn how to manage....",
      profiler: "../img/blog2-design1-profile-img.png",
      author: "By Jenny Agnes",
      date: "Tues, 17 May 2023"
    },
    {
      image:"../img/blog-design-2.png",
      tag: "Tips",
      title: "Eating for Autoimmune Health: Tips for a Nutrient-Dense Diet",
      text: "Discover how the right nutrition can support autoimmune health with these tips for a nutrient-dense diet. Discover how the right...",
      profiler: "../img/blog2-design1-profile-img.png",
      author: "By Julian Athorn",
      date: "Wed, 22 January 2023"
    },
    {
      image:"../img/blog-design-2.png",
      tag: "Tips",
      title: "Managing Stress with Autoimmune Disease: Tips and Techniques",
      text: "Learn how to manage stress when living with autoimmune disease with these particular tips and techniques. Learn how to manage....",
      profiler: "../img/blog2-design1-profile-img.png",
      author: "By Jenny Agnes",
      date: "Tues, 17 May 2023"
    },
  ];

  var cards = document.getElementById("cards");

for (var i = 0; i < data.length; i++) {
  // Categories
  let blog = document.createElement("div");
  blog.classList.add("col-lg-4");
  blog.classList.add("mb-4");
  blog.classList.add("blog");

  //post
  let post = document.createElement("div");
  post.classList.add("post-entry-alt");
  blog.appendChild(post);
  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-link");
  post.appendChild(imgContainer);
  // Images
  let image = document.createElement("img");
  image.setAttribute("src", data[i].image);
  image.classList.add("img-fluid");
  imgContainer.appendChild(image);
  //Container
  let excerpt = document.createElement("div");
  excerpt.classList.add("excerpt");
  post.appendChild(excerpt);
  // tags
  let tags = document.createElement("p");
  tags.classList.add("tips");
  tags.textContent = data[i].tag;
  excerpt.appendChild(tags);
  // Title
  let title = document.createElement("h2");
  let link = document.createElement("a");
  link.textContent = data[i].title;
  title.appendChild(link);
  excerpt.appendChild(title);

  //Text
  let text = document.createElement("p");
  text.textContent = data[i].text;
  excerpt.appendChild(text);
  //Profile
  let profile = document.createElement("p");
  profile.classList.add("profile");
  excerpt.appendChild(profile);
  // Profiler
  let profiler = document.createElement("img");
  profiler.setAttribute("src", data[i].profiler);
  profiler.classList.add("img-small");
  profile.appendChild(profiler);
  //Author
  let author = document.createElement("span");
  author.classList.add("d-inline-block");
  author.classList.add("mt-1");
  author.classList.add("jenny");

  author.textContent = data[i].author;
  profile.appendChild(author);
  //Date
  let date = document.createElement("span");
  date.classList.add("jenny");
  date.textContent = data[i].date;
  profile.appendChild(date);

  cards.appendChild(blog);
};

document.getElementById("search").addEventListener("click", () => {
  // Initializations
  let searchInput = document.getElementById("search-input").value.toLowerCase();
  let searched_cards = document.getElementById("searched-card");
  let searched_counts = 0;

  searched_cards.innerHTML = "";

  console.log(searchInput);

  var searched_data = [];
  //loop through all elements
  for (i = 0; i < data.length; i++){
    if(data[i].title.includes(searchInput) || data[i].text.includes(searchInput)){
      searched_data.push(
        {
          image: data[i].image,
          tag: data[i].tag,
          title: data[i].title,
          text: data[i].text,
          profiler: data[i].profiler,
          author: data[i].author,
          date: data[i].date
        }
      )
      searched_counts++;
    }
  }

  for (var i = 0; i < searched_data.length; i++) {
    // Categories
    let blog = document.createElement("div");
    blog.classList.add("col-lg-4");
    blog.classList.add("mb-4");
    blog.classList.add("blog");
  
    //post
    let post = document.createElement("div");
    post.classList.add("post-entry-alt");
    blog.appendChild(post);
    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-link");
    post.appendChild(imgContainer);
    // Images
    let image = document.createElement("img");
    image.setAttribute("src", searched_data[i].image);
    image.classList.add("img-fluid");
    imgContainer.appendChild(image);
    //Container
    let excerpt = document.createElement("div");
    excerpt.classList.add("excerpt");
    post.appendChild(excerpt);
    // tags
    let tags = document.createElement("p");
    tags.classList.add("tips");
    tags.textContent = searched_data[i].tag;
    excerpt.appendChild(tags);
    // Title
    let title = document.createElement("h2");
    let link = document.createElement("a");
    link.textContent = searched_data[i].title;
    title.appendChild(link);
    excerpt.appendChild(title);
  
    //Text
    let text = document.createElement("p");
    text.textContent = searched_data[i].text;
    excerpt.appendChild(text);
    //Profile
    let profile = document.createElement("p");
    profile.classList.add("profile");
    excerpt.appendChild(profile);
    // Profiler
    let profiler = document.createElement("img");
    profiler.setAttribute("src", searched_data[i].profiler);
    profiler.classList.add("img-small");
    profile.appendChild(profiler);
    //Author
    let author = document.createElement("span");
    author.classList.add("d-inline-block");
    author.classList.add("mt-1");
    author.classList.add("jenny");
  
    author.textContent = searched_data[i].author;
    profile.appendChild(author);
    //Date
    let date = document.createElement("span");
    date.classList.add("jenny");
    date.textContent = searched_data[i].date;
    profile.appendChild(date);
  
    searched_cards.appendChild(blog);
    
  };

  if(searched_counts == 0){
    let errorLog = document.createElement("p");
    errorLog.textContent = "No Result for your Search";

    searched_cards.appendChild(errorLog);
  }
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};



// Pagination
/* 
this javascript is only to change the "actpage" attribut on the .cdp div
*/

window.onload = function () {
  var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
  $('.cdp_i').on('click', function () {
    var go = $(this).attr('href').replace('#!', '');
    if (go === '+1') {
      paginationPage++;
    } else if (go === '-1') {
      paginationPage--;
    } else {
      paginationPage = parseInt(go, 10);
    }
    $('.cdp').attr('actpage', paginationPage);
  });
};


$(function () {
  $('[data-toggle="popover"]').popover();

  $('#cvc').on('click', function () {
    if ($('.cvc-preview-container').hasClass('hide')) {
      $('.cvc-preview-container').removeClass('hide');
    } else {
      $('.cvc-preview-container').addClass('hide');
    }
  });

});

