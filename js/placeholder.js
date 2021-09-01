//৭.একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে(হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।


//৮.প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে / { id } বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে।

const photoLoad = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => dataLoad(data))
}
photoLoad()
const dataLoad = photos => {
    const preDiv = document.getElementById('main-div');
    photos.forEach(photo => {
        const myDiv = document.createElement('div');
        myDiv.innerHTML = `
              <div onclick="showData(${photo.id})" class="col card">
                    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${photo.title}</h5>
                </div>
        
    `
        preDiv.appendChild(myDiv);

    })
}
const showData = photoSId => {
    const url = ` https://jsonplaceholder.typicode.com/photos/${photoSId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showSingleItem(data))
}
const showSingleItem = data => {
    const oldDiv = document.getElementById('single-item');
    oldDiv.textContent = ''
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <img id="my-img" class="mt=5" src="${data.thumbnailUrl}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
        </div>
    `
    oldDiv.appendChild(newDiv);

}