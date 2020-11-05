const tutorialsDetailGroup = document.querySelector('.tutorials_detail_group');

console.log(tutorialsDetailGroup);

const loadData = async()=>{
    try {
        const resIntro = await fetch('../data/intro.json');
        const introData = await resIntro.json();

        outputIntro(introData);

    } catch (err) {
        console.error(err);
    }
};

//Show results in HTML
function outputIntro(indexData){
    const html = indexData.map((data)=>`
    <article class="tutorial_tile">
                <div class="tutorial_tile_bgcolor">
                  <div class="project_video">
                    <iframe class="project_video_frame" type="text/html" 
                    src=${data.VideoSrc}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen
                    frameborder="0">
                </iframe>
                  </div>
                  <div class="project_desc">
                    <p>${data.descrption}</p>
                  </div>
                </div>
              </article>
    `).join('');
    tutorialsDetailGroup.innerHTML = html;
    // console.log(html);
}

window.addEventListener('load', (event)=>{
    loadData()
    // outputHtml(indexData)
});