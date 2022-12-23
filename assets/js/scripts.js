let trendingArray=[
    {
        greyNumber:"01",
        image:"assets/imgs/image01.jpeg",
        author:"Tom Cooper",
        title:"Ukraine War, 23 October 2022",
        date:"Oct 23",
        readTime:"5 min read",
        isStar:false
    },
    {
        greyNumber:"02",
        image:"assets/imgs/image02.png",
        author:"Arthur Hayes in Entrepreneur's Handbook",
        title:"Comeback",
        date:"Oct 26",
        readTime:"24 min read",
        isStar:false
    },
    {
        greyNumber:"03",
        image:"assets/imgs/image03.jpeg",
        author:"Tom Cooper",
        title:"How I Learned to Love My Breasts Even Though One Is A Horcrux For Voldemort",
        date:"Oct 26",
        readTime:"2 min read",
        isStar:false
    },
    {
        greyNumber:"04",
        image:"assets/imgs/image04.png",
        author:"Frank Mastropolo in The Riffk",
        title:"The Night Paul McCartney Donned a Disguise at Fillmore East",
        date:"Oct 22",
        readTime:"3 min read",
        isStar:true
    },
    {
        greyNumber:"05",
        image:"assets/imgs/image05.jpeg",
        author:"Frank Andrade in Towards Data Science",
        title:"5 Python Projects to Automate Your Life: From Beginner to Advanced",
        date:"Oct 13",
        readTime:"6 min read",
        isStar:true
    },
    {
        greyNumber:"06",
        image:"assets/imgs/image06.png",
        author:"Wesley Smits in JavaScript in Plain English",
        title:"How To Make Visual Studio Code Look Amazing",
        date:"Oct 20",
        readTime:"7 min read",
        isStar:true
    }
]
let moreArticlesArray=[
    {
        image:"assets/imgs/image07.jpeg",
        author:"Robert Roy Britt",
        title:"How Old is Old?",
        content: "What we consider “old” changes dramatically with age, and our perspectives can be predictive of how well we age",
        date:"Oct 27",
        readTime:"5 min read",
        category: "Aging",
        isStar:true,
    },
    {
        image:"assets/imgs/image09.jpeg",
        author:"Taru Anniina Liikanen",
        title:"Is Taylor Swift Allowed to Speak About Fat?",
        content:"Can you speak about your trauma if you don't look traumatized?",
        date:"Oct 24",
        readTime:"6 min read",
        category:"Health",
        isStar:true,
    },
    {
        image:"assets/imgs/image11.jpeg",
        author:"David Rodenas, Ph. D.",
        title:"Don’t Screw Up, You Will Be Found Guilty",
        content:"Software Engineer, yours is the right to produce high-quality work at all times, also the liability.",
        date:"Oct 15",
        readTime:"5 min read",
        category: "Software Engineering",
        isStar:true,
    },
    {
        image:"assets/imgs/image15.jpeg",
        author:"Microsoft Design",
        title:"Leave No Trace",
        content: "How product designers can break from the status quo and help our planet",
        date:"Oct 25",
        readTime:"11 min read",
        category:"Sustainability",
        isStar:false,
    },
    {
        image:"assets/imgs/image13.png",
        author:"Scott H. Young",
        title:"Variability, Not Repetition, is the Key to Mastery",
        content:"Bruce Lee is reported to have said, “I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000...",
        date:"Oct 26",
        readTime:"7 min read",
        category:"Health",
        isStar:true,
    },
   
    {
        image:"assets/imgs/image17.png",
        author:"Paul A. DeStefanoin Human Parts",
        title:"What I Overheard as an Escape Room Actor",
        content:"Lock a group of people in a room and you’ll witness some surprising confessions",
        date:"Jan 18, 2020",
        readTime:"6 min read",
        category:"Experiences",
        isStar:true,
    },
    {
        image:"assets/imgs/image19.jpeg",
        author:"Kim Scott",
        title:"6 Steps for Setting Measurable Goals to Avoid “Productivity Paranoia”",
        content:"With more people working in remote and hybrid environments than ever before, company, team and individual goals must be explicit and…",
        date:"Oct 24",
        readTime:"6 min read",
        category:"Health",
        isStar:false,
    }
]
/*<div class="trending-article">
<p>01</p>
<div class="trending-content">
    <img src="">
    <p>Author Name Here</p>
    <p>Title of Article goes here</p>
    <div>
        <p>Date</p><p>time to read</p>
    </div>
</div>
</div>*/
let trendingArticles = document.querySelector(".trending-articles")
function appendTrendingArticles(){
    for(let i=0;i<trendingArray.length;i++){
        let trendingArticle = document.createElement("div");
        trendingArticle.classList.add("trending-article");
        trendingArticles.appendChild(trendingArticle);
        let number = document.createElement("p");
        number.innerText=trendingArray[i].greyNumber;
        trendingArticle.appendChild(number);
        let trendingContent = document.createElement("div");
        trendingContent.classList.add("trending-content");
        trendingArticle.appendChild(trendingContent);
        let imageAndAuthorDiv = document.createElement("div");
        let author = document.createElement("p");
        let image = document.createElement("img");
        author.innerText=trendingArray[i].author;
        imageAndAuthorDiv.classList.add("imageAndAuthorDiv");
        image.classList.add("articles-images");
        image.src=trendingArray[i].image;
        let title = document.createElement("p");
        title.innerText=trendingArray[i].title;
        imageAndAuthorDiv.appendChild(image);
        imageAndAuthorDiv.appendChild(author);
        trendingContent.appendChild(imageAndAuthorDiv);
        trendingContent.appendChild(title);
        let dateAndTimeDiv=document.createElement('div');
        dateAndTimeDiv.classList.add("dateAndTimeDiv")
        trendingContent.appendChild(dateAndTimeDiv);
        let date = document.createElement("p");
        let timeToRead = document.createElement("p");
        date.innerText = trendingArray[i].date;
        timeToRead.innerText = trendingArray[i].readTime;
        dateAndTimeDiv.appendChild(date);
        dateAndTimeDiv.appendChild(timeToRead);
        if(trendingArray[i].isStar===true){
            let star = document.createElement("img");
            star.src="assets/imgs/svg/star.svg";
            dateAndTimeDiv.appendChild(star)
        }

    }
}
let moreArticles = document.querySelector('.more-articles');
function appendMoreArticles(){
    for(let i=0;i<moreArticlesArray.length;i++){
        console.log("yo");
        let moreArticle = document.createElement("div");
        moreArticle.classList.add("more-article");
        moreArticles.appendChild(moreArticle);
        let imageAndAuthorDiv = document.createElement("div");
        let author = document.createElement("p");
        let image = document.createElement("img");
        author.innerText=moreArticlesArray[i].author;
        imageAndAuthorDiv.classList.add("imageAndAuthorDiv");
        image.classList.add("articles-images");
        image.src=moreArticlesArray[i].image;
        imageAndAuthorDiv.appendChild(image);
        imageAndAuthorDiv.appendChild(author);
        let title = document.createElement("p");
        title.innerText=moreArticlesArray[i].title;
        moreArticle.appendChild(imageAndAuthorDiv);
        moreArticle.appendChild(title);
        let content = document.createElement("p");
        content.innerText=moreArticlesArray[i].content;
        moreArticle.appendChild(content);
        let dateAndTimeDiv=document.createElement('div');
        dateAndTimeDiv.classList.add("moreDateAndTimeDiv")
        let date = document.createElement("p");
        let timeToRead = document.createElement("p");
        let category = document.createElement("p");
        category.innerText = moreArticlesArray[i].category;
        date.innerText = moreArticlesArray[i].date;
        timeToRead.innerText = moreArticlesArray[i].readTime;
        let impunct = document.createElement("p");
        let impunct2 = document.createElement("p");
        impunct.innerText="·"
        impunct2.innerText="·"
        dateAndTimeDiv.appendChild(date);
        dateAndTimeDiv.appendChild(impunct);
        dateAndTimeDiv.appendChild(timeToRead);
        dateAndTimeDiv.appendChild(impunct2);
        dateAndTimeDiv.appendChild(category);
        moreArticle.appendChild(dateAndTimeDiv);
        if(moreArticlesArray[i].isStar===true){
            let star = document.createElement("img");
            star.src="assets/imgs/svg/star.svg";
            dateAndTimeDiv.appendChild(star)
        }

    }
}
let stickyElement = document.querySelector('.sticky');
let otherElement = document.querySelector('.jumbotron');
let navButton = document.querySelector('.nav-button');

window.addEventListener('scroll', function() {
  // Get the position of the sticky element and the other element
  let stickyPos = stickyElement.getBoundingClientRect().top;
  let otherPos = otherElement.getBoundingClientRect().top;

  // Check if the sticky element has passed the other element
  if (stickyPos > otherPos+200) {
    // Do something here, such as adding a class to the sticky element
    stickyElement.classList.add("sticky-passed")
    navButton.classList.add("button-sticky-passed")
  } else {
    // Do something else here, such as removing the class from the sticky element
    stickyElement.classList.remove("sticky-passed")
    navButton.classList.remove("button-sticky-passed")
  }
});
function createArticles(){
    appendTrendingArticles();
    appendMoreArticles();
}
window.onload=createArticles();