const generateMemeBtn = document.querySelector(".meme-generator .meme-button");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);//sets src as url in img tag
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = async () => {
    const Url = `https://meme-api.com/gimme/wholesomememes`;
    const response = await fetch(Url);
    console.log(response);
    const resJson = await response.json();
    console.log(resJson);
    // to extract specific properties from the resJson object.
    const { url, title, author } = resJson; //ES6 dest.
    updateDetails(url, title, author);
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();