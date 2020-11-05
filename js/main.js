const tutorialsGroup = document.querySelector('.tutorials_group');
// const tutorialsDetailGroup = document.querySelector('.tutorials_detail_group');

// console.log(tutorialsDetailGroup);

const loadData = async()=>{
    try {
        const resIndex = await fetch('../data/index.json');
        // const resIntro = await fetch('../data/intro.json');
        const indexData = await resIndex.json();
        // const introData = await resIntro.json();

        outputIndex(indexData);
        // outputIntro(introData);

    } catch (err) {
        console.error(err);
    }
};

//Show results in HTML
function outputIndex(indexData){
        const html = indexData.map((data)=>`
        <article class="tutorial_tile">
                <div href="#" class="tutorial_tile_title">
                    <h5 >${data.title}</h5>
                </div>
                <hr>
                  <div class="project_info">
                    <p>${data.descrption}</p>
                  </div>
                
                  <a href="${data.link}" class="button">
                        <p >view tutorials</p>
                  </a>
              </article>
        `).join('');
        tutorialsGroup.innerHTML = html;
}

// function outputIntro(indexData){
//     const html = indexData.map((data)=>`
//     <article class="tutorial_tile">
//                 <div class="tutorial_tile_bgcolor">
//                   <div class="project_video">
//                     <iframe class="project_video_frame" type="text/html" 
//                     src=${data.VideoSrc} allowfullscreen
//                     frameborder="0">
//                 </iframe>
//                   </div>
//                   <div class="project_desc">
//                     <p>${data.descrption}</p>
//                   </div>
//                 </div>
//               </article>
//     `).join('');
//     tutorialsDetailGroup.innerHTML = html;
//     console.log(html);
// }

window.addEventListener('load', (event)=>{
    loadData()
    // outputHtml(indexData)
});